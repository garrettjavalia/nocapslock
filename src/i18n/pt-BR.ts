import type { TranslationMessages } from './schema'

export const ptBrTranslation = {
  linkCopy: {
    copy: 'Copiar link',
    copied: 'Link copiado',
  },
  meta: {
    description:
      'Use o Caps Lock com mais conforto.',
    keywords:
      'remapeamento do caps lock, caps lock para control, caps lock para command, caps lock para escape, produtividade no teclado, karabiner, keyd, powertoys',
  },
  chrome: {
    github: 'GitHub',
    language: 'Idioma',
    localeRootLink: 'Página inicial deste idioma',
  },
  theme: {
    light: 'Modo claro',
    dark: 'Modo escuro',
  },
  hero: {
    title: 'Chega de Caps Lock!',
    lead:
      'O Caps Lock ocupa um dos lugares mais valiosos do seu teclado. Se você o remapear para uma tecla de atalho que realmente usa, digitar fica muito mais confortável.',
  },
  preview: {
    kicker: 'Experimente o remapeamento',
    title: 'A mesma tecla pode ter uma função muito melhor',
    captionTemplate: 'No <deviceSelect/>, o padrão mais útil é <key>{{recommendedKey}}</key>.',
    device: {
      mac: 'macOS',
      android: 'Android',
      ios: 'iOS',
      windows: 'Windows',
      linux: 'Linux',
      unix: 'Unix',
      other: 'esta máquina',
    },
    key: {
      capsLock: 'Caps Lock',
      command: 'Command',
      control: 'Control',
      escape: 'Escape',
    },
  },
  demo: {
    kicker: 'Teste você mesmo',
    title: 'Teste usar o Caps Lock como um auxiliar de atalhos',
    bodyTemplate:
      'Dentro desta área de texto, <key>Caps Lock</key> funciona como uma tecla modificadora virtual <key>{{modifier}}</key> para <key>A</key>, <key>C</key>, <key>V</key> e <key>X</key>. Você pode testar a sensação antes de mudar as configurações do sistema. As ações da área de transferência podem pedir permissão do navegador na primeira vez.',
    virtualModifierPrefix: 'virtual',
    status: {
      prefix: 'Status',
      idle: 'Aguardando',
      armed: 'Modificador virtual ativo',
    },
    instructions:
      'Pressione <key>Caps Lock</key> uma vez e, em até 1 segundo, pressione <key>A</key>, <key>C</key>, <key>V</key> ou <key>X</key>. Nesta demo, a próxima tecla compatível age como um atalho com <key>{{modifier}}</key>. Você precisa pressionar <key>Caps Lock</key> novamente para cada atalho.',
    restoreNote:
      'Depois de testar a demo, volte o <key>Caps Lock</key> ao estado normal para ele não atrapalhar a próxima tarefa. Ainda pode haver bugs específicos do navegador e do sistema operacional.',
    text: `Experimente esta caixa com o Caps Lock.

Caps Lock + A seleciona tudo.
Caps Lock + C copia.
Caps Lock + V cola.
Caps Lock + X recorta.

Esta é só uma demo no navegador, mas já dá para sentir a praticidade.`,
  },
  guide: {
    kicker: 'Guia de configuração',
    title: 'Guias de configuração por sistema operacional',
    intro: 'Escolha o sistema operacional que você usa e siga os passos correspondentes.',
    selectionPrompt: 'Escolha seu sistema operacional para abrir o guia correspondente.',
    label: {
      references: 'Referências',
      steps: 'Passo a passo',
      notes: 'Notas',
    },
    codeBlock: {
      install: {
        label: 'Script de instalação',
        copy: 'Copiar script',
        copied: 'Copiado',
        download: 'Baixar script',
      },
      config: {
        label: 'Exemplo de configuração',
        copy: 'Copiar configuração',
        copied: 'Copiado',
        download: 'Baixar configuração',
      },
    },
    registryGenerator: {
      title: 'Gerador de arquivo do Registro',
      sourceLabel: 'Tecla física',
      targetLabel: 'Tecla de destino',
      remapPreviewLabel: 'Arquivo .reg gerado',
      revertPreviewLabel: 'Arquivo de reversão',
      copyFileLabel: 'Copiar conteúdo',
      copiedFileLabel: 'Copiado',
      downloadRemapLabel: 'Baixar .reg de remapeamento',
      downloadRevertLabel: 'Baixar .reg de reversão',
      noChangesLabel: 'Escolha ao menos uma troca para gerar o arquivo.',
      registryPathLabel:
        'Caminho do Registro: HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout',
      resetLabel: 'Redefinir seleções',
      key: {
        capslock: 'Caps Lock',
        leftCtrl: 'Ctrl esquerdo',
        rightCtrl: 'Ctrl direito',
        leftAlt: 'Alt esquerdo',
        rightAlt: 'Alt direito',
      },
    },
    windows: {
      title: 'Windows',
      summary:
        'No Windows, o caminho mais simples é o PowerToys Keyboard Manager. Se você quiser um remapeamento de sistema para <key>Caps Lock</key> que não dependa do PowerToys rodando em segundo plano, pode usar a abordagem Scancode Map baseada no Registro abaixo.',
      methodChoiceIntro: 'No Windows, escolha PowerToys ou Registro.',
      methodSelectionPrompt: 'Escolha acima o método do Windows que você quer ver.',
      method: {
        prosLabel: 'Vantagens',
        consLabel: 'Pontos a considerar',
        powertoys: {
          title: 'PowerToys Keyboard Manager',
          summary:
            'Este é o caminho mais fácil se você quer uma interface gráfica e pretende ajustar os mapeamentos mais tarde.',
          referenceLabel1: 'Instalação do PowerToys',
          referenceLabel2: 'PowerToys Keyboard Manager',
          pro1: 'É o caminho mais rápido para configurar e fácil de editar depois em uma tela gráfica.',
          pro2: 'Ele pode remapear uma tecla para outra tecla ou até para um atalho, não só para outra posição física.',
          pro3: 'A Microsoft documenta que os remapeamentos entram em vigor imediatamente depois da confirmação.',
          con1: 'O PowerToys precisa continuar rodando em segundo plano ou o remapeamento deixa de valer.',
          con2: 'A Microsoft documenta que o Keyboard Manager não funciona na tela de entrada do Windows nem em outras solicitações de senha.',
          con3: 'Remapeamentos de teclas modificadoras ainda podem interferir em alguns gestos, teclas especiais ou apps com privilégio elevado.',
          steps: {
            step01: {
              title: '1. Instale o PowerToys',
              body: 'Instale o PowerToys pela Microsoft Store, pela página de releases no GitHub ou com winget. A documentação oficial da Microsoft descreve as três opções no <powertoysInstallationGuide>guia de instalação</powertoysInstallationGuide>.',
            },
            step02: {
              title: '2. Abra o Keyboard Manager e escolha Remap a key',
              body: 'Nas configurações do PowerToys, abra o <keyboardManagerGuide>Keyboard Manager</keyboardManagerGuide> e selecione Remap a key. Depois adicione uma nova linha para <key>Caps Lock</key>.',
            },
            step03: {
              title: '3. Escolha a tecla de destino desejada',
              body: 'Mapeie <key>Caps Lock</key> para <key>Control</key>, <key>Escape</key>, <key>Alt</key> ou qualquer outra tecla de sua preferência. Se quiser a configuração clássica de produtividade, <key>Control</key> é o destino mais comum.',
            },
            step04: {
              title: '4. Salve e teste o novo mapeamento',
              body: 'Confirme a alteração e teste nos apps que você mais usa. Se depois você quiser que o remapeamento funcione também antes do login, mude para a rota do Registro.',
            },
          },
          note1:
            'Se um app de destino estiver rodando como administrador e o PowerToys não estiver, o remapeamento pode não valer ali até o PowerToys também ser executado com elevação.',
          note2:
            'Se você ainda precisar do <key>Caps Lock</key> às vezes, mantenha-o em outra tecla que você quase não usa em vez de removê-lo completamente.',
        },
        registry: {
          title: 'Scancode Map baseada no Registro',
          summary:
            'Esta rota é melhor quando você quer um remapeamento em nível de sistema que funcione sem o PowerToys e também continue ativo na tela de login.',
          referenceLabel1: 'PDF da Microsoft: Tabela de tradução de USB HID para PS/2',
          pro1: 'Ela fornece um remapeamento em todo o sistema sem depender do PowerToys.',
          pro2: 'Não depende de manter um utilitário em segundo plano sempre aberto.',
          pro3: 'Os arquivos de remapeamento e reversão são fáceis de arquivar, então você pode reproduzir ou desfazer a configuração depois.',
          con1: 'É menos conveniente do que uma interface gráfica e, em geral, precisa de logout ou reinicialização para aplicar tudo.',
          con2: 'Ela só remapeia posições físicas das teclas, então é menos flexível que o PowerToys para remapeamentos no estilo de atalho.',
          con3:
            'Alterar o <key>Alt direito</key> pode afetar o comportamento de entrada multilíngue em alguns layouts de teclado não ingleses.',
          steps: {
            step01: {
              title: '1. Escolha abaixo as trocas de teclas que você quer',
              body: 'Use o gerador para decidir o que cada posição física deve enviar. A prévia é atualizada imediatamente, então você pode inspecionar o arquivo gerado antes de baixá-lo.',
            },
            step02: {
              title: '2. Baixe os arquivos de remapeamento e reversão',
              body: 'Guarde o arquivo de reversão junto do arquivo de remapeamento. Assim você consegue desfazer a alteração rapidamente, mesmo se o novo layout parecer errado de imediato.',
            },
            step03: {
              title: '3. Aplique o arquivo .reg com aprovação de administrador',
              body: 'Abra o arquivo .reg gerado e permita que o Windows o mescle ao Registro. Como isso altera o layout de teclado do sistema, a confirmação de administrador é esperada.',
            },
            step04: {
              title: '4. Saia da conta ou reinicie o Windows e teste',
              body: 'Depois que o Windows recarregar o layout do teclado, teste as novas posições primeiro nos apps que você usa normalmente. Se também importar para você o caminho de login, teste isso diretamente no seu ambiente. Se precisar, execute o arquivo de reversão e reinicie de novo.',
            },
          },
          note1:
            'Revise a prévia gerada antes de baixar se quiser conferir manualmente os pares de scancode.',
          note2:
            'Se você ainda precisar do <key>Caps Lock</key> às vezes, mantenha-o em outra tecla que você quase não usa em vez de removê-lo completamente.',
        },
      },
    },
    mac: {
      title: 'macOS',
      summary:
        'No macOS, o Karabiner-Elements é a forma padrão de remapear o <key>Caps Lock</key> e manter o resto do comportamento do teclado previsível.',
      referenceLabel1: 'Página inicial do Karabiner-Elements',
      referenceLabel2: 'Guia de instalação do Karabiner',
      referenceLabel3: 'Simple Modifications do Karabiner',
      referenceLabel4: 'Configurações obrigatórias do macOS no Karabiner',
      referenceLabel5: 'Configuração do Karabiner antes do login',
      referenceLabel6: 'Configurações de Fontes de Entrada da Apple',
      steps: {
        step01: {
          title: '1. Instale o Karabiner-Elements e conclua as solicitações de permissão',
          body: 'Instale o <karabinerInstallationGuide>Karabiner-Elements</karabinerInstallationGuide> primeiro e depois confirme que o serviço em segundo plano, a permissão de Input Monitoring e a extensão do driver estão liberados. <karabinerRequiredSettingsGuide>A documentação oficial do Karabiner</karabinerRequiredSettingsGuide> chama esses itens de configurações obrigatórias do macOS.',
        },
        step02: {
          title: '2. Remapeie o <key>Caps Lock</key> em Simple Modifications',
          body: 'Abra o Karabiner-Elements, escolha <karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide>, selecione o teclado que você quer editar e troque <key>Caps Lock</key> por <key>Left Control</key>. Se preferir <key>Escape</key>, você também pode escolher essa opção aqui.',
        },
        step03: {
          title: '3. Opcional: faça o mesmo mapeamento funcionar antes do login',
          body: 'Se você quiser o mesmo mapeamento na tela de senha antes do login, abra a aba Misc nas configurações do Karabiner e use “Copy the current configuration to the system default configuration.” <karabinerBeforeLoginGuide>A documentação oficial do Karabiner</karabinerBeforeLoginGuide> descreve isso para uso antes do login.',
        },
        step04: {
          title: '4. Opcional: continue apenas se o <key>Caps Lock</key> já for sua tecla de troca de idioma',
          body: 'Os próximos passos são apenas para configurações multilíngues do macOS que já dependem do <key>Caps Lock</key> para alternar a fonte de entrada. Mover a troca de fonte de entrada para outra tecla permite manter uma tecla separada de troca de idioma mesmo depois de remapear o <key>Caps Lock</key>, e também pode reduzir pequenas falhas que aparecem ao depender de um toque curto no <key>Caps Lock</key> para trocar de modo. Se o <key>Caps Lock</key> não faz esse papel no seu Mac, você pode parar depois do remapeamento básico e pular o restante desta seção.',
          substeps: {
            step04_1: {
              title: '4-1. Escolha uma tecla modificadora direita sobrando',
              body: 'Primeiro escolha uma tecla modificadora direita sobrando para a troca de idioma. Uma escolha comum é <key>Right Command</key> -> <key>F18</key>. Você também pode usar <key>Right Option</key> -> <key>F18</key>, desde que essa tecla não seja importante no seu layout.',
            },
            step04_2: {
              title: '4-2. Mapeie essa tecla direita para <key>F18</key> no Karabiner',
              body: 'Em <karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide>, adicione <key>Right Command</key> -> <key>F18</key> ou <key>Right Option</key> -> <key>F18</key>, dependendo da tecla escolhida no passo anterior. Isso libera o <key>Caps Lock</key> para remapeamento e ainda mantém uma tecla dedicada de troca de idioma do lado direito do teclado.',
            },
            step04_3: {
              title: '4-3. Atribua <key>F18</key> à troca de fonte de entrada no macOS',
              body: 'Abra Menu Apple > Ajustes do Sistema > Teclado > Atalhos de Teclado > Fontes de Entrada e atribua <key>F18</key> a “Selecionar a próxima fonte no menu de entrada”. Isso recria uma tecla confiável de troca de idioma depois que o <key>Caps Lock</key> foi reaproveitado. Aqui, <key>F18</key> é usado como exemplo prático. <appleInputSourcesGuide>A Apple documenta que</appleInputSourcesGuide> <key>F1</key> a <key>F12</key> estão ligados a recursos internos do sistema, então uma tecla de função com número mais alto costuma ser mais fácil de usar para troca de fonte de entrada. Na prática, <key>F18</key> costuma ser uma escolha segura porque tende a não colidir com essas funções internas.',
            },
          },
        },
      },
      note1:
        'Se você quiser conferir os nomes das teclas antes de salvar as mudanças, o EventViewer é a ferramenta oficial do Karabiner para ver exatamente o que o macOS e o Karabiner recebem de cada tecla.',
      note2:
        'A Apple também documenta uma opção nativa para usar o <key>Caps Lock</key> para alternar para a última fonte de entrada latina usada e voltar dela. Mas, se você quer manter o remapeamento do <key>Caps Lock</key>, usar uma tecla separada de troca de idioma, como <key>Right Command</key> -> <key>F18</key>, é mais flexível.',
      note3:
        'Se você ainda precisar do <key>Caps Lock</key> às vezes, mantenha-o em outra tecla que você quase não usa em vez de removê-lo completamente.',
    },
    linux: {
      title: 'Linux',
      summary:
        'No Linux, o keyd é uma boa solução em nível de sistema para remapear o <key>Caps Lock</key> para <key>Control</key> ou <key>Escape</key> sem depender de um ambiente gráfico específico.',
      referenceLabel1: 'Repositório do keyd',
      referenceLabel2: 'Guia rápido do README do keyd',
      referenceLabel3: 'Releases do keyd',
      installScript: `git clone https://github.com/rvaiya/keyd
cd keyd
make
sudo make install
sudo systemctl enable --now keyd`,
      installFilename: 'keyd-setup.sh',
      configSnippet: `[ids]
*

[main]
# Faz o Caps Lock agir como Escape ao tocar e como Control ao manter pressionado.
capslock = overload(control, esc)

# Opcional: coloca o Caps Lock no Escape também.
esc = capslock`,
      configFilename: 'default.conf',
      steps: {
        step01: {
          title: '1. Instale o keyd',
          body: 'Instale o keyd primeiro. O projeto oficial documenta um fluxo de instalação a partir do código-fonte com git clone, make, sudo make install e sudo systemctl enable --now keyd. Se você preferir uma versão marcada, pode começar pela página oficial de releases.',
        },
        step02: {
          title: '2. Crie /etc/keyd/default.conf',
          body: 'Crie /etc/keyd/default.conf e comece com um mapeamento overload simples. Essa configuração faz o <key>Caps Lock</key> enviar <key>Escape</key> ao tocar e <key>Control</key> ao manter pressionado.',
        },
        step03: {
          title: '3. Recarregue o daemon',
          body: 'Depois de salvar o arquivo, execute sudo keyd reload para que o novo mapeamento entre em vigor. Se algo não aplicar corretamente, verifique o log do serviço com journalctl -eu keyd.',
        },
        step04: {
          title: '4. Confira os nomes das teclas quando o teclado for incomum',
          body: 'Se o layout do seu teclado for incomum ou o nome de alguma tecla estiver confuso, use keyd monitor para ver os nomes que o keyd recebe. Se quiser verificar os eventos originais do dispositivo, pare o keyd primeiro e rode o comando novamente.',
        },
        step05: {
          title: '5. Lembre-se da sequência de parada de emergência',
          body: 'Se você fizer uma configuração ruim e precisar se recuperar rápido, a documentação oficial informa que <key>Backspace</key> + <key>Escape</key> + <key>Enter</key> deve encerrar o keyd.',
        },
      },
      note1:
        'O README upstream diz que a branch master é a de desenvolvimento, enquanto as releases marcadas devem ser consideradas estáveis.',
      note2:
        'A documentação também informa que Debian 13+ e Ubuntu 25.04+ suportam apt install keyd, mas a instalação a partir do código acima é a opção mais portátil.',
      note3:
        'Se você ainda precisar do <key>Caps Lock</key> às vezes, mantenha-o em outra tecla que você quase não usa em vez de removê-lo completamente.',
    },
  },
} as const satisfies TranslationMessages

export const ptBrMessages = ptBrTranslation
