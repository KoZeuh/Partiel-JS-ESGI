export function initSecretCode(articles, videoMedia, resetChronometre) {
    const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let inputSequence = [];

    document.addEventListener('keydown', (event) => {
        inputSequence.push(event.key);
        if (inputSequence.length > secretCode.length) {
            inputSequence.shift();
        }

        if (inputSequence.join('') === secretCode.join('')) {
            inputSequence = [];

            videoMedia.currentTime = 0;
            resetChronometre();

            for (let article of articles) {
                const paragraphs = article.getElementsByTagName("p");
                for (let paragraph of paragraphs) {
                    paragraph.style.display = "none";
                }
            }
        }
    });
}