export function initChronometre() {
    const chronometre = document.getElementById("chronometre");

    let secondes = 0;
    let minutes = 0;

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    const updateChronometre = () => {
        chronometre.innerText = `${formatTime(minutes)}:${formatTime(secondes)}`;
        if (minutes >= 10) {
            chronometre.style.color = "red";
        }
    };

    const intervalId = setInterval(() => {
        secondes++;
        
        if (secondes === 60) {
            secondes = 0;
            minutes++;
        }

        updateChronometre();

        localStorage.setItem("seconds_chrono", secondes);
        localStorage.setItem("minutes_chrono", minutes);
    }, 1000);

    const secondsChrono = localStorage.getItem("seconds_chrono");
    const minutesChrono = localStorage.getItem("minutes_chrono");

    if (secondsChrono !== null && minutesChrono !== null) {
        secondes = parseInt(secondsChrono);
        minutes = parseInt(minutesChrono);
        updateChronometre();
    }

    return () => {
        secondes = 0;
        minutes = 0;
        updateChronometre();
        localStorage.setItem("seconds_chrono", secondes);
        localStorage.setItem("minutes_chrono", minutes);
    };
}