import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { guideSectionIds } from '../../guideAnchors'
import { HeadlineCopyLinkButton } from '../CopyLink'
import { GuideCodeBlock } from '../GuideCodeBlock'
import { Keycap } from '../Keycap'
import * as styles from './WindowsRegistryGenerator.css'

// Scancode values are based on the Microsoft USB HID → PS/2 translation table
// and cross-checked against SharpKeys' maintained key map list.
const registryKeyCandidates = [
  { id: 'escape', label: 'Escape', scanCode: '0001' },
  { id: 'digit1', label: '1', scanCode: '0002' },
  { id: 'digit2', label: '2', scanCode: '0003' },
  { id: 'digit3', label: '3', scanCode: '0004' },
  { id: 'digit4', label: '4', scanCode: '0005' },
  { id: 'digit5', label: '5', scanCode: '0006' },
  { id: 'digit6', label: '6', scanCode: '0007' },
  { id: 'digit7', label: '7', scanCode: '0008' },
  { id: 'digit8', label: '8', scanCode: '0009' },
  { id: 'digit9', label: '9', scanCode: '000A' },
  { id: 'digit0', label: '0', scanCode: '000B' },
  { id: 'minus', label: '-', scanCode: '000C' },
  { id: 'equal', label: '=', scanCode: '000D' },
  { id: 'backspace', label: 'Backspace', scanCode: '000E' },
  { id: 'tab', label: 'Tab', scanCode: '000F' },
  { id: 'q', label: 'Q', scanCode: '0010' },
  { id: 'w', label: 'W', scanCode: '0011' },
  { id: 'e', label: 'E', scanCode: '0012' },
  { id: 'r', label: 'R', scanCode: '0013' },
  { id: 't', label: 'T', scanCode: '0014' },
  { id: 'y', label: 'Y', scanCode: '0015' },
  { id: 'u', label: 'U', scanCode: '0016' },
  { id: 'i', label: 'I', scanCode: '0017' },
  { id: 'o', label: 'O', scanCode: '0018' },
  { id: 'p', label: 'P', scanCode: '0019' },
  { id: 'leftBracket', label: '[', scanCode: '001A' },
  { id: 'rightBracket', label: ']', scanCode: '001B' },
  { id: 'enter', label: 'Enter', scanCode: '001C' },
  { id: 'leftCtrl', label: 'Left Ctrl', scanCode: '001D' },
  { id: 'a', label: 'A', scanCode: '001E' },
  { id: 's', label: 'S', scanCode: '001F' },
  { id: 'd', label: 'D', scanCode: '0020' },
  { id: 'f', label: 'F', scanCode: '0021' },
  { id: 'g', label: 'G', scanCode: '0022' },
  { id: 'h', label: 'H', scanCode: '0023' },
  { id: 'j', label: 'J', scanCode: '0024' },
  { id: 'k', label: 'K', scanCode: '0025' },
  { id: 'l', label: 'L', scanCode: '0026' },
  { id: 'semicolon', label: ';', scanCode: '0027' },
  { id: 'quote', label: "'", scanCode: '0028' },
  { id: 'backquote', label: '`', scanCode: '0029' },
  { id: 'leftShift', label: 'Left Shift', scanCode: '002A' },
  { id: 'backslash', label: '\\', scanCode: '002B' },
  { id: 'z', label: 'Z', scanCode: '002C' },
  { id: 'x', label: 'X', scanCode: '002D' },
  { id: 'c', label: 'C', scanCode: '002E' },
  { id: 'v', label: 'V', scanCode: '002F' },
  { id: 'b', label: 'B', scanCode: '0030' },
  { id: 'n', label: 'N', scanCode: '0031' },
  { id: 'm', label: 'M', scanCode: '0032' },
  { id: 'comma', label: ',', scanCode: '0033' },
  { id: 'period', label: '.', scanCode: '0034' },
  { id: 'slash', label: '/', scanCode: '0035' },
  { id: 'rightShift', label: 'Right Shift', scanCode: '0036' },
  { id: 'numpadMultiply', label: 'Numpad *', scanCode: '0037' },
  { id: 'leftAlt', label: 'Left Alt', scanCode: '0038' },
  { id: 'space', label: 'Space', scanCode: '0039' },
  { id: 'capslock', label: 'Caps Lock', scanCode: '003A' },
  { id: 'f1', label: 'F1', scanCode: '003B' },
  { id: 'f2', label: 'F2', scanCode: '003C' },
  { id: 'f3', label: 'F3', scanCode: '003D' },
  { id: 'f4', label: 'F4', scanCode: '003E' },
  { id: 'f5', label: 'F5', scanCode: '003F' },
  { id: 'f6', label: 'F6', scanCode: '0040' },
  { id: 'f7', label: 'F7', scanCode: '0041' },
  { id: 'f8', label: 'F8', scanCode: '0042' },
  { id: 'f9', label: 'F9', scanCode: '0043' },
  { id: 'f10', label: 'F10', scanCode: '0044' },
  { id: 'numLock', label: 'Num Lock', scanCode: '0045' },
  { id: 'scrollLock', label: 'Scroll Lock', scanCode: '0046' },
  { id: 'numpad7', label: 'Numpad 7', scanCode: '0047' },
  { id: 'numpad8', label: 'Numpad 8', scanCode: '0048' },
  { id: 'numpad9', label: 'Numpad 9', scanCode: '0049' },
  { id: 'numpadSubtract', label: 'Numpad -', scanCode: '004A' },
  { id: 'numpad4', label: 'Numpad 4', scanCode: '004B' },
  { id: 'numpad5', label: 'Numpad 5', scanCode: '004C' },
  { id: 'numpad6', label: 'Numpad 6', scanCode: '004D' },
  { id: 'numpadAdd', label: 'Numpad +', scanCode: '004E' },
  { id: 'numpad1', label: 'Numpad 1', scanCode: '004F' },
  { id: 'numpad2', label: 'Numpad 2', scanCode: '0050' },
  { id: 'numpad3', label: 'Numpad 3', scanCode: '0051' },
  { id: 'numpad0', label: 'Numpad 0', scanCode: '0052' },
  { id: 'numpadDecimal', label: 'Numpad .', scanCode: '0053' },
  { id: 'isoExtra', label: 'ISO Extra', scanCode: '0056' },
  { id: 'f11', label: 'F11', scanCode: '0057' },
  { id: 'f12', label: 'F12', scanCode: '0058' },
  { id: 'f13', label: 'F13', scanCode: '0064' },
  { id: 'f14', label: 'F14', scanCode: '0065' },
  { id: 'f15', label: 'F15', scanCode: '0066' },
  { id: 'f16', label: 'F16', scanCode: '0067' },
  { id: 'f17', label: 'F17', scanCode: '0068' },
  { id: 'f18', label: 'F18', scanCode: '0069' },
  { id: 'f19', label: 'F19', scanCode: '006A' },
  { id: 'f20', label: 'F20', scanCode: '006B' },
  { id: 'f21', label: 'F21', scanCode: '006C' },
  { id: 'f22', label: 'F22', scanCode: '006D' },
  { id: 'f23', label: 'F23', scanCode: '006E' },
  { id: 'f24', label: 'F24', scanCode: '006F' },
  { id: 'rightCtrl', label: 'Right Ctrl', scanCode: 'E01D' },
  { id: 'numpadEnter', label: 'Numpad Enter', scanCode: 'E01C' },
  { id: 'numpadDivide', label: 'Numpad /', scanCode: 'E035' },
  { id: 'rightAlt', label: 'Right Alt', scanCode: 'E038' },
  { id: 'printScreen', label: 'Print Screen', scanCode: 'E037' },
  { id: 'home', label: 'Home', scanCode: 'E047' },
  { id: 'arrowUp', label: 'Arrow Up', scanCode: 'E048' },
  { id: 'pageUp', label: 'Page Up', scanCode: 'E049' },
  { id: 'arrowLeft', label: 'Arrow Left', scanCode: 'E04B' },
  { id: 'arrowRight', label: 'Arrow Right', scanCode: 'E04D' },
  { id: 'end', label: 'End', scanCode: 'E04F' },
  { id: 'arrowDown', label: 'Arrow Down', scanCode: 'E050' },
  { id: 'pageDown', label: 'Page Down', scanCode: 'E051' },
  { id: 'insert', label: 'Insert', scanCode: 'E052' },
  { id: 'delete', label: 'Delete', scanCode: 'E053' },
  { id: 'leftWin', label: 'Left Win', scanCode: 'E05B' },
  { id: 'rightWin', label: 'Right Win', scanCode: 'E05C' },
  { id: 'menu', label: 'Menu', scanCode: 'E05D' },
] as const

