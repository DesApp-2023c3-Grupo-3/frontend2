import qr from "../../assets/qr.png"

function Footer() {
    return(
        <footer className="flex w-full">
            <section className="w-2/4 flex justify-center items-center text-4xl">
                ¿Estás perdido/a?
            </section>
            <section className="flex items-center justify-evenly text-lg w-2/4 bg-[#74B235] text-white p-3 rounded-tl-3xl">
                <p className="w-[65%]">Escanea el código y recorre los espacios de la Universidad.</p>
                <article className="w-[20%] p-1 bg-white rounded-2xl">
                    <img src={qr} className="w-full h-full" alt="" />
                </article>
            </section>
        </footer>
    )
}

export default Footer