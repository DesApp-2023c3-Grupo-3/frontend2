function ListOfCardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-[2rem] p-4 flex flex-col gap-2">{children}</section>
  );
}

export default ListOfCardsLayout;
