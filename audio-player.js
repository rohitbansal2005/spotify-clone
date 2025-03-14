class AudioPlayer {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentSong = null;
        this.playlist = [];
        this.currentIndex = 0;

        // Initialize audio event listeners
        this.audio.addEventListener('ended', () => this.playNext());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audio.addEventListener('error', (e) => this.handleError(e));
    }

    // Load and play a song
    loadSong(song) {
        try {
            this.currentSong = song;
            this.audio.src = song.url;
            this.audio.load();
            this.play();
        } catch (error) {
            console.error('Error loading song:', error);
            alert('Error loading song. Please try again.');
        }
    }

    // Handle audio errors
    handleError(error) {
        console.error('Audio error:', error);
        alert('Error playing audio. Please check the audio file and try again.');
    }

    // Play the current song
    play() {
        const playPromise = this.audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error('Error playing audio:', error);
                alert('Error playing audio. Please try again.');
            });
        }
        this.isPlaying = true;
    }

    // Pause the current song
    pause() {
        this.audio.pause();
        this.isPlaying = false;
    }

    // Toggle play/pause
    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    // Set volume (0 to 1)
    setVolume(volume) {
        this.audio.volume = Math.max(0, Math.min(1, volume));
    }

    // Seek to a specific time (in seconds)
    seek(time) {
        this.audio.currentTime = time;
    }

    // Play next song in playlist
    playNext() {
        if (this.currentIndex < this.playlist.length - 1) {
            this.currentIndex++;
            this.loadSong(this.playlist[this.currentIndex]);
        }
    }

    // Play previous song in playlist
    playPrevious() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.loadSong(this.playlist[this.currentIndex]);
        }
    }

    // Update progress bar
    updateProgress() {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        // Emit progress update event
        this.onProgressUpdate(progress);
    }

    // Update duration
    updateDuration() {
        // Emit duration update event
        this.onDurationUpdate(this.audio.duration);
    }

    // Event handlers
    onProgressUpdate(progress) {
        // Override this method to handle progress updates
    }

    onDurationUpdate(duration) {
        // Override this method to handle duration updates
    }
}

// Create player instance
const player = new AudioPlayer();

// Sample playlist with real audio files
const samplePlaylist = [
    {
        title: "Sample Song 1",
        artist: "Artist 1",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        cover: "https://picsum.photos/200/200?random=1"
    },
    {
        title: "Sample Song 2",
        artist: "Artist 2",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        cover: "https://picsum.photos/200/200?random=2"
    },
    {
        title: "Sample Song 3",
        artist: "Artist 3",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        cover: "https://picsum.photos/200/200?random=3"
    }
];

// Set up the playlist
player.playlist = samplePlaylist;

// Export the player instance
export default player; 