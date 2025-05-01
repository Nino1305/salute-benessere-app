
document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");

    const days = ["Lunedì (Low Carb)", "Martedì (Ufficio)", "Mercoledì (Low Carb)", "Giovedì (Ufficio)", "Venerdì (Low Carb)", "Sabato (Pizza)", "Domenica (Normale)"];
    const antiStress = ["Respirazione", "Gratitudine", "Stretching"];
    
    let html = "<h2>Piano Settimanale</h2>";
    days.forEach(day => {
        html += `<div class='card'><strong>${day}</strong><br><button>Segna completato</button></div>`;
    });

    html += "<h2>Obiettivi Antistress</h2>";
    antiStress.forEach(goal => {
        html += `<div class='card'><strong>${goal}</strong><br><button>Segna completato</button></div>`;
    });

    html += "<h2>Passi Giornalieri</h2><div class='card'>Passi: 0 / 8000<br><button>Aggiungi 500 passi</button></div>";

    app.innerHTML = html;
});
