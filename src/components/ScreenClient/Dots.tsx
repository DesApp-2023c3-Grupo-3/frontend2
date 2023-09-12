import "./css/Dots.css"

function Dots(props: any) {
    return (
        <div className="dots">
            {
                props.items.map((item:string, index: number) => (
                    <p className={`${props.selectedIndex === index ? "dot-opacity" : "dot"}`}>•</p>
                ))
            }
        </div>        
    )
}

export default Dots