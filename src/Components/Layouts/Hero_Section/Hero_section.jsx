import React from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Heading2 from "../../Elements/Heading2/Heading2";
import Kalimat from "../../Elements/Paragraph/Paragraph";

const HeroSection= () => {
    return (
        <div className={`container relative mx-60 my-20`}>
            <Heading1 Text = 'ini adalah text' />
            <Heading2 Text = 'ini adalah heading2' />
          <div>
          <Kalimat teks = 'ini adalah teks'/>
          </div>
        </div>
    )
}

export default HeroSection