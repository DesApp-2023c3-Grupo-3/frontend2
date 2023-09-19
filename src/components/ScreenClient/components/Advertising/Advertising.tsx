import { useSocketStore } from "../../store/socketStore"
import { splitList } from "../../utils/arrays"
import AdvertisingCard from "./AdvertisingCard"


function Advertising() {
  const advertisingMessages = useSocketStore(state => state.getAdvertisingMessages())
  const [firstHalf, secondHalf] = splitList(advertisingMessages)

  return (
    <section className="h-full gap-1 flex flex-col col-start-1 col-end-4">     
        <AdvertisingCard sx="rounded-br-xl" messages={firstHalf} /> 
        <AdvertisingCard sx="rounded-tr-xl" messages={secondHalf}/> 
    </section>
  )
}

export default Advertising