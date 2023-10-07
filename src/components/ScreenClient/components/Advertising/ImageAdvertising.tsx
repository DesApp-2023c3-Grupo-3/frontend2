export default function AdvertisingImage({ payload }: { payload: string }) {
  return (
    <img
      className="max-w-[90%] max-h-[90%] rounded-[10%]"
      src={payload}
      alt="Imagen de aviso"
    />
  );
}
