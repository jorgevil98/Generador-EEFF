"use strict";
(() => {
 const url = new URL(window.location.href);
 const title = document.getElementById("title");
 const instructions = document.getElementById("instructions");
 if (!url.search) return;
 const field = document.getElementById("callback");
 if (url.searchParams.has("error")) {
  title.textContent = "Autorización no completada";
  instructions.textContent = "Intuit no completó la autorización. Vuelve a EFicient para iniciar nuevamente la conexión. No se guardó una conexión por visitar esta página.";
 } else if (["code", "state", "realmId"].every(key => url.searchParams.getAll(key).length === 1 && url.searchParams.get(key))) {
  title.textContent = "Regresa a EFicient para guardar la conexión";
  instructions.textContent = "Intuit devolvió la autorización. Copia el retorno de abajo y entrégalo a EFicient; esta página no guarda tokens ni datos de la compañía.";
  field.value = url.href;
  document.getElementById("return-panel").hidden = false;
  document.getElementById("copy").addEventListener("click", async () => {
   try { await navigator.clipboard.writeText(field.value); document.getElementById("status").textContent = "Retorno copiado. Pégalo en EFicient y pulsa Guardar conexión."; }
   catch { field.focus(); field.select(); document.getElementById("status").textContent = "Seleccionamos el retorno. Pulsa Ctrl+C y pégalo en EFicient."; }
  });
 } else {
  title.textContent = "Retorno incompleto";
  instructions.textContent = "Faltan datos del retorno de Intuit. Vuelve a EFicient e inicia nuevamente la conexión.";
 }
 window.history.replaceState(null, "", url.pathname);
})();
