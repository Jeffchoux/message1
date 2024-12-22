document.addEventListener("DOMContentLoaded", () => {
    const messageSpans = document.querySelectorAll("#message p span");
    const flamesDiv = document.getElementById("flames");
    const wordDelay = 1000; // Délai entre chaque mot (en ms)
    const disappearDelay = 3000; // Temps avant que les mots commencent à disparaître

    // Faire apparaître les mots au fur et à mesure
    messageSpans.forEach((span, index) => {
        setTimeout(() => {
            span.style.animation = `appear 1s forwards ease`;
        }, wordDelay * index);
    });

    // Faire disparaître les mots au fur et à mesure
    setTimeout(() => {
        messageSpans.forEach((span, index) => {
            setTimeout(() => {
                span.style.animation = `fadeOut 1s forwards ease`;
            }, wordDelay * index);
        });
    }, disappearDelay);

    // Activer les flammes
    setTimeout(() => {
        flamesDiv.style.opacity = 1; // Affiche les flammes
    }, disappearDelay);
});
