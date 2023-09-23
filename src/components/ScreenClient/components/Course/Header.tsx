import logoUnahur from '../../assets/UNAHUR 1.png';
import Clock from './Date';

function Header() {
  return (
    <header className="flex justify-between bg-[#DFDFDF] text-2xl xl:text-3xl 2xl:text-5xl">
      <section className="w-1/4">
        <img className="w-2/4 ml-auto" src={logoUnahur} alt="logo" />
      </section>
      <section className="w-1/4 flex items-center justify-center text-[#555555]">
        Sector 6
      </section>
      <Clock />
    </header>
  );
}

export default Header;