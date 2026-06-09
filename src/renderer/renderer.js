async function loadAyah() {
    try {
        const response = await fetch("https://api.alquran.cloud/v1/ayah/random/quran-uthmani");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log('API response:', json);
        if (json.data && json.data.text) {
            document.getElementById("ayah").innerText = json.data.text;
        } else {
            document.getElementById("ayah").innerText = "Error: Invalid API response";
        }
    } catch (error) {
        console.error('Error loading ayah:', error);
        document.getElementById("ayah").innerText = "Error loading ayah: " + error.message;
    }
}
loadAyah();
async function fetchBackgroundImage(){
    try {
        const apiKey = 'Sf0R21c2w5dBFEGJYwNEHxOUItHrVf5flWDq6Q8dVDyPRUAylyYmiXc4';
        const randomPage = Math.floor(Math.random() * 100) + 1;
        const apiUrl = `https://api.pexels.com/v1/search?query=nature&per_page=1&page=${randomPage}&orientation=landscape`;
        const response = await fetch(apiUrl, {
        headers: {

Authorization: apiKey
}});
        
        const data = await response.json();
        const imageUrl = data.photos[0].src.large2x;
        document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.0)), url(${imageUrl})`;
    }
    catch (error) {
        console.error('Error fetching background image:', error);
    }
}
fetchBackgroundImage();