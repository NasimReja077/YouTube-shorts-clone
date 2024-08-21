// Pause and play on video click
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.addEventListener('click', () => {
        video.paused ? video.play() : video.pause();
    });

    // Toggle loop functionality by double-clicking
    video.addEventListener('dblclick', () => {
        video.loop = !video.loop;
        alert(`Looping is now ${video.loop ? 'enabled' : 'disabled'}.`);
    });
});

// Add click functionality for the buttons
document.querySelectorAll('.video_sidebar_button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});
