// Section_Project.js
import { useEffect } from "react";
import Card from "../../Elements/Card/Card";
import Heading1 from "../../Elements/Heading1/Heading1";
import Aos from "aos";
import "aos/dist/aos.css"

const Section_Project = () => {
    useEffect(() => {
        Aos.init({duration:2000});
    })
    const stacksInfo = {
        html: { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        css: { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        js: { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        react: { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        vue: { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
        tailwind: { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    };
    const daisyuiIcon = 'https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg';

    const card = [
        {id:1, title:'Portofolio Versi Lama', teks:'Website portofolio pertama yang saya buat waktu awal-awal ngoding. Cocok buat nostalgia ngeliat skill dasar front-end dan beberapa project lawas saya.', img:'/img/newPortofolio.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://putrapradwi.vercel.app/', stack: [stacksInfo.html, stacksInfo.css, stacksInfo.js]},
        {id:2, title:'Digital Idul Fitri & THR', teks:'Website seru-seruan buat ngucapin Selamat Idul Fitri. Nggak cuma banner ucapan biasa, di sini juga ada tombol rahasia yang isinya link Dana Kaget buat bagi-bagi THR beneran ke teman-teman!',img:'/img/idulFitri.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://idulfitri-nine.vercel.app/', stack: [stacksInfo.react, stacksInfo.tailwind, {name: 'DaisyUI', icon: daisyuiIcon}]},
        {id:3, title:'App Patungan Makan', teks:'Suka pusing kalau habis nongkrong tapi bingung ngitung patungan? Nah, web app sederhana ini saya bikin khusus buat ngitung tagihan makan/nongkrong bareng supaya lebih cepat, gampang, dan adil.', img:'/img/Apppatungan.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://patunganapp.vercel.app/', stack: [stacksInfo.vue, stacksInfo.tailwind]},
        {id:4, title:'Auto Random Color', teks:'Proyek iseng untuk belajar eksplorasi logika Javascript. Website ini langsung ngasih kombinasi warna-warna acak yang unik di layar cuma bermodal sekali klik. Simpel, tapi seru buat dilihat.', img:'/img/randomColor.png', stylingklik:'btn btn-outline btn-primary btn-sm sm:btn-md lg:btn-wide', kalimatButton:'Lihat Project', link:'https://auto-random-color.vercel.app/', stack: [stacksInfo.html, stacksInfo.css, stacksInfo.js]},
    ]

    return (
        <div data-aos="fade-up" className={`container mx-auto px-4 py-8  sm:px-6 lg:px-8`} id="project">
            <Heading1 Text={`Project`} Styling={`text-center text-2xl capitalize mb-10 sm:text-3xl md:text-4xl lg:text-5xl`}/>
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 `}>
                {card.map((card)=>(
                    <Card key={card.id} Title={card.title} Teks={card.teks} Imgsrc={card.img} styleImage={`w-full sm:w-3/4 mx-auto rounded-xl object-cover`} styleHeading={`font-bold mt-4 mb-3 text-center text-xl sm:text-xl md:text-2xl`} StyleKalimat={`mt-3 mb-4 text-justify text-slate-300 text-sm sm:text-base md:text-lg`} styleButton={card.stylingklik} textbutton={card.kalimatButton} Link={card.link} stack={card.stack}/>
                ))}
            </div>
        </div>
    );
};

export default Section_Project;
