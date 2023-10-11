export default function BillboardCard(props: any) {
  return (
    <section className="h-screen col-start-7 col-end-21 bg-white flex flex-col justify-between">
      {props.children}
    </section>
  );
}
