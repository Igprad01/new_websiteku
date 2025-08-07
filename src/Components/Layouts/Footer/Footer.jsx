import  { useEffect } from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
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
 
                </div>
                </div>
        </footer>
    )
}

export default Footer

// nanti dikembangin lagi mengenai footer.