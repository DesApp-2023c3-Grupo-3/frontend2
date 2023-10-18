import { Tab } from '@headlessui/react';
import TextEditor from './TextEditor';
import ImageUp from './ImageUp';
import VideoUp from './VideoUp';

interface ImageTextVideoProps {
  text: string;
  image: string;
  video: string;
  type: number;
  setTextPayload: (newText: string) => void;
  setImagePayload: (newImage: string) => void;
  setVideoPayload: (newVideo: string) => void;
  setType: (number: number) => void;
}

function ImageTextVideo({
  text,
  image,
  video,
  type,
  setTextPayload,
  setImagePayload,
  setVideoPayload,
  setType,
}: ImageTextVideoProps) {
  const selected = (code: number) => {
    return code === type;
  };

  return (
    <div className="rounded-[20px] bg-[#D9D9D9] w-[330px] h-[328px]">
      <Tab.Group defaultIndex={type - 1}>
        <Tab.List className="rounded-t-[20px] text-[white] text-[12px] font-[400] flex justify-center items-center h-[28px] bg-[#484848]">
          <Tab
            className={` 
              rounded-ss-[20px] w-[110px] flex justify-center items-center h-[28px]
              
              ${selected(1) ? 'bg-[#292929]' : ''}
              `}
            onClick={(e) => setType(1)}
            defaultChecked={selected(1)}
          >
            Imagen
          </Tab>
          <Tab
            className={`w-[110px] flex justify-center items-center h-[28px] 
              
              ${selected(2) ? 'bg-[#292929]' : ''}
              `}
            onClick={(e) => setType(2)}
            defaultChecked={selected(2)}
          >
            Video
          </Tab>
          <Tab
            className={` rounded-se-[20px] w-[110px] flex justify-center items-center h-[28px]
                                        
                                        ${selected(3) ? 'bg-[#292929]' : ''}
                                        `}
            onClick={(e) => setType(3)}
          >
            Texto
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ImageUp image={image} setImage={setImagePayload} />
          </Tab.Panel>
          <Tab.Panel>
            <VideoUp youtubeUrl={video} setYoutubeUrl={setVideoPayload} />
          </Tab.Panel>
          <Tab.Panel>
            <TextEditor editorHtml={text} setEditorHtml={setTextPayload} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default ImageTextVideo;
