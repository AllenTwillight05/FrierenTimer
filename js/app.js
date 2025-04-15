class VideoController {
    constructor() {
        this.videoElement = document.getElementById('background-video');
        this.videoFiles = [
            'assets/background/write.mp4',
            'assets/background/water.mp4',
            'assets/background/fire.mp4',
            'assets/background/tomb.mp4',
            'assets/background/meteor.mp4',
            'assets/background/box.mp4'
        ];
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.loadVideo(0);
        document.getElementById('prev-video').addEventListener('click', () => this.switchVideo(-1));
        document.getElementById('next-video').addEventListener('click', () => this.switchVideo(1));
    }

    loadVideo(index) {
        this.currentIndex = (index + this.videoFiles.length) % this.videoFiles.length;
        this.videoElement.src = this.videoFiles[this.currentIndex];
        this.videoElement.load();
        this.videoElement.play().catch(e => console.error('视频播放失败:', e));
    }

    switchVideo(direction) {
        this.loadVideo(this.currentIndex + direction);
    }
}

class DateTimeDisplay {
    constructor() {
        this.timeElement = document.getElementById('time-display');
        this.dateElement = document.getElementById('date-display');
        this.update();
        setInterval(() => this.update(), 1000);
    }

    update() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // 月份为阿拉伯数字
        const day = now.getDate();
        const weekday = now.toLocaleDateString('zh-CN', { weekday: 'long' });
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        // 计算“勇者ヒンメルが死んでからXX年”
        const startYear = 2000; // 假设勇者ヒンメル死于2000年
        const yearsSinceDeath = year - startYear;

        // 格式化时间显示
        this.timeElement.textContent = `${hours}:${minutes}`;

        // 格式化日期显示
        this.dateElement.innerHTML = `
            <span class="years-since-death">勇者ヒンメルが死んでから${yearsSinceDeath}年</span><br>
            <span class="date-weekday">${month}月${day}日 ${weekday}</span>
        `;
    }
}

class Timer {
    constructor() {
        this.display = document.getElementById('timer-display');
        this.startBtn = document.getElementById('start-btn');
        this.pauseBtn = document.getElementById('pause-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.isRunning = false;
        this.startTime = 0;
        this.accumulatedTime = 0;
        this.bindEvents();
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.togglePause());
        this.resetBtn.addEventListener('click', () => this.reset());
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.startTime = Date.now() - this.accumulatedTime;
            this.display.style.display = 'block';
            this.startBtn.style.display = 'none';
            this.pauseBtn.style.display = 'block';
            this.resetBtn.style.display = 'block';
            this.update();
        }
    }

    togglePause() {
        this.isRunning = !this.isRunning;
        this.pauseBtn.textContent = this.isRunning ? 'PAUSE' : 'CONTINUE';
        if (this.isRunning) {
            this.startTime = Date.now() - this.accumulatedTime;
            this.update();
        } else {
            this.accumulatedTime = Date.now() - this.startTime;
            cancelAnimationFrame(this.animationId);
        }
    }

    reset() {
        this.isRunning = false;
        this.accumulatedTime = 0;
        this.display.textContent = '00:00:00';
        this.display.style.display = 'none';
        this.startBtn.style.display = 'block';
        this.pauseBtn.style.display = 'none';
        this.resetBtn.style.display = 'none';
        cancelAnimationFrame(this.animationId);
    }

    update() {
        const elapsed = Date.now() - this.startTime;
        const totalSeconds = Math.floor(elapsed / 1000);
        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        this.display.textContent = `${hours}:${minutes}:${seconds}`;
        
        if (this.isRunning) {
            this.animationId = requestAnimationFrame(() => this.update());
        }
    }
}

