import { useEffect, useState } from "react"

const INTERVAL_SECONDS = 10000

export function useCarousel(items: string[]) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(items[0])

    useEffect(() => {
        const interval = setInterval(() => {
            selectNewImage(selectedIndex, items)
        }, INTERVAL_SECONDS)

        return () => clearInterval(interval) 
    })

    const selectNewImage = (index:number, items: string[]) => {
        const condition = index < items.length - 1 
        const newIndex = condition ? index + 1 : 0    

        setSelectedIndex(newIndex)
        setSelectedImage(items[newIndex])
    }

    return { selectedIndex, selectedImage }
}