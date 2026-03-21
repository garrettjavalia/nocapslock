import { sharedGuideCopy } from './shared'

export const enTranslation = {
  meta: {
    title: 'No Capslock Anymore | Turn Caps Lock into a Better Key',
    description:
      'A multilingual landing page that explains why remapping Caps Lock to Control, Command, or Escape is useful, and lets you try it right in the browser.',
    keywords:
      'caps lock remap, caps lock to control, caps lock to command, caps lock to escape, keyboard productivity, karabiner, keyd, powertoys',
  },
  chrome: {
    github: 'GitHub',
    language: 'Language',
  },
  theme: {
    light: 'Light mode',
    dark: 'Dark mode',
  },
  hero: {
    title: 'No Capslock Anymore!',
    lead:
      'Caps Lock is taking up one of the most valuable spots on your keyboard. If you remap it to a shortcut key you actually use, typing feels much more comfortable.',
  },
  preview: {
    kicker: 'Try remapping it',
    title: 'The same key can do much better work',
    captionTemplate: 'On {device}, the most useful default is {key}.',
    device: {
      mac: 'macOS',
      android: 'Android',
      ios: 'iOS',
      windows: 'Windows',
      linux: 'Linux',
      unix: 'Unix',
      other: 'this machine',
    },
    key: {
      capsLock: 'Caps Lock',
      command: 'Command',
      control: 'Control',
      escape: 'Escape',
    },
  },
  demo: {
    kicker: 'Try it yourself',
    title: 'Try using Caps Lock like a shortcut helper',
    bodyTemplate:
      'Inside this textarea, [[Caps Lock]] acts like a virtual [[{modifier}]] key for [[A]], [[C]], [[V]], and [[X]]. You can try the feel before changing your system settings. Clipboard actions may ask for browser permission the first time.',
    virtualModifierPrefix: 'virtual',
    status: {
      prefix: 'Status',
      idle: 'Waiting',
      armed: 'Virtual modifier active',
    },
    instructions:
      'Press [[Caps Lock]] once, then press one of [[A]], [[C]], [[V]], or [[X]] within 1 second. In this demo, the next supported key acts like a [[{modifier}]] shortcut. You need to press [[Caps Lock]] again for each shortcut.',
    restoreNote:
      'After trying the demo, turn [[Caps Lock]] back to its normal state so it does not affect your next task. There may still be browser- and operating-system-specific bugs.',
    text: `Try this box with Caps Lock.

Use Caps Lock + A to select all.
Use Caps Lock + C to copy.
Use Caps Lock + V to paste.
Use Caps Lock + X to cut.

This is only a browser demo, but it is enough to feel the convenience.`,
  },
  guide: {
    kicker: 'Setup guide',
    title: 'Setup guides by operating system',
    intro: 'Pick the operating system you use and follow the steps that match it.',
    label: {
      references: 'References',
      steps: 'Step by step',
      notes: 'Notes',
    },
    codeBlock: {
      install: {
        label: 'Install script',
        copy: 'Copy script',
        copied: 'Copied',
        download: 'Download script',
      },
      config: {
        label: 'Example config',
        copy: 'Copy config',
        copied: 'Copied',
        download: 'Download config',
      },
    },
    registryGenerator: {
      title: 'Registry remap file generator',
      sourceLabel: 'Physical key position',
      targetLabel: 'Send this key instead',
      remapPreviewLabel: 'Generated remap file',
      revertPreviewLabel: 'Revert file',
      copyFileLabel: 'Copy contents',
      copiedFileLabel: 'Copied',
      downloadRemapLabel: 'Download remap .reg',
      downloadRevertLabel: 'Download revert .reg',
      noChangesLabel: 'Choose at least one different target to generate a remap file.',
      registryPathLabel:
        'Registry path: HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout',
      restartNote:
        'This registry method changes keys globally. If the new mapping does not appear immediately, sign out or restart Windows.',
      resetLabel: 'Reset selections',
      key: {
        capsLock: 'Caps Lock',
        leftCtrl: 'Left Ctrl',
        rightCtrl: 'Right Ctrl',
        leftAlt: 'Left Alt',
        rightAlt: 'Right Alt',
      },
    },
    windows: {
      title: 'Windows',
      summary:
        'On Windows, the easiest path is PowerToys Keyboard Manager. If you want a system-wide remap for [[Caps Lock]] that does not depend on PowerToys running in the background, you can use the registry-based Scancode Map approach below.',
      methodChoiceIntro: 'On Windows, choose either PowerToys or the registry route.',
      method: {
        prosLabel: 'Advantages',
        consLabel: 'What to keep in mind',
        powertoys: {
          title: 'PowerToys Keyboard Manager',
          summary:
            'This is the easiest route if you want a graphical UI and expect to tweak mappings again later.',
          referenceLabel1: sharedGuideCopy.en.powerToysInstallationLabel,
          referenceLabel2: sharedGuideCopy.en.powerToysKeyboardManagerLabel,
          pro1: 'It is the quickest setup path and easy to edit later from a graphical settings screen.',
          pro2: 'It can remap a key to another key or even to a shortcut, not only to another physical key position.',
          pro3: 'Microsoft documents that remaps apply immediately after you confirm them.',
          con1: 'PowerToys must keep running in the background or the remap stops applying.',
          con2: 'Microsoft documents that Keyboard Manager does not work on the Windows sign-in screen or other password prompts.',
          con3: 'Modifier-key remaps can still interfere with some gestures, special keys, or elevated apps.',
          steps: {
            step01: {
              title: '1. Install PowerToys',
              body: 'Install PowerToys from the Microsoft Store, the GitHub release page, or winget. Microsoft documents all three routes in its installation guide.',
            },
            step02: {
              title: '2. Open Keyboard Manager and choose Remap a key',
              body: 'In PowerToys Settings, open Keyboard Manager and select Remap a key. Then add a new row for [[Caps Lock]].',
            },
            step03: {
              title: '3. Choose the target key you want',
              body: 'Map [[Caps Lock]] to [[Control]], [[Escape]], [[Alt]], or any other key you prefer. If you want the classic productivity setup, [[Control]] is the most common target.',
            },
            step04: {
              title: '4. Save and test the new mapping',
              body: 'Confirm the change, then test it in the apps you use most. If you later decide you want the remap to work before sign-in too, switch to the registry route instead.',
            },
          },
          note1:
            'If a target app is running as administrator and PowerToys is not, remapping may not apply there until PowerToys is also run with elevation.',
          note2: sharedGuideCopy.en.keepCapsLockNote,
        },
        registry: {
          title: 'Registry-based Scancode Map',
          summary:
            'This route is better when you want a system-level remap that works without PowerToys and can stay active on sign-in screens too.',
          referenceLabel1: sharedGuideCopy.en.scanCodeTablePdfLabel,
          pro1: 'It gives you a system-wide remap without depending on PowerToys.',
          pro2: 'It does not depend on keeping a background utility running.',
          pro3: 'The remap and revert files are easy to archive so you can reproduce or undo the setup later.',
          con1: 'It is less convenient than a GUI and usually needs sign-out or a restart before it is fully applied.',
          con2: 'It only remaps physical key positions, so it is less flexible than PowerToys for shortcut-style remaps.',
          con3: sharedGuideCopy.en.rightAltWarning,
          steps: {
            step01: {
              title: '1. Choose the key swaps you want below',
              body: 'Use the generator to decide what each physical position should send instead. The preview updates immediately so you can inspect the generated file before downloading it.',
            },
            step02: {
              title: '2. Download both the remap and revert files',
              body: 'Keep the revert file next to the remap file. That way you can undo the change quickly even if the new layout feels wrong right away.',
            },
            step03: {
              title: '3. Apply the remap file with administrator approval',
              body: 'Open the generated .reg file and allow Windows to merge it into the registry. Because this changes the system keyboard layout, administrator confirmation is expected.',
            },
            step04: {
              title: '4. Sign out or restart Windows, then test it',
              body: 'After Windows reloads the keyboard layout, test the new positions in your usual apps first. If you also care about the sign-in path, test that directly in your environment. If needed, run the revert file and restart again.',
            },
          },
          note1:
            'Review the generated preview before downloading it if you want to double-check the scan code pairs by hand.',
          note2: sharedGuideCopy.en.keepCapsLockNote,
        },
      },
    },
    mac: {
      title: 'macOS',
      summary:
        'On macOS, Karabiner-Elements is the standard way to remap [[Caps Lock]] while keeping the rest of your keyboard behavior predictable.',
      referenceLabel1: 'Karabiner-Elements homepage',
      referenceLabel2: 'Karabiner installation guide',
      referenceLabel3: 'Karabiner simple modifications',
      referenceLabel4: 'Karabiner required macOS settings',
      referenceLabel5: 'Karabiner before-login setup',
      referenceLabel6: 'Apple Input Sources settings',
      steps: {
        step01: {
          title: '1. Install Karabiner-Elements and finish the permission prompts',
          body: 'Install Karabiner-Elements first, then make sure the background service, Input Monitoring permission, and driver extension are all allowed. Karabiner’s official documentation calls these required macOS settings.',
        },
        step02: {
          title: '2. Remap [[Caps Lock]] in Simple Modifications',
          body: 'Open Karabiner-Elements, choose Simple Modifications, select the keyboard you want to edit, and change [[Caps Lock]] to [[Left Control]]. If you prefer [[Escape]] instead, you can choose that here too.',
        },
        step03: {
          title: '3. Optional: make the same mapping work before login',
          body: 'If you want the same mapping on the password screen before login, open the Misc tab in Karabiner Settings and use “Copy the current configuration to the system default configuration.” Karabiner’s official guide documents this for use before logging in.',
        },
        step04: {
          title: '4. Optional: only continue if [[Caps Lock]] is already your language-switch key',
          body: 'The next steps are only for multilingual setups that already depend on [[Caps Lock]] for input-source switching. Moving input-source switching to another key lets you keep a separate language-switch key even after remapping [[Caps Lock]], and it can reduce the occasional glitches that come with relying on a short [[Caps Lock]] tap to switch modes. If [[Caps Lock]] is not doing that job on your Mac, you can stop after the basic remap and skip the rest of this section.',
          substeps: {
            step04_1: {
              title: '4-1. Pick a spare right-side modifier',
              body: 'Choose a spare right-side modifier for language switching first. A common choice is [[Right Command]] -> [[F18]]. You can also use [[Right Option]] -> [[F18]] instead, as long as that key is not already important in your layout.',
            },
            step04_2: {
              title: '4-2. Map that right-side key to [[F18]] in Karabiner',
              body: 'In Simple Modifications, add either [[Right Command]] -> [[F18]] or [[Right Option]] -> [[F18]], depending on which key you picked in the previous step. This frees [[Caps Lock]] for remapping while keeping a dedicated language-switch key on the right side of the keyboard.',
            },
            step04_3: {
              title: '4-3. Assign [[F18]] to input-source switching in macOS',
              body: 'Open Apple menu > System Settings > Keyboard > Keyboard Shortcuts > Input Sources, then assign [[F18]] to “Select next source in Input menu.” This recreates a reliable language-switch key after [[Caps Lock]] has been repurposed. [[F18]] is used here as a practical example. Apple documents that [[F1]] through [[F12]] are tied to built-in system features, so a higher-numbered function key is often easier to work with for input-source switching. In practice, [[F18]] has been a safe choice because it tends not to overlap with those built-in roles.',
            },
          },
        },
      },
      note1:
        'If you want to verify key names before saving changes, Karabiner’s EventViewer is the official tool for checking what macOS and Karabiner see from each key.',
      note2:
        'Apple also documents a built-in option to use [[Caps Lock]] to switch to and from the last used Latin input source. If you want to keep your [[Caps Lock]] remap, using a separate language-switch key such as [[Right Command]] -> [[F18]] is more flexible.',
      note3: sharedGuideCopy.en.keepCapsLockNote,
    },
    linux: {
      title: 'Linux',
      summary:
        'For Linux, keyd is a strong system-wide way to remap [[Caps Lock]] into [[Control]] or [[Escape]] without depending on a specific desktop environment.',
      referenceLabel1: 'keyd repository',
      referenceLabel2: 'keyd README quickstart',
      referenceLabel3: 'keyd releases',
      installScript: `git clone https://github.com/rvaiya/keyd
cd keyd
make
sudo make install
sudo systemctl enable --now keyd`,
      installFilename: 'keyd-setup.sh',
      configSnippet: `[ids]
*

[main]
# Maps Caps Lock to Escape when tapped and Control when held.
capslock = overload(control, esc)

# Optional: put Caps Lock on Escape too.
esc = capslock`,
      configFilename: 'default.conf',
      steps: {
        step01: {
          title: '1. Install keyd',
          body: 'Install keyd first. The official project documents a source install flow with git clone, make, sudo make install, and sudo systemctl enable --now keyd. If you prefer a tagged version, you can start from the official releases page.',
        },
        step02: {
          title: '2. Create /etc/keyd/default.conf',
          body: 'Create /etc/keyd/default.conf and start with a simple overload mapping. This setup makes [[Caps Lock]] send [[Escape]] when tapped and [[Control]] when held.',
        },
        step03: {
          title: '3. Reload the daemon',
          body: 'After saving the file, run sudo keyd reload so the new mapping takes effect. If something does not apply cleanly, check the service log with journalctl -eu keyd.',
        },
        step04: {
          title: '4. Check key names when your keyboard is unusual',
          body: 'If your keyboard layout is unusual or a key name is unclear, use keyd monitor to see the names keyd receives. If you want to check the original device events, stop keyd first and run the command again.',
        },
        step05: {
          title: '5. Keep the emergency stop sequence in mind',
          body: 'If you make a bad config and need to recover quickly, the official documentation notes that [[Backspace]] + [[Escape]] + [[Enter]] should terminate keyd.',
        },
      },
      note1:
        'The upstream README says master is the development branch, while tagged releases should be considered stable.',
      note2:
        'Debian 13+ and Ubuntu 25.04+ are also documented as supporting apt install keyd, but the source install above is the most portable option.',
      note3: sharedGuideCopy.en.keepCapsLockNote,
    },
  },
} as const

export const enMessages = enTranslation
