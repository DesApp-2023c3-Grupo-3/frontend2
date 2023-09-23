import TableMain from './Table/TableMain';
import ModalCreateAdvertising from './Modal/ModalCreateAdvertising';

function MainAdvertising() {
  return (
    <>
      <div className="">
        <h1 className="text-[4rem] font-[700] text-[#484848] tracking-[-1.28px] ml-[48px] mt-[20px]">
          Avisos
        </h1>
        <div className="mt-[-70px] mr-[3%] ">
          <TableMain />
          <div className="flex justify-end">
            {/** Este boton tendría que hacer el modal de createAdvertising **/}
            <ModalCreateAdvertising />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainAdvertising;
