// Khởi tạo bản đồ
const map = L.map('map').setView([21.0333, 105.8142], 14); // Tọa độ trung tâm Ba Đình

// Thêm tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Thêm tuyến đường thu gom (tuyến mẫu)
const routeCoordinates = [
    [21.0381, 105.8263], // Điểm A
    [21.0355, 105.8215], // Điểm B
    [21.0335, 105.8150], // Điểm C
    [21.0308, 105.8089]  // Điểm D
];

const route = L.polyline(routeCoordinates, { color: 'blue', weight: 5 })
    .addTo(map)
    .bindPopup('Tuyến thu gom chất thải rắn');

map.fitBounds(route.getBounds());
