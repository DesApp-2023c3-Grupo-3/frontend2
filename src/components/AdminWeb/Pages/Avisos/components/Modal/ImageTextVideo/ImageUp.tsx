import * as React from 'react';
import { imageAPI } from '../../../../../../../services/image';

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
        urlImg = `${response.config.baseURL}image/${response.data.id}/view`;
        setImage(urlImg);
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    }
  };

  return (
    <div className="w-[330px] h-[300px] relative">
      <div className=" overflow-hidden flex items-center justify-center w-[100%] h-[100%]">
        {image ? (
          <div className="w-[330px] h-[300px]">
            <img
              src={image}
              alt="Imagen cargada"
              className="max-w-[100%] max-h-[100%] object-contain"
            />
            <div className="flex justify-end items-baseline">
              <label>
                {cambiarImg}
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center ">
            <label>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
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
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUp;

const cambiarImg = (
  <svg
    className="cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21.3333 2.66667V21.3333H2.66667V2.66667H21.3333ZM21.3333 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0ZM14.8533 11.8133L10.8533 16.9733L8 13.52L4 18.6667H20L14.8533 11.8133Z"
      fill="#AFAFAF"
    />
  </svg>
);
