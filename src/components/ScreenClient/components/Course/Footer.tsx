import qr from '../../assets/qr.png';

function Footer() {
  return (
    <footer className="flex w-full h-[20%]">
      <section className="w-2/4 flex justify-center items-center text-4xl xl:text-5xl 2xl:text-7xl">
        ¿Estás perdido/a?
      </section>
      <section className="flex justify-center h-full text-lg xl:text-xl 2xl:text-3xl w-2/4 bg-[#74B235] text-white p-3 rounded-tl-3xl">
        <div className="w-[90%] flex items-center justify-evenly">
          <p>Escanea el código y recorre los espacios de la Universidad.</p>
          <article className="w-[45%] h-[90%] p-1 bg-white rounded-2xl">
            <img src={qr} className="w-full h-full" alt="" />
          </article>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
