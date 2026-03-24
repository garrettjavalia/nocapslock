import type { TranslationMessages } from './schema'

export const esEsTranslation = {
  linkCopy: {
    copy: 'Copiar enlace',
    copied: 'Enlace copiado',
    share: 'Compartir enlace',
  },
  meta: {
    description:
      'Usa Caps Lock de forma más cómoda.',
    keywords:
      'reasignar caps lock, caps lock a control, caps lock a command, caps lock a escape, productividad con teclado, karabiner, keyd, powertoys',
  },
  chrome: {
    github: 'GitHub',
    language: 'Idioma',
    localeRootLink: 'Inicio de este idioma',
  },
  theme: {
    light: 'Modo claro',
    dark: 'Modo oscuro',
  },
  hero: {
    title: '¡No más Caps Lock!',
    lead:
      'Caps Lock ocupa uno de los lugares más valiosos del teclado. Si lo reasignas a una tecla de acceso rápido que realmente uses, escribir se siente mucho más cómodo.',
  },
  preview: {
    kicker: 'Prueba a reasignarlo',
    title: 'La misma tecla puede hacer un trabajo mucho mejor',
    captionTemplate: 'En <deviceSelect/>, lo más útil suele ser <key>{{recommendedKey}}</key>.',
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
    kicker: 'Pruébalo tú mismo',
    title: 'Prueba a usar Caps Lock como una ayuda para atajos',
    bodyTemplate:
      'En este cuadro, <key>Caps Lock</key> actúa como una tecla <key>{{modifier}}</key> virtual para <key>A</key>, <key>C</key>, <key>V</key> y <key>X</key>. Puedes probarlo antes de cambiar la configuración del sistema. El portapapeles puede pedir permiso del navegador la primera vez.',
    virtualModifierPrefix: 'virtual',
    status: {
      prefix: 'Estado',
      idle: 'Esperando',
      armed: 'Modificador virtual activo',
    },
    instructions:
      'Pulsa <key>Caps Lock</key> una vez y luego, en 1 segundo, pulsa <key>A</key>, <key>C</key>, <key>V</key> o <key>X</key>. En esta demo, la siguiente tecla compatible actúa como un atajo de <key>{{modifier}}</key>. Tienes que pulsar <key>Caps Lock</key> otra vez para cada atajo.',
    restoreNote:
      'Después de probar la demo, devuelve <key>Caps Lock</key> a su estado normal para que no afecte tu siguiente tarea. Aun así, puede haber errores del navegador o del sistema operativo.',
    text: `Prueba este cuadro con Caps Lock.

Usa Caps Lock + A para seleccionar todo.
Usa Caps Lock + C para copiar.
Usa Caps Lock + V para pegar.
Usa Caps Lock + X para cortar.

Esto es solo una demo en el navegador, pero basta para notar la comodidad.`,
  },
  guide: {
    kicker: 'Guía de configuración',
    title: 'Guías de configuración por sistema operativo',
    intro: 'Elige el sistema operativo que usas y sigue los pasos.',
    selectionPrompt: 'Elige un sistema operativo para ver la guía.',
    label: {
      references: 'Referencias',
      steps: 'Paso a paso',
      notes: 'Notas',
    },
    codeBlock: {
      install: {
        label: 'Script de instalación',
        copy: 'Copiar script',
        copied: 'Copiado',
        download: 'Descargar script',
      },
      config: {
        label: 'Configuración de ejemplo',
        copy: 'Copiar configuración',
        copied: 'Copiado',
        download: 'Descargar configuración',
      },
    },
    registryGenerator: {
      title: 'Generador de reasignación del Registro',
      sourceLabel: 'Tecla física',
      targetLabel: 'Tecla destino',
      remapPreviewLabel: 'Archivo .reg generado',
      revertPreviewLabel: 'Archivo de reversión',
      copyFileLabel: 'Copiar contenido',
      copiedFileLabel: 'Copiado',
      downloadRemapLabel: 'Descargar reasignación',
      downloadRevertLabel: 'Descargar reversión',
      noChangesLabel: 'Elige al menos un destino diferente para generar un archivo de reasignación.',
      registryPathLabel:
        'Ruta del Registro: HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout',
      resetLabel: 'Restablecer',
      key: {
        capslock: 'Caps Lock',
        leftCtrl: 'Ctrl izquierdo',
        rightCtrl: 'Ctrl derecho',
        leftAlt: 'Alt izquierdo',
        rightAlt: 'Alt derecho',
      },
    },
    windows: {
      title: 'Windows',
      summary:
        'En Windows, la opción más sencilla es PowerToys Keyboard Manager. Si quieres una reasignación de <key>Caps Lock</key> a nivel de sistema que no dependa de PowerToys en segundo plano, puedes usar la ruta Scancode Map basada en el Registro que se muestra abajo.',
      methodChoiceIntro: 'En Windows, elige PowerToys o el Registro.',
      methodSelectionPrompt: 'Elige arriba el método de Windows que quieras ver.',
      method: {
        prosLabel: 'Ventajas',
        consLabel: 'Aspectos a tener en cuenta',
        powertoys: {
          title: 'PowerToys Keyboard Manager',
          summary:
            'Es la opción más sencilla si quieres interfaz gráfica y piensas ajustar la reasignación más adelante.',
          referenceLabel1: 'Instalación de PowerToys',
          referenceLabel2: 'PowerToys Keyboard Manager',
          pro1: 'Es la configuración más rápida y luego es fácil de ajustar desde la interfaz gráfica.',
          pro2: 'Puede reasignar una tecla a otra tecla o incluso a un atajo, no solo a otra posición física.',
          pro3: 'Las reasignaciones se aplican inmediatamente después de confirmarlas.',
          con1: 'PowerToys tiene que seguir ejecutándose en segundo plano o la reasignación dejará de funcionar.',
          con2: 'Keyboard Manager no funciona en la pantalla de inicio de sesión de Windows ni en otros avisos de contraseña.',
          con3: 'Las reasignaciones de teclas modificadoras todavía pueden interferir con algunos gestos, teclas especiales o apps elevadas.',
          steps: {
            step01: {
              title: '1. Instala PowerToys',
              body: 'Instala PowerToys desde Microsoft Store, la página de lanzamientos de GitHub o winget. Puedes usar cualquiera de las tres rutas de la <powertoysInstallationGuide>guía de instalación</powertoysInstallationGuide>.',
            },
            step02: {
              title: '2. Abre Keyboard Manager y elige Remap a key',
          body: 'En la configuración de PowerToys, abre <keyboardManagerGuide>Keyboard Manager</keyboardManagerGuide> y selecciona Remap a key. Luego añade una nueva fila para <key>Caps Lock</key>.',
            },
            step03: {
              title: '3. Elige la tecla destino',
              body: 'Mapea <key>Caps Lock</key> a <key>Control</key>, <key>Escape</key>, <key>Alt</key> o cualquier otra tecla que prefieras. Si quieres la configuración clásica de productividad, <key>Control</key> es el destino más habitual.',
            },
            step04: {
              title: '4. Guarda y prueba la nueva asignación',
              body: 'Confirma el cambio y pruébalo en las apps que más usas. Si después decides que también quieres que la reasignación funcione antes de iniciar sesión, cambia a la ruta del Registro.',
            },
          },
          note1:
            'Si una app de destino se está ejecutando como administrador y PowerToys no, la reasignación puede no aplicarse allí hasta que PowerToys también se ejecute con elevación.',
          note2:
            'Si aún necesitas <key>Caps Lock</key> a veces, asígnalo a otra tecla que uses poco en lugar de eliminarlo por completo.',
        },
        registry: {
          title: 'Scancode Map basado en el Registro',
          summary:
            'Es mejor si quieres una reasignación de sistema que funcione sin PowerToys y siga activa incluso en la pantalla de inicio de sesión.',
          referenceLabel1: 'PDF de Microsoft: USB HID to PS/2 Scan Code Translation Table',
          pro1: 'Te da una reasignación de todo el sistema sin depender de PowerToys.',
          pro2: 'No depende de mantener una utilidad en segundo plano ejecutándose.',
          pro3: 'Los archivos de reasignación y reversión son fáciles de archivar para poder reproducir o deshacer la configuración más adelante.',
          con1: 'Es menos cómodo que una interfaz gráfica y normalmente requiere cerrar sesión o reiniciar antes de aplicarse por completo.',
          con2: 'Solo reasigna posiciones físicas de teclas, así que es menos flexible que PowerToys para reasignaciones tipo atajo.',
          con3:
            'Cambiar <key>Right Alt</key> puede afectar al comportamiento de entrada multilingüe en algunos teclados no ingleses.',
          steps: {
            step01: {
              title: '1. Elige abajo los intercambios de teclas que quieras',
              body: 'Usa el generador para decidir qué debe enviar cada posición física. La vista previa se actualiza al instante para que puedas inspeccionar el archivo generado antes de descargarlo.',
            },
            step02: {
              title: '2. Descarga tanto el archivo de reasignación como el de reversión',
              body: 'Guarda el archivo de reversión junto al de reasignación. Así podrás deshacer el cambio rápidamente incluso si la nueva disposición no te convence de inmediato.',
            },
            step03: {
              title: '3. Aplica el archivo .reg de reasignación con aprobación de administrador',
              body: 'Abre el archivo .reg generado y permite que Windows lo combine con el Registro. Como esto cambia la distribución del teclado del sistema, es normal que pida confirmación de administrador.',
            },
            step04: {
              title: '4. Cierra sesión o reinicia Windows y luego pruébalo',
              body: 'Después de que Windows vuelva a cargar la distribución del teclado, prueba primero las nuevas posiciones en tus apps habituales. Si también te importa la ruta de inicio de sesión, compruébala directamente en tu entorno. Si hace falta, ejecuta el archivo de reversión y reinicia otra vez.',
            },
          },
          note1:
            'Revisa la vista previa generada antes de descargarla si quieres comprobar a mano los pares de códigos de escaneo.',
          note2:
            'Si aún necesitas <key>Caps Lock</key> a veces, asígnalo a otra tecla que uses poco en lugar de eliminarlo por completo.',
        },
      },
    },
    mac: {
      title: 'macOS',
      summary:
        'En macOS, Karabiner-Elements es la forma estándar de reasignar <key>Caps Lock</key> mientras mantienes predecible el resto del comportamiento del teclado.',
      referenceLabel1: 'Página principal de Karabiner-Elements',
      referenceLabel2: 'Guía de instalación de Karabiner',
      referenceLabel3: 'Modificaciones simples de Karabiner',
      referenceLabel4: 'Ajustes de macOS requeridos por Karabiner',
      referenceLabel5: 'Configuración de Karabiner antes de iniciar sesión',
      referenceLabel6: 'Ajustes de fuentes de entrada de Apple',
      steps: {
        step01: {
          title: '1. Instala Karabiner-Elements y completa los permisos',
          body: 'Instala primero <karabinerInstallationGuide>Karabiner-Elements</karabinerInstallationGuide> y luego asegúrate de permitir el servicio en segundo plano, el permiso de Input Monitoring y la extensión del controlador. Esos son los ajustes necesarios de macOS.',
        },
        step02: {
          title: '2. Reasigna <key>Caps Lock</key> en Simple Modifications',
          body: 'Abre Karabiner-Elements, elige <karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide>, selecciona el teclado que quieras editar y cambia <key>Caps Lock</key> a <key>Left Control</key>. Si prefieres <key>Escape</key>, también puedes elegirlo aquí.',
        },
        step03: {
          title: '3. Opcional: aplica la misma asignación antes de iniciar sesión',
          body: 'Si quieres la misma asignación en la pantalla de contraseña antes de iniciar sesión, abre la pestaña Misc en la configuración de Karabiner y usa “Copy the current configuration to the system default configuration.” Así la misma asignación también funciona antes de iniciar sesión.',
        },
        step04: {
          title: '4. Opcional: sigue solo si <key>Caps Lock</key> ya cambia de idioma',
          body: 'Estos pasos son solo para configuraciones multilingües que ya dependen de <key>Caps Lock</key> para cambiar de fuente de entrada. Mover ese cambio a otra tecla te permite mantener una tecla separada para cambiar de idioma incluso después de reasignar <key>Caps Lock</key>, y también reduce los fallos ocasionales de confiar en una pulsación corta para cambiar de modo. Si <key>Caps Lock</key> no cumple ese papel en tu Mac, basta con la reasignación básica.',
          substeps: {
            step04_1: {
              title: '4-1. Elige un modificador derecho libre',
              body: 'Primero elige un modificador derecho libre para cambiar de idioma. Una opción habitual es <key>Right Command</key> -> <key>F18</key>. También puedes usar <key>Right Option</key> -> <key>F18</key>, siempre que esa tecla no sea importante en tu distribución.',
            },
            step04_2: {
              title: '4-2. Asígnale <key>F18</key> en Karabiner',
              body: 'En <karabinerSimpleModificationsGuide>Simple Modifications</karabinerSimpleModificationsGuide>, añade <key>Right Command</key> -> <key>F18</key> o <key>Right Option</key> -> <key>F18</key>, según la tecla que elegiste antes. Así liberas <key>Caps Lock</key> para reasignarlo y mantienes una tecla dedicada para cambiar de idioma a la derecha del teclado.',
            },
            step04_3: {
              title: '4-3. Asigna <key>F18</key> al cambio de idioma en macOS',
              body: 'Abre el menú Apple > Ajustes del Sistema > Teclado > Atajos de teclado > Fuentes de entrada y asigna <key>F18</key> a “Seleccionar la siguiente fuente en el menú de entrada.” Así recreas una tecla fiable para cambiar de idioma después de reutilizar <key>Caps Lock</key>. Aquí se usa <key>F18</key> como ejemplo práctico. Como <key>F1</key> a <key>F12</key> están vinculadas a funciones integradas del sistema, una tecla de función de número más alto suele ser más fácil de usar para cambiar de fuente de entrada. Entre ellas, <key>F18</key> es una de las teclas que suele poder usarse sin problemas.',
            },
          },
        },
      },
      note1:
        'Si quieres verificar los nombres de las teclas antes de guardar los cambios, EventViewer de Karabiner te muestra lo que macOS y Karabiner ven de cada tecla.',
      note2:
        'En macOS, no puedes asignar la tecla <key>Command</key> al cambio de fuente de entrada.',
      note3:
        'Si aún necesitas <key>Caps Lock</key> a veces, asígnalo a otra tecla que uses poco en lugar de eliminarlo por completo.',
    },
    linux: {
      title: 'Linux',
      summary:
        'Para Linux, keyd es una forma sólida a nivel de sistema de reasignar <key>Caps Lock</key> a <key>Control</key> o <key>Escape</key> sin depender de un entorno de escritorio concreto.',
      referenceLabel1: 'Repositorio de keyd',
      referenceLabel2: 'Inicio rápido del README de keyd',
      referenceLabel3: 'Lanzamientos de keyd',
      installScript: `git clone https://github.com/rvaiya/keyd
cd keyd
make
sudo make install
sudo systemctl enable --now keyd`,
      installFilename: 'keyd-setup.sh',
      configSnippet: `[ids]
*

[main]
# Mapea Caps Lock a Escape al pulsarlo y a Control al mantenerlo.
capslock = overload(control, esc)

# Opcional: poner Caps Lock en Escape también.
esc = capslock`,
      configFilename: 'default.conf',
      steps: {
        step01: {
          title: '1. Instala keyd',
          body: 'Instala primero keyd. El flujo de instalación desde código fuente es git clone, make, sudo make install y sudo systemctl enable --now keyd. Si prefieres una versión etiquetada, puedes empezar desde la página de lanzamientos.',
        },
        step02: {
          title: '2. Crea /etc/keyd/default.conf',
          body: 'Crea /etc/keyd/default.conf y empieza con una asignación overload sencilla. Esta configuración hace que <key>Caps Lock</key> envíe <key>Escape</key> al pulsarlo y <key>Control</key> al mantenerlo.',
        },
        step03: {
          title: '3. Recarga el demonio',
          body: 'Después de guardar el archivo, ejecuta sudo keyd reload para que la nueva asignación surta efecto. Si algo no se aplica bien, revisa el registro del servicio con journalctl -eu keyd.',
        },
        step04: {
          title: '4. Comprueba los nombres de tecla si tu teclado es raro',
          body: 'Si la distribución de tu teclado es poco común o un nombre de tecla no está claro, usa keyd monitor para ver los nombres que recibe keyd. Si quieres comprobar los eventos originales del dispositivo, detén keyd primero y vuelve a ejecutar el comando.',
        },
        step05: {
          title: '5. Recuerda la secuencia de emergencia',
          body: 'Si haces una configuración mala y necesitas recuperarte rápido, usa <key>Backspace</key> + <key>Escape</key> + <key>Enter</key> para terminar keyd.',
        },
      },
      note1:
        'Usa master como rama de desarrollo y los lanzamientos etiquetados como versiones estables.',
      note2:
        'Debian 13+ y Ubuntu 25.04+ también admiten apt install keyd, pero la instalación desde código fuente de arriba es la opción más portable.',
      note3:
        'Si aún necesitas <key>Caps Lock</key> a veces, asígnalo a otra tecla que uses poco en lugar de eliminarlo por completo.',
    },
  },
} as const satisfies TranslationMessages

export const esEsMessages = esEsTranslation
