const video = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const volumeBtn = document.getElementById('volumeBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const ctaBtn = document.getElementById('ctaBtn');
const miniHook = document.getElementById('miniHook');
const customControls = document.getElementById('customControls');

let isPlaying = false;

const thisScript = document.currentScript;

// Lê o atributo
const value =  Number(thisScript.getAttribute("data-value"))


const ctaTimes = [value]; // Exemplo: 1:30, 3:00, 4:30 (ajuste conforme necessário)

// Autoplay sem som (como Smart Autoplay do VTurb)
video.muted = true;
video.play().catch(() => console.log('Autoplay bloqueado pelo navegador'));

// Função para forçar clique (pode ser bloqueada)
function forceClick(element) {
    element.dispatchEvent(new Event('click', { bubbles: true }));
}

// Tenta forçar play e desmutar após 3 segundos
setTimeout(() => {
    if (!isPlaying) {
        forceClick(playPauseBtn); // Tenta simular clique no botão de play
        video.play().then(() => {
            isPlaying = true;
            // playPauseBtn.textContent = '⏸';
            setTimeout(() => {
                video.muted = false; // Tenta desmutar após play
                isMuted = false;
                // volumeBtn.textContent = '🔊';
            }, 100); // Pequeno delay para garantir o play
        }).catch(error => {
            console.log('Forçar play falhou:', error);
        });
    }
}, 3000);


// Play/Pause
// playPauseBtn.addEventListener('click', () => {
//     if (isPlaying) {
//         video.pause();
//     } else {
//         video.play();
//     }
// });

video.addEventListener('play', () => {
    isPlaying = true;
    // playPauseBtn.textContent = '';
    miniHook.style.display = 'none'; // Esconde hook ao play
    if (video.currentTime > video.duration * 0.8) { // Mostra CTA no final (80% do vídeo)
        ctaBtn.style.display = 'block';
    }
});

// video.addEventListener('pause', () => {
//     isPlaying = false;
//     playPauseBtn.textContent = '▶';
//     miniHook.style.display = 'block'; // Mostra Mini-Hook no pause (retenção como VTurb)
// });

let timeupdate = 400

// Progress Bar (atualiza em tempo real)
video.addEventListener('timeupdate', () => {
    const currentTime_ = Math.floor(video.currentTime);
    // console.log(currentTime_)
    // const progress = (video.currentTime / video.duration) * timeupdate;
    // progressBar.style.width = progress + '%';

    // if(currentTime >= (ctaTimes[0] - 50) ) {
    //     timeupdate = 45
    // }

    const currentTime = video.currentTime;
    const duration = video.duration;

    // Progresso real
    let realProgress = currentTime / duration; // de 0 a 1
    let fakeProgress;

    // Até 75% do vídeo: acelera
    if (realProgress <= 0.75) {
        fakeProgress = realProgress * (2); // multiplica p/ parecer mais rápido
    } 
    // Depois de 75% do vídeo: desacelera
    else {
        // mapeia os 25% finais do vídeo para apenas 10% da barra
        fakeProgress = 0.9 + ((realProgress - 0.75) / 0.25) * 0.1;
    }

    // Garante que não passa de 100%
    fakeProgress = Math.min(fakeProgress, 1);

    // Atualiza barra
    progressBar.style.width = (fakeProgress * 100) + '%';

    // console.log(currentTime_)

    if (ctaTimes.includes(currentTime_)) {
        ctaBtn.style.display = 'block';
        
        // ctaTimes.add(currentTime_); // Marca como exibido para evitar repetição
    }
});

// Clique na progress bar para seek
// const progressContainer = document.querySelector('.progress-container');
// progressContainer.addEventListener('click', (e) => {
//     const rect = progressContainer.getBoundingClientRect();
//     const pos = (e.clientX - rect.left) / rect.width;
//     video.currentTime = pos * video.duration;
// });

// Volume (toggle mute)
volumeBtn.addEventListener('click', () => {
    video.muted = false;
    isMuted = false;
    volumeBtn.textContent = '🔊';
    volumeBtn.style.display = 'none';
    video.play();
});

// Fullscreen (imersivo como VTurb)
// fullscreenBtn.addEventListener('click', () => {
//     if (video.requestFullscreen) {
//         video.requestFullscreen();
//     } else if (video.webkitRequestFullscreen) {
//         video.webkitRequestFullscreen();
//     } else if (video.msRequestFullscreen) {
//         video.msRequestFullscreen();
//     }
// });

// Esconde controles após inatividade (otimização como VTurb)
let hideTimeout;

// Mostra controles inicialmente e oculta após inatividade
document.addEventListener('DOMContentLoaded', () => {
    customControls.style.opacity = '1'; // Visível ao carregar
});

const handleInteraction = () => {
    customControls.style.opacity = '1';
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        customControls.style.opacity = '0';
    }, 4000);
};

video.addEventListener('mousemove', handleInteraction); // Desktop
window.addEventListener('touchstart', handleInteraction); // Móvel
window.addEventListener('touchmove', handleInteraction); // Móvel (opcional)
window.addEventListener('scroll', handleInteraction, { passive: true });





// Evento no final do vídeo (mostra CTA)
video.addEventListener('ended', () => {
    ctaBtn.style.display = 'block';
});