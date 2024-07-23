export function initVideo() {
    const videoMedia = document.getElementById("video-media");

    const playVideoBtn = document.getElementById("video-play");
    const playVideoIcon = playVideoBtn.getElementsByTagName("i")[0];

    const resetVideoBtn = document.getElementById("video-reset");

    const progressBar = document.getElementById("video-progress");
    const fullScreenVideoBtn = document.getElementById("video-fullscreen");

    playVideoBtn.addEventListener("click", () => {
        if (videoMedia.paused) {
            videoMedia.play();
            playVideoIcon.className = "fas fa-pause";
        } else {
            videoMedia.pause();
            playVideoIcon.className = "fas fa-play";
        }
    });

    resetVideoBtn.addEventListener("click", () => {
        videoMedia.currentTime = 0;
    });

    videoMedia.addEventListener("timeupdate", () => {
        progressBar.value = videoMedia.currentTime / videoMedia.duration * 100;
    });

    progressBar.addEventListener("click", (event) => {
        const rect = progressBar.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const width = rect.right - rect.left;
        const percentage = x / width;

        videoMedia.currentTime = videoMedia.duration * percentage;
    });

    fullScreenVideoBtn.addEventListener("click", () => {
        videoMedia.requestFullscreen();
    });
}