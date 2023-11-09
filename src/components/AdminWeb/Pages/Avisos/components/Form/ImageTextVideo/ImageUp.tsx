import * as React from 'react';
import { imageAPI } from '../../../../../../../services/image';
import { ROUTES_RELATIVE } from '../../../../../../../routes/route.relatives';

interface ImageUpProps {
  image: string;
  setImage: (newImage: string) => void;
}

function ImageUp({ image, setImage }: ImageUpProps) {
  let urlImg = '';

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await imageAPI.create(formData);
        urlImg = `${ROUTES_RELATIVE.image.image}/${response.data.id}/view`;
        setImage(urlImg);
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    }
  };

  return (
    <div className="w-[330px] h-[300px] relative">
      <div className="absolute top-0 right-0">
        {image ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setImage('');
            }}
          >
            {deleteImg}
          </button>
        ) : (
          ''
        )}
      </div>
      <div className="absolute bottom-3 right-3">
        <label htmlFor="image-upload"> {/* Agregado el atributo htmlFor */}
          {image ? updateImg : ''}
          <input
            className="relative"
            type="file"
            id="image-upload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
        </label>
      </div>
      {image ? (
        <div className="flex items-center justify-center w-[330px] h-[300px]">
          <img
            src={image}
            alt="Imagen cargada"
            width="330"
            height="300"
            className={`rounded-b-[20px] w-[330px] h-[300px] object-contain`}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center w-[330px] h-[300px]">
          <label htmlFor="image-upload"> {/* Agregado el atributo htmlFor */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="45"
              viewBox="0 0 36 45"
              fill="none"
              className="cursor-pointer"
            >
              <path
                d="M34 12.5V40.5C34 41.0304 33.7893 41.5391 33.4142 41.9142C33.0391 42.2893 32.5304 42.5 32 42.5H4C3.46957 42.5 2.96086 42.2893 2.58579 41.9142C2.21071 41.5391 2 41.0304 2 40.5V4.5C2 3.96957 2.21071 3.46086 2.58579 3.08579C2.96086 2.71071 3.46957 2.5 4 2.5H24M34 12.5H24V2.5M34 12.5L24 2.5M18 19.5V33.5M11 26.5H25"
                stroke="#545454"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
              className="w-[50px] h-[50px]"
            />
          </label>
        </div>
      )}
    </div>
  );
}

export default ImageUp;

const updateImg = (
  <svg
    className="cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Contenido del SVG */}
  </svg>
);

const deleteImg = (
  <svg
    className="cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
  >
    {/* Contenido del SVG */}
  </svg>
);
