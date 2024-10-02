import ErrorMessage from '../../../../../components/ErrorMessage';
import ImageUp from '../ImageTextVideo/ImageUp';
import TextEditor from '../ImageTextVideo/TextEditor';
import VideoUp from '../ImageTextVideo/VideoUp';

interface AdvertisingTypeMobileProp {
  type: number;
  text: string;
  image: string;
  video: string;
  setTextPayload: (newText: string) => void;
  setVideoPayload: (newVideo: string) => void;
  setImagePayload: (newImage: string) => void;
  advertisingName: string;
  emptyFields: any;
  invalidPayload: () => boolean;
}

export function AdvertisingTypeMobile({
  advertisingName,
  text,
  image,
  video,
  type,
  setTextPayload,
  setImagePayload,
  setVideoPayload,
  emptyFields,
  invalidPayload,
}: AdvertisingTypeMobileProp) {
  let label = '';
  let payload;

  switch (type) {
    case 1:
      label = 'IMAGEN';
      payload = <ImageUp image={image} setImage={setImagePayload} />;

      break;
    case 2:
      label = 'VIDEO';
      payload = <VideoUp youtubeUrl={video} setYoutubeUrl={setVideoPayload} />;
      break;
    case 3:
      label = 'TEXTO';
      payload = <TextEditor editorHtml={text} setEditorHtml={setTextPayload} />;
      break;
    default:
      break;
  }

  return (
    <>
      <div className="ml-[20px] text-[24px] font-bold mt-[-50px] dark:text-white">
        <h1>{label}</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-5 ">
        <div>
          <span className="flex justify-center text-[20px] font-bold text-[#484848] dark:text-white">
            {advertisingName}
          </span>
        </div>

        <div className="bg-[#D9D9D9] flex justify-center w-[330px] h-[470px] items-center rounded-[20px]">
          <div className="p-2">{payload}</div>
        </div>
        {ErrorMessage(
          '*Falta completar el tipo del aviso',
          emptyFields.payload && invalidPayload(),
        )}
      </div>
    </>
  );
}
