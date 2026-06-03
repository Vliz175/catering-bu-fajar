const menuHarian = [
  {
    nama: "Pecel",
    harga: "Rp 15.000",
    gambar:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    deskripsi:
      "Menu tradisional khas Jawa dengan sayuran segar dan sambal kacang.",
    isi: ["Nasi Putih", "Sayuran Pecel", "Sambal Kacang", "Rempeyek"],
  },

  {
    nama: "Nasi Kuning",
    harga: "Rp 18.000",
    gambar:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    deskripsi: "Nasi kuning gurih cocok untuk sarapan maupun acara spesial.",
    isi: ["Nasi Kuning", "Telur Balado", "Kering Tempe", "Mie Goreng", "Timun"],
  },

  {
    nama: "Ayam Geprek",
    harga: "Rp 20.000",
    gambar: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800",
    deskripsi: "Ayam crispy dengan sambal pedas yang menggugah selera.",
    isi: ["Nasi Putih", "Ayam Geprek", "Sambal", "Lalapan"],
  },

  {
    nama: "Nasi Goreng",
    harga: "Rp 18.000",
    gambar:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    deskripsi: "Nasi goreng spesial dengan cita rasa khas rumahan.",
    isi: ["Nasi Goreng", "Telur", "Kerupuk", "Acar"],
  },

  {
    nama: "Sego Sambel",
    harga: "Rp 20.000",
    gambar: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    deskripsi: "Menu favorit dengan sambal khas dan lauk pilihan.",
    isi: ["Nasi Putih", "Ayam Goreng", "Sambal", "Tahu Tempe", "Lalapan"],
  },

  {
    nama: "Nasi Rames",
    harga: "Rp 17.000",
    gambar:
      "https://img-global.cpcdn.com/recipes/5e9571c2b6870b01/1200x630cq80/photo.jpg",
    deskripsi: "Paket lengkap dengan berbagai lauk dan sayuran.",
    isi: ["Nasi Putih", "Ayam Suwir", "Tempe Orek", "Sayur", "Sambal"],
  },
];

const menuContainer = document.getElementById("menu-container");

menuHarian.forEach((menu) => {
  const pesan = encodeURIComponent(
    `Halo Catering Bu Fajar, saya ingin memesan ${menu.nama}.`,
  );

  menuContainer.innerHTML += `
  
  <div class="food-card">

      <img src="${menu.gambar}" alt="${menu.nama}">

      <div class="food-info">

          <h3>${menu.nama}</h3>

          <strong>${menu.harga}</strong>

          <p class="menu-desc">
              ${menu.deskripsi}
          </p>

          <h4>Isi Paket:</h4>

          <ul>
              ${menu.isi.map((item) => `<li>${item}</li>`).join("")}
          </ul>

          <a
            href="https://wa.me/6281233404206?text=${pesan}"
            target="_blank"
          >
            <button class="order-btn">
              Pesan Sekarang
            </button>
          </a>

      </div>

  </div>

  `;
});
