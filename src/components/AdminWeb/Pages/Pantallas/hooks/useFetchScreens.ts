import { screenAPI } from "../../../../../services/screens";
import { useScreenFilters } from "../store/useScreenFilters";
import { useEffect, useState } from 'react'

export default function useFetchScreens() {
  const [screens, addScreens] = useScreenFilters((state) => [state.screens, state.addScreens]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    screenAPI.getAll()
      .then(screens => {
        setIsLoading(false)
        const newScreens = screens.data.map((screen: any) => {
          const { id, templeteId, subscription, sector, courseIntervalTime, advertisingIntervalTime } = screen

          return ({
            id,
            screenTitle: "Pantalla " + id,
            sectorTitle: sector.name,
            typeScreen: templeteId,
            subscription,
            isSelected: false,
            courseIntervalTime,
            advertisingIntervalTime,
            sector: {
              id: sector.id,
              name: sector.name,
              topic: sector.topic
            }
          })
        })

        return newScreens
      })
      .then(screens => addScreens(screens))
      .catch(() => setIsLoading(true))
  }, [])

  return { screens, isLoading }
}