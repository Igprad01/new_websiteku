import React from "react";
import Heading1 from "../../Elements/Heading1/Heading1";
import Heading2 from "../../Elements/Heading2/Heading2";
import ExternalLink from "../../Elements/ExternalLink/Link";

const Footer = () =>{
    return (
        <footer className={`mx-auto py-40 bg-slate-500`}>
            <div className={`container mx-auto px-4 py-8 sm:px-6 lg:px-8`}>
                <Heading1 Text={`Mau ngobrol bareng?`} />
                <div className={`my-36`}>
                    <Heading2 Text={'ini adalah judul'} />
                    <ExternalLink konten={'ini adalah konten'} href={''} styling={`text-black`} />
                </div>
            </div>
        </footer>
    )
}

export default Footer