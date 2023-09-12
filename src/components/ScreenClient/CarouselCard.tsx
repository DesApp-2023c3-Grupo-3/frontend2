import { useEffect, useState } from "react";
import Dots from "./Dots";

function CarouselCard(props: any) {
    const images = ["imagen1.png", "imagen2.png"]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])

    useEffect(() => {
        const interval = setInterval(() => {
            selectNewImage(selectedIndex, images)
        }, 10000)

        return () => clearInterval(interval) 
    })

    const selectNewImage = (index:number, images: string[], next = true) => {
        const condition = next ? 
                    index < images.length - 1 :
                    index > 0

        const newIndex = next ? (condition ? index + 1 : 0) : 
                                (condition? index - 1 : images.length - 1)         

        setSelectedIndex(newIndex)
        setSelectedImage(images[newIndex])
    }

    return(
        <>
            <img src={require(`./assets/${selectedImage}`)} alt="avisos" className="image-carousel" />
            <Dots items={images} selectedIndex={selectedIndex} />
        </>
    )

}

export default CarouselCard