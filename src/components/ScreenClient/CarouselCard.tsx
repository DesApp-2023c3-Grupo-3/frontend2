import { useCarousel } from "../../hooks/useCarousel";
import Dots from "./Dots";

function CarouselCard(props: any) {
    const images = ["imagen1.png", "imagen2.png", "imagen1.png"]
    const { selectedIndex, selectedImage } = useCarousel(images)

    return(
        <article>
            <img src={require(`./assets/${selectedImage}`)} alt="avisos"/>
            <Dots selectedIndex={selectedIndex} items={images} />
        </article>
    )

}

export default CarouselCard