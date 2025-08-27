// Detectar se é dispositivo móvel
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Função para mostrar a surpresa
function showSurprise() {
    console.log('🎉 Função showSurprise foi chamada!');
    const surpriseBox = document.getElementById('surpriseBox');
    const button = document.getElementById('magicBtn');
    
    console.log('surpriseBox:', surpriseBox);
    console.log('button:', button);
    
    if (surpriseBox && button) {
        if (!surpriseBox.classList.contains('show')) {
            surpriseBox.classList.add('show');
            button.textContent = '😊 Obrigado por clicar! 💕';
            button.style.background = 'linear-gradient(45deg, #ff9a9e, #fad0c4)';
            
            console.log('✨ Surpresa ativada!');
            
            // Criar corações especiais
            createLoveExplosion();
            
            // Tocar um som de coração (se houver)
            playHeartSound();
            
            // Vibração no celular (se suportado)
            if (isMobile && navigator.vibrate) {
                navigator.vibrate([200, 100, 200]);
            }
        } else {
            console.log('⚠️ Surpresa já estava ativa');
        }
    } else {
        console.error('❌ Elementos não encontrados!');
    }
}

// Adicionar event listener quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM carregado!');
    
    const button = document.getElementById('magicBtn');
    if (button) {
        console.log('✅ Botão encontrado, adicionando event listener');
        
        // Adicionar múltiplos event listeners para garantir que funcione
        button.addEventListener('click', showSurprise);
        button.addEventListener('touchstart', showSurprise);
        
        // Teste visual para confirmar que o botão está responsivo
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        console.log('✅ Event listeners adicionados com sucesso!');
    } else {
        console.error('❌ Botão não encontrado!');
    }
});

// Criar explosão de corações
function createLoveExplosion() {
    const hearts = ['💖', '💕', '💗', '💝', '💓', '❤️', '💜', '🧡'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'love-particle';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = Math.random() * window.innerHeight + 'px';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            
            document.body.appendChild(heart);
            
            // Remover após a animação
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 100);
    }
}

// Função para "tocar" som (visual)
function playHeartSound() {
    const body = document.body;
    body.style.animation = 'none';
    setTimeout(() => {
        body.style.animation = 'heartbeat 0.5s ease-in-out 3';
    }, 10);
}

// Adicionar partículas de amor ao mover o mouse (desktop) ou touch (mobile)
let mouseTrail = [];

if (!isMobile) {
    document.addEventListener('mousemove', function(e) {
        // Limitar a criação de partículas
        if (Math.random() > 0.95) {
            createMouseHeart(e.clientX, e.clientY);
        }
    });
} else {
    // Para dispositivos móveis, usar touch events
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
        if (Math.random() > 0.9) {
            const touch = e.touches[0];
            createMouseHeart(touch.clientX, touch.clientY);
        }
    }, { passive: false });
    
    // Touch start para criar corações
    document.addEventListener('touchstart', function(e) {
        if (Math.random() > 0.8) {
            const touch = e.touches[0];
            createMouseHeart(touch.clientX, touch.clientY);
        }
    });
}

function createMouseHeart(x, y) {
    const hearts = ['💕', '💖', '💗'];
    const heart = document.createElement('div');
    heart.className = 'love-particle';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '12px';
    heart.style.opacity = '0.7';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 3000);
}

// Adicionar efeitos especiais quando a página carrega
window.addEventListener('load', function() {
    // Adicionar classe para animações
    document.body.classList.add('loaded');
    
    // Criar corações iniciais suaves
    setTimeout(() => {
        createWelcomeHearts();
    }, 1000);
    
    // Adicionar efeito de digitação no título
    typeWriterEffect();
});

// Criar corações de boas-vindas
function createWelcomeHearts() {
    const welcomeHearts = ['💝', '🌸', '✨'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'love-particle';
            heart.textContent = welcomeHearts[Math.floor(Math.random() * welcomeHearts.length)];
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '20px';
            heart.style.fontSize = '20px';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 300);
    }
}

// Efeito de digitação no título
function typeWriterEffect() {
    const title = document.querySelector('.title');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const timer = setInterval(() => {
        title.textContent += originalText.charAt(i);
        i++;
        
        if (i > originalText.length) {
            clearInterval(timer);
        }
    }, 150);
}

// Adicionar efeito de hover nos corações flutuantes
document.addEventListener('DOMContentLoaded', function() {
    const floatingHearts = document.querySelectorAll('.heart');
    
    floatingHearts.forEach(heart => {
        heart.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.5)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        heart.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Adicionar mais interatividade - clique nos corações flutuantes
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('heart')) {
        // Criar mini explosão de corações
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const miniHeart = document.createElement('div');
                miniHeart.className = 'love-particle';
                miniHeart.textContent = '💕';
                miniHeart.style.left = e.clientX + (Math.random() - 0.5) * 100 + 'px';
                miniHeart.style.top = e.clientY + (Math.random() - 0.5) * 100 + 'px';
                miniHeart.style.fontSize = '15px';
                
                document.body.appendChild(miniHeart);
                
                setTimeout(() => {
                    if (miniHeart.parentNode) {
                        miniHeart.parentNode.removeChild(miniHeart);
                    }
                }, 3000);
            }, i * 50);
        }
    }
});

// Adicionar animação de entrada suave
document.addEventListener('DOMContentLoaded', function() {
    const messageContainer = document.querySelector('.message-container');
    messageContainer.style.opacity = '0';
    messageContainer.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        messageContainer.style.transition = 'all 1s ease-out';
        messageContainer.style.opacity = '1';
        messageContainer.style.transform = 'translateY(0)';
    }, 500);
});

    
// Função para criar corações periódicos
setInterval(() => {
    if (Math.random() > 0.7) {
        const randomHeart = document.createElement('div');
        randomHeart.className = 'love-particle';
        randomHeart.textContent = '💖';
        randomHeart.style.left = Math.random() * window.innerWidth + 'px';
        randomHeart.style.top = '0px';
        randomHeart.style.fontSize = '16px';
        randomHeart.style.opacity = '0.5';
        
        document.body.appendChild(randomHeart);
        
        setTimeout(() => {
            if (randomHeart.parentNode) {
                randomHeart.parentNode.removeChild(randomHeart);
            }
        }, 3000);
    }
}, 3000);

// Adicionar um pouco de magia extra - mudança de cor de fundo sutil
let colorPhase = 0;
setInterval(() => {
    colorPhase += 0.01;
    const hue1 = (300 + Math.sin(colorPhase) * 20) % 360;
    const hue2 = (320 + Math.cos(colorPhase) * 20) % 360;
    
    document.body.style.background = `linear-gradient(135deg, 
        hsl(${hue1}, 70%, 85%) 0%, 
        hsl(${hue2}, 70%, 90%) 50%, 
        hsl(${hue2}, 70%, 90%) 100%)`;
}, 100);

// Teste final - adicionar um log para confirmar que o script carregou
console.log('🚀 Script carregado completamente!');
console.log('🔍 Teste: document.getElementById("magicBtn"):', document.getElementById('magicBtn'));