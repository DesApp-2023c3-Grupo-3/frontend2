import logoUnahur from '../assets/UNAHUR 1.png';
import { useConnectionMessage } from '../store/useConnectionMessage';
import Clock from './Date';

function Header() {
  const sectorName = useConnectionMessage((state) => state.connectionMessage)
    .sector.name;

  return (
    <header className="flex justify-between bg-[#DFDFDF] text-[4vh]">
      <section className="w-1/3 flex items-center justify-center">
        <img className="w-[21vh]" src={logoUnahur} alt="logo" />
      </section>
      <section className="w-1/3 flex items-center justify-center text-[#555555]">
        {sectorName}
      </section>
      <Clock />
    </header>
  );
}

export default Header;
