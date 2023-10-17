import { Tab } from '@headlessui/react';
import TextEditor from './TextEditor';
import ImageUp from './ImageUp';
import VideoUp from './VideoUp';

function ImageTextVideo() {
  return (
    <div className="rounded-[20px] bg-[#D9D9D9] w-[330px] h-[328px]">
      <Tab.Group>
        <Tab.List className="rounded-t-[20px] text-[white] text-[12px] font-[400] flex justify-center items-center h-[28px] bg-[#484848]">
          <Tab
            className={({ selected }) =>
              ` rounded-ss-[20px] w-[110px] flex justify-center items-center h-[28px] 
                                
                                ${selected ? 'bg-[#292929]' : ''}
                                `
            }
          >
            Texto
          </Tab>
          <Tab
            className={({ selected }) =>
              ` w-[110px] flex justify-center items-center h-[28px]
                                
                                ${selected ? 'bg-[#292929]' : ''}
                                `
            }
          >
            Imagen
          </Tab>
          <Tab
            className={({ selected }) =>
              `rounded-se-[20px] w-[110px] flex justify-center items-center h-[28px] 
                                
                                ${selected ? 'bg-[#292929]' : ''}
                                `
            }
          >
            Video
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <TextEditor />
          </Tab.Panel>
          <Tab.Panel>
            <ImageUp />
          </Tab.Panel>
          <Tab.Panel>
            <VideoUp />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default ImageTextVideo;
