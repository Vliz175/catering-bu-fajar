const menuAcara = [
  {
    nama: "Menu Set Prasmanan",
    harga: "Rp0 (Custom)",
    gambar: "img/paket-acara/menu_set_prasmanan.jpeg",
  },
  {
    nama: "Nasi Kuning Bento Karakter",
    harga: "Rp22.500",
    gambar: "img/paket-acara/nasi_kuning_bento_karakter_22,5k.jpeg",
  },
  {
    nama: "Nasi Paket Selapanan Bayi",
    harga: "Rp35.000",
    gambar: "img/paket-acara/nasi_paket_selapanan_bayi_35k.jpeg",
  },
  {
    nama: "Paket Menu Lebaran",
    harga: "Rp0 (Custom)",
    gambar: "img/paket-acara/paket_menu_lebaran.jpeg",
  },
  {
    nama: "Paket Prasmanan per Porsi",
    harga: "Rp35.000",
    gambar: "img/paket-acara/paket_prasmanan_per_porsi_35k.jpeg",
  },
  {
    nama: "Tumini Nasi Kuning Box",
    harga: "Rp30.000",
    gambar: "img/paket-acara/tumini_nasi_kuning_box_30k.jpeg",
  },
  {
    nama: "Tumini Nasi Kuning Komplit",
    harga: "Rp30.000",
    gambar: "img/paket-acara/tumini_nasi_kuning_komplit_30k.jpeg",
  },
  {
    nama: "Tumpeng 17-an",
    harga: "Rp0 (Custom)",
    gambar: "img/paket-acara/tumpeng_17-an.jpeg",
  },
  {
    nama: "Tumpeng Nasi Kuning",
    harga: "Rp0 (Custom)",
    gambar: "img/paket-acara/tumpeng_nasi_kuning.jpeg",
  },
  {
    nama: "Tumpeng Nasi Putih",
    harga: "Rp0 (Custom)",
    gambar: "img/paket-acara/tumpeng_nasi_putih.jpeg",
  },
  {
    nama: "Wajik dan Tetel Manten",
    harga: "Rp0 (Custom)",
    gambar: "img/paket-acara/wajik_dan_tetel_pengantin.jpeg",
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
