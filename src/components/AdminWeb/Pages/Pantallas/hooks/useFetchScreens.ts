import { screenAPI } from "../../../../../services/screens";
import { useScreenFilters } from "../store/useScreenFilters";
import { useEffect } from 'react'

export default function useFetchScreens() {
    const [screens, addScreens] = useScreenFilters((state) => [state.screens, state.addScreens]);

    useEffect(() => {
        screenAPI.getAll()
          .then(screens => {
            const newScreens = screens.data.map((screen:any) => {
              const { id, templeteId, subscription, sector } = screen
    
              return ({
                id,
                screenTitle: "Pantalla " + id,
                sectorTitle: sector.name,
                typeScreen: templeteId,
                subscription,
                isSelected: false,
                sectorId: sector.id
              })
            })
    
            return newScreens
          })
          .then(screens => addScreens(screens))
      }, [])

    return { screens }
}