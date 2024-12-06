// Khởi tạo bản đồ
const map = L.map('map').setView([21.0333, 105.8142], 14); // Tọa độ trung tâm Ba Đình

// Thêm tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sử dụng Leaflet Routing Machine để định tuyến
L.Routing.control({
    waypoints: [
        L.latLng(21.0381, 105.8263), // Điểm bắt đầu (Ví dụ: Đường Hoàng Hoa Thám)
        L.latLng(21.0335, 105.8150), // Điểm giữa (Ví dụ: Phố Kim Mã)
        L.latLng(21.0308, 105.8089)  // Điểm kết thúc (Ví dụ: Đường Đội Cấn)
    ],
    routeWhileDragging: true,
    language: 'vi' // Đặt ngôn ngữ là tiếng Việt
}).addTo(map);
