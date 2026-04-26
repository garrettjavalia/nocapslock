import type { TranslationMessages } from './schema'

export const deDeTranslation = {
  linkCopy: {
    copy: 'Link kopieren',
    copied: 'Link kopiert',
    share: 'Link teilen',
  },
  meta: {
    description:
      'Nutze Caps Lock bequemer!',
    keywords:
      'Feststelltaste umbelegen, Caps Lock zu Strg, Caps Lock zu Befehl, Caps Lock zu Escape, Tastaturproduktivität, Karabiner, keyd, PowerToys',
  },
  chrome: {
    github: 'GitHub',
    language: 'Sprache',
    localeRootLink: 'Startseite dieser Sprache',
  },
  theme: {
    light: 'Heller Modus',
    dark: 'Dunkler Modus',
  },
  hero: {
    title: 'Schluss mit Caps Lock!',
    lead:
      'Caps Lock belegt einen der wertvollsten Plätze auf deiner Tastatur. Wenn du sie auf eine Taste legst, die du wirklich für Tastenkürzel nutzt, fühlt sich Tippen deutlich angenehmer an.',
  },
  preview: {
    kicker: 'Umbelegung testen',
    title: 'Dieselbe Taste kann deutlich nützlicher sein',
    captionTemplate: 'Auf <deviceSelect/> ist <key>{{recommendedKey}}</key> meist die beste Standardbelegung.',
    device: {
      mac: 'macOS',
      android: 'Android',
      ios: 'iOS',
      windows: 'Windows',
      linux: 'Linux',
      unix: 'Unix',
      other: 'dieses Gerät',
    },
    key: {
      capsLock: 'Feststelltaste',
      command: 'Befehl',
      control: 'Strg',
      escape: 'Escape',
    },
  },
  demo: {
    kicker: 'Selbst ausprobieren',
    title: 'Caps Lock als Shortcut-Hilfstaste testen',
    bodyTemplate:
      'In diesem Textfeld verhält sich <key>Caps Lock</key> wie eine virtuelle <key>{{modifier}}</key>-Taste für <key>A</key>, <key>C</key>, <key>V</key> und <key>X</key>. Du kannst das Gefühl ausprobieren, bevor du die Systemeinstellungen änderst. Beim ersten Mal fragt der Browser möglicherweise nach einer Berechtigung für die Zwischenablage.',
    virtualModifierPrefix: 'virtuell',
    status: {
      prefix: 'Status',
      idle: 'Bereit',
      armed: 'Virtuelle Zusatztaste aktiv',
    },
    instructions:
      'Drücke <key>Caps Lock</key> einmal und dann innerhalb von 1 Sekunde <key>A</key>, <key>C</key>, <key>V</key> oder <key>X</key>. In dieser Demo verhält sich die nächste unterstützte Taste wie ein <key>{{modifier}}</key>-Shortcut. Für jeden Shortcut musst du <key>Caps Lock</key> erneut drücken.',
    restoreNote:
      'Setze <key>Caps Lock</key> danach wieder auf den Normalzustand zurück, damit sie deinen nächsten Schritt nicht stört. Je nach Browser und Betriebssystem können weiterhin Fehler auftreten.',
    text: `Probiere dieses Feld mit Caps Lock aus.

Caps Lock + A wählt alles aus.
Caps Lock + C kopiert.
Caps Lock + V fügt ein.
Caps Lock + X schneidet aus.

Das ist nur eine kleine Browser-Demo, aber man merkt den Komfort sofort.`,
  },
  guide: {
    kicker: 'Einrichtungsleitfaden',
    title: 'Anleitungen nach Betriebssystem',
    intro: 'Wähle dein Betriebssystem und folge den passenden Schritten.',
    selectionPrompt: 'Wähle dein Betriebssystem, um die passende Anleitung zu öffnen.',
    label: {
      references: 'Quellen',
      steps: 'Schritte',
      notes: 'Hinweise',
    },
    codeBlock: {
      install: {
        label: 'Installationsskript',
        copy: 'Skript kopieren',
        copied: 'Kopiert',
        download: 'Skript herunterladen',
      },
      config: {
        label: 'Beispielkonfiguration',
        copy: 'Konfiguration kopieren',
        copied: 'Kopiert',
        download: 'Konfiguration herunterladen',
      },
    },
    registryGenerator: {
      title: 'Registry-Zuordnungs-Generator',
      sourceLabel: 'Physische Taste',
      targetLabel: 'Ersetzen durch',
      remapPreviewLabel: 'Generierte Zuordnungsdatei',
      revertPreviewLabel: 'Rückgängig-Datei',
      copyFileLabel: 'Inhalt kopieren',
      copiedFileLabel: 'Kopiert',
      downloadRemapLabel: 'Zuordnungsdatei herunterladen',
      downloadRevertLabel: 'Rückgängig-Datei herunterladen',
      noChangesLabel: 'Wähle mindestens ein anderes Ziel, um eine Zuordnungsdatei zu erzeugen.',
      registryPathLabel:
        'Registry-Pfad: HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout',
      resetLabel: 'Auswahl zurücksetzen',
      addSourceLabel: 'Taste zum Neuzuordnen hinzufügen',
      addSourcePromptLabel: 'Taste hinzufügen',
      removeSourceLabel: 'Entfernen',
      group: {
        system: 'System',
        modifiers: 'Modifikatortasten',
        navigation: 'Navigation',
        mainTypingArea: 'Haupttastenfeld',
        functionKeys: 'Funktionstasten',
        numpad: 'Nummernblock',
      },
      key: {
        turnOff: 'Taste deaktivieren',
        escape: 'Esc',
        tab: 'Tab',
        backspace: 'Rücktaste',
        enter: 'Eingabe',
        space: 'Leertaste',
        capslock: 'Feststelltaste',
        leftCtrl: 'Linke Strg',
        rightCtrl: 'Rechte Strg',
        leftShift: 'Linke Umschalt',
        rightShift: 'Rechte Umschalt',
        leftAlt: 'Linke Alt',
        rightAlt: 'Rechte Alt',
        leftWin: 'Linke Windows-Taste',
        rightWin: 'Rechte Windows-Taste',
        menu: 'Menü',
        insert: 'Einfg',
        delete: 'Entf',
        home: 'Pos1',
        end: 'Ende',
        pageUp: 'Bild auf',
        pageDown: 'Bild ab',
        arrowUp: 'Pfeil nach oben',
        arrowLeft: 'Pfeil nach links',
        arrowDown: 'Pfeil nach unten',
        arrowRight: 'Pfeil nach rechts',
        printScreen: 'Druck',
        numLock: 'Num',
        scrollLock: 'Rollen',
        numpadMultiply: 'Nummernblock *',
        numpadDivide: 'Nummernblock /',
        numpadSubtract: 'Nummernblock -',
        numpadAdd: 'Nummernblock +',
        numpadEnter: 'Nummernblock Eingabe',
        numpadDecimal: 'Nummernblock .',
      },
    },
    hardware: {
      title: 'Spezielle Hardware',
      notice:
        'Wenn deine Tastatur DIP-Schalter, Hersteller-Tools oder Firmware-Remapping mit Optionen wie QMK, VIA, Vial oder ZMK unterstützt, schau zuerst in den Tab <hardwareGuideLink>spezielle Hardware</hardwareGuideLink>.',
      summary:
        'Manche Tastaturen können Tasten wie Caps Lock, Strg oder Escape direkt auf der Tastatur neu belegen, statt über das Betriebssystem. Wenn deine Tastatur das unterstützt, ist das oft einfacher als Änderungen in Windows, macOS oder Linux.',
      advantagesTitle: 'Vorteile',
      advantages: {
        item1: 'Die Belegung kann auf der Tastatur erhalten bleiben, auch wenn du sie an einen anderen Computer anschließt.',
        item2: 'Sie kann schon vor der Anmeldung oder außerhalb der eigentlichen Benutzersitzung funktionieren.',
        item3: 'Das ist besonders nützlich auf Arbeitsrechnern, auf denen Änderungen am System eingeschränkt sind.',
      },
      cautionsTitle: 'Worauf du achten solltest',
      cautions: {
        item1: 'Nicht jede Tastatur unterstützt diese Art der Neuzuordnung.',
        item2: 'Manche Werkzeuge funktionieren nur über eine kabelgebundene USB-Verbindung.',
        item3: 'Firmware-basierte Werkzeuge sind leistungsfähig, aber nicht immer der einfachste Einstieg.',
      },
      examplesTitle: 'Beispiele',
      officialPageLabel: '{{label}} offizielle Seite',
      exampleGuideLabel: {
        hhkbDip: 'DIP-Schalter-Anleitung',
        setupGuide: 'Einrichtungsanleitung',
        toolPage: 'Werkzeugseite',
      },
      sections: {
        switches: {
          title: 'Hardware-Schalter und integrierte Modi',
          body1:
            'Einige Tastaturen bieten Layout-Änderungen direkt in der Hardware an. Typische Beispiele sind DIP-Schalter, die Strg und Caps Lock tauschen, Backspace und Entf vertauschen oder den Plattformmodus umschalten.',
          body2:
            'HHKB ist ein bekanntes Beispiel für diesen Ansatz. Je nach Modell lassen sich Strg, Caps Lock oder Fn-bezogene Funktionen über DIP-Schalter oder integrierte Layer anpassen.',
          body3:
            'Der Spielraum ist meist begrenzt, aber die Einrichtung ist schnell, stabil und kommt ohne Hintergrundsoftware aus.',
        },
        tools: {
          title: 'Konfigurationstools und firmwarebasiertes Remapping',
          body1:
            'Einige Tastaturen bringen Konfigurationstools des Herstellers mit. Damit lassen sich Tasten meist in einem visuellen Layout-Editor ändern und zusätzlich Layer oder Shortcuts anpassen.',
          body2:
            'Diese Werkzeuge können auf herstellereigener Firmware oder auf offener Firmware wie QMK, VIA, Vial oder ZMK aufbauen.',
          body3:
            'Ein dediziertes Werkzeug ist in der Regel einfacher als Firmware selbst zu bearbeiten oder zu kompilieren. Es funktioniert aber nur auf unterstützten Modellen, und manche Werkzeuge brauchen eine kabelgebundene USB-Verbindung.',
        },
      },
      references: {
        hhkbDownload: 'HHKB-Downloads und Keymap-Tools',
        hhkbDipManual: 'HHKB Studio DIP-Schalter-Handbuch',
        hhkbFnLayer: 'HHKB Studio Fn- und Layer-Anleitung',
        hhkbKeymapTool: 'HHKB Studio Keymap-Tool-Handbuch',
        keychronLauncher: 'Keychron-Launcher-Remap-Anleitung',
        zsaVoyager: 'Überblick zu ZSA Voyager und Oryx',
        zsaFlash: 'ZSA-Dokumentation zu Flashen und Keymapp',
        wooting80he: 'Überblick zu Wooting 80HE und Wootility',
        wootingRemap: 'Wooting-Remap-Beispiel',
        dygmaBazecor: 'Dygma-Bazecor-Download',
        dygmaLayout: 'Dygma-Anleitung zur Layout-Anpassung',
        qmkKeymap: 'QMK-Keymap-Dokumentation',
        viaSpec: 'VIA-Dokumentation',
        vialFirstUse: 'Vial-Benutzerdokumentation',
        zmkStudio: 'ZMK-Studio-Dokumentation',
        nuphyVia: 'NuPhy-VIA-Anleitung',
      },
    },
    windows: {
      title: 'Windows',
      summary:
        'Unter Windows ist PowerToys Keyboard Manager der einfachste Weg. Wenn du <key>Caps Lock</key> systemweit ohne PowerToys im Hintergrund neu belegen willst, kannst du unten die Registry-basierte Scancode-Map-Methode verwenden.',
      methodChoiceIntro: 'Unter Windows wähle entweder PowerToys oder den Registry-Weg.',
      methodSelectionPrompt: 'Wähle oben die gewünschte Windows-Methode aus, um die detaillierten Schritte zu sehen.',
      method: {
        prosLabel: 'Vorteile',
        consLabel: 'Worauf du achten solltest',
        powertoys: {
          title: 'PowerToys Keyboard Manager',
          summary:
            'Das ist der einfachste Weg, wenn du eine grafische Oberfläche möchtest und die Belegung später vielleicht noch einmal ändern willst.',
          referenceLabel1: 'PowerToys-Installation',
          referenceLabel2: 'PowerToys Keyboard Manager',
          pro1: 'Es ist der schnellste Weg und lässt sich später in einer grafischen Oberfläche leicht anpassen.',
          pro2: 'Er kann eine Taste nicht nur auf eine andere Taste, sondern auch auf einen Shortcut abbilden.',
          pro3: 'Zuordnungen werden sofort wirksam, sobald du sie bestätigst.',
          con1: 'PowerToys muss im Hintergrund laufen, sonst greift die Zuordnung nicht.',
          con2: 'Keyboard Manager funktioniert auf dem Windows-Anmeldebildschirm und anderen Kennwortabfragen nicht.',
          con3: 'Zuordnungen von Zusatztasten können dennoch mit manchen Gesten, Sondertasten oder Apps mit erhöhten Rechten kollidieren.',
          steps: {
            step01: {
              title: '1. PowerToys installieren',
              body: 'Installiere PowerToys aus dem Microsoft Store, von der GitHub-Release-Seite oder per winget. In der <powertoysInstallationGuide>Installationsanleitung</powertoysInstallationGuide> kannst du alle drei Wege nutzen.',
            },
            step02: {
              title: '2. Keyboard Manager öffnen und „Remap a key“ wählen',
              body: 'Öffne in den PowerToys-Einstellungen <keyboardManagerGuide>Keyboard Manager</keyboardManagerGuide> und wähle Remap a key. Füge dann eine neue Zeile für <key>Caps Lock</key> hinzu.',
            },
            step03: {
              title: '3. Die gewünschte Zieltaste wählen',
              body: 'Ordne <key>Caps Lock</key> <key>Control</key>, <key>Escape</key>, <key>Alt</key> oder einer anderen Taste deiner Wahl zu. Für eine klassische Produktivitätsbelegung ist <key>Control</key> die häufigste Wahl.',
            },
            step04: {
              title: '4. Speichern und in den echten Apps testen',
              body: 'Bestätige die Änderung und teste sie dann in den Apps, die du am meisten nutzt. Wenn die Belegung auch vor dem Anmelden wirken soll, wechsle stattdessen zur Registry-Methode.',
            },
          },
          note1:
            'Wenn eine Ziel-App mit Administratorrechten läuft, PowerToys aber nicht, kann die Zuordnung dort erst greifen, wenn PowerToys ebenfalls mit erhöhten Rechten läuft.',
          note2:
            'Wenn du <key>Caps Lock</key> manchmal noch brauchst, lege sie lieber auf eine andere selten genutzte Taste, statt sie komplett zu entfernen.',
        },
        registry: {
          title: 'Registry-basierte Scancode-Map',
          summary:
            'Dieser Weg ist besser, wenn du eine systemweite Zuordnung willst, die ohne PowerToys funktioniert und auch auf Anmeldebildschirmen aktiv bleibt.',
          referenceLabel1: 'Microsoft-PDF: USB HID to PS/2 Scan Code Translation Table',
          pro1: 'Du bekommst eine systemweite Zuordnung, ohne von PowerToys abhängig zu sein.',
          pro2: 'Du musst kein Hintergrundwerkzeug dauerhaft laufen lassen.',
          pro3: 'Zuordnungs- und Rückgängig-Datei lassen sich leicht archivieren, damit du sie später erneut anwenden oder zurücknehmen kannst.',
          con1: 'Es ist weniger bequem als eine GUI und braucht meist Ab- und Anmeldung oder einen Neustart, bis alles vollständig greift.',
          con2: 'Es ordnet nur physische Tastenpositionen neu zu und ist deshalb für Shortcut-artige Belegungen weniger flexibel als PowerToys.',
          con3:
            'Wenn du <key>Right Alt</key> änderst, kann das auf manchen nicht-englischen Tastaturlayouts die mehrsprachige Eingabe beeinflussen.',
          steps: {
            step01: {
              title: '1. Die gewünschten Tauschpaare festlegen',
              body: 'Nutze den Generator, um zu bestimmen, was jede physische Taste stattdessen senden soll. Die Vorschau wird sofort aktualisiert, sodass du die erzeugte Datei vor dem Download prüfen kannst.',
            },
            step02: {
              title: '2. Zuordnungs- und Rückgängig-Datei herunterladen',
              body: 'Bewahre die Rückgängig-Datei direkt neben der Zuordnungsdatei auf. So kannst du die Änderung schnell zurücknehmen, falls sich das neue Layout doch nicht gut anfühlt.',
            },
            step03: {
              title: '3. Die Zuordnungsdatei mit Administratorfreigabe anwenden',
              body: 'Öffne die erzeugte .reg-Datei und erlaube Windows, sie in die Registry zu übernehmen. Da damit das systemweite Tastaturlayout geändert wird, ist die Administratorbestätigung normal.',
            },
            step04: {
              title: '4. Abmelden oder Windows neu starten und testen',
              body: 'Nachdem Windows das Tastaturlayout neu geladen hat, teste die neuen Positionen zuerst in deinen üblichen Apps. Wenn dir auch der Anmeldepfad wichtig ist, prüfe ihn direkt in deiner Umgebung. Falls nötig, starte die Rückgängig-Datei und danach erneut neu.',
            },
          },
          note1:
            'Schau dir die erzeugte Vorschau vor dem Download noch einmal an, wenn du die Scan-Code-Paare von Hand prüfen möchtest.',
          note2:
            'Wenn du <key>Caps Lock</key> manchmal noch brauchst, lege sie lieber auf eine andere selten genutzte Taste, statt sie komplett zu entfernen.',
        },
      },
    },
    mac: {
      title: 'macOS',
      summary:
        'Unter macOS ist Karabiner-Elements der Standardweg, um <key>Caps Lock</key> neu zu belegen und den Rest des Tastaturverhaltens berechenbar zu halten.',
      referenceLabel1: 'Karabiner-Elements-Startseite',
      referenceLabel2: 'Karabiner-Installationsleitfaden',
      referenceLabel3: 'Karabiner Simple Modifications',
      referenceLabel4: 'Erforderliche macOS-Einstellungen für Karabiner',
      referenceLabel5: 'Karabiner vor dem Login',
      referenceLabel6: 'Apple: Eingabequellen ändern',
      steps: {
        step01: {
          title: '1. Karabiner-Elements installieren und Berechtigungen freigeben',
          body: 'Installiere zuerst <karabinerInstallationGuide>Karabiner-Elements</karabinerInstallationGuide> und erlaube dann den Hintergrunddienst, die Input-Monitoring-Berechtigung und die Treibererweiterung. Das sind die erforderlichen macOS-Einstellungen.',
        },
        step02: {
          title: '2. <key>Caps Lock</key> in Simple Modifications neu belegen',
          body: 'Öffne Karabiner-Elements, gehe zu <karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide>, wähle die Tastatur aus, die du ändern möchtest, und lege <key>Caps Lock</key> auf <key>⌘ Left Command</key>. Für die meisten macOS-Setups ist das ein praktischer Standard. Wenn dein Arbeitsablauf stärker von <key>Escape</key> oder einer anderen Taste abhängt, wähle stattdessen diese.',
        },
        step03: {
          title: '3. Optional: dieselbe Zuordnung schon vor dem Login nutzen',
          body: 'Wenn die gleiche Zuordnung auch auf dem Kennwortbildschirm vor dem Login gelten soll, öffne in Karabiner die Registerkarte Misc und klicke auf „Copy the current configuration to the system default configuration“. Damit gilt dieselbe Zuordnung auch vor dem Login.',
        },
        step04: {
          title: '4. Optional: nur weiter, wenn <key>Caps Lock</key> bereits die Sprachwechsel-Taste ist',
          body: 'Die nächsten Schritte sind nur für mehrsprachige Setups gedacht, in denen <key>Caps Lock</key> bereits zum Wechsel der Eingabequelle dient. Wenn du den Eingabequellenwechsel auf eine andere Taste legst, kannst du auch nach der Umbelegung eine separate Sprachwechsel-Taste behalten und die gelegentlichen Fehler eines kurzen <key>Caps Lock</key>-Taps vermeiden. Wenn <key>Caps Lock</key> auf deinem Mac diese Aufgabe nicht erfüllt, reicht die Grundumbelegung, und du kannst den Rest dieses Abschnitts überspringen.',
          substeps: {
            step04_1: {
              title: '4-1. Eine freie rechte Zusatztaste wählen',
              body: 'Wähle zuerst eine freie rechte Zusatztaste für den Sprachwechsel. Häufig ist <key>⌘ Right Command</key> eine praktische Wahl. Stattdessen geht auch <key>⌥ Right Option</key>, solange diese Taste in deinem Layout nicht bereits wichtig ist.',
            },
            step04_2: {
              title: '4-2. Die rechte Taste in Karabiner auf <key>F18</key> legen',
              body: 'Füge in <karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide> je nach gewählter Taste entweder <key>⌘ Right Command</key> -> <key>F18</key> oder <key>⌥ Right Option</key> -> <key>F18</key> hinzu. So bleibt <key>Caps Lock</key> für die Umbelegung frei, und rechts auf der Tastatur hast du weiterhin eine eigene Sprachwechsel-Taste.',
            },
            step04_3: {
              title: '4-3. <key>F18</key> in macOS dem Wechsel der Eingabequelle zuweisen',
              body: 'Öffne Apple-Menü > Systemeinstellungen > Tastatur > Tastaturkurzbefehle > Eingabequellen und weise <key>F18</key> „Nächste Quelle im Eingabemenü auswählen“ zu. So bekommst du nach der Umbelegung von <key>Caps Lock</key> wieder eine verlässliche Sprachwechsel-Taste. <key>F18</key> ist hier nur ein praktisches Beispiel. <key>F1</key> bis <key>F12</key> sind an integrierte Systemfunktionen gebunden; eine höher nummerierte Funktionstaste ist deshalb für den Wechsel der Eingabequelle oft einfacher. Darunter ist <key>F18</key> eine der Tasten, die sich meist problemlos verwenden lassen.',
            },
          },
        },
      },
      note1:
        'Wenn du die Tastennamen vor dem Speichern überprüfen willst, zeigt dir Karabiners EventViewer, was macOS und Karabiner von jeder Taste sehen.',
      note2:
        'Unter macOS kannst du die <key>⌘ Command</key>-Taste nicht für den Wechsel der Eingabequelle festlegen.',
      note3:
        'Wenn du <key>Caps Lock</key> manchmal noch brauchst, lege sie lieber auf eine andere selten genutzte Taste, statt sie komplett zu entfernen.',
    },
    linux: {
      title: 'Linux',
      summary:
        'Für Linux ist keyd eine starke systemweite Lösung, um <key>Caps Lock</key> ohne Abhängigkeit von einer bestimmten Desktop-Umgebung in <key>Control</key> oder <key>Escape</key> umzubelegen.',
      referenceLabel1: 'keyd-Repository',
      referenceLabel2: 'keyd-README: Schnellstart',
      referenceLabel3: 'keyd-Releases',
      installScript: `git clone https://github.com/rvaiya/keyd
cd keyd
make
sudo make install
sudo systemctl enable --now keyd`,
      installFilename: 'keyd-setup.sh',
      configSnippet: `[ids]
*

[main]
# Legt Caps Lock beim Tippen auf Escape und beim Gedrückthalten auf Control.
capslock = overload(control, esc)

# Optional: Caps Lock auch auf Escape legen.
esc = capslock`,
      configFilename: 'default.conf',
      steps: {
        step01: {
          title: '1. keyd installieren',
          body: 'Installiere zuerst keyd. Der Quellcode-Installationsweg ist git clone, make, sudo make install und sudo systemctl enable --now keyd. Wenn du eine getaggte Version bevorzugst, kannst du auf der Releases-Seite anfangen.',
        },
        step02: {
          title: '2. /etc/keyd/default.conf anlegen',
          body: 'Lege /etc/keyd/default.conf an und beginne mit einer einfachen overload-Zuordnung. Damit sendet <key>Caps Lock</key> beim kurzen Drücken <key>Escape</key> und beim Gedrückthalten <key>Control</key>.',
        },
        step03: {
          title: '3. Den Dienst neu laden',
          body: 'Nachdem du die Datei gespeichert hast, führe sudo keyd reload aus, damit die neue Zuordnung greift. Wenn etwas nicht sauber angewendet wird, prüfe das Dienstprotokoll mit journalctl -eu keyd.',
        },
        step04: {
          title: '4. Tastennamen prüfen, wenn dein Keyboard ungewöhnlich ist',
          body: 'Wenn dein Tastaturlayout ungewöhnlich ist oder ein Tastenname unklar bleibt, nutze keyd monitor, um die von keyd erkannten Namen zu sehen. Wenn du die ursprünglichen Geräteereignisse prüfen willst, stoppe keyd zuerst und führe den Befehl dann noch einmal aus.',
        },
        step05: {
          title: '5. Die Not-Aus-Sequenz merken',
          body: 'Wenn du eine schlechte Konfiguration erstellt hast und schnell zurück musst, nutze <key>Backspace</key> + <key>Escape</key> + <key>Enter</key>, um keyd zu beenden.',
        },
      },
      note1:
        'Nutze master als Entwicklungszweig und getaggte Releases als stabile Versionen.',
      note2:
        'Unter Debian 13+ und Ubuntu 25.04+ funktioniert auch apt install keyd, aber die Installation aus dem Quellcode oben ist die portabelste Option.',
      note3:
        'Wenn du <key>Caps Lock</key> manchmal noch brauchst, lege sie lieber auf eine andere selten genutzte Taste, statt sie komplett zu entfernen.',
    },
  },
} as const satisfies TranslationMessages

export const deDeMessages = deDeTranslation
