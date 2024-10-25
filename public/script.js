//index.html//

document.addEventListener("DOMContentLoaded", function () {
    const glitchText = document.querySelector('.name');
    setInterval(() => {
        glitchText.classList.toggle('glitch');
    }, 1000); // Mengubah kelas 'glitch' setiap 1 detik
});

//my-wa.html//

// my-wa.html
document.addEventListener("DOMContentLoaded", function () {
    const statusText = document.getElementById("statusText");
    const loadingScreen = document.getElementById("loadingScreen");
    const hackedMessage = document.getElementById("hackedMessage");
    const glitchEffect = document.getElementById("glitchEffect");

    // Sequence of loading messages with extended durations
    setTimeout(() => {
        statusText.innerText = "Initializing...";
        statusText.classList.add('glitch'); // Menambahkan efek glitch
        setTimeout(() => statusText.classList.remove('glitch'), 500); // Menghapus glitch setelah 0.5 detik
    }, 0); // Menampilkan pesan pertama

    setTimeout(() => {
        statusText.innerText = "Connecting to server...";
        statusText.classList.add('glitch'); // Menambahkan efek glitch
        setTimeout(() => statusText.classList.remove('glitch'), 500); // Menghapus glitch setelah 0.5 detik
    }, 3000); // Menampilkan pesan kedua setelah 3 detik

    setTimeout(() => {
        statusText.innerText = "Access Granted!";
        statusText.classList.add('glitch'); // Menambahkan efek glitch
        setTimeout(() => statusText.classList.remove('glitch'), 500); // Menghapus glitch setelah 0.5 detik
    }, 6000); // Menampilkan pesan ketiga setelah 6 detik

    // Show glitch effect after Access Granted
    setTimeout(() => {
        loadingScreen.style.display = "none"; // Hide loading screen
        glitchEffect.style.display = "block"; // Show video after Access Granted
        hackedMessage.style.display = "block"; // Show hacked message
        startGlitchEffect(); // Start the glitch effect on the hacked message
    }, 9000); // Menampilkan efek glitch setelah total 9 detik
});

function startGlitchEffect() {
    const hackedMessage = document.getElementById("hackedMessage");
    setInterval(() => {
        hackedMessage.classList.toggle('glitch'); // Toggle the glitch class
    }, 1000); // Change the 'glitch' class every 1 second
}

