import TextEditor from './TextEditor';
import ImageUp from './ImageUp';
import VideoUp from './VideoUp';
import { Tabs, Tab } from '@nextui-org/react';

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
  return (
    <div className="">
      <Tabs
        classNames={{
          panel: 'm-0',
          tab: 'm-0',
          base: 'm-0',
          tabList: 'm-0 bg-[#484848] gap-6',
          cursor: 'w-full bg-white/15',
          tabContent:
            'm-0 group-data-[selected=true]:text-white group-data-[selected=true]:font-semibold text-base',
        }}
        fullWidth
        aria-label="Options"
        color="default"
        defaultSelectedKey={String(type)}
        onSelectionChange={(key) => setType(Number(key.toString()))}
      >
        <Tab key="1" title="Imagen">
          <ImageUp image={image} setImage={setImagePayload} />
        </Tab>
        <Tab key="2" title="Video">
          <VideoUp youtubeUrl={video} setYoutubeUrl={setVideoPayload} />
        </Tab>
        <Tab key="3" title="Texto">
          <TextEditor editorHtml={text} setEditorHtml={setTextPayload} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default ImageTextVideo;
