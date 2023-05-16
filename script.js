function resizeListener() {
    const height = window.innerHeight.toString()
    const width = window.innerWidth.toString()
    const screenH = window.screen.height.toString()
    const screenW = window.screen.width.toString()
    const dpr = window.devicePixelRatio.toFixed(2)

    document.getElementById('height').textContent = height
    document.getElementById('width').textContent = width
    document.getElementById('screenH').textContent = screenH
    document.getElementById('screenW').textContent = screenW
    document.getElementById('dpr').textContent = dpr
}

window.addEventListener('resize', resizeListener)
    ; (function () {
        resizeListener()
    })()


/*full-screen-event*/
const fullscreenIcon = document.getElementById('fullScreen');

function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    }
}

fullscreenIcon.addEventListener('click', toggleFullscreen);
fullscreenIcon.addEventListener('touchend', toggleFullscreen);

function toggleFullscreen() {
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    isFullscreen ? exitFullscreen() : enterFullscreen();
    fullscreenIcon.src = isFullscreen ? 'assets/fullscreen.svg' : 'assets/minimize.svg';
    fullscreenIcon.alt = isFullscreen ? 'Full-Screen' : 'Minimize';
}


/*full-screen-event-end*/