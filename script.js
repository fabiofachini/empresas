// Inicializa o mapa
var map = L.map('map').setView([-15.7797, -47.9297], 4); // Centro aproximado do Brasil

// Adiciona tiles do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Marcadores de exemplo
const empresas = [
  { nome: "Mercado Exemplo", cidade: "São Paulo", uf: "SP", lat: -23.5505, lng: -46.6333 },
  { nome: "Tech Soluções", cidade: "Belo Horizonte", uf: "MG", lat: -19.9167, lng: -43.9345 },
  { nome: "Construtora XYZ", cidade: "Rio de Janeiro", uf: "RJ", lat: -22.9068, lng: -43.1729 },
];

// Adiciona marcadores no mapa
empresas.forEach(emp => {
  L.marker([emp.lat, emp.lng])
    .addTo(map)
    .bindPopup(`<strong>${emp.nome}</strong><br>${emp.cidade} - ${emp.uf}`);
});
