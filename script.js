document.addEventListener("DOMContentLoaded", function () {
    const glitchText = document.querySelector('.name');
    setInterval(() => {
        glitchText.classList.toggle('glitch');
    }, 1000); // Mengubah kelas 'glitch' setiap 1 detik
});