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
        <footer data-aos='fade-up' className={`mx-auto py-40 bg-slate-900`}>
            <div className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8`}>
                <Heading1 Text={`Mau nongki Hingga Berdiskusi ide seru? atau membicarakan terkait sesuatu yang lain?`} Styling={`text-3xl sm:text-6xl md:text-7xl lg:text-6xl`} />
                <div className={`my-12 mx-auto`}>
                    <Image src={`/img/fotoProfile.jpg`} styleImg={`w-60 rounded-full`}/>
                    <Heading2 Text={'Contact Me'} Styling={`text-2xl mt-5 ml-4 sm:text-4xl lg:text-5xl`}/>
                    <div className={`flex flex-col text-center mt-5`}>
                    <div className={`flex flex-row gap-5`}>
                    <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10`} />
                    </a>
                    <ExternalLink konten={'I Gusti Bagus Putra Pradwi'} href={'https://www.linkedin.com/in/i-gusti-bagus-putra-pradwi/'} styling={`text-xl sm:text-2xl md:text-3xl lg:text-3xl`} />
                    </div>
                    <div className={`flex flex-row gap-5 mt-3`}>
                    <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                    </a>
                    <ExternalLink konten={'I Gusti Bagus Putra Pradwi'} href={'https://x.com/IPradwi'} styling={`text-xl sm:text-2xl md:text-3xl lg:text-3xl`} />
                    </div>     
                    </div>             
                </div>
                </div>
                <div>
                    <Heading1 />
                </div>
        </footer>
    )
}

export default Footer