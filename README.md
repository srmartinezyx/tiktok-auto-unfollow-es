# 🚀 TikTok Auto-Unfollow Script (Español)

Script ligero en **JavaScript** diseñado para ejecutarse directamente desde la consola del navegador en **TikTok Web** (interfaz en español). Permite limpiar tu lista de seguidos de forma automática sin necesidad de instalar extensiones de terceros.

## ✨ Características
* **Protección de Amigos:** Solo deja de seguir a las cuentas con el botón **"Siguiendo"** y respeta intactas a las cuentas mutuas (**"Amigos"**).
* **Ignora el menú lateral:** Evita hacer clic por error en la pestaña "Siguiendo" del menú de navegación izquierdo de TikTok.
* **Auto-Scroll inteligente:** Detecta el contenedor interno de la ventana flotante y dispara eventos de desplazamiento reales para cargar nuevos bloques de usuarios automáticamente.
* **Control de velocidad:** Incluye pausas configurables entre clics para reducir el riesgo de bloqueos temporales.

## 🛠️ Cómo usarlo

1. Inicia sesión en [TikTok Web](https://tiktok.com) desde tu computadora (asegúrate de tener la interfaz en español).
2. Ve a tu **Perfil** y haz clic en **Siguiendo** para abrir la ventana emergente con tu lista.
3. Abre las **Herramientas de desarrollador** presionando `F12` (o `Ctrl + Shift + I` en Windows / `Cmd + Option + I` en Mac).
4. Ve a la pestaña **Consola** (`Console`).
5. Copia el código del archivo [`unfollow.js`](./unfollow.js), pégalo en la consola y presiona **Enter** (o clic en **Ejecutar**).

> **Nota para Firefox:** Si es la primera vez que pegas código en la consola, Firefox te pedirá escribir `permitir pegar` (o `allow pasting`) antes de dejarte usar `Ctrl + V`.

## ⚙️ Personalización
Puedes modificar las constantes al inicio del archivo `unfollow.js` según tus necesidades:
* `PAUSA_ENTRE_CLICS_MS`: Tiempo de espera entre cada *unfollow* (por defecto `900` ms).
* `PAUSA_CARGA_SCROLL_MS`: Tiempo de espera para que TikTok cargue nuevos usuarios tras bajar la lista (por defecto `1500` ms).
* `MAX_INTENTOS`: Número de intentos de scroll sin encontrar usuarios nuevos antes de detenerse (por defecto `6`).

## ⚠️ Descargo de Responsabilidad (Úsalo bajo tu propio riesgo)

> **ADVERTENCIA:** El uso de scripts de automatización puede infringir los Términos de Servicio de TikTok. **Úsalo estrictamente bajo tu propio riesgo.**

* **Riesgo de limitaciones o bloqueos:** TikTok aplica límites horarios y diarios a las acciones repetitivas (aproximadamente entre 150 y 200 *unfollows* por hora). Abusar de este script o reducir demasiado los tiempos de pausa puede provocar bloqueos temporales de funciones, *shadowban* o restricciones en tu cuenta.
* **Cómo detectar un límite temporal:** Si notas que los botones vuelven a cambiar solos a `"Siguiendo"` después de hacerles clic, detén el script de inmediato recargando la página (`F5`) y espera varias horas antes de volver a intentarlo.
* **Sin garantías:** El autor no se hace responsable por bloqueos, suspensiones o pérdida de acceso a cuentas derivadas del uso o mal uso de este código. Este proyecto tiene fines estrictamente educativos y de automatización personal, y no está afiliado ni respaldado por TikTok.

## 📄 Licencia
Este proyecto está bajo la licencia **GNU General Public License v3.0 (GPLv3)**. Es completamente libre para usar, estudiar y modificar, pero cualquier proyecto derivado o modificación debe mantenerse también como software libre y de código abierto bajo esta misma licencia.