class MusicPlayer {
    constructor() {
        this.player = new APlayer({
            container: document.getElementById('music-player'),
            autoplay: true,
            listFolded: true,
            //歌单
            audio: [
                {
                    name: 'In Times of Peace',
                    artist: 'Evan Call',
                    url: 'assets/music/In Times of Peace.ogg',
                    cover: 'assets/music/cover.webp'
                },
                {
                    name: 'Grassy Turtles and Seed Rats',
                    artist: 'Evan Call',
                    url: 'assets/music/Grassy Turtles and Seed Rats.ogg',
                    cover: 'assets/music/cover.webp'
                },
                {
                    name: 'Before the Light Fades',
                    artist: 'Evan Call',
                    url: 'assets/music/Before the Light Fades.ogg',
                    cover: 'assets/music/cover.webp'
                },
                {
                    name: 'Departures',
                    artist: 'Evan Call',
                    url: 'assets/music/Departures.ogg',
                    cover: 'assets/music/cover.webp'
                },
                {
                    name: 'Heiters Request',
                    artist: 'Evan Call',
                    url: 'assets/music/Heiters Request.ogg',
                    cover: 'assets/music/cover.webp'
                },

                {
                    name: 'Life Is Worth Living',
                    artist: 'Evan Call',
                    url: 'assets/music/Life Is Worth Living.ogg',
                    cover: 'assets/music/cover.webp'
                },
                {
                    name: 'The Precious Moments We Share',
                    artist: 'Evan Call',
                    url: 'assets/music/The Precious Moments We Share.ogg',
                    cover: 'assets/music/cover.webp'
                },
                {
                    name: 'Time Flows Ever Onward',
                    artist: 'Evan Call',
                    url: 'assets/music/Time Flows Ever Onward.ogg',
                    cover: 'assets/music/cover.webp'
                },
                {
                    name: 'Great Mage Flamme',
                    artist: 'Evan Call',
                    url: 'assets/music/Great Mage Flamme.ogg',
                    cover: 'assets/music/cover.webp'
                },
                {
                    name: 'Goodbye for Now, Eisen',
                    artist: 'Evan Call',
                    url: 'assets/music/Goodbye for Now, Eisen.ogg',
                    cover: 'assets/music/cover.webp'
                }
            ]
        });

        // 解除静音
        document.addEventListener('click', () => {
            this.player.audio.muted = false;
            this.player.audio.play();
        }, { once: true });
    }
}

class WhiteNoisePlayer {
    constructor() {
        this.audio = null;
        this.currentBtn = null;
        this.buttons = document.querySelectorAll('.noise-btn');
        
        this.initButtons();
    }

    initButtons() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleButtonClick(btn);
            });
        });
    }

    handleButtonClick(btn) {
        const src = btn.dataset.src;
        
        if (this.currentBtn === btn) {
            // 切换播放/暂停状态
            if (this.audio.paused) {
                this.audio.play().catch(error => console.error('播放失败:', error));
                btn.classList.add('playing');
            } else {
                this.audio.pause();
                btn.classList.remove('playing');
            }
        } else {
            // 切换音源
            this.stopCurrentPlayback();
            this.currentBtn = btn;
            this.audio = new Audio(src);
            this.audio.loop = true;
            
            // 添加错误处理
            this.audio.addEventListener('error', (e) => {
                console.error('音频加载失败:', e);
                btn.classList.remove('playing');
            });
            
            // 开始播放
            this.audio.play().catch(error => console.error('播放失败:', error));
            btn.classList.add('playing');
        }
    }

    stopCurrentPlayback() {
        if (this.audio) {
            this.audio.pause();
            this.audio = null;
        }
        this.buttons.forEach(btn => btn.classList.remove('playing'));
    }
}

// 实例化播放器
const whiteNoisePlayer = new WhiteNoisePlayer();

class FullscreenController {
    constructor() {
        this.fullscreenBtn = document.getElementById('fullscreen-btn');
        this.init();
    }

    init() {
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
}

// 初始化所有组件
document.addEventListener('DOMContentLoaded', () => {
    new VideoController();
    new DateTimeDisplay();
    new Timer();
    new MusicPlayer();
    new WhiteNoisePlayer();
    new FullscreenController();
});