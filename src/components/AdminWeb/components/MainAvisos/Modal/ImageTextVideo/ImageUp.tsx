import React, { useState } from 'react';

function ImageUp() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const uploadedImageUrl = event.target?.result as string;
        setImage(uploadedImageUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[300px] h-[300px] relative">
      <label htmlFor="image-upload">
        <div className=" overflow-hidden, flex items-center justify-center w-[100%] h-[100%]">
          {image ? (
            <img
              src={image}
              alt="Imagen cargada"
              className="max-w-[100%] max-h-[100%] object-contain"
            />
          ) : (
            <div className="flex justify-center items-center w-[300px] h-[300px]">
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
            </div>
          )}
        </div>
      </label>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
    </div>
  );
}

export default ImageUp;
