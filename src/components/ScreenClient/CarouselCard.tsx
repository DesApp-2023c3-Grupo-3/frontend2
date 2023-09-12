import { useCarousel } from "../../hooks/useCarousel";
import Dots from "./Dots";

function CarouselCard(props: any) {
    const images = ["imagen1.png", "imagen2.png"]
    const { selectedIndex, selectedImage } = useCarousel(images)

    return(
        <>
            <img src={require(`./assets/${selectedImage}`)} alt="avisos" className="image-carousel" />
            <Dots items={images} selectedIndex={selectedIndex} />
        </>
    )

}

export default CarouselCard