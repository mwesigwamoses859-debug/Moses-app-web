(() => {
  const videoIds = new Set(["9vKnevCFTds", "VLVjy__5Cdg", "eleoykpHfgI"]);

  document.addEventListener("click", (event) => {
    const button = event.target.closest?.("button[data-load-video]");
    if (!button || !videoIds.has(button.dataset.loadVideo)) return;
    const slot = button.closest("[data-video-card]")?.querySelector("[data-video-slot]");
    if (!slot) return;

    const videoId = button.dataset.loadVideo;
    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&playsinline=1`;
    frame.title = button.dataset.videoTitle;
    frame.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.tabIndex = 0;
    slot.replaceChildren(frame);
    frame.focus();

    const status = document.getElementById("video-status");
    if (status) status.textContent = `${button.dataset.videoTitle} is loaded. Use the YouTube player to start playback.`;
    document.dispatchEvent(new CustomEvent("mosestechfix:video-load", { detail: { videoId } }));
  });
})();
