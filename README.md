# EFicient — sitio informativo

Uso interno de Grant Thornton BPS Costa Rica para atención de clientes. Contacto: auto_bps-rpa@cr.gt.com.

Sitio: https://jorgevil98.github.io/Generador-EEFF/
Servicio privado: https://eficient-qbo.auto-bps-rpa.chatgpt.site

Este repositorio contiene solo las páginas públicas y sus estilos. No contiene el proyecto privado de escritorio, tokens ni datos de empresas.

## Páginas
- privacy.html: política de privacidad.
- terms.html: condiciones de uso interno.
- launch.html: acceso al servicio de conexiones y descripción del escritorio.
- connect.html: acceso al flujo real de autorización y reconexión.
- disconnect.html: acceso a la revocación de conexiones.

## Estado
Servicio implementado y publicado con autorización OAuth, cifrado de tokens, renovación al consultar, consulta de empresa y BalanceSheet, revocación y acceso por identidad. Configuración inicial Sandbox. Todavía deben configurarse Client ID y Client Secret de Intuit y validarse el flujo con credenciales reales; las pruebas actuales usan un proveedor simulado. La identidad del escritorio y el acceso del equipo requieren integración antes del uso con clientes reales.

## Datos para Intuit
- Host domain del servicio: eficient-qbo.auto-bps-rpa.chatgpt.site
- Launch: https://eficient-qbo.auto-bps-rpa.chatgpt.site/launch
- Connect/Reconnect: https://eficient-qbo.auto-bps-rpa.chatgpt.site/connect
- Disconnect: https://eficient-qbo.auto-bps-rpa.chatgpt.site/disconnect
- Redirect URI: https://eficient-qbo.auto-bps-rpa.chatgpt.site/oauth/intuit/callback
- EULA: https://jorgevil98.github.io/Generador-EEFF/terms.html
- Privacy: https://jorgevil98.github.io/Generador-EEFF/privacy.html

El servicio está restringido a la cuenta propietaria en Sites. No introducir tokens o secretos en el sitio público. No declarar pruebas de producción realizadas hasta efectuarlas. El país de alojamiento administrado debe confirmarse con el proveedor; no deducirlo de la sede de la firma o del DNS. No hay una IP de salida fija configurada.
