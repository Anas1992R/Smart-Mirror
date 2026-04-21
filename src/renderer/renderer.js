async function loadAyah() {
    const ayah = await fetch("https://api.alquran.cloud/v1/ayah/random/quran-uthmani");
    const json = await ayah.json();
    document.getElementById("ayah").innerText = "TEST";
}
loadAyah();