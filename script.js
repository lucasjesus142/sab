// Seletor dos botões dos vídeos
const videoButtons = document.querySelectorAll('.video-button');

// Função para atualizar o iframe do vídeo
function updateVideo(videoId) {
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
}

// Adicionando evento de clique nos botões
videoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoId = button.getAttribute('data-video');
        updateVideo(videoId);
    });
});
