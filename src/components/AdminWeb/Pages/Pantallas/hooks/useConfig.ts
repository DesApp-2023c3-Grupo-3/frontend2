import { useEffect, useState } from 'react';
import { useScreenFilters } from '../store/useScreenFilters';

export interface ConfigProps {
    advertisingIntervalTime: number,
    courseIntervalTime: number
}

export function useConfig({ advertisingIntervalTime, courseIntervalTime }:ConfigProps) {
    const screens = useScreenFilters(state => state.screens)
    const [config, setConfig] = useState({
        advertisingIntervalTime,
        courseIntervalTime
    })

    useEffect(() => {
        const selectedScreens = screens.filter(screen => screen.isSelected)
        if(selectedScreens.length === 1) {
            changeAdvertisingIntervalTime(selectedScreens[0].advertisingIntervalTime)
            changeCourseIntervalTime(selectedScreens[0].courseIntervalTime)
        }
    }, [])

    const changeCourseIntervalTime = (courseIntervalTime:number) => {
        setConfig(previousState => ({
          ...previousState,
          courseIntervalTime
        }))
    }
    
    const changeAdvertisingIntervalTime = (advertisingIntervalTime:number) => {
        setConfig(previousState => ({
          ...previousState,
          advertisingIntervalTime
        }))
    }

    return {  
        config,
        changeCourseIntervalTime,
        changeAdvertisingIntervalTime
    }
}