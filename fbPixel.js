// Envuelve las llamadas a fbq() para que nunca truene si el Pixel
// no cargó aún o si el bloqueador de anuncios del usuario lo detuvo.
export function trackFbEvent(eventName, params = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", eventName, params);
    }
  } catch (e) {
    console.error("Error al enviar evento al Pixel:", e);
  }
}

export function trackFbPageView() {
  try {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  } catch (e) {
    console.error("Error al enviar PageView al Pixel:", e);
  }
}
