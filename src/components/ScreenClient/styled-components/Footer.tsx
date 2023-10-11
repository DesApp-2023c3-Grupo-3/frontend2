import qr from '../assets/qr.png';

function Footer() {
  return (
    <footer className="flex w-full h-[19%]">
      <section className="text-[7vh] w-2/4 flex justify-center items-center">
        ¿Estás perdido/a?
      </section>
      <section className="flex justify-center h-full text-[3.2vh] w-2/4 bg-[#74B235] text-white rounded-tl-3xl">
        <div className="flex items-center justify-center w-[100%]">
          <p className="w-[70%]">
            Escanea el código y recorre los espacios de la Universidad.
          </p>
          <article className="p-1 bg-white rounded-2xl h-[80%]">
            <img src={qr} className="w-full h-full" alt="" />
          </article>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
