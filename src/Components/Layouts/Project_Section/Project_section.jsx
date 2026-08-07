// Section_Project.js
import { useEffect } from "react";
import Card from "../../Elements/Card/Card";
import Heading2 from "../../Elements/Heading2/Heading2";
import Aos from "aos";
import "aos/dist/aos.css";

const Section_Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const stacksInfo = {
    html: {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    css: {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    js: {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    react: {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    vue: {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    },
    tailwind: {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    excel: { name: "Excel", icon: "/img/excel.webp" },
    lookerstudio: { name: "Looker Studio", icon: "/img/lookerstudio.svg" },
    figma: { name: "Figma", icon: "/img/figma.webp" },
    laravel: {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    },
    php: {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    },
    bootstrap: {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    mysql: {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    python: {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    nextjs: {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    telegram: {
      name: "Telegram Bot",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    },
    arduino: { name: "Arduino", icon: "/Logo/arduino.webp" },
    c: {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
  };
  const daisyuiIcon =
    "https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg";

  const card = [
    {
      id: 0,
      title: "Financial Bot",
      teks: "Bot Telegram untuk pencatatan keuangan otomatis yang terintegrasi dengan database untuk memudahkan manajemen finansial.",
      img: "/img/financialku.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Project",
      link: "https://t.me/keuanganpribadiku_bot",
      stack: [stacksInfo.telegram, stacksInfo.nextjs, stacksInfo.mysql],
    },
    {
      id: 1,
      title: "Catatanku",
      teks: "app catatan sederhana merupakan project pertama saya menggunakan laravel dan my sql digunakan untuk menyimpan catatan pribadi",
      img: "/img/catatanku.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Project",
      link: "#",
      stack: [stacksInfo.laravel, stacksInfo.mysql, stacksInfo.php],
    },
    {
      id: 3,
      title: "To Do List",
      teks: "aplikasi to do list sederhana merupakan project pertama saya menggunakan laravel dan my sql digunakan untuk menyimpan catatan pribadi",
      img: "/img/todolist.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Project",
      link: "#",
      stack: [stacksInfo.laravel, stacksInfo.mysql, stacksInfo.php],
    },
    {
      id: 4,
      title: "Sistem Parkir Mall",
      teks: "aplikasi sistem parkir mall merupakan project pertama saya menggunakan laravel dan my sql digunakan untuk menyimpan catatan pribadi",
      img: "/img/sistemparkirmall.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Project",
      link: "#",
      stack: [stacksInfo.laravel, stacksInfo.mysql, stacksInfo.php],
    },
    {
      id: 5,
      title: "Digital Idul Fitri & THR",
      teks: "Website seru-seruan buat ngucapin Selamat Idul Fitri. Nggak cuma banner ucapan biasa, di sini juga ada tombol rahasia yang isinya link Dana Kaget buat bagi-bagi THR beneran ke teman-teman!",
      img: "/img/idulFitri.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Project",
      link: "https://idulfitri-nine.vercel.app/",
      stack: [
        stacksInfo.react,
        stacksInfo.tailwind,
        { name: "DaisyUI", icon: daisyuiIcon },
      ],
    },
    {
      id: 6,
      title: "Landing Page",
      teks: "Website Landing Page project client tugas kuliah",
      img: "/img/landing_page_burger.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Project",
      link: "https://landing-page-project-client-tugas-kuliah.vercel.app/",
      stack: [stacksInfo.HTML, stacksInfo.bootstrap, stacksInfo.js],
    },
    {
      id: 7,
      title: "Visualisasi Peta Persebaran Gempa Di Jawa Barat ",
      teks: "Sebuah Project kelompok bersama temen-temen kuliah dengan tema visualisasi data gempa di Jawa Barat menggunakan data dump dari kaggle.com",
      img: "/img/peta.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Project",
      link: "https://datastudio.google.com/s/qA_-MnGtm-Q",
      stack: [stacksInfo.lookerstudio, stacksInfo.excel],
    },
    {
      id: 8,
      title: "App Patungan Makan",
      teks: "Suka pusing kalau habis nongkrong tapi bingung ngitung patungan? Nah, web app sederhana ini saya bikin khusus buat ngitung tagihan makan/nongkrong bareng supaya lebih cepat, gampang, dan adil.",
      img: "/img/Apppatungan.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Project",
      link: "https://patunganapp.vercel.app/",
      stack: [stacksInfo.vue, stacksInfo.tailwind],
    },
    {
      id: 8,
      teks: "website dibuat ulang dengan desain yang lebih modern dan responsif dengan sumber dari desain yang saya dapat dari dribble",
      img: "/img/slicingdesain.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Project",
      link: "https://slicing-website-two.vercel.app/",
      stack: [stacksInfo.vue, stacksInfo.tailwind],
    },
    {
      id: 9,
      title: "Auto Random Color",
      teks: "Proyek iseng untuk belajar eksplorasi logika Javascript. Website ini langsung ngasih kombinasi warna-warna acak yang unik di layar cuma bermodal sekali klik. Simpel, tapi seru buat dilihat.",
      img: "/img/randomColor.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Project",
      link: "https://auto-random-color.vercel.app/",
      stack: [stacksInfo.html, stacksInfo.css, stacksInfo.js],
    },
    {
      id: 10,
      title: "Portofolio Versi Lama",
      teks: "Website portofolio pertama yang saya buat waktu awal-awal ngoding. Cocok buat nostalgia ngeliat skill dasar front-end dan beberapa project lawas saya.",
      img: "/img/newPortofolio.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Project",
      link: "https://putrapradwi.vercel.app/",
      stack: [stacksInfo.html, stacksInfo.css, stacksInfo.js],
    },
    {
      id: 11,
      title: "Program Kasir",
      teks: "Implementasi sistem kasir menggunakan bahasa pemrograman c++",
      img: "/img/kasir_sederhana.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Repository",
      link: "https://github.com/Igprad01/kasir-Sederhana-CPP",
      stack: [stacksInfo.c],
    },
    {
      id: 12,
      title: "Program Pemesanan Tiket Kereta Api",
      teks: "Implementasi sistem pemesanan tiket kereta api menggunakan bahasa pemrograman c++",
      img: "/img/kereta_api.webp",
      stylingklik: "btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide",
      kalimatButton: "Lihat Repository",
      link: "https://github.com/Igprad01/Railway-Ticket-Booking-System-CPP",
      stack: [stacksInfo.c],
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8`}
      id="project"
    >
      <Heading2
        Text={`Project`}
        Styling={`text-center text-2xl capitalize mb-10 sm:text-3xl md:text-4xl lg:text-5xl`}
      />
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {card.map((card) => (
          <div key={card.id} className="h-full">
            <Card
              Title={card.title}
              Teks={card.teks}
              Imgsrc={card.img}
              styleImage={`w-full h-44 sm:h-52 object-contain mx-auto rounded-xl`}
              styleHeading={`font-bold mt-4 mb-3 text-center text-lg sm:text-xl`}
              StyleKalimat={`mt-3 mb-4 text-justify text-slate-300 text-sm`}
              styleButton={card.stylingklik}
              textbutton={card.kalimatButton}
              Link={card.link}
              stack={card.stack}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_Project;
