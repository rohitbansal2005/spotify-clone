// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
    const isDark = root.style.getPropertyValue('--background-base') === '#121212';
    if (isDark) {
        // Light theme
        root.style.setProperty('--background-base', '#ffffff');
        root.style.setProperty('--background-highlight', '#f5f5f5');
        root.style.setProperty('--background-press', '#e6e6e6');
        root.style.setProperty('--background-elevated-base', '#ffffff');
        root.style.setProperty('--background-elevated-highlight', '#f5f5f5');
        root.style.setProperty('--background-elevated-press', '#e6e6e6');
        root.style.setProperty('--text-base', '#000000');
        root.style.setProperty('--text-subdued', '#6a6a6a');
        root.style.setProperty('--decorative-subdued', '#e6e6e6');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        // Dark theme
        root.style.setProperty('--background-base', '#121212');
        root.style.setProperty('--background-highlight', '#1a1a1a');
        root.style.setProperty('--background-press', '#000');
        root.style.setProperty('--background-elevated-base', '#242424');
        root.style.setProperty('--background-elevated-highlight', '#2a2a2a');
        root.style.setProperty('--background-elevated-press', '#000');
        root.style.setProperty('--text-base', '#fff');
        root.style.setProperty('--text-subdued', '#a7a7a7');
        root.style.setProperty('--decorative-subdued', '#292929');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Player Controls
const playButton = document.querySelector('.play-button');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress-filled');
const volumeSlider = document.querySelector('.volume-slider');
const volumeFilled = document.querySelector('.volume-filled');

// Play/Pause Button
playButton.addEventListener('click', () => {
    const icon = playButton.querySelector('i');
    if (icon.classList.contains('fa-play')) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
});

// Progress Bar
progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = (x / width) * 100;
    progressFilled.style.width = `${percentage}%`;
});

// Volume Slider
volumeSlider.addEventListener('click', (e) => {
    const rect = volumeSlider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = (x / width) * 100;
    volumeFilled.style.width = `${percentage}%`;
});

// Navigation
const navLinks = document.querySelectorAll('.nav-links li');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Sample Track Data
const tracks = [
    {
        title: 'Calm Down',
        artist: 'Rema, Selena Gomez',
        duration: '3:30',
        cover: 'https://picsum.photos/56/56?random=5'
    },
    {
        title: 'Last Night',
        artist: 'Morgan Wallen',
        duration: '2:44',
        cover: 'https://picsum.photos/56/56?random=6'
    },
    {
        title: 'Flowers',
        artist: 'Miley Cyrus',
        duration: '3:20',
        cover: 'https://picsum.photos/56/56?random=7'
    }
];

// Populate Track List
const trackList = document.querySelector('.track-list');
tracks.forEach(track => {
    const trackElement = document.createElement('div');
    trackElement.className = 'track-item';
    trackElement.innerHTML = `
        <img src="${track.cover}" alt="${track.title}">
        <div class="track-info">
            <h4>${track.title}</h4>
            <p>${track.artist}</p>
        </div>
        <div class="track-duration">${track.duration}</div>
    `;
    trackList.appendChild(trackElement);
});

// Like Button Toggle
const likeButton = document.querySelector('.like-button');
likeButton.addEventListener('click', () => {
    const icon = likeButton.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.style.color = '#1ed760';
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.style.color = '';
    }
});

// Update Current Time
function updateCurrentTime() {
    const currentTime = document.querySelector('.current-time');
    let seconds = 0;
    
    setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        currentTime.textContent = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }, 1000);
}

updateCurrentTime(); 