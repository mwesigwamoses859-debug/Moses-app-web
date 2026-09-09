(() => {
  const measurementId = "G-KG6CEP3WVG";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  const track = (name, details = {}) => {
    window.gtag("event", name, {
      page_location: window.location.href,
      ...details,
    });
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;

    const rawHref = link.getAttribute("href") || "";
    let url;
    try {
      url = new URL(rawHref, window.location.href);
    } catch {
      return;
    }

    if (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com") {
      track("generate_lead", { method: "WhatsApp", link_url: url.href });
      return;
    }

    if (url.protocol === "tel:") {
      track("generate_lead", { method: "Phone", link_url: rawHref });
      return;
    }

    if (url.protocol === "mailto:") {
      track("generate_lead", { method: "Email", link_url: rawHref });
      return;
    }

    if (url.pathname.includes("service-request")) {
      track("service_request_click", { link_url: url.href });
    }

    if (url.hostname === "g.page" && url.pathname.endsWith("/review")) {
      track("review_link_click", { link_url: url.href });
    }
  });

  document.addEventListener("submit", (event) => {
    if (event.target.matches("[data-whatsapp-form]")) {
      track("generate_lead", { method: "WhatsApp form" });
    }
  }, true);
})();
