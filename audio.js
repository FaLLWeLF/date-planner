(function () {
    // Cegah duplikat audio jika sudah dibuat
    if (window.hasOwnProperty("bgAudioInitialized")) return;
    window.bgAudioInitialized = true;
  
    // Buat audio element global
    const audio = document.createElement("audio");
    audio.src = "backsound-penjaga-hati.mp3"; // Pastikan file ini ada
    audio.loop = true;
    audio.volume = 0.5;
    audio.autoplay = true;
  
    // Ambil status mute dari localStorage
    const isMuted = localStorage.getItem("bg-mute") === "true";
    audio.muted = isMuted;
  
    // Tambahkan ke body
    document.body.appendChild(audio);
  
    // Deteksi tombol mute/unmute
    function createMuteButton() {
      const button = document.createElement("button");
      button.id = "mute-toggle";
      button.title = "Mute/Unmute";
      button.innerText = audio.muted ? "🔇" : "🔊";
      button.style.position = "fixed";
      button.style.bottom = "20px";
      button.style.right = "20px";
      button.style.backgroundColor = "#ff4d79";
      button.style.color = "white";
      button.style.border = "none";
      button.style.padding = "10px";
      button.style.borderRadius = "50%";
      button.style.cursor = "pointer";
      button.style.fontSize = "18px";
      button.style.zIndex = "999";
      button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
      button.style.transition = "background-color 0.3s ease";
  
      button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#ff1a4d";
      });
      button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#ff4d79";
      });
  
      button.addEventListener("click", () => {
        audio.muted = !audio.muted;
        localStorage.setItem("bg-mute", audio.muted);
        button.innerText = audio.muted ? "🔇" : "🔊";
      });
  
      document.body.appendChild(button);
    }
  
    // Tambahkan tombol setelah halaman siap
    window.addEventListener("DOMContentLoaded", () => {
      createMuteButton();
    });
  
    // Coba play (bypass restriction saat interaksi user)
    window.addEventListener("click", () => {
      audio.play().catch(() => {}); // Biarkan silent jika gagal
    });
  })();
  