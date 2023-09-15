import { useCarousel } from "../../hooks/useCarousel";
import { useSocketStore } from "../../store/socketStore";
import Dots from "../Dots";

function AdvertisingCard(props: any) {
    const advertisingMessages = useSocketStore(state => state.getAdvertisingMessages())
    const { selectedIndex, selectedImage } = useCarousel(advertisingMessages)

    console.log(advertisingMessages)

    return(
        <article className={`relative h-2/4 ${props.sx} bg-white h-full w-full flex flex-col items-center justify-center`}>
            <div className="h-[88%] w-[85%] rounded-[10%] overflow-hidden">
                <img className="w-full h-full" src={require(`../../assets/${selectedImage.payload}`)} alt="avisos"/>
            </div>
            <Dots selectedIndex={selectedIndex} items={advertisingMessages} />
        </article>
    )

}

export default AdvertisingCard