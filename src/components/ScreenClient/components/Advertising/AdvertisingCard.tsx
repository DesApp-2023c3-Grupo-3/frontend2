import { useCarousel } from "../../hooks/useCarousel";
import Dots from "../Dots";
import unahur from "../../assets/unahur.png"

function AdvertisingCard(props: any) {
    const { selectedIndex, selectedItem } = useCarousel(props.messages, 15)

    return(
        <article className={`relative h-2/4 ${props.sx}`}>
            {
                props.messages.length > 0 ? 
                    <Card>
                        <div className="h-[88%] w-[85%] rounded-[10%] overflow-hidden">
                            <img className="w-full h-full" src={selectedItem.payload} alt="avisos"/>
                        </div>
                       { props.messages.length > 1 && <Dots selectedIndex={selectedIndex} items={props.messages} sx="absolute bottom-0" /> }
                    </Card> 
                :
                    <Card>
                        <img src={unahur} alt="Logo de la UNAHUR" />
                    </Card>
            }
        </article>
    )

}

function Card(props : any) {
    return (
        <div className="bg-white h-full w-full flex flex-col items-center justify-center">
            { props.children }
        </div>
    )
}

export default AdvertisingCard