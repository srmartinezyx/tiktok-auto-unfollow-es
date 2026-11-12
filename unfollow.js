/**
 * TikTok Auto-Unfollow Script (Interfaz en Español)
 * Copyright (C) 2026 andresalejandromartinezcroes-create
 *
 * Este programa es software libre: puedes redistribuirlo y/o modificarlo
 * bajo los términos de la Licencia Pública General de GNU (GPLv3) publicada
 * por la Free Software Foundation.
 *
 * Deja de seguir cuentas que no te siguen de vuelta ("Siguiendo"),
 * mantiene intactos a tus seguidores mutuos ("Amigos") y hace auto-scroll.
 */

(async () => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let totalEliminados = 0;
  let intentosSinNuevos = 0;
  const MAX_INTENTOS = 6;
  const PAUSA_ENTRE_CLICS_MS = 900;
  const PAUSA_CARGA_SCROLL_MS = 1500;

  console.log("🚀 Iniciando script de auto-unfollow en TikTok...");

  while (intentosSinNuevos < MAX_INTENTOS) {
    // Filtra botones visibles con texto exacto "Siguiendo" e ignora el menú lateral (.slice(1))
    const botonesSiguiendo = [...document.querySelectorAll("button")]
      .filter((btn) => btn.innerText.trim() === "Siguiendo" && btn.offsetWidth > 0)
      .slice(1);

    if (botonesSiguiendo.length > 0) {
      intentosSinNuevos = 0;
      for (const boton of botonesSiguiendo) {
        boton.click();
        totalEliminados++;
        console.log(`✅ Eliminados: ${totalEliminados}`);
        await delay(PAUSA_ENTRE_CLICS_MS);
      }
    } else {
      intentosSinNuevos++;
    }

    // Busca el último botón de la lista para localizar el contenedor con scroll
    const ultimoBoton = [...document.querySelectorAll("button")]
      .filter((btn) => ["Siguiendo", "Amigos", "Seguir"].includes(btn.innerText.trim()))
      .slice(1)
      .pop();

    if (ultimoBoton) {
      let contenedor = ultimoBoton.parentElement;
      while (contenedor && contenedor !== document.body) {
        if (contenedor.scrollHeight > contenedor.clientHeight) {
          contenedor.scrollTop = contenedor.scrollHeight;
          contenedor.dispatchEvent(new Event("scroll", { bubbles: true }));
          break;
        }
        contenedor = contenedor.parentElement;
      }
    }

    await delay(PAUSA_CARGA_SCROLL_MS);
  }

  console.log(`🏁 Proceso finalizado. Total de cuentas dejadas de seguir: ${totalEliminados}`);
})();
