// js/main.js

console.log("Site Pronostics VIP chargé ✅");

const RAPIDAPI_KEY = "3cd29afeecmsh8c9e9af9902d308p101953jsnaa524d569495";
const API_HOST = "flashscore-api.p.rapidapi.com";
)
const API_URL = `https://flashscore-api.p.rapidapi.com/get-fixtures?date=today`;

async function fetchMatches() {
  const status = document.getElementById("live-scores-status");
  const matchesDiv = document.getElementById("matches");

  status.textContent = "Chargement des matchs...";

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": RAPIDAPI_KEY,
        "x-rapidapi-host": API_HOST,
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
)
    status.textContent = "Live Scores";
 
    const matchesList = data.matches || data.data || [];

    if (matchesList.length > 0) {
      matchesDiv.innerHTML = "";

      matchesList.forEach((match) => {
        const homeTeam = match.homeTeam || "Inconnu";
        const awayTeam = match.awayTeam || "Inconnu";
        const league = match.league || "League";
        const homeScore = match.homeScore || "0";
        const awayScore = match.awayScore || "0";

        const matchEl = document.createElement("div");
        matchEl.className = "match-item";
        matchEl.style.margin = "8px 0";
        matchEl.style.padding = "10px";
        matchEl.style.border = "1px solid #ddd";
        matchEl.style.borderRadius = "6px";

        matchEl.innerHTML = `
          <strong>${homeTeam} vs ${awayTeam}</strong><br/>
          ${league} - Score : ${homeScore} - ${awayScore}<br/>
        `;
        matchesDiv.appendChild(matchEl);
      });
    } else {
      matchesDiv.innerHTML = "<p>Aucun match disponible pour l'instant.</p>";
    }
  } catch (error) {
    console.error("Erreur lors du chargement des matchs :", error);
    status.textContent = "Échec du chargement des matchs.";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  fetchMatches();
});
