import logoUnahur from '../assets/UNAHUR 1.png';
import { useConnectionMessage } from '../store/useConnectionMessage';
import Clock from './Date';

function Header() {
  const sectorName = useConnectionMessage((state) => state.connectionMessage);

  return (
    <header className="flex justify-between bg-[#DFDFDF] text-[4vh]">
      <section className="w-1/4">
        <img className="w-[21vh] ml-auto" src={logoUnahur} alt="logo" />
      </section>
      <section className="w-1/4 flex items-center justify-center text-[#555555]">
        {'Sector ' + sectorName.sector.id}
      </section>
      <Clock />
    </header>
  );
}

export default Header;
