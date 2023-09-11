import { useState } from "react";
import "./css/CarouselCard.css"

function CarouselCard(props: any) {
    const images = ["imagen1.png", "imagen2.png"]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])

    const selectNewImage = (index:number, images: string[], next = true) => {
        const condition = next ? 
                    index < images.length - 1 :
                    index > 0

        const newIndex = next ? (condition ? index + 1 : 0) : 
                                (condition? index - 1 : images.length - 1)         

        setSelectedIndex(newIndex)
        setSelectedImage(images[newIndex])
    }

    const previousImage = () => {
        selectNewImage(selectedIndex, images, false)
    }

    const nextImage = () => {
        selectNewImage(selectedIndex, images)
    }

    return(
        <>
            <img src={require(`./assets/${selectedImage}`)} alt="avisos" className="image-carousel" />
        </>
    )

}

export default CarouselCard