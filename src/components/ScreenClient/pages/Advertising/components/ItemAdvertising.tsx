export default function AdvertisingItem({
  children,
  sx,
}: {
  children: any;
  sx: string;
}) {
  return (
    <article
      className={`${sx} bg-white w-full flex flex-col items-center justify-center relative h-[49.4vh]`}
    >
      {children}
    </article>
  );
}
