const menuCustom = [
  {
    nama: "Aneka Lauk",
    harga: "Rp0 (Custom)",
    gambar: "img/paket-custom/aneka_lauk.jpeg",
  },
  {
    nama: "Ayam dan Paru Ukep",
    harga: "Rp0 (Custom)",
    gambar: "img/paket-custom/ayam dan paru ukep.jpeg",
  },
  {
    nama: "Bubur Sengkolo",
    harga: "Rp0 (Custom)",
    gambar: "img/paket-custom/bubur_sengkolo.jpeg",
  },
  {
    nama: "Es Podeng Manten",
    harga: "Rp10.000",
    gambar: "img/paket-custom/es_podeng_manten_10k.jpeg",
  },
  {
    nama: "Gurami Asam Manis",
    harga: "Rp75.000",
    gambar: "img/paket-custom/gurami_asam_manis_75k.jpeg",
  },
  {
    nama: "Jajanan Pasar",
    harga: "Rp0 (Custom)",
    gambar: "img/paket-custom/jajan_pasar.jpeg",
  },
  {
    nama: "Polo Pendem",
    harga: "Rp0 (Custom)",
    gambar: "img/paket-custom/polo_pendem.jpeg",
  },
  {
    nama: "Rujak Manis",
    harga: "Rp15.000",
    gambar: "img/paket-custom/rujak_manis_15k.jpeg",
  },
  {
    nama: "Siomay Bandung",
    harga: "Rp20.000",
    gambar: "img/paket-custom/siomay_bandung_20k.jpeg",
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

          <a href="https://wa.me/6281233404206?text=${pesan}" target="_blank">
              <button class="order-btn">
                Pesan Sekarang
              </button>
          </a>

      </div>

  </div>
  
  `;
});
