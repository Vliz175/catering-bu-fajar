const menuAcara = [
  {
    nama: "Paket Pernikahan",
    harga: "Mulai Rp 35.000 / pax",
    gambar:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    deskripsi:
      "Paket catering lengkap untuk acara pernikahan dengan menu prasmanan dan pelayanan profesional.",
    isi: [
      "Nasi Putih",
      "Ayam Bakar",
      "Daging Rendang",
      "Sayur",
      "Kerupuk",
      "Buah",
      "Air Mineral",
    ],
  },

  {
    nama: "Paket Tasyakuran",
    harga: "Mulai Rp 25.000 / box",
    gambar: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
    deskripsi:
      "Cocok untuk syukuran rumah baru, aqiqah, khitan, dan acara keluarga.",
    isi: [
      "Nasi Putih",
      "Ayam Goreng",
      "Mie Goreng",
      "Tempe Orek",
      "Sambal",
      "Buah",
    ],
  },

  {
    nama: "Paket Ulang Tahun",
    harga: "Mulai Rp 30.000 / box",
    gambar:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
    deskripsi:
      "Menu spesial untuk meramaikan acara ulang tahun keluarga maupun perusahaan.",
    isi: [
      "Nasi Goreng",
      "Ayam Crispy",
      "Sosis",
      "Kentang Goreng",
      "Puding",
      "Minuman",
    ],
  },

  {
    nama: "Paket Rapat Kantor",
    harga: "Mulai Rp 22.000 / box",
    gambar:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800",
    deskripsi:
      "Praktis dan ekonomis untuk meeting, gathering, maupun pelatihan perusahaan.",
    isi: ["Nasi Putih", "Ayam Teriyaki", "Sayur", "Kerupuk", "Air Mineral"],
  },

  {
    nama: "Paket Seminar",
    harga: "Mulai Rp 20.000 / box",
    gambar:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    deskripsi: "Paket hemat untuk seminar, workshop, dan kegiatan kampus.",
    isi: ["Nasi Kotak", "Ayam Goreng", "Mie", "Sambal", "Air Mineral"],
  },

  {
    nama: "Paket Arisan",
    harga: "Mulai Rp 18.000 / box",
    gambar:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    deskripsi:
      "Menu rumahan favorit yang cocok untuk arisan dan kumpul keluarga.",
    isi: ["Nasi Putih", "Ayam Kecap", "Tempe", "Sayur", "Kerupuk"],
  },
];

const menuContainer = document.getElementById("menu-container");

menuAcara.forEach((menu) => {
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
