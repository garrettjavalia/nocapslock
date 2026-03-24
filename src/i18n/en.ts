export const enTranslation = {
  linkCopy: {
    copy: 'Copy link',
    copied: 'Link copied',
    share: 'Share link',
  },
  meta: {
    description:
      'Use Caps Lock more comfortably!',
    keywords:
      'caps lock remap, caps lock to control, caps lock to command, caps lock to escape, keyboard productivity, karabiner, keyd, powertoys',
  },
  chrome: {
    github: 'GitHub',
    language: 'Language',
    localeRootLink: 'Current language root',
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
    captionTemplate: 'On <deviceSelect/>, the most useful default is <key>{{recommendedKey}}</key>.',
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
      'Inside this textarea, <key>Caps Lock</key> acts like a virtual <key>{{modifier}}</key> key for <key>A</key>, <key>C</key>, <key>V</key>, and <key>X</key>. You can try the feel before changing your system settings. Clipboard actions may ask for browser permission the first time.',
    virtualModifierPrefix: 'virtual',
    status: {
      prefix: 'Status',
      idle: 'Waiting',
      armed: 'Virtual modifier active',
    },
    instructions:
      'Press <key>Caps Lock</key> once, then press one of <key>A</key>, <key>C</key>, <key>V</key>, or <key>X</key> within 1 second. In this demo, the next supported key acts like a <key>{{modifier}}</key> shortcut. You need to press <key>Caps Lock</key> again for each shortcut.',
    restoreNote:
      'After trying the demo, turn <key>Caps Lock</key> back to its normal state so it does not affect your next task. There may still be browser- and operating-system-specific bugs.',
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
    selectionPrompt: 'Choose your operating system to open the matching guide.',
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
      resetLabel: 'Reset selections',
      key: {
        capslock: 'Caps Lock',
        leftCtrl: 'Left Ctrl',
        rightCtrl: 'Right Ctrl',
        leftAlt: 'Left Alt',
        rightAlt: 'Right Alt',
      },
    },
    windows: {
      title: 'Windows',
      summary:
        'On Windows, the easiest path is PowerToys Keyboard Manager. If you want a system-wide remap for <key>Caps Lock</key> that does not depend on PowerToys running in the background, you can use the registry-based Scancode Map approach below.',
      methodChoiceIntro: 'On Windows, choose either PowerToys or the registry route.',
      methodSelectionPrompt: 'To see the detailed steps, choose the Windows method you want above.',
      method: {
        prosLabel: 'Advantages',
        consLabel: 'What to keep in mind',
        powertoys: {
          title: 'PowerToys Keyboard Manager',
          summary:
            'This is the easiest route if you want a graphical UI and expect to tweak mappings again later.',
          referenceLabel1: 'PowerToys installation',
          referenceLabel2: 'PowerToys Keyboard Manager',
          pro1: 'It is the quickest setup path and easy to edit later from a graphical settings screen.',
          pro2: 'It can remap a key to another key or even to a shortcut, not only to another physical key position.',
          pro3: 'Remaps apply immediately after you confirm them.',
          con1: 'PowerToys must keep running in the background or the remap stops applying.',
          con2: 'Keyboard Manager does not work on the Windows sign-in screen or other password prompts.',
          con3: 'Modifier-key remaps can still interfere with some gestures, special keys, or elevated apps.',
          steps: {
            step01: {
              title: '1. Install PowerToys',
              body: 'Install PowerToys from the Microsoft Store, the GitHub release page, or winget. You can use any of the three routes in the <powertoysInstallationGuide>installation guide</powertoysInstallationGuide>.',
            },
            step02: {
              title: '2. Open Keyboard Manager and choose Remap a key',
              body: 'In PowerToys Settings, open <keyboardManagerGuide>Keyboard Manager</keyboardManagerGuide> and select Remap a key. Then add a new row for <key>Caps Lock</key>.',
            },
            step03: {
              title: '3. Choose the target key you want',
              body: 'Map <key>Caps Lock</key> to <key>Control</key>, <key>Escape</key>, <key>Alt</key>, or any other key you prefer. If you want the classic productivity setup, <key>Control</key> is the most common target.',
            },
            step04: {
              title: '4. Save and test the new mapping',
              body: 'Confirm the change, then test it in the apps you use most. If you later decide you want the remap to work before sign-in too, switch to the registry route instead.',
            },
          },
          note1:
            'If a target app is running as administrator and PowerToys is not, remapping may not apply there until PowerToys is also run with elevation.',
          note2:
            'If you still need <key>Caps Lock</key> sometimes, keep it on another key you rarely use instead of removing it completely.',
        },
        registry: {
          title: 'Registry-based Scancode Map',
          summary:
            'This route is better when you want a system-level remap that works without PowerToys and can stay active on sign-in screens too.',
          referenceLabel1: 'Microsoft PDF: USB HID to PS/2 Scan Code Translation Table',
          pro1: 'It gives you a system-wide remap without depending on PowerToys.',
          pro2: 'It does not depend on keeping a background utility running.',
          pro3: 'The remap and revert files are easy to archive so you can reproduce or undo the setup later.',
          con1: 'It is less convenient than a GUI and usually needs sign-out or a restart before it is fully applied.',
          con2: 'It only remaps physical key positions, so it is less flexible than PowerToys for shortcut-style remaps.',
          con3:
            'Changing <key>Right Alt</key> can affect multilingual input behavior on some non-English keyboard layouts.',
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
          note2:
            'If you still need <key>Caps Lock</key> sometimes, keep it on another key you rarely use instead of removing it completely.',
        },
      },
    },
    mac: {
      title: 'macOS',
      summary:
        'On macOS, Karabiner-Elements is the standard way to remap <key>Caps Lock</key> while keeping the rest of your keyboard behavior predictable.',
      referenceLabel1: 'Karabiner-Elements homepage',
      referenceLabel2: 'Karabiner installation guide',
      referenceLabel3: 'Karabiner simple modifications',
      referenceLabel4: 'Karabiner required macOS settings',
      referenceLabel5: 'Karabiner before-login setup',
      referenceLabel6: 'Apple Input Sources settings',
      steps: {
        step01: {
          title: '1. Install Karabiner-Elements and finish the permission prompts',
          body: 'Install <karabinerInstallationGuide>Karabiner-Elements</karabinerInstallationGuide> first, then make sure the background service, Input Monitoring permission, and driver extension are all allowed. These are the required macOS settings.',
        },
        step02: {
          title: '2. Remap <key>Caps Lock</key> in Simple Modifications',
          body: 'Open Karabiner-Elements, choose <karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide>, select the keyboard you want to edit, and change <key>Caps Lock</key> to <key>Left Control</key>. If you prefer <key>Escape</key> instead, you can choose that here too.',
        },
        step03: {
          title: '3. Optional: make the same mapping work before login',
          body: 'If you want the same mapping on the password screen before login, open the Misc tab in Karabiner Settings and use “Copy the current configuration to the system default configuration.” This makes the same mapping available before logging in.',
        },
        step04: {
          title: '4. Optional: only continue if <key>Caps Lock</key> is already your language-switch key',
          body: 'The next steps are only for multilingual setups that already depend on <key>Caps Lock</key> for input-source switching. Moving input-source switching to another key lets you keep a separate language-switch key even after remapping <key>Caps Lock</key>, and it can reduce the occasional glitches that come with relying on a short <key>Caps Lock</key> tap to switch modes. If <key>Caps Lock</key> is not doing that job on your Mac, you can stop after the basic remap and skip the rest of this section.',
          substeps: {
            step04_1: {
              title: '4-1. Pick a spare right-side modifier',
              body: 'Choose a spare right-side modifier for language switching first. A common choice is <key>Right Command</key> -> <key>F18</key>. You can also use <key>Right Option</key> -> <key>F18</key> instead, as long as that key is not already important in your layout.',
            },
            step04_2: {
              title: '4-2. Map that right-side key to <key>F18</key> in Karabiner',
              body: 'In <karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide>, add either <key>Right Command</key> -> <key>F18</key> or <key>Right Option</key> -> <key>F18</key>, depending on which key you picked in the previous step. This frees <key>Caps Lock</key> for remapping while keeping a dedicated language-switch key on the right side of the keyboard.',
            },
            step04_3: {
              title: '4-3. Assign <key>F18</key> to input-source switching in macOS',
              body: 'Open Apple menu > System Settings > Keyboard > Keyboard Shortcuts > Input Sources, then assign <key>F18</key> to “Select next source in Input menu.” This recreates a reliable language-switch key after <key>Caps Lock</key> has been repurposed. <key>F18</key> is used here as a practical example. Because <key>F1</key> through <key>F12</key> are tied to built-in system features, a higher-numbered function key is often easier to use for input-source switching. Among them, <key>F18</key> is one of the keys that is usually safe to use.',
            },
          },
        },
      },
      note1:
        'If you want to verify key names before saving changes, Karabiner’s EventViewer shows what macOS and Karabiner see from each key.',
      note2:
        'On macOS, you cannot assign the <key>Command</key> key to input-source switching.',
      note3:
        'If you still need <key>Caps Lock</key> sometimes, keep it on another key you rarely use instead of removing it completely.',
    },
    linux: {
      title: 'Linux',
      summary:
        'For Linux, keyd is a strong system-wide way to remap <key>Caps Lock</key> into <key>Control</key> or <key>Escape</key> without depending on a specific desktop environment.',
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
          body: 'Install keyd first. The source install flow is git clone, make, sudo make install, and sudo systemctl enable --now keyd. If you prefer a tagged version, you can start from the releases page.',
        },
        step02: {
          title: '2. Create /etc/keyd/default.conf',
          body: 'Create /etc/keyd/default.conf and start with a simple overload mapping. This setup makes <key>Caps Lock</key> send <key>Escape</key> when tapped and <key>Control</key> when held.',
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
          body: 'If you make a bad config and need to recover quickly, use <key>Backspace</key> + <key>Escape</key> + <key>Enter</key> to terminate keyd.',
        },
      },
      note1:
        'Treat master as the development branch and tagged releases as the stable option.',
      note2:
        'Debian 13+ and Ubuntu 25.04+ also support apt install keyd, but the source install above is the most portable option.',
      note3:
        'If you still need <key>Caps Lock</key> sometimes, keep it on another key you rarely use instead of removing it completely.',
    },
  },
} as const

export const enMessages = enTranslation
