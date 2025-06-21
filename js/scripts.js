document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
});

document.addEventListener('scroll', function() {
    const waterEffect = document.querySelector('.water-effect');
    const scrollPosition = window.scrollY;
    waterEffect.style.animationDuration = `${5 - scrollPosition / 1000}s`; // Acelera a animação ao rolar
});
