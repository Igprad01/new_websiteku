import React from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Heading2 from "../../Elements/Heading2/Heading2";
import Kalimat from "../../Elements/Paragraph/Paragraph";

const HeroSection= () => {
    return (
        <div className={`container relative mx-60 my-40`}>
            <Heading1 Text = 'Putra Pradwi' Styling={`font-bold text-6xl mb-10`} />
            <Heading2 Text = 'Front End Developer' Styling={`text-9xl mb-10`} />
          <div>
          <Kalimat teks = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque integer bibendum nec magna sit iaculis facilisi? Nec potenti leo netus fames egestas posuere? Ligula erat praesent libero ultrices rutrum. Felis orci vivamus etiam; convallis convallis proin eros scelerisque primis? Class tristique vestibulum augue malesuada nascetur quisque cursus augue. Ex malesuada lacus rutrum nulla convallis tortor non gravida. Per porttitor justo etiam laoreet vivamus vel facilisis ante per. Hac purus neque viverra sem, etiam iaculis ante.' Styling={`font-italic text-xl`}/>
          </div>
        </div>
    )
}

export default HeroSection