const registryTargetOnlyCandidates = [{ id: 'turnOff', label: 'Turn Key Off', scanCode: '0000' }] as const

type RegistrySourceId = (typeof registryKeyCandidates)[number]['id']
type RegistryTargetId =
  | RegistrySourceId
  | (typeof registryTargetOnlyCandidates)[number]['id']

const registryTargetCandidates = [
  ...registryTargetOnlyCandidates,
  ...registryKeyCandidates,
] as const

const targetOptionGroups = [
  { label: 'System', ids: ['turnOff', 'escape', 'tab', 'backspace', 'enter', 'space', 'capslock'] },
  {
    label: 'Modifiers',
    ids: [
      'leftCtrl',
      'rightCtrl',
      'leftShift',
      'rightShift',
      'leftAlt',
      'rightAlt',
      'leftWin',
      'rightWin',
      'menu',
    ],
  },
  {
    label: 'Navigation',
    ids: [
      'insert',
      'delete',
      'home',
      'end',
      'pageUp',
      'pageDown',
      'arrowUp',
      'arrowLeft',
      'arrowDown',
      'arrowRight',
      'printScreen',
    ],
  },
  {
    label: 'Main Typing Area',
    ids: [
      'backquote',
      'minus',
      'equal',
      'leftBracket',
      'rightBracket',
      'backslash',
      'semicolon',
      'quote',
      'comma',
      'period',
      'slash',
      'digit1',
      'digit2',
      'digit3',
      'digit4',
      'digit5',
      'digit6',
      'digit7',
      'digit8',
      'digit9',
      'digit0',
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      'isoExtra',
    ],
  },
  {
    label: 'Function Keys',
    ids: [
      'f1',
      'f2',
      'f3',
      'f4',
      'f5',
      'f6',
      'f7',
      'f8',
      'f9',
      'f10',
      'f11',
      'f12',
      'f13',
      'f14',
      'f15',
      'f16',
      'f17',
      'f18',
      'f19',
      'f20',
      'f21',
      'f22',
      'f23',
      'f24',
      'numLock',
      'scrollLock',
    ],
  },
  {
    label: 'Numpad',
    ids: [
      'numpadMultiply',
      'numpadDivide',
      'numpadSubtract',
      'numpadAdd',
      'numpadEnter',
      'numpadDecimal',
      'numpad0',
      'numpad1',
      'numpad2',
      'numpad3',
      'numpad4',
      'numpad5',
      'numpad6',
      'numpad7',
      'numpad8',
      'numpad9',
    ],
  },
] as const satisfies readonly { label: string; ids: readonly RegistryTargetId[] }[]

