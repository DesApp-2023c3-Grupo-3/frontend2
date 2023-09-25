import { Tab } from '@headlessui/react';

function ImageTextVideo() {
  return (
    <div className="rounded-[20px] bg-[#D9D9D9] w-[300px] h-[328px]">
      <Tab.Group>
        <Tab.List className=" text-[white] text-[12px] font-[400] flex justify-center items-center h-[28px]">
          <Tab
            className={({ selected }) =>
              ` rounded-ss-[20px] w-[100px] flex justify-center items-center h-[28px] bg-[#484848]
                                
                                ${selected ? 'bg-[#292929]' : ''}
                                `
            }
          >
            Texto
          </Tab>
          <Tab
            className={({ selected }) =>
              ` w-[100px] flex justify-center items-center h-[28px] bg-[#484848]
                                
                                ${selected ? 'bg-[#292929]' : ''}
                                `
            }
          >
            Imagen
          </Tab>
          <Tab
            className={({ selected }) =>
              `rounded-se-[20px] w-[100px] flex justify-center items-center h-[28px] bg-[#484848]
                                
                                ${selected ? 'bg-[#292929]' : ''}
                                `
            }
          >
            Video
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Subi el texto</Tab.Panel>
          <Tab.Panel className="flex justify-center items-center mt-[125px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="45"
              viewBox="0 0 36 45"
              fill="none"
            >
              <path
                d="M34 12.5V40.5C34 41.0304 33.7893 41.5391 33.4142 41.9142C33.0391 42.2893 32.5304 42.5 32 42.5H4C3.46957 42.5 2.96086 42.2893 2.58579 41.9142C2.21071 41.5391 2 41.0304 2 40.5V4.5C2 3.96957 2.21071 3.46086 2.58579 3.08579C2.96086 2.71071 3.46957 2.5 4 2.5H24M34 12.5H24V2.5M34 12.5L24 2.5M18 19.5V33.5M11 26.5H25"
                stroke="#545454"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Tab.Panel>
          <Tab.Panel>Subi el video</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default ImageTextVideo;
