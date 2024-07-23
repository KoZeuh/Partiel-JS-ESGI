import { initChronometre } from './chronometre.js';
import { initVideo } from './video.js';
import { initSecretCode } from './secretCode.js';

window.addEventListener("load", (event) => {
    // Exercice 1
    const chapitresCompteur = document.getElementById("chapitresCompteur");
    const content = document.getElementById("content");
    const articles = content.getElementsByTagName("article");

    chapitresCompteur.innerText = articles.length;

    // Exercice 2 & 5
    const resetChronometre = initChronometre();

    // Exercice 3
    for (let article of articles) {
        const paragraphs = article.getElementsByTagName("p");

        for (let paragraph of paragraphs) {
            paragraph.style.display = "none";
        }

        article.addEventListener("click", (event) => {
            for (let paragraph of paragraphs) {
                paragraph.style.display = "block";
            }

            for (let otherArticle of articles) {
                if (otherArticle !== article) {
                    const otherParagraphs = otherArticle.getElementsByTagName("p");
                    for (let otherParagraph of otherParagraphs) {
                        otherParagraph.style.display = "none";
                    }
                }
            }
        });
    }

    // Exercice 4
    initVideo();

    // Exercice 6
    const videoMedia = document.getElementById("video-media");
    initSecretCode(articles, videoMedia, resetChronometre);
});