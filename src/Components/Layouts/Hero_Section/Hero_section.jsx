import React from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Heading2 from "../../Elements/Heading2/Heading2";
import Kalimat from "../../Elements/Paragraph/Paragraph";

const HeroSection= () => {
    const TextRunning = ['']
    return (
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-8`}>
            <div className={`relative`}>
            <Heading1 Text = 'putra pradwi.' Styling={`font-bold text-2xl mb-10 capitalize sm:text-3xl lg:text-4xl mb-6`} />
            <Heading2 Text = 'Front End Developer' Styling={`font-bold text-lg mb-10 sm:text-xl lg:text-7xl mb-7`} />
          <div>
          <Kalimat teks = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque integer bibendum nec magna sit iaculis facilisi? Nec potenti leo netus fames egestas posuere? Ligula erat praesent libero ultrices rutrum. Felis orci vivamus etiam; convallis convallis proin eros scelerisque primis? Class tristique vestibulum augue malesuada nascetur quisque cursus augue. Ex malesuada lacus rutrum nulla convallis tortor non gravida. Per porttitor justo etiam laoreet vivamus vel facilisis ante per. Hac purus neque viverra sem, etiam iaculis ante.' Styling={`font-italic text-base text-justify sm:text-lg lg:text-xl`}/>
          </div>
            </div>
        </div>
    )
}

export default HeroSection