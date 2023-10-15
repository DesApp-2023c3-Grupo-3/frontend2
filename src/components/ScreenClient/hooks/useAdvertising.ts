import { useEffect, useState } from "react"
import { fetchAdvertisings } from "../services/fetchAdvertisings"

export function useAdvertising() {
    const [advertisings, setAdvertisings] = useState([])

    useEffect(() => {
        fetchAdvertisings()
            .then(advertisings => setAdvertisings(advertisings))
    }, [])

    const mappedAdvertisings = advertisings.map(advertising => {
        const { id, name, payload, advertisingType } = advertising

        return {
            advertisingTypeId: advertisingType['id'],
            id,
            name,
            payload
        }
    })
  
    return { mappedAdvertisings }
}