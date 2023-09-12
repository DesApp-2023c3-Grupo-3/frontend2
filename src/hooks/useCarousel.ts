import { useEffect, useState } from "react"

export function useCarousel(items: string[]) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(items[0])

    useEffect(() => {
        const interval = setInterval(() => {
            selectNewImage(selectedIndex, items)
        }, 10000)

        return () => clearInterval(interval) 
    })

    const selectNewImage = (index:number, items: string[], next = true) => {
        const condition = next ? 
                    index < items.length - 1 :
                    index > 0

        const newIndex = next ? (condition ? index + 1 : 0) : 
                                (condition? index - 1 : items.length - 1)         

        setSelectedIndex(newIndex)
        setSelectedImage(items[newIndex])
    }

    return { selectedIndex, selectedImage }
}