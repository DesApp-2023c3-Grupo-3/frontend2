
function Informacion() {
  return (
    <section className='col-start-1 col-end-4 flex flex-col gap-1'>
        <article className='relative flex justify-center items-center h-2/4 bg-white rounded-br-2xl'>
            <div className="bg-black h-64 w-64 rounded-3xl"></div>
            <div className="absolute bottom-0">....</div>
        </article>
        <article className='relative flex justify-center items-center h-2/4 bg-white rounded-tr-2xl'>
            <div className="bg-black h-64 w-64 rounded-3xl"></div>
            <div className="absolute bottom-0">....</div>
        </article>
    </section>
  )
}

export default Informacion