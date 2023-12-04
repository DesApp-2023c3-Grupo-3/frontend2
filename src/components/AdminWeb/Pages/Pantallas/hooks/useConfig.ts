import { useState } from 'react';

export interface ConfigProps {
    advertisingIntervalTime: number,
    courseIntervalTime: number
}

export function useConfig({ advertisingIntervalTime, courseIntervalTime }:ConfigProps) {
    const [config, setConfig] = useState({
        advertisingIntervalTime,
        courseIntervalTime
    })

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