// Source option groups: same groupings as target, but without 'turnOff' (computed once at module load)
const sourceOptionGroups = targetOptionGroups.map((group) => ({
  label: group.label,
  ids: group.ids.filter((id): id is RegistrySourceId => id !== 'turnOff'),
}))

const registryTargetScanCodes = Object.fromEntries(
  registryTargetCandidates.map(({ id, scanCode }) => [id, scanCode]),
) as Record<RegistryTargetId, string>
const registryTargetLabels = Object.fromEntries(
  registryTargetCandidates.map(({ id, label }) => [id, label]),
) as Record<RegistryTargetId, string>

const registryPath = 'HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout'

// Default source rows when the generator first loads
const defaultActiveSourceIds: RegistrySourceId[] = ['capslock']

// Full identity mapping for all known source keys (used as initial state)
const fullIdentityMapping = Object.fromEntries(
  registryKeyCandidates.map(({ id }) => [id, id as RegistryTargetId]),
) as Record<RegistrySourceId, RegistryTargetId>

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

function buildRemapFile(
  activeSourceIds: readonly RegistrySourceId[],
  mapping: Record<RegistrySourceId, RegistryTargetId>,
) {
  const changedMappings = activeSourceIds
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
      ...wordToLittleEndianBytes(registryTargetScanCodes[target]),
      ...wordToLittleEndianBytes(registryTargetScanCodes[source]),
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

export function WindowsRegistryGenerator() {
  const { t } = useTranslation()
  const [activeSourceIds, setActiveSourceIds] = useState<RegistrySourceId[]>(defaultActiveSourceIds)
  const [mapping, setMapping] = useState<Record<RegistrySourceId, RegistryTargetId>>(fullIdentityMapping)
  const [addSelectValue, setAddSelectValue] = useState('')

  const hasChanges = useMemo(
    () => activeSourceIds.some((key) => mapping[key] !== key),
    [activeSourceIds, mapping],
  )

  const remapFile = useMemo(() => buildRemapFile(activeSourceIds, mapping), [activeSourceIds, mapping])
  const revertFile = useMemo(() => buildRevertFile(), [])

  const activeSourceIdSet = useMemo(() => new Set(activeSourceIds), [activeSourceIds])

  const addableGroups = useMemo(
    () =>
      sourceOptionGroups
        .map((group) => ({
          ...group,
          ids: group.ids.filter((id) => !activeSourceIdSet.has(id)),
        }))
        .filter((group) => group.ids.length > 0),
    [activeSourceIdSet],
  )

  const getKeyLabel = useCallback(
    (keyId: RegistryTargetId) =>
      t(`guide.registryGenerator.key.${keyId}`, {
        defaultValue: registryTargetLabels[keyId],
      }),
    [t],
  )

  const handleTargetChange = (source: RegistrySourceId, target: RegistryTargetId) => {
    setMapping((current) => ({
      ...current,
      [source]: target,
    }))
  }

  const handleAddSource = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value as RegistrySourceId
    if (!id) return
    setActiveSourceIds((prev) => [...prev, id])
    setAddSelectValue('')
  }

  const handleRemoveSource = (id: RegistrySourceId) => {
    setActiveSourceIds((prev) => prev.filter((s) => s !== id))
  }

  const handleReset = () => {
    setActiveSourceIds(defaultActiveSourceIds)
    setMapping(fullIdentityMapping)
    setAddSelectValue('')
  }

  return (
    <section id={guideSectionIds.windowsRegistryEditor} className={styles.generator}>
      <div className={styles.header}>
        <div className={styles.headerBlock}>
          <div className={styles.titleRow}>
            <h4 className={styles.title}>{t('guide.registryGenerator.title')}</h4>
            <HeadlineCopyLinkButton
              label={t('guide.registryGenerator.title')}
              hash={guideSectionIds.windowsRegistryEditor}
            />
          </div>
        </div>
        <button
          type="button"
          className={styles.resetButton}
          onClick={handleReset}
        >
          {t('guide.registryGenerator.resetLabel')}
        </button>
      </div>

      <p className={styles.pathText}>{t('guide.registryGenerator.registryPathLabel')}</p>

      <div className={styles.mappingCard}>
        <div className={styles.mappingHeader}>
          <span>{t('guide.registryGenerator.sourceLabel')}</span>
          <span />
          <span>{t('guide.registryGenerator.targetLabel')}</span>
          <span />
        </div>

        <div className={styles.mappingList}>
          {activeSourceIds.map((source) => (
            <div key={source} className={styles.mappingRow}>
              <div className={`${styles.keyCell} ${styles.keyCellWrapper}`}>
                <Keycap
                  keyLabel={getKeyLabel(source)}
                  mini
                  miniSize="sm"
                  platform="windows"
                />
                <span className={styles.codeBadge}>
                  {formatScanCode(registryTargetScanCodes[source])}
                </span>
              </div>

              <span className={`${styles.rowArrow} ${styles.rowArrowWrapper}`} aria-hidden="true">
                →
              </span>

              <div className={styles.targetSelectWrapper}>
                <select
                  className={styles.targetSelect}
                  value={mapping[source]}
                  onChange={(event) => handleTargetChange(source, event.target.value as RegistryTargetId)}
                  aria-label={`${getKeyLabel(source)} ${t('guide.registryGenerator.targetLabel')}`}
                >
                  {targetOptionGroups.map((group) => (
                    <optgroup key={group.label} label={group.label}>
                      {group.ids.map((target) => (
                        <option key={target} value={target}>
                          {getKeyLabel(target)} ({formatScanCode(registryTargetScanCodes[target])})
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className={styles.removeButtonWrapper}>
                <button
                  type="button"
                  className={styles.removeButton}
                  onClick={() => handleRemoveSource(source)}
                  aria-label={`${t('guide.registryGenerator.removeSourceLabel')} ${getKeyLabel(source)}`}
                >
                  ×
                </button>
              </div>
            </div>
          ))}

          {addableGroups.length > 0 && (
            <div className={styles.addSourceRow}>
              <select
                className={styles.addSourceSelect}
                value={addSelectValue}
                onChange={handleAddSource}
                aria-label={t('guide.registryGenerator.addSourceLabel')}
              >
                <option value="" disabled>
                  + {t('guide.registryGenerator.addSourceLabel')}
                </option>
                {addableGroups.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.ids.map((id) => (
                      <option key={id} value={id}>
                        {getKeyLabel(id)} ({formatScanCode(registryTargetScanCodes[id])})
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      <div className={styles.previewGrid}>
        <section className={styles.previewCard}>
          <p className={styles.previewLabel}>{t('guide.registryGenerator.remapPreviewLabel')}</p>
          <GuideCodeBlock
            code={remapFile}
            copyLabel={t('guide.registryGenerator.copyFileLabel')}
            copiedLabel={t('guide.registryGenerator.copiedFileLabel')}
            downloadLabel={t('guide.registryGenerator.downloadRemapLabel')}
            filename="nocapslock-remap.reg"
            disabled={!hasChanges}
            placeholderText={t('guide.registryGenerator.noChangesLabel')}
          />
        </section>

        <section className={styles.previewCard}>
          <p className={styles.previewLabel}>{t('guide.registryGenerator.revertPreviewLabel')}</p>
          <GuideCodeBlock
            code={revertFile}
            copyLabel={t('guide.registryGenerator.copyFileLabel')}
            copiedLabel={t('guide.registryGenerator.copiedFileLabel')}
            downloadLabel={t('guide.registryGenerator.downloadRevertLabel')}
            filename="nocapslock-revert.reg"
          />
        </section>
      </div>
    </section>
  )
}
