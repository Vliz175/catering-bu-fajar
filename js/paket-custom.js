const menuCustom = [
  {
    nama: "Custom Kantor",
    harga: "Mulai Rp 20.000 / pax",
    gambar: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
    deskripsi:
      "Paket fleksibel untuk rapat, gathering, briefing, dan kebutuhan kantor lainnya.",
    isi: [
      "Menu dapat dipilih sendiri",
      "Jumlah porsi fleksibel",
      "Pilihan lauk beragam",
      "Request tingkat kepedasan",
    ],
  },

  {
    nama: "Custom Pernikahan",
    harga: "Sesuai Kebutuhan",
    gambar:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    deskripsi: "Susun menu pernikahan sesuai tema dan anggaran acara Anda.",
    isi: [
      "Menu prasmanan",
      "Pilihan dessert",
      "Pilihan minuman",
      "Request dekorasi meja",
    ],
  },

  {
    nama: "Custom Ulang Tahun",
    harga: "Mulai Rp 25.000 / box",
    gambar:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
    deskripsi:
      "Menu spesial untuk ulang tahun anak maupun dewasa dengan pilihan makanan favorit.",
    isi: ["Snack Box", "Nasi Box", "Puding", "Minuman"],
  },

  {
    nama: "Custom Sekolah",
    harga: "Mulai Rp 15.000 / box",
    gambar:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    deskripsi:
      "Menu sehat dan ekonomis untuk kegiatan sekolah, study tour, maupun acara kelas.",
    isi: ["Menu bergizi", "Porsi siswa", "Minuman", "Buah"],
  },

  {
    nama: "Custom Komunitas",
    harga: "Sesuai Budget",
    gambar:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    deskripsi:
      "Cocok untuk gathering komunitas, organisasi, dan kegiatan sosial.",
    isi: [
      "Jumlah peserta fleksibel",
      "Pilihan menu bebas",
      "Pengiriman lokasi acara",
      "Konsultasi gratis",
    ],
  },

  {
    nama: "Custom Sesuai Budget",
    harga: "Mulai Rp 10.000",
    gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    deskripsi:
      "Punya budget tertentu? Kami bantu menyesuaikan menu terbaik sesuai anggaran Anda.",
    isi: [
      "Budget fleksibel",
      "Menu dapat disesuaikan",
      "Konsultasi gratis",
      "Penawaran khusus",
    ],
  },
];

const menuContainer = document.getElementById("menu-container");

menuCustom.forEach((menu) => {
  const pesan = encodeURIComponent(
    `Halo Catering Bu Fajar, saya tertarik dengan ${menu.nama} dan ingin melakukan konsultasi paket custom.`,
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

          <h4>Fitur Paket:</h4>

          <ul>
            ${menu.isi.map((item) => `<li>${item}</li>`).join("")}
          </ul>

          <a href="https://wa.me/6281233404206?text=${pesan}" target="_blank">
              <button class="order-btn">
                Konsultasi Sekarang
              </button>
          </a>

      </div>

  </div>
  
  `;
});
