export default function AdvertisingText({ payload }: { payload: string }) {
  return (
    <article className="flex justify-center items-center bg-[#E3E3E3] h-[85%] w-[85%] rounded-[10%] text-center p-1">
      <h3 className="text-[4vh] text-[#00A0D0] max-w-full overflow-hidden text-ellipsis">
        {payload}
      </h3>
    </article>
  );
}
