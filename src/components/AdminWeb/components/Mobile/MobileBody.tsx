import { Pagination } from '@nextui-org/react';
import Loader from '../Loader';
import ModalMobile from '../Modal/ModalMobile';
import SearchBar from '../Table/SearchBar';
import useSearchTerm from '../../hooks/useSearchTermAdvertising';

interface MobileBodyProps {
  isOpen: boolean;
  onCloseClick: () => void;
  openModal: () => void;
  loading: boolean;
  children: React.ReactElement;
  title: string;
  ListOfData: React.ReactElement;
  currentPage?: number;
  totalItems?: number;
  setCurrentPage?: (page: number) => void;
}

export function MobileBody({
  ListOfData,
  isOpen,
  onCloseClick,
  openModal,
  loading,
  children,
  title,
  currentPage,
  totalItems,
  setCurrentPage,
}: MobileBodyProps) {
  const { searchTerm, setSearchTerm } = useSearchTerm();

  const isMiniMobile = window.matchMedia('(max-width: 320px)').matches;

  const handlePageChange = (page: number) => {
    /* TODO: Cuando se integren los demás endpoints a setCurrentPage hay
    que sacarle el opcional y después sacar el && */
    setCurrentPage && setCurrentPage(page);
  };

  return (
    <>
      <section className="w-screen h-screen">
        <div className="flex items-center justify-between translate-y-[3em]">
          <h1
            className={` text-[3em] font-[700] text-[#484848] tracking-[-1.28px] translate-x-[40px] ${
              isMiniMobile && 'text-[24px]'
            }`}
          >
            {title}
          </h1>
        </div>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar avisos"
        />
        {loading ? (
          <Loader />
        ) : (
          <>
            {ListOfData}
            <Pagination
              color="primary"
              className="bg-white scrollbar-none flex justify-center w-full"
              showControls
              total={totalItems ? Math.ceil(totalItems / 10) : 0}
              page={currentPage}
              onChange={handlePageChange}
            />
          </>
        )}
        {!loading && (
          <div id="modal" className="flex items-center justify-end z-[4]">
            <ModalMobile
              isOpen={isOpen}
              closeModal={onCloseClick}
              openModal={openModal}
              label={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="z-[10]"
                >
                  <path
                    fill="white"
                    d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                  />
                </svg>
              }
            >
              {children}
            </ModalMobile>
          </div>
        )}
      </section>
    </>
  );
}
