
function Dots(props: any) {
    
    return (
        <div className="absolute bottom-0 flex">
            {
                props.items.map((item:string, index: number) => (
                    <svg key={index} className="h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                        <path d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z" fill={`${props.selectedIndex === index ? '#A6A6A6' : '#D9D9D9'}`}/>
                    </svg>
                ))
            }
        </div>        
    )
}

export default Dots