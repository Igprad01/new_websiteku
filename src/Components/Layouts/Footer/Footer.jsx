import React, { useEffect } from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Heading2 from "../../Elements/Heading2/Heading2";
import ExternalLink from "../../Elements/ExternalLink/Link";
import Aos from "aos";
import "aos/dist/aos.css"
import Image from "../../image/Image";
const Footer = () =>{
    useEffect(() => {
        Aos.init({duration:2000});
    })

    return (
        <footer data-aos='fade-up' className={`mx-auto py-40 bg-slate-500`}>
            <div className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8`}>
                <Heading1 Text={`Mau nongki Hingga Berdiskusi ide seru? atau membicarakan terkait sesuatu yang lain?`} Styling={`text-3xl sm:text-6xl md:text-7xl lg:text-7xl`} />
                <div className={`my-12`}>
                    <Image src={`/src/image/marin.png`} styleImg={`w-60 rounded-full`}/>
                    <Heading2 Text={'Contact Me'} Styling={`text-xl mt-5`}/>
                    <div className={``}>
                    <ExternalLink konten={'I Gusti Bagus Putra Pradwi'} href={''} styling={`text-black`} />                    </div>
                    <div className={``}>
                    <ExternalLink konten={'I Gusti Bagus Putra Pradwi'} href={''} styling={`text-black`} />                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer