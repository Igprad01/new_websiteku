import Card from "../../Elements/Card/Card";
import SectionHeading from "../../Elements/SectionHeading/SectionHeading";

const Section_Project = () => {
  const projects = [
    { id: 1, title: "Financial Bot", desc: "Bot Telegram pencatatan keuangan otomatis, terhubung database untuk manajemen finansial harian.", img: "/img/financialku.webp", link: "https://t.me/keuanganpribadiku_bot", stack: ["Telegram", "Next.js", "MySQL"] },
    { id: 2, title: "Catatanku", desc: "Aplikasi catatan pribadi berbasis Laravel dan MySQL.", img: "/img/catatanku.webp", link: "https://github.com/Igprad01", stack: ["Laravel", "PHP", "MySQL"] },
    { id: 3, title: "To Do List", desc: "Aplikasi to-do list sederhana dengan Laravel dan MySQL.", img: "/img/todolist.webp", link: "https://github.com/Igprad01", stack: ["Laravel", "PHP", "MySQL"] },
    { id: 4, title: "Sistem Parkir Mall", desc: "Aplikasi pengelolaan sistem parkir mall menggunakan Laravel dan MySQL.", img: "/img/sistemparkirmall.webp", link: "https://github.com/Igprad01", stack: ["Laravel", "PHP", "MySQL"] },
    { id: 5, title: "Digital Idul Fitri & THR", desc: "Website ucapan Idul Fitri interaktif dengan tombol rahasia untuk berbagi THR.", img: "/img/idulFitri.webp", link: "https://idulfitri-nine.vercel.app/", stack: ["React", "Tailwind"] },
    { id: 6, title: "Landing Page", desc: "Landing page untuk project client tugas kuliah.", img: "/img/Landing_page_burger.webp", link: "https://landing-page-project-client-tugas-kuliah.vercel.app/", stack: ["HTML", "CSS", "JS"] },
    { id: 7, title: "Peta Gempa Jawa Barat", desc: "Visualisasi data gempa di Jawa Barat menggunakan data dari Kaggle.", img: "/img/peta.webp", link: "https://datastudio.google.com/s/qA_-MnGtm-Q", stack: ["Looker", "Excel"] },
    { id: 8, title: "App Patungan Makan", desc: "Web app penghitung patungan tagihan makan secara cepat dan adil.", img: "/img/Apppatungan.webp", link: "https://patunganapp.vercel.app/", stack: ["Vue", "Tailwind"] },
    { id: 9, title: "Slicing Desain Website", desc: "Website yang dibangun ulang dengan desain modern dan responsif.", img: "/img/slicingdesain.webp", link: "https://slicing-website-two.vercel.app/", stack: ["Vue", "Tailwind"] },
    { id: 10, title: "Auto Random Color", desc: "Generator kombinasi warna acak untuk eksplorasi logika JavaScript.", img: "/img/randomColor.webp", link: "https://auto-random-color.vercel.app/", stack: ["HTML", "CSS", "JS"] },
    { id: 11, title: "Program Kasir", desc: "Sistem kasir sederhana berbasis bahasa pemrograman C++.", img: "/img/kasir_sederhana.webp", link: "https://github.com/Igprad01/kasir-Sederhana-CPP", stack: ["C++"] },
    { id: 12, title: "Pemesanan Tiket Kereta", desc: "Sistem pemesanan tiket kereta api berbasis bahasa pemrograman C++.", img: "/img/kereta_api.webp", link: "https://github.com/Igprad01/Railway-Ticket-Booking-System-CPP", stack: ["C++"] },
  ];

  return (
    <section id="project" className="py-24 sm:py-32 border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-[1fr_2fr] gap-x-14 gap-y-10">
        <div className="lg:sticky lg:top-24 self-start">
          <SectionHeading
            num="02"
            title="Project"
            desc="Sebagian karya yang saya bangun — dari sistem internal hingga produk berbasis web untuk kebutuhan harian."
          />
          <a href="https://github.com/Igprad01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.2em] text-[#8a8a8a] hover:text-[#f2f0ea] transition-colors">
            GitHub <span className="h-px w-8 bg-[#c8a24b]/50"></span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.id} Title={p.title} Teks={p.desc} Imgsrc={p.img} link={p.link} stack={p.stack} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_Project;