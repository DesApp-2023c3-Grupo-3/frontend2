import AdvertisingCard from "./AdvertisingCard"

function Advertising() {
  return (
    <section className="h-full gap-1 flex flex-col col-start-1 col-end-4">
        <AdvertisingCard sx="rounded-br-xl" />
        <AdvertisingCard sx="rounded-tr-xl" />
    </section>
  )
}

export default Advertising