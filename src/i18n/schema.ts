export type Locale = 'en' | 'ko'

export type DeviceLabelKey = 'mac' | 'android' | 'ios' | 'windows' | 'linux' | 'unix' | 'other'

export type Copy = {
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  brand: string
  githubLabel: string
  eyebrow: string
  heroTitle: string
  heroLead: string
  themeToggle: {
    light: string
    dark: string
  }
  localeSwitcherLabel: string
  keySection: {
    kicker: string
    title: string
    captionTemplate: string
    beforeLabel: string
    afterLabel: string
    remapLabel: string
    disabledLabel: string
    alternativeLabel: string
    deviceLabels: Record<DeviceLabelKey, string>
    labels: string[]
  }
  demoSection: {
    kicker: string
    title: string
    bodyTemplate: string
    virtualModifierPrefix: string
    statusIdle: string
    statusArmed: string
    statusPrefix: string
    instructions: string
    restoreNote: string
    text: string
  }
  guideSection: {
    kicker: string
    title: string
    intro: string
    linksLabel: string
    commandLabel: string
    copyCommandLabel: string
    copiedCommandLabel: string
    downloadCommandLabel: string
    configLabel: string
    copyConfigLabel: string
    copiedConfigLabel: string
    downloadConfigLabel: string
    stepsLabel: string
    notesLabel: string
    registryGenerator: {
      title: string
      intro: string
      sourceLabel: string
      targetLabel: string
      remapPreviewLabel: string
      revertPreviewLabel: string
      downloadRemapLabel: string
      downloadRevertLabel: string
      noChangesLabel: string
      registryPathLabel: string
      restartNote: string
      resetLabel: string
      keys: {
        capslock: string
        leftCtrl: string
        rightCtrl: string
        leftAlt: string
        rightAlt: string
      }
    }
    windowsMethods: {
      intro: string
      prosLabel: string
      consLabel: string
      methods: Array<{
        id: 'powertoys' | 'registry'
        title: string
        summary: string
        officialLinks?: Array<{
          label: string
          href: string
        }>
        pros: string[]
        cons: string[]
        steps: Array<{
          title: string
          body: string
        }>
        notes?: string[]
      }>
    }
    platforms: Array<{
      id: 'windows' | 'mac' | 'linux'
      title: string
      summary: string
      officialLinks?: Array<{
        label: string
        href: string
      }>
      installScript?: string
      installFilename?: string
      installStepIndex?: number
      configSnippet?: string
      configFilename?: string
      configStepIndex?: number
      steps?: Array<{
        title: string
        body: string
      }>
      notes?: string[]
      placeholder: string
    }>
  }
}
