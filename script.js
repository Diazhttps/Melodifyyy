// Basic functionality for demonstration purposes
document.addEventListener('DOMContentLoaded', function() {
    // Navigation item click handling
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelector('.nav-item.active').classList.remove('active');
            this.classList.add('active');
        });
    });
    
    // Play button toggle
    
    const playButton = document.querySelector('.play-button');
    playButton.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-play')) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });
    
    // Card hover effect
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            // Simulate playing selected music
            document.querySelector('.song-name').textContent = this.querySelector('.card-title').textContent;
            document.querySelector('.artist').textContent = this.querySelector('.card-subtitle').textContent;
            
            // Change play button to pause
            const playIcon = document.querySelector('.play-button i');
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        });
    });
    
    
    // Volume control
    const volumeBar = document.querySelector('.volume-bar');
    volumeBar.addEventListener('click', function(e) {
        const volumeFill = this.querySelector('.volume-fill');
        const clickPosition = e.offsetX;
        const totalWidth = this.offsetWidth;
        const percentage = (clickPosition / totalWidth) * 100;
        
        volumeFill.style.width = percentage + '%';
    });
    
    // Progress bar
    const progressBar = document.querySelector('.progress');
    progressBar.addEventListener('click', function(e) {
        const progressFill = this.querySelector('.progress-fill');
        const clickPosition = e.offsetX;
        const totalWidth = this.offsetWidth;
        const percentage = (clickPosition / totalWidth) * 100;
        
        progressFill.style.width = percentage + '%';
        
        // Update time display (just for demo)
        const minutes = Math.floor(percentage * 3.45 / 100);
        const seconds = Math.floor((percentage * 3.45 / 100 - minutes) * 60);
        document.querySelectorAll('.time')[0].textContent = 
            minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
    });
});