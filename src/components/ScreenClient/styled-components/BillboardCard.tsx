export default function BillboardCard(props: any) {
  return (
    <section className="h-screen col-start-4 col-end-13 bg-white flex flex-col justify-between">
      {props.children}
    </section>
  );
}
