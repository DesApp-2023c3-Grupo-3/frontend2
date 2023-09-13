import CarouselCard from "./CarouselCard"


function Informacion() {
  return (
    <section className="h-full gap-1 flex flex-col col-start-1 col-end-4">
        <CarouselCard sx="rounded-br-xl" />
        <CarouselCard sx="rounded-tr-xl" />
    </section>
  )
}

export default Informacion