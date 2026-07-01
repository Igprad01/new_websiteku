const Image = ({src, alt, styleImg}) => {

    return (
        <img 
            src={src} 
            alt={alt || "Portfolio Project Image"} 
            className={styleImg} 
            loading="lazy" 
            decoding="async" 
        />
    )
}

export default Image