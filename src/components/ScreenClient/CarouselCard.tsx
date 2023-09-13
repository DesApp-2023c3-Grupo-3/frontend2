import { useCarousel } from "../../hooks/useCarousel";
import Dots from "./Dots";

function CarouselCard(props: any) {
    const images = ["imagen1.png", "imagen2.png", "imagen1.png"]
    const { selectedIndex, selectedImage } = useCarousel(images)

    return(
        <article className={`relative h-2/4 ${props.sx} bg-white h-full w-full flex flex-col items-center justify-center`}>
            <div className="h-62 w-64 rounded-3xl overflow-hidden">
                <img className="w-full h-full" src={require(`./assets/${selectedImage}`)} alt="avisos"/>
            </div>
            <Dots selectedIndex={selectedIndex} items={images} />
        </article>
    )

}

export default CarouselCard