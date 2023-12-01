document.addEventListener("DOMContentLoaded", function () {
    // Tempo desde que o usuário entrou na página
    let startTime = new Date();

    // Dados de Elon Musk
    const elonMuskEarningsPerSecond = 868; // U$ 868
    let elonMuskEarnings = 0;

    // Dados de fome no mundo
    const secondsPerDeath = 4;
    let hungerDeaths = 0;

    // Atualizar os dados a cada segundo
    setInterval(function () {
        // Calcular tempo decorrido
        let currentTime = new Date();
        let elapsedTimeInSeconds = (currentTime - startTime) / 1000;

        // Atualizar ganhos de Elon Musk
        elonMuskEarnings = Math.floor(elapsedTimeInSeconds * elonMuskEarningsPerSecond);
        let elonEarningsElement = document.getElementById("elon-earnings");
        elonEarningsElement.innerHTML = `Ganhou desde sua chegada: <span class="destaque">U$ ${elonMuskEarnings.toLocaleString()}</span>`;

        // Calcular mortes por fome no mundo
        hungerDeaths = Math.floor(elapsedTimeInSeconds / secondsPerDeath);
        let hungerDeathsElement = document.getElementById("hunger-deaths");
        hungerDeathsElement.innerHTML = `Pessoas mortas desde sua chegada: <span class="destaque">${hungerDeaths.toLocaleString()}</span>`;
    }, 1000);
    
});
