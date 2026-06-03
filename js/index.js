/* =========================
   DATA GALERI MAKANAN
========================= */

const foods = [
  {
    name: "Nasi Goreng",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
  },
  {
    name: "Ayam Bakar",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600",
  },
  {
    name: "Sate Ayam",
    image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=600",
  },
  {
    name: "Bakso",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600",
  },
  {
    name: "Mie Goreng",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
  },
  {
    name: "Rawon",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
  },
  {
    name: "Soto Ayam",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
  },
  {
    name: "Rendang",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
  },
];

/* =========================
   RENDER GALERI
========================= */

const galleryContainer = document.getElementById("gallery-container");

const toggleButton = document.getElementById("toggleGallery");

let expanded = false;

function renderGallery() {
  galleryContainer.innerHTML = "";

  const visibleFoods = expanded ? foods : foods.slice(0, 3);

  visibleFoods.forEach((food) => {
    galleryContainer.innerHTML += `
      <div class="food-card">
        <img src="${food.image}" alt="${food.name}">
        <div class="food-info">
          <h3>${food.name}</h3>
        </div>
      </div>
    `;
  });
}

renderGallery();

toggleButton.addEventListener("click", () => {
  expanded = !expanded;

  toggleButton.textContent = expanded
    ? "Sembunyikan ▲"
    : "Lihat Menu Lainnya ▼";

  renderGallery();
});

/* =========================
   DATA PAKET
========================= */

const paketKategori = [
  {
    title: "Paket Harian",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200",
    link: "paket-harian.html",
    desc: [
      "Menu berganti setiap hari",
      "Cocok untuk kantor dan sekolah",
      "Harga terjangkau",
    ],
  },

  {
    title: "Paket Acara",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200",
    link: "paket-acara.html",
    desc: ["Untuk seminar dan pesta", "Porsi besar", "Kualitas terjamin"],
  },

  {
    title: "Paket Custom",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200",
    link: "paket-custom.html",
    desc: ["Menu sesuai keinginan", "Budget fleksibel", "Konsultasi gratis"],
  },
];

/* =========================
   RENDER PAKET
========================= */

const kategoriContainer = document.getElementById("kategori-container");

paketKategori.forEach((item) => {
  kategoriContainer.innerHTML += `
    <a href="${item.link}" class="kategori-card">

      <img src="${item.image}" alt="${item.title}">

      <div class="kategori-content">

        <h3>${item.title}</h3>

        <ul>
          ${item.desc.map((desc) => `<li>${desc}</li>`).join("")}
        </ul>

        <button>
          Lihat Katalog
        </button>

      </div>

    </a>
  `;
});

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
