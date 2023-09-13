
function Dots(props: any) {
    return (
        <div className="flex">
            {
                props.items.map((item:string, index: number) => (
                    <p className={`text text-5xl px-1 ${props.selectedIndex === index ? 'text-red-400' : 'text-black'}`}>•</p>
                ))
            }
        </div>        
    )
}

export default Dots