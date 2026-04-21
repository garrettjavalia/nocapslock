import type { TranslationMessages } from './schema'

export const frFrTranslation = {
  linkCopy: {
    copy: 'Copier le lien',
    copied: 'Lien copié',
    share: 'Partager le lien',
  },
  meta: {
    description:
      'Utilisez Caps Lock plus confortablement !',
    keywords:
      'caps lock remap, caps lock to control, caps lock to command, caps lock to escape, productivité clavier, karabiner, keyd, powertoys',
  },
  chrome: {
    github: 'GitHub',
    language: 'Langue',
    localeRootLink: 'Accueil de cette langue',
  },
  theme: {
    light: 'Mode clair',
    dark: 'Mode sombre',
  },
  hero: {
    title: "Caps Lock, c'est fini !",
    lead:
      'Caps Lock occupe l’une des places les plus précieuses de votre clavier. Si vous le remappez vers une touche de raccourci que vous utilisez vraiment, la saisie devient bien plus confortable.',
  },
  preview: {
    kicker: 'Essayez de le remapper',
    title: 'La même touche peut faire bien mieux',
    captionTemplate: 'Sur <deviceSelect/>, la valeur par défaut la plus utile est <key>{{recommendedKey}}</key>.',
    device: {
      mac: 'macOS',
      android: 'Android',
      ios: 'iOS',
      windows: 'Windows',
      linux: 'Linux',
      unix: 'Unix',
      other: 'cette machine',
    },
    key: {
      capsLock: 'Caps Lock',
      command: 'Command',
      control: 'Control',
      escape: 'Escape',
    },
  },
  demo: {
    kicker: 'Essayez vous-même',
    title: 'Essayez Caps Lock comme aide de raccourci',
    bodyTemplate:
      'Dans cette zone de texte, <key>Caps Lock</key> agit comme une touche virtuelle <key>{{modifier}}</key> pour <key>A</key>, <key>C</key>, <key>V</key> et <key>X</key>. Vous pouvez tester la sensation avant de modifier les réglages système. Les actions de presse-papiers peuvent demander une autorisation du navigateur la première fois.',
    virtualModifierPrefix: 'virtuel',
    status: {
      prefix: 'État',
      idle: 'En attente',
      armed: 'Modificateur virtuel actif',
    },
    instructions:
      'Appuyez une fois sur <key>Caps Lock</key>, puis sur <key>A</key>, <key>C</key>, <key>V</key> ou <key>X</key> dans la seconde qui suit. Dans cette démo, la prochaine touche prise en charge agit comme un raccourci <key>{{modifier}}</key>. Vous devez appuyer à nouveau sur <key>Caps Lock</key> pour chaque raccourci.',
    restoreNote:
      'Après l’essai, remettez <key>Caps Lock</key> à son état normal pour ne pas gêner la suite. Il peut encore exister des bugs propres au navigateur ou au système d’exploitation.',
    text: `Essayez cette zone avec Caps Lock.

Utilisez Caps Lock + A pour tout sélectionner.
Utilisez Caps Lock + C pour copier.
Utilisez Caps Lock + V pour coller.
Utilisez Caps Lock + X pour couper.

Ce n’est qu’une démo dans le navigateur, mais elle suffit pour sentir le confort.`,
  },
    guide: {
      kicker: 'Guide de configuration',
      title: 'Guides de configuration par système d’exploitation',
      intro: 'Choisissez le système que vous utilisez et suivez les étapes qui lui correspondent.',
      selectionPrompt: 'Choisissez votre système d’exploitation pour ouvrir le guide correspondant.',
      label: {
        references: 'Références',
        steps: 'Étapes',
        notes: 'Notes',
      },
    codeBlock: {
      install: {
        label: 'Script d’installation',
        copy: 'Copier le script',
        copied: 'Copié',
        download: 'Télécharger le script',
      },
      config: {
        label: 'Exemple de configuration',
        copy: 'Copier la configuration',
        copied: 'Copié',
        download: 'Télécharger la configuration',
      },
    },
    registryGenerator: {
      title: 'Générateur de fichier de remappage du Registre',
      sourceLabel: 'Position physique de la touche',
      targetLabel: 'Envoyer cette touche à la place',
      remapPreviewLabel: 'Fichier de remappage généré',
      revertPreviewLabel: 'Fichier de restauration',
      copyFileLabel: 'Copier le contenu',
      copiedFileLabel: 'Copié',
      downloadRemapLabel: 'Télécharger le .reg de remappage',
      downloadRevertLabel: 'Télécharger le .reg de restauration',
      noChangesLabel: 'Choisissez au moins une cible différente pour générer un fichier de remappage.',
      registryPathLabel:
        'Chemin du Registre : HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout',
      resetLabel: 'Réinitialiser la sélection',
      addSourceLabel: 'Ajouter une touche à remapper',
      removeSourceLabel: 'Supprimer',
      key: {
        capslock: 'Caps Lock',
        leftCtrl: 'Ctrl gauche',
        rightCtrl: 'Ctrl droit',
        leftAlt: 'Alt gauche',
        rightAlt: 'Alt droit',
      },
    },
    windows: {
      title: 'Windows',
      summary:
        'Sous Windows, la solution la plus simple est PowerToys Keyboard Manager. Si vous voulez un remappage système de <key>Caps Lock</key> qui ne dépende pas de PowerToys en arrière-plan, vous pouvez utiliser l’approche Scancode Map basée sur le Registre ci-dessous.',
      methodChoiceIntro: 'Sous Windows, choisissez soit PowerToys, soit la méthode du Registre.',
      methodSelectionPrompt: 'Pour voir les étapes détaillées, choisissez ci-dessus la méthode Windows souhaitée.',
      method: {
        prosLabel: 'Atouts',
        consLabel: 'À noter',
        powertoys: {
          title: 'PowerToys Keyboard Manager',
          summary:
            'La plus simple si vous voulez une interface graphique et comptez ajuster les mappages plus tard.',
          referenceLabel1: 'Installation de PowerToys',
          referenceLabel2: 'PowerToys Keyboard Manager',
          pro1: 'C’est la mise en place la plus rapide et elle se modifie facilement plus tard depuis une interface graphique.',
          pro2: 'Elle peut remapper une touche vers une autre touche, ou même vers un raccourci, pas seulement vers une autre position physique.',
          pro3: 'Les remappages s’appliquent immédiatement après validation.',
          con1: 'PowerToys doit rester actif en arrière-plan, sinon le remappage cesse de s’appliquer.',
          con2: 'Keyboard Manager ne fonctionne pas sur l’écran de connexion Windows ni sur les autres invites de mot de passe.',
          con3: 'Les remappages de touches modificatrices peuvent encore interférer avec certains gestes, touches spéciales ou applications élevées.',
          steps: {
            step01: {
              title: '1. Installez PowerToys',
              body: 'Installez PowerToys depuis le Microsoft Store, la page des versions GitHub ou winget. Vous pouvez utiliser l’une ou l’autre des trois méthodes du <powertoysInstallationGuide>guide d’installation</powertoysInstallationGuide>.',
            },
            step02: {
              title: '2. Ouvrez Keyboard Manager puis Remap a key',
              body: 'Dans les paramètres PowerToys, ouvrez <keyboardManagerGuide>Keyboard Manager</keyboardManagerGuide> et sélectionnez Remap a key. Ajoutez ensuite une ligne pour <key>Caps Lock</key>.',
            },
            step03: {
              title: '3. Choisissez la touche cible',
              body: 'Mappez <key>Caps Lock</key> vers <key>Control</key>, <key>Escape</key>, <key>Alt</key> ou toute autre touche de votre choix. Pour une configuration de productivité classique, <key>Control</key> est la cible la plus courante.',
            },
            step04: {
              title: '4. Enregistrez et testez le nouveau mappage',
              body: 'Validez la modification, puis testez-la dans les applications que vous utilisez le plus. Si vous décidez ensuite que le remappage doit aussi fonctionner avant la connexion, passez plutôt à la méthode du Registre.',
            },
          },
          note1:
            'Si une application cible s’exécute en administrateur et que PowerToys ne l’est pas, le remappage peut ne pas s’y appliquer tant que PowerToys n’est pas lui aussi lancé avec élévation.',
          note2:
            'Si vous avez encore besoin de <key>Caps Lock</key> de temps en temps, gardez-le sur une autre touche que vous utilisez rarement au lieu de le supprimer complètement.',
        },
        registry: {
          title: 'Scancode Map basé sur le Registre',
          summary:
            'Cette méthode est préférable si vous voulez un remappage au niveau système qui fonctionne sans PowerToys et reste actif aussi sur les écrans de connexion.',
          referenceLabel1: 'PDF Microsoft : USB HID to PS/2 Scan Code Translation Table',
          pro1: 'Elle fournit un remappage système sans dépendre de PowerToys.',
          pro2: 'Elle ne dépend pas du maintien d’un utilitaire d’arrière-plan.',
          pro3: 'Les fichiers de remappage et de restauration sont faciles à archiver pour reproduire ou annuler la configuration plus tard.',
          con1: 'Elle est moins pratique qu’une interface graphique et nécessite souvent une déconnexion ou un redémarrage avant d’être pleinement appliquée.',
          con2: 'Elle ne remappe que des positions physiques de touches, donc elle est moins souple que PowerToys pour les remappages de type raccourci.',
          con3:
            'Modifier <key>Right Alt</key> peut affecter le comportement de saisie multilingue sur certaines dispositions non anglaises.',
          steps: {
            step01: {
              title: '1. Choisissez les échanges souhaités',
              body: 'Utilisez le générateur pour définir ce que chaque position physique doit envoyer à la place. L’aperçu se met à jour immédiatement, ce qui permet de vérifier le fichier généré avant de le télécharger.',
            },
            step02: {
              title: '2. Téléchargez les fichiers de remappage et de restauration',
              body: 'Gardez le fichier de restauration à côté du fichier de remappage. Vous pourrez ainsi annuler le changement rapidement, même si la nouvelle disposition ne vous convient pas tout de suite.',
            },
            step03: {
              title: '3. Appliquez le .reg avec les droits administrateur',
              body: 'Ouvrez le fichier .reg généré et laissez Windows l’intégrer au Registre. Comme cela modifie la disposition clavier du système, une confirmation administrateur est normale.',
            },
            step04: {
              title: '4. Déconnectez-vous ou redémarrez, puis testez',
              body: 'Après le rechargement de la disposition clavier par Windows, testez d’abord les nouvelles positions dans vos applications habituelles. Si vous tenez aussi au chemin de connexion, testez-le directement dans votre environnement. Si besoin, exécutez le fichier de restauration puis redémarrez encore.',
            },
          },
          note1:
            'Si vous voulez revérifier les paires de scan code à la main, passez en revue l’aperçu généré avant le téléchargement.',
          note2:
            'Si vous avez encore besoin de <key>Caps Lock</key> de temps en temps, gardez-le sur une autre touche que vous utilisez rarement au lieu de le supprimer complètement.',
        },
      },
    },
    mac: {
      title: 'macOS',
      summary:
        'Sur macOS, Karabiner-Elements est la méthode standard pour remapper <key>Caps Lock</key> tout en gardant le comportement du reste du clavier prévisible.',
      referenceLabel1: 'Page d’accueil de Karabiner-Elements',
      referenceLabel2: 'Guide d’installation de Karabiner',
      referenceLabel3: 'Simple Modifications de Karabiner',
      referenceLabel4: 'Réglages macOS requis par Karabiner',
      referenceLabel5: 'Configuration de Karabiner avant connexion',
      referenceLabel6: 'Réglages des sources de saisie Apple',
      steps: {
        step01: {
          title: '1. Installez Karabiner-Elements et autorisez-le',
          body: 'Installez d’abord <karabinerInstallationGuide>Karabiner-Elements</karabinerInstallationGuide>, puis assurez-vous que le service d’arrière-plan, l’autorisation de surveillance des saisies et l’extension de pilote sont tous autorisés. Ce sont les réglages macOS requis.',
        },
        step02: {
          title: '2. Remappez <key>Caps Lock</key> dans Simple Modifications',
          body: 'Ouvrez Karabiner-Elements, choisissez <karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide>, sélectionnez le clavier à modifier, puis changez <key>Caps Lock</key> en <key>⌘ Left Command</key>. Pour la plupart des usages sur macOS, c’est un choix pratique par défaut. Si votre flux de travail dépend davantage de <key>Escape</key> ou d’une autre touche, choisissez plutôt celle-là.',
        },
        step03: {
          title: '3. Facultatif : appliquer le même mappage avant la connexion',
          body: 'Si vous voulez le même mappage sur l’écran de mot de passe avant connexion, ouvrez l’onglet Misc dans Karabiner Settings et utilisez “Copy the current configuration to the system default configuration.” Le même mappage sera alors disponible avant la connexion.',
        },
        step04: {
          title: '4. Facultatif : si <key>Caps Lock</key> sert déjà à changer de langue',
          body: 'Les étapes suivantes ne concernent que les configurations multilingues qui dépendent déjà de <key>Caps Lock</key> pour changer de source de saisie. Déplacer le changement de source vers une autre touche permet de conserver une touche dédiée au changement de langue même après le remappage de <key>Caps Lock</key>, et cela peut réduire les petits dysfonctionnements liés au fait de compter sur une brève pression sur <key>Caps Lock</key> pour changer de mode. Si <key>Caps Lock</key> ne fait pas cela sur votre Mac, vous pouvez vous arrêter après le remappage de base et ignorer le reste de cette section.',
          substeps: {
            step04_1: {
              title: '4-1. Choisissez un modificateur de droite inutilisé',
              body: 'Commencez par choisir un modificateur de droite libre pour le changement de langue. <key>⌘ Right Command</key> est souvent un choix pratique. Vous pouvez aussi utiliser <key>⌥ Right Option</key>, à condition que cette touche ne soit pas déjà importante dans votre disposition.',
            },
            step04_2: {
              title: '4-2. Mappez cette touche de droite vers <key>F18</key> dans Karabiner',
              body: 'Dans <karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide>, ajoutez soit <key>⌘ Right Command</key> -> <key>F18</key>, soit <key>⌥ Right Option</key> -> <key>F18</key>, selon la touche choisie à l’étape précédente. Cela libère <key>Caps Lock</key> pour le remappage tout en gardant une touche dédiée au changement de langue sur le côté droit du clavier.',
            },
            step04_3: {
              title: '4-3. Attribuez <key>F18</key> au changement de source de saisie dans macOS',
              body: 'Ouvrez le menu Apple > Réglages Système > Clavier > Raccourcis clavier > Sources de saisie, puis attribuez <key>F18</key> à « sélectionner la méthode de saisie suivante dans le menu Saisie ». Vous recréez ainsi une touche fiable de changement de langue après que <key>Caps Lock</key> a été réaffectée. <key>F18</key> est utilisé ici comme exemple pratique. Comme <key>F1</key> à <key>F12</key> sont liés à des fonctions système intégrées, une touche de fonction plus élevée est souvent plus simple à utiliser pour le changement de source. Parmi elles, <key>F18</key> fait partie des touches qu’on peut généralement utiliser sans problème.',
            },
          },
        },
      },
      note1:
        'Si vous voulez vérifier les noms de touches avant d’enregistrer les changements, EventViewer de Karabiner montre ce que macOS et Karabiner détectent pour chaque touche.',
      note2:
        'Sur macOS, vous ne pouvez pas attribuer la touche <key>⌘ Command</key> au changement de source de saisie.',
      note3:
        'Si vous avez encore besoin de <key>Caps Lock</key> de temps en temps, gardez-le sur une autre touche que vous utilisez rarement au lieu de le supprimer complètement.',
    },
    linux: {
      title: 'Linux',
      summary:
        'Sous Linux, keyd est une excellente solution système pour remapper <key>Caps Lock</key> vers <key>Control</key> ou <key>Escape</key> sans dépendre d’un environnement de bureau précis.',
      referenceLabel1: 'Dépôt keyd',
      referenceLabel2: 'Guide de démarrage rapide du README keyd',
      referenceLabel3: 'Versions de keyd',
      installScript: `git clone https://github.com/rvaiya/keyd
cd keyd
make
sudo make install
sudo systemctl enable --now keyd`,
      installFilename: 'keyd-setup.sh',
      configSnippet: `[ids]
*

[main]
# Mappe Caps Lock vers Escape au toucher et vers Control en maintenant la touche.
capslock = overload(control, esc)

# Facultatif : mettre Caps Lock sur Escape aussi.
esc = capslock`,
      configFilename: 'default.conf',
      steps: {
        step01: {
          title: '1. Installez keyd',
          body: 'Installez d’abord keyd. Le flux d’installation depuis les sources est git clone, make, sudo make install et sudo systemctl enable --now keyd. Si vous préférez une version taguée, vous pouvez partir de la page des versions.',
        },
        step02: {
          title: '2. Créez /etc/keyd/default.conf',
          body: 'Créez ensuite /etc/keyd/default.conf et commencez par un simple mappage overload. Cette configuration fait envoyer à <key>Caps Lock</key> <key>Escape</key> au toucher et <key>Control</key> en maintenant la touche.',
        },
        step03: {
          title: '3. Rechargez le démon',
          body: 'Après avoir enregistré le fichier, exécutez sudo keyd reload pour appliquer le nouveau mappage. Si quelque chose ne s’applique pas correctement, consultez le journal du service avec journalctl -eu keyd.',
        },
        step04: {
          title: '4. Vérifiez les noms de touches si votre clavier est inhabituel',
          body: 'Si votre disposition est atypique ou si un nom de touche n’est pas clair, utilisez keyd monitor pour voir les noms reçus par keyd. Si vous voulez vérifier les événements bruts du périphérique, arrêtez d’abord keyd puis relancez la commande.',
        },
        step05: {
          title: '5. Gardez en tête la séquence d’arrêt d’urgence',
          body: 'Si vous faites une mauvaise configuration et devez vous en sortir vite, utilisez <key>Backspace</key> + <key>Escape</key> + <key>Enter</key> pour arrêter keyd.',
        },
      },
      note1:
        'Utilisez master comme branche de développement et les versions taguées comme versions stables.',
      note2:
        'Debian 13+ et Ubuntu 25.04+ peuvent aussi utiliser apt install keyd, mais l’installation par les sources ci-dessus reste l’option la plus portable.',
      note3:
        'Si vous avez encore besoin de <key>Caps Lock</key> de temps en temps, gardez-le sur une autre touche que vous utilisez rarement au lieu de le supprimer complètement.',
    },
  },
} as const satisfies TranslationMessages

export const frFrMessages = frFrTranslation
