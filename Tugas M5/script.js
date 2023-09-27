// Import pustaka Leaflet
var map = L.map('map').setView([51.505, -0.09], 13); // Atur koordinat awal dan tingkat zoom

// Tambahkan layer peta dari penyedia peta tertentu, misalnya OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Atur tinggi peta sesuai dengan tinggi layar saat ini
function setMapHeight() {
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.getElementById('map').style.height = (windowHeight - 50) + 'px'; // Sesuaikan tinggi dengan kebutuhan Anda
}

// Panggil fungsi setMapHeight saat halaman dimuat dan saat ukuran layar berubah
setMapHeight();
window.addEventListener('resize', setMapHeight);
