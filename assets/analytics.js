(() => {
  // Preview traffic and privacy preferences must not become production results.
  const productionHosts = new Set(["mosestechfixsolution.com", "www.mosestechfixsolution.com"]);
  if (!productionHosts.has(window.location.hostname)) return;
  if (navigator.globalPrivacyControl || navigator.doNotTrack === "1" || window.doNotTrack === "1") return;

  const measurementId = "G-KG6CEP3WVG";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  const pageLocation = window.location.origin + window.location.pathname;
  let pageReferrer = "";
  try {
    const referrer = new URL(document.referrer);
    pageReferrer = referrer.origin + referrer.pathname;
  } catch { /* A direct visit has no referrer. */ }
  window.gtag("config", measurementId, {
    send_page_view: true,
    page_location: pageLocation,
    page_referrer: pageReferrer,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  const track = (name, details = {}) => {
    window.gtag("event", name, {
      page_location: pageLocation,
      ...details,
    });
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest?.("a[href]");
    if (!link) return;

    const rawHref = link.getAttribute("href") || "";
    let url;
    try {
      url = new URL(rawHref, window.location.href);
    } catch {
      return;
    }

    const linkLocation = link.dataset.trackLocation || link.closest("section[id]")?.id || "navigation";

    if (["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"].includes(url.hostname)) {
      track("youtube_click", {
        link_url: url.origin + url.pathname,
        link_location: linkLocation,
        video_id: link.dataset.videoId || "channel",
      });
      return;
    }

    if (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com") {
      track("service_enquiry_click", { method: "WhatsApp", link_location: linkLocation });
      return;
    }

    if (url.protocol === "tel:") {
      track("service_enquiry_click", { method: "Phone", link_location: linkLocation });
      return;
    }

    if (url.protocol === "mailto:") {
      track("service_enquiry_click", { method: "Email", link_location: linkLocation });
      return;
    }

    if (url.origin === window.location.origin && /\/service-request(?:\.html)?$/.test(url.pathname)) {
      track("service_request_click", { link_url: url.origin + url.pathname, link_location: linkLocation });
    }

    if (url.hostname === "g.page" && url.pathname.endsWith("/review")) {
      track("review_link_click", { link_url: url.origin + url.pathname });
    }
  });

  document.addEventListener("submit", (event) => {
    if (event.target.matches?.("[data-whatsapp-form]") && event.target.checkValidity()) {
      // The form prepares a message; it cannot confirm that WhatsApp sent it.
      track("service_enquiry_handoff", { method: "WhatsApp form" });
    }
  }, true);

  document.addEventListener("mosestechfix:video-load", (event) => {
    if (["9vKnevCFTds", "VLVjy__5Cdg", "eleoykpHfgI"].includes(event.detail?.videoId)) {
      track("video_embed_open", { video_id: event.detail.videoId, link_location: "featured_videos" });
    }
  });
})();
