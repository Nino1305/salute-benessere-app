
document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");

    const days = ["Lunedì (Low Carb)", "Martedì (Ufficio)", "Mercoledì (Low Carb)", "Giovedì (Ufficio)", "Venerdì (Low Carb)", "Sabato (Pizza)", "Domenica (Normale)"];
    const antiStress = ["Respirazione", "Gratitudine", "Stretching"];
    
    let html = "<h2>Piano Settimanale</h2>";
    days.forEach(day => {
        html += `<div class='card'><strong>${day}</strong><br><button onclick="notifyUser('Hai completato il giorno: ${day}')">Segna completato</button></div>`;
    });

    html += "<h2>Obiettivi Antistress</h2>";
    antiStress.forEach(goal => {
        html += `<div class='card'><strong>${goal}</strong><br><button onclick="notifyUser('Hai completato l'attività: ${goal}')">Segna completato</button></div>`;
    });

    html += "<h2>Passi Giornalieri</h2><div class='card'>Passi: 0 / 8000<br><button onclick="notifyUser('Aggiunti 500 passi! Continua così!')">Aggiungi 500 passi</button></div>";

    app.innerHTML = html;
});

function notifyUser(message) {
    if (Notification.permission === "granted") {
        new Notification(message);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(message);
            }
        });
    }
}
