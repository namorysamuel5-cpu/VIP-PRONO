// admin/admin.js

function activateVip() {
  const id = document.getElementById("inputId").value.trim();
  if (!id) {
    alert("Veuillez entrer un ID abonné.");
    return;
  }
  alert(
    "ID abonné : " +
      id +
      "
Abonnement VIP activé pour 1 mois.
Status : VIP jusqu'à la fin du mois."
  );
}

function deactivateVip() {
  const id = document.getElementById("inputId").value.trim();
  if (!id) {
    alert("Veuillez entrer un ID abonné.");
    return;
  }
  alert("ID abonné : " + id + "
Abonnement VIP désactivé.");
}

function generateVipKey() {
  const id = document.getElementById("inputIdVip").value.trim();
  if (!id) {
    alert("Veuillez entrer un ID abonné.");
    return;
  }
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "VIP-" + id + "-";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  alert("Clé VIP générée : " + code);
}
