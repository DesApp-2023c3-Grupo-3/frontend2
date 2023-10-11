export default function AdvertisingImage({ payload }: { payload: string }) {
  return (
    <div className="h-[85%] w-[85%] rounded-[10%] overflow-hidden">
      <img className="w-full h-full" src={payload} alt="Imagen de aviso" />
    </div>
  );
}
