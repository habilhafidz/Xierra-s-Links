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
        statusText.classList.add('glitch');
        setTimeout(() => statusText.classList.remove('glitch'), 500);
    }, 0);

    setTimeout(() => {
        statusText.innerText = "Connecting to server...";
        statusText.classList.add('glitch');
        setTimeout(() => statusText.classList.remove('glitch'), 500);
    }, 3000);

    setTimeout(() => {
        statusText.innerText = "Access Granted!";
        statusText.classList.add('glitch');
        setTimeout(() => statusText.classList.remove('glitch'), 500);
    }, 6000);

    // Show video and hacked message after Access Granted
    setTimeout(() => {
        loadingScreen.style.display = "none"; // Hide loading screen
        setTimeout(() => {
            glitchEffect.style.display = "block"; // Show video
            hackedMessage.style.display = "block"; // Show hacked message
            startGlitchEffect(); // Start the glitch effect on the hacked message
        }, 1000); // Delay 1 detik sebelum menampilkan video dan pesan hacked
    }, 9000);
});

function startGlitchEffect() {
    const hackedMessage = document.getElementById("hackedMessage");
    setInterval(() => {
        hackedMessage.classList.toggle('glitch');
    }, 1000); // Change the 'glitch' class every 1 second
}

