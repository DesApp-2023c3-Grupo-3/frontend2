import React, { useState, useEffect } from 'react';
import { imageAPI } from '../../../services/image';

function Footer() {
  const [qrImage, setQrImage] = useState('');

  useEffect(() => {
    imageAPI
      .viewQr()
      .then((response) => {
        const blob = new Blob([response.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(blob);
        setQrImage(imageUrl);
      })
      .catch((error) => {
        console.error('Error al obtener la imagen del código QR:', error);
      });
  }, []);

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
          <article className="p-1 bg-white rounded-2xl h-[80%] overflow-hidden">
            {qrImage && (
              <img src={qrImage} className="w-full h-full" alt="Código QR" />
            )}
          </article>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
