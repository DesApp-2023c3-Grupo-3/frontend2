import unahur from '../assets/unahur.png';

export default function DefaultCard({ sx }: { sx: string }) {
  return (
    <section
      className={`${sx} bg-white w-full flex flex-col items-center justify-center relative h-[49.4vh]`}
    >
      <img src={unahur} className="max-w-[30vh]" alt="" />
    </section>
  );
}
