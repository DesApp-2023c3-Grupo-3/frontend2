export default function AdvertisingText({ payload }: { payload: string }) {
  return (
    <article
      dangerouslySetInnerHTML={{ __html: payload }}
      className="flex justify-center items-center bg-[#E3E3E3] h-[85%] w-[85%] rounded-[10%]"
    />
  );
}
