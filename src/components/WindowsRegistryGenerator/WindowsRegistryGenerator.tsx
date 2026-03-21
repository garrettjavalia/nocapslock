import { useMemo, useState } from 'react'
import { Keycap } from '../Keycap'
import { downloadTextFile } from '../../utils/downloadTextFile'
import * as styles from './WindowsRegistryGenerator.css'

const registryKeyIds = ['capslock', 'leftCtrl', 'rightCtrl', 'leftAlt', 'rightAlt'] as const
type RegistryKeyId = (typeof registryKeyIds)[number]
const registryTargetIds = [
  'capslock',
  'leftCtrl',
  'rightCtrl',
  'leftAlt',
  'rightAlt',
] as const
type RegistryTargetId = (typeof registryTargetIds)[number]

type RegistryGeneratorCopy = {
  title: string
  intro: string
  sourceLabel: string
  targetLabel: string
  scanCodeSourceLabel: string
  scanCodeSourceText: string
  scanCodeSourceHref: string
  remapPreviewLabel: string
  revertPreviewLabel: string
  downloadRemapLabel: string
  downloadRevertLabel: string
  noChangesLabel: string
  registryPathLabel: string
  restartNote: string
  resetLabel: string
  keys: Record<RegistryTargetId, string>
}

type WindowsRegistryGeneratorProps = {
  copy: RegistryGeneratorCopy
}

const registryPath = 'HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout'
const scanCodes: Record<RegistryTargetId, string> = {
  capslock: '003A',
  leftCtrl: '001D',
  rightCtrl: 'E01D',
  leftAlt: '0038',
  rightAlt: 'E038',
}

const identityMapping: Record<RegistryKeyId, RegistryTargetId> = {
  capslock: 'capslock',
  leftCtrl: 'leftCtrl',
  rightCtrl: 'rightCtrl',
  leftAlt: 'leftAlt',
  rightAlt: 'rightAlt',
}

function formatScanCode(scanCode: string) {
  return `0x${scanCode}`
}

function wordToLittleEndianBytes(value: string) {
  const normalized = value.toLowerCase().padStart(4, '0')
  return [normalized.slice(2, 4), normalized.slice(0, 2)]
}

function dwordToLittleEndianBytes(value: number) {
  const normalized = value.toString(16).padStart(8, '0')
  return [
    normalized.slice(6, 8),
    normalized.slice(4, 6),
    normalized.slice(2, 4),
    normalized.slice(0, 2),
  ]
}

function buildRemapFile(mapping: Record<RegistryKeyId, RegistryTargetId>) {
  const changedMappings = registryKeyIds
    .filter((source) => mapping[source] !== source)
    .map((source) => ({
      source,
      target: mapping[source],
    }))

  const bytes = [
    '00',
    '00',
    '00',
    '00',
    '00',
    '00',
    '00',
    '00',
    ...dwordToLittleEndianBytes(changedMappings.length + 1),
    ...changedMappings.flatMap(({ source, target }) => [
      ...wordToLittleEndianBytes(scanCodes[target]),
      ...wordToLittleEndianBytes(scanCodes[source]),
    ]),
    '00',
    '00',
    '00',
    '00',
  ]

  return [
    'Windows Registry Editor Version 5.00',
    '',
    `[${registryPath}]`,
    `"Scancode Map"=hex:${bytes.join(',')}`,
    '',
  ].join('\r\n')
}

function buildRevertFile() {
  return [
    'Windows Registry Editor Version 5.00',
    '',
    `[${registryPath}]`,
    '"Scancode Map"=-',
    '',
  ].join('\r\n')
}

export function WindowsRegistryGenerator({ copy }: WindowsRegistryGeneratorProps) {
  const [mapping, setMapping] = useState(identityMapping)

  const hasChanges = useMemo(
    () => registryKeyIds.some((key) => mapping[key] !== identityMapping[key]),
    [mapping],
  )

  const remapFile = useMemo(() => buildRemapFile(mapping), [mapping])
  const revertFile = useMemo(() => buildRevertFile(), [])

  const handleTargetChange = (source: RegistryKeyId, target: RegistryTargetId) => {
    setMapping((current) => ({
      ...current,
      [source]: target,
    }))
  }

  return (
    <section className={styles.generator}>
      <div className={styles.header}>
        <div>
          <h4 className={styles.title}>{copy.title}</h4>
          <p className={styles.intro}>{copy.intro}</p>
        </div>
        <button
          type="button"
          className={styles.resetButton}
          onClick={() => setMapping(identityMapping)}
        >
          {copy.resetLabel}
        </button>
      </div>

      <p className={styles.pathText}>{copy.registryPathLabel}</p>
      <p className={styles.pathText}>
        {copy.scanCodeSourceLabel}:{' '}
        <a
          className={styles.sourceLink}
          href={copy.scanCodeSourceHref}
          target="_blank"
          rel="noreferrer"
        >
          {copy.scanCodeSourceText}
        </a>
      </p>

      <div className={styles.mappingCard}>
        <div className={styles.mappingHeader}>
          <span>{copy.sourceLabel}</span>
          <span />
          <span>{copy.targetLabel}</span>
        </div>

        <div className={styles.mappingList}>
          {registryKeyIds.map((source) => (
            <div key={source} className={styles.mappingRow}>
              <div className={styles.keyCell}>
                <Keycap keyLabel={copy.keys[source]} mini miniSize="sm" platform="windows" />
                <span className={styles.codeBadge}>{formatScanCode(scanCodes[source])}</span>
              </div>

              <span className={styles.rowArrow} aria-hidden="true">
                →
              </span>

              <select
                className={styles.targetSelect}
                value={mapping[source]}
                onChange={(event) => handleTargetChange(source, event.target.value as RegistryTargetId)}
                aria-label={`${copy.keys[source]} ${copy.targetLabel}`}
              >
                {registryTargetIds.map((target) => (
                  <option key={target} value={target}>
                    {copy.keys[target]} ({formatScanCode(scanCodes[target])})
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.previewGrid}>
        <section className={styles.previewCard}>
          <div className={styles.previewHeader}>
            <p className={styles.previewLabel}>{copy.remapPreviewLabel}</p>
            <button
              type="button"
              className={`${styles.downloadButton} ${styles.downloadButtonPrimary}`}
              disabled={!hasChanges}
              onClick={() => downloadTextFile('nocapslock-remap.reg', remapFile)}
            >
              {copy.downloadRemapLabel}
            </button>
          </div>

          {hasChanges ? (
            <pre className={styles.codeBlock}>
              <code>{remapFile}</code>
            </pre>
          ) : (
            <p className={styles.emptyState}>{copy.noChangesLabel}</p>
          )}
        </section>

        <section className={styles.previewCard}>
          <div className={styles.previewHeader}>
            <p className={styles.previewLabel}>{copy.revertPreviewLabel}</p>
            <button
              type="button"
              className={styles.downloadButton}
              onClick={() => downloadTextFile('nocapslock-revert.reg', revertFile)}
            >
              {copy.downloadRevertLabel}
            </button>
          </div>

          <pre className={styles.codeBlock}>
            <code>{revertFile}</code>
          </pre>
        </section>
      </div>

      <p className={styles.note}>{copy.restartNote}</p>
    </section>
  )
}
