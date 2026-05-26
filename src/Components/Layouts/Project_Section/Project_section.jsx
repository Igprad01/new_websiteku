// Section_Project.js
import { useEffect, useRef } from "react";
import Card from "../../Elements/Card/Card";
import Heading1 from "../../Elements/Heading1/Heading1";
import Aos from "aos";
import "aos/dist/aos.css"

const Section_Project = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    })
    
    const sliderRef = useRef(null);
    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -window.innerWidth / 2, behavior: 'smooth' });
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: window.innerWidth / 2, behavior: 'smooth' });
        }
    };
    const stacksInfo = {
        html: { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        css: { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        js: { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        react: { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        vue: { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
        tailwind: { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        excel: { name: 'Excel', icon: '/img/excel.png' },
        lookerstudio: { name: 'Looker Studio', icon: '/img/lookerstudio.svg' },
        figma: { name: 'Figma', icon: '/img/figma.png' },
        laravel: { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
        php: { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
        bootstrap: { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
        mysql: { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        python: { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },

    };
    const daisyuiIcon = 'https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg';

    const card = [
       
        {id:2, title:'Catatanku', teks:'app catatan sederhana merupakan project pertama saya menggunakan laravel dan my sql digunakan untuk menyimpan catatan pribadi', img:'/img/catatanku.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://catatanku-app.vercel.app/', stack: [stacksInfo.laravel, stacksInfo.mysql, stacksInfo.php]},
        {id:3, title:'To Do List', teks:'aplikasi to do list sederhana merupakan project pertama saya menggunakan laravel dan my sql digunakan untuk menyimpan catatan pribadi', img:'/img/todolist.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://tododolist-app.vercel.app/', stack: [stacksInfo.laravel, stacksInfo.mysql, stacksInfo.php]},
         {id:4, title:'Sistem Parkir Mall', teks:'aplikasi sistem parkir mall merupakan project pertama saya menggunakan laravel dan my sql digunakan untuk menyimpan catatan pribadi', img:'/img/sistemparkirmall.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://sistemparkirmall.vercel.app/', stack: [stacksInfo.laravel, stacksInfo.mysql, stacksInfo.php]},
        {id:5, title:'Digital Idul Fitri & THR', teks:'Website seru-seruan buat ngucapin Selamat Idul Fitri. Nggak cuma banner ucapan biasa, di sini juga ada tombol rahasia yang isinya link Dana Kaget buat bagi-bagi THR beneran ke teman-teman!',img:'/img/idulFitri.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://idulfitri-nine.vercel.app/', stack: [stacksInfo.react, stacksInfo.tailwind, {name: 'DaisyUI', icon: daisyuiIcon}]},
         {id:6, title:'Visualisasi Peta Persebaran Gempa Di Jawa Barat ', teks:'Sebuah Project kelompok bersama temen-temen kuliah dengan tema visualisasi data gempa di Jawa Barat menggunakan data dump dari kaggle.com', img:'/img/peta.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://datastudio.google.com/s/qA_-MnGtm-Q', stack: [stacksInfo.lookerstudio, stacksInfo.excel]},
        {id:7, title:'App Patungan Makan', teks:'Suka pusing kalau habis nongkrong tapi bingung ngitung patungan? Nah, web app sederhana ini saya bikin khusus buat ngitung tagihan makan/nongkrong bareng supaya lebih cepat, gampang, dan adil.', img:'/img/Apppatungan.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://patunganapp.vercel.app/', stack: [stacksInfo.vue, stacksInfo.tailwind]},
         {id:8, title:'Slicing Landing Page Manajemen Kontrak', teks:'website dibuat ulang dengan desain yang lebih modern dan responsif dengan sumber dari desain yang saya dapat dari dribble', img:'/img/slicingdesain.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://slicing-website-two.vercel.app/', stack: [stacksInfo.vue, stacksInfo.tailwind]},
        {id:9, title:'Auto Random Color', teks:'Proyek iseng untuk belajar eksplorasi logika Javascript. Website ini langsung ngasih kombinasi warna-warna acak yang unik di layar cuma bermodal sekali klik. Simpel, tapi seru buat dilihat.', img:'/img/randomColor.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://auto-random-color.vercel.app/', stack: [stacksInfo.html, stacksInfo.css, stacksInfo.js]},
         {id:10, title:'Portofolio Versi Lama', teks:'Website portofolio pertama yang saya buat waktu awal-awal ngoding. Cocok buat nostalgia ngeliat skill dasar front-end dan beberapa project lawas saya.', img:'/img/newPortofolio.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://putrapradwi.vercel.app/', stack: [stacksInfo.html, stacksInfo.css, stacksInfo.js]},
    ]

    return (
        <div data-aos="fade-up" className={`container mx-auto px-4 py-8  sm:px-6 lg:px-8`} id="project">
            <Heading1 Text={`Project`} Styling={`text-center text-2xl capitalize mb-10 sm:text-3xl md:text-4xl lg:text-5xl`}/>
            <div className="relative group">
                <button onClick={slideLeft} className="absolute left-0 sm:left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-primary hover:text-white p-2 sm:p-3 rounded-full text-slate-300 shadow-xl backdrop-blur-sm transition-all opacity-70 hover:opacity-100 sm:opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                </button>
                <button onClick={slideRight} className="absolute right-0 sm:right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-primary hover:text-white p-2 sm:p-3 rounded-full text-slate-300 shadow-xl backdrop-blur-sm transition-all opacity-70 hover:opacity-100 sm:opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </button>
                <div ref={sliderRef} className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {card.map((card)=>(
                        <div key={card.id} className="snap-center shrink-0 w-[90vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw]">
                            <Card Title={card.title} Teks={card.teks} Imgsrc={card.img} styleImage={`w-full h-52 sm:h-64 object-cover object-top mx-auto rounded-xl`} styleHeading={`font-bold mt-4 mb-3 text-center text-xl sm:text-xl md:text-2xl`} StyleKalimat={`mt-3 mb-4 text-justify text-slate-300 text-sm sm:text-base md:text-lg`} styleButton={card.stylingklik} textbutton={card.kalimatButton} Link={card.link} stack={card.stack}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section_Project;
