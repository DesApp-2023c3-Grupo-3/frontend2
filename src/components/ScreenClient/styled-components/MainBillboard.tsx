export default function MainBillboard(props: any) {
  return (
    <main className="bg-[#D9D9D9] h-screen grid grid-cols-20 gap-[1vh]">
      {props.children}
    </main>
  );
}
