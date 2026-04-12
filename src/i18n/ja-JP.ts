import type { TranslationMessages } from './schema'

export const jaJpTranslation = {
  linkCopy: {
    copy: 'リンクをコピー',
    copied: 'リンクをコピーしました',
    share: 'リンクを共有',
  },
  meta: {
    description:
      'Caps Lockをもっと快適に使いましょう！',
    keywords:
      'caps lock remap, caps lock to control, caps lock to command, caps lock to escape, keyboard productivity, karabiner, keyd, powertoys',
  },
  chrome: {
    github: 'GitHub',
    language: '言語',
    localeRootLink: 'この言語のトップ',
  },
  theme: {
    light: 'ライトモード',
    dark: 'ダークモード',
  },
  hero: {
    title: 'もう Caps Lock はいらない！',
    lead:
      'Caps Lock は、キーボードの中でも特に価値の高い場所を占めています。実際によく使うショートカットキーに再割り当てすれば、入力がぐっと快適になります。',
  },
  preview: {
    kicker: '割り当て直してみる',
    title: '同じキーでもっと役に立てます',
    captionTemplate: '<deviceSelect/> では、いちばん使いやすい既定値は <key>{{recommendedKey}}</key> です。',
    device: {
      mac: 'macOS',
      android: 'Android',
      ios: 'iOS',
      windows: 'Windows',
      linux: 'Linux',
      unix: 'Unix',
      other: 'この端末',
    },
    key: {
      capsLock: 'Caps Lock',
      command: 'Command',
      control: 'Control',
      escape: 'Escape',
    },
  },
  demo: {
    kicker: '自分で試す',
    title: 'Caps Lock をショートカット補助キーのように使ってみる',
    bodyTemplate:
      'このテキストエリアでは、<key>Caps Lock</key> が <key>A</key>、<key>C</key>、<key>V</key>、<key>X</key> に対して仮想の <key>{{modifier}}</key> キーのように動作します。システム設定を変える前に、使い心地を試せます。クリップボード操作は、初回のみブラウザの許可を求められる場合があります。',
    virtualModifierPrefix: '仮想',
    status: {
      prefix: 'ステータス',
      idle: '待機中',
      armed: '仮想修飾キーが有効',
    },
    instructions:
      '<key>Caps Lock</key> を1回押してから、1秒以内に <key>A</key>、<key>C</key>、<key>V</key>、<key>X</key> のいずれかを押してください。このデモでは、次に押した対応キーが <key>{{modifier}}</key> ショートカットのように動作します。各ショートカットごとに <key>Caps Lock</key> を押し直す必要があります。',
    restoreNote:
      'デモを試したあとは、次の作業に影響しないよう <key>Caps Lock</key> を元の状態に戻してください。ブラウザや OS 固有の不具合が残る場合があります。',
    text: `Caps Lock をこの入力欄で試してみてください。

Caps Lock + A で全選択。
Caps Lock + C でコピー。
Caps Lock + V で貼り付け。
Caps Lock + X で切り取り。

これはブラウザ内の簡単なデモですが、便利さは十分に感じられます。`,
  },
  guide: {
    kicker: '設定ガイド',
    title: 'OS 別の設定ガイド',
    intro: '使っている OS を選び、対応する手順に従ってください。',
    selectionPrompt: '対応するガイドを開くには、使っている OS を選んでください。',
    label: {
      references: '参考',
      steps: '手順',
      notes: '補足',
    },
    codeBlock: {
      install: {
        label: 'インストールスクリプト',
        copy: 'スクリプトをコピー',
        copied: 'コピーしました',
        download: 'スクリプトをダウンロード',
      },
      config: {
        label: '設定例',
        copy: '設定をコピー',
        copied: 'コピーしました',
        download: '設定をダウンロード',
      },
    },
    registryGenerator: {
      title: 'レジストリ再割り当てツール',
      sourceLabel: '元のキー位置',
      targetLabel: '割り当て先',
      remapPreviewLabel: '生成された再割り当てファイル',
      revertPreviewLabel: '元に戻すファイル',
      copyFileLabel: '内容をコピー',
      copiedFileLabel: 'コピーしました',
      downloadRemapLabel: '再割り当て用 .reg をダウンロード',
      downloadRevertLabel: '元に戻す .reg をダウンロード',
      noChangesLabel: '再割り当てファイルを生成するには、少なくとも1つ別の割り当て先を選んでください。',
      registryPathLabel:
        'レジストリのパス: HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout',
      resetLabel: '選択をリセット',
      key: {
        capslock: 'Caps Lock',
        leftCtrl: '左 Ctrl',
        rightCtrl: '右 Ctrl',
        leftAlt: '左 Alt',
        rightAlt: '右 Alt',
      },
    },
    windows: {
      title: 'Windows',
      summary:
        'Windows では PowerToys Keyboard Manager がもっとも簡単です。PowerToys を常駐させなくても <key>Caps Lock</key> をシステム全体で再割り当てしたい場合は、下のレジストリベースの Scancode Map を使えます。',
      methodChoiceIntro: 'Windows では、PowerToys かレジストリ方式のどちらかを選んでください。',
      methodSelectionPrompt: '詳細手順を見るには、上で使いたい Windows の方法を選んでください。',
      method: {
        prosLabel: 'メリット',
        consLabel: '注意点',
        powertoys: {
          title: 'PowerToys Keyboard Manager',
          summary:
            'GUI で操作したくて、あとから割り当てを調整する可能性があるなら、この方法がもっとも手軽です。',
          referenceLabel1: 'PowerToys のインストール',
          referenceLabel2: 'PowerToys Keyboard Manager',
          pro1: '設定までの流れが早く、あとから GUI 画面で簡単に編集できます。',
          pro2: '1つのキーを別のキーへ送るだけでなく、ショートカットへの再割り当てもできます。',
          pro3: '確認するとすぐに再割り当てが適用されます。',
          con1: 'PowerToys はバックグラウンドで動き続ける必要があり、止まると再割り当ても止まります。',
          con2: 'Keyboard Manager は Windows のサインイン画面やパスワード入力画面では動作しません。',
          con3: '修飾キーの再割り当ては、特定のジェスチャー、特殊キー、管理者権限のアプリと干渉することがあります。',
          steps: {
            step01: {
              title: '1. PowerToys をインストールする',
              body: 'PowerToys は Microsoft Store、GitHub のリリースページ、または winget からインストールできます。<powertoysInstallationGuide>インストールガイド</powertoysInstallationGuide>から、この3つの方法のどれでも選べます。',
            },
            step02: {
              title: '2. Keyboard Manager を開いて Remap a key を選ぶ',
              body: 'PowerToys の設定で <keyboardManagerGuide>Keyboard Manager</keyboardManagerGuide> を開き、Remap a key を選びます。そこに <key>Caps Lock</key> 用の新しい行を追加してください。',
            },
            step03: {
              title: '3. 送信先のキーを選ぶ',
              body: '<key>Caps Lock</key> を <key>Control</key>、<key>Escape</key>、<key>Alt</key>、または好みの別のキーに割り当てます。定番の生産性向上構成では、<key>Control</key> がもっとも一般的です。',
            },
            step04: {
              title: '4. 保存して新しい割り当てを試す',
              body: '変更を確定したら、よく使うアプリで動作を確認してください。サインイン前でも同じ割り当てを使いたいなら、レジストリ方式に切り替えるほうが合っています。',
            },
          },
          note1:
            '対象アプリが管理者権限で動いていて PowerToys が通常権限のままだと、そのアプリでは再割り当てが反映されないことがあります。PowerToys も昇格して起動すると解決する場合があります。',
          note2:
            '<key>Caps Lock</key> をときどき使いたいなら、完全に消してしまうのではなく、あまり使わない別のキーに残しておくと安心です。',
        },
        registry: {
          title: 'レジストリベースの Scancode Map',
          summary:
            'PowerToys に依存せず、サインイン画面でも有効なシステムレベルの再割り当てをしたいときに向いています。',
          referenceLabel1: 'Microsoft PDF: USB HID から PS/2 スキャンコードへの変換表',
          pro1: 'PowerToys に依存せず、システム全体で再割り当てできます。',
          pro2: 'バックグラウンドで常駐するユーティリティを動かし続ける必要がありません。',
          pro3: '再割り当て用ファイルと元に戻すファイルを保管しやすく、後から再現や復元がしやすいです。',
          con1: 'GUI 方式より手軽ではなく、完全に反映されるまでサインアウトか再起動が必要になることが多いです。',
          con2: 'ショートカットのような柔軟な割り当てよりも、物理キーの位置を入れ替える用途に向いています。',
          con3:
            '<key>Right Alt</key> の変更は、一部の非英語キーボード配列で多言語入力の挙動に影響することがあります。',
          steps: {
            step01: {
              title: '1. 下で入れ替えたいキーを選ぶ',
              body: '生成ツールを使って、各物理キーの位置が何を送るかを決めます。プレビューはすぐ更新されるので、ダウンロード前に生成結果を確認できます。',
            },
            step02: {
              title: '2. 再割り当て用と元に戻す用の両方をダウンロードする',
              body: '元に戻すファイルは、再割り当て用ファイルの隣に置いておきましょう。そうすれば、すぐに違和感があっても素早く戻せます。',
            },
            step03: {
              title: '3. 管理者の確認を通して再割り当て用 .reg を適用する',
              body: '生成された .reg ファイルを開き、Windows にレジストリへ取り込ませます。これはシステムのキーボードレイアウトを変更するため、管理者の確認が必要なのは正常です。',
            },
            step04: {
              title: '4. サインアウトまたは再起動してから確認する',
              body: 'Windows がキーボードレイアウトを再読み込みしたら、まずは普段使うアプリで新しい割り当てを試してください。サインイン画面まで反映したい場合は、その環境でも直接確認しておくと安心です。必要なら元に戻すファイルを実行して、もう一度再起動してください。',
            },
          },
          note1:
            '必要なら、ダウンロード前にプレビューを目で確認して、スキャンコードの組み合わせが意図どおりか確かめられます。',
          note2:
            '<key>Caps Lock</key> をときどき使いたいなら、完全に消してしまうのではなく、あまり使わない別のキーに残しておくと安心です。',
        },
      },
    },
    mac: {
      title: 'macOS',
      summary:
        'macOS では、Karabiner-Elements が <key>Caps Lock</key> を再割り当てしつつ、他のキーボード動作を安定して保てる定番の方法です。',
      referenceLabel1: 'Karabiner-Elements の公式サイト',
      referenceLabel2: 'Karabiner のインストールガイド',
      referenceLabel3: 'Karabiner の Simple Modifications',
      referenceLabel4: 'Karabiner に必要な macOS 設定',
      referenceLabel5: 'Karabiner のログイン前設定',
      referenceLabel6: 'Apple の入力ソース設定',
      steps: {
        step01: {
          title: '1. Karabiner-Elements をインストールして権限を許可する',
          body: 'まず <karabinerInstallationGuide>Karabiner-Elements</karabinerInstallationGuide> をインストールし、バックグラウンドサービス、入力監視権限、ドライバ拡張のすべてを許可してください。これらは必要な macOS 設定です。',
        },
        step02: {
          title: '2. Simple Modifications で <key>Caps Lock</key> を再割り当てする',
          body: 'Karabiner-Elements を開き、<karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide> を選び、編集したいキーボードを指定して、<key>Caps Lock</key> を <key>⌘ Left Command</key> に変更します。多くの macOS 環境では、これが実用的な初期選択です。作業の流れによって <key>Escape</key> や別のキーのほうが重要なら、そちらを選んでも構いません。',
        },
        step03: {
          title: '3. 必要ならログイン前でも同じ割り当てを使う',
          body: 'ログイン前のパスワード画面でも同じ割り当てを使いたいなら、Karabiner Settings の Misc タブを開き、“Copy the current configuration to the system default configuration.” を実行してください。これで同じ割り当てをログイン前にも使えます。',
        },
        step04: {
          title: '4. すでに言語切り替えに使っている場合だけ続ける',
          body: '次の手順は、<key>Caps Lock</key> を入力ソース切り替えに使っている多言語環境向けです。入力ソース切り替えを別のキーに移せば、<key>Caps Lock</key> を再割り当てしたあとでも独立した言語切り替えキーを残せますし、<key>Caps Lock</key> を短く押して切り替えるときに起きやすい不安定さも減らせます。Mac で <key>Caps Lock</key> がその役割を担っていないなら、基本の再割り当てだけで十分なので、この先は飛ばして構いません。',
          substeps: {
            step04_1: {
              title: '4-1. 予備の右側修飾キーを1つ選ぶ',
              body: 'まず、言語切り替え用の右側修飾キーを1つ選びます。一般的には <key>⌘ Right Command</key> が無難です。レイアウト上そのキーがまだ重要でないなら、<key>⌥ Right Option</key> を使っても構いません。',
            },
            step04_2: {
              title: '4-2. その右側キーを Karabiner で <key>F18</key> に割り当てる',
              body: '<karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide> で、前の手順で選んだキーに応じて <key>⌘ Right Command</key> -> <key>F18</key> か <key>⌥ Right Option</key> -> <key>F18</key> を追加します。これで <key>Caps Lock</key> を別用途に変えながら、キーボード右側に専用の言語切り替えキーを残せます。',
            },
            step04_3: {
              title: '4-3. macOS で <key>F18</key> を入力ソース切り替えに割り当てる',
              body: 'Apple メニュー > システム設定 > キーボード > キーボードショートカット > 入力ソース を開き、“入力メニューで次のソースを選択” に <key>F18</key> を割り当ててください。これで <key>Caps Lock</key> を別の役割に変えたあとでも、信頼できる言語切り替えキーを再び用意できます。ここでは実用例として <key>F18</key> を使っています。<key>F1</key> から <key>F12</key> は内蔵のシステム機能に結びついているため、入力ソース切り替えにはそれより大きい番号のファンクションキーのほうが扱いやすいことがあります。その中でも <key>F18</key> は無難に使えるキーの一つです。',
            },
          },
        },
      },
      note1:
        '変更を保存する前にキー名を確認したいなら、Karabiner の EventViewer で macOS と Karabiner に見えている入力を確認できます。',
      note2:
        'macOS では <key>⌘ Command</key> キーを入力ソース切り替え用に割り当てることはできません。',
      note3:
        '<key>Caps Lock</key> をときどき使いたいなら、完全に消してしまうのではなく、あまり使わない別のキーに残しておくと安心です。',
    },
    linux: {
      title: 'Linux',
      summary:
        'Linux では、特定のデスクトップ環境に依存せず、システム全体で <key>Caps Lock</key> を <key>Control</key> や <key>Escape</key> に再割り当てできる keyd が相性のよい選択です。',
      referenceLabel1: 'keyd のリポジトリ',
      referenceLabel2: 'keyd README のクイックスタート',
      referenceLabel3: 'keyd のリリース',
      installScript: `git clone https://github.com/rvaiya/keyd
cd keyd
make
sudo make install
sudo systemctl enable --now keyd`,
      installFilename: 'keyd-setup.sh',
      configSnippet: `[ids]
*

[main]
# Caps Lock をタップすると Escape、長押しすると Control になります。
capslock = overload(control, esc)

# 任意: Escape を Caps Lock として設定することもできます。
esc = capslock`,
      configFilename: 'default.conf',
      steps: {
        step01: {
          title: '1. keyd をインストールする',
          body: 'まず keyd をインストールします。ソースインストールの流れは、git clone、make、sudo make install、sudo systemctl enable --now keyd の順です。タグ付きの安定版を使いたいなら、リリースページから始めることもできます。',
        },
        step02: {
          title: '2. /etc/keyd/default.conf を作成する',
          body: '/etc/keyd/default.conf を作成し、まずはシンプルな overload マッピングから始めます。この設定で、<key>Caps Lock</key> はタップすると <key>Escape</key>、長押しすると <key>Control</key> になります。',
        },
        step03: {
          title: '3. デーモンを再読み込みする',
          body: 'ファイルを保存したら sudo keyd reload を実行して、新しい割り当てを反映します。うまく適用されない場合は、journalctl -eu keyd でサービスログを確認してください。',
        },
        step04: {
          title: '4. キーボードが特殊なときはキー名を確認する',
          body: 'キーボード配列が特殊だったり、キー名がはっきりしない場合は、keyd monitor を使って keyd が受け取るキー名を確認してください。元のデバイスイベントを確認したいなら、先に keyd を停止してからもう一度コマンドを実行します。',
        },
        step05: {
          title: '5. 緊急停止の手順を覚えておく',
          body: '設定を誤ってすぐに復旧したいときは、<key>Backspace</key> + <key>Escape</key> + <key>Enter</key> で keyd を終了できます。',
        },
      },
      note1:
        'master は開発ブランチとして扱い、タグ付きリリースを安定版として使ってください。',
      note2:
        'Debian 13 以降と Ubuntu 25.04 以降では apt install keyd も使えますが、上のソースインストールはもっとも移植性が高い方法です。',
      note3:
        '<key>Caps Lock</key> をときどき使いたいなら、完全に消してしまうのではなく、あまり使わない別のキーに残しておくと安心です。',
    },
  },
} as const satisfies TranslationMessages

export const jaJpMessages = jaJpTranslation
