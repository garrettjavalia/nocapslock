import { useMemo, useState } from 'react'
import { GuideCodeBlock } from '../GuideCodeBlock'
import { Keycap } from '../Keycap'
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
  sourceLabel: string
  targetLabel: string
  remapPreviewLabel: string
  revertPreviewLabel: string
  copyFileLabel: string
  copiedFileLabel: string
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
        <div className={styles.headerBlock}>
          <h4 className={styles.title}>{copy.title}</h4>
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
          <p className={styles.previewLabel}>{copy.remapPreviewLabel}</p>
          <GuideCodeBlock
            code={remapFile}
            copyLabel={copy.copyFileLabel}
            copiedLabel={copy.copiedFileLabel}
            downloadLabel={copy.downloadRemapLabel}
            filename="nocapslock-remap.reg"
            disabled={!hasChanges}
            placeholderText={copy.noChangesLabel}
          />
        </section>

        <section className={styles.previewCard}>
          <p className={styles.previewLabel}>{copy.revertPreviewLabel}</p>
          <GuideCodeBlock
            code={revertFile}
            copyLabel={copy.copyFileLabel}
            copiedLabel={copy.copiedFileLabel}
            downloadLabel={copy.downloadRevertLabel}
            filename="nocapslock-revert.reg"
          />
        </section>
      </div>

      <p className={styles.note}>{copy.restartNote}</p>
    </section>
  )
}
