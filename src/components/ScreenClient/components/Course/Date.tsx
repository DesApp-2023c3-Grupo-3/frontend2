import { useEffect, useState } from "react"
import { createHour } from "../../utils/hour"

function Clock() {
    const [time, setTime] = useState(createHour())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(createHour())
        }, 6000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section  className="w-1/4 bg-[#74B235] rounded-bl-2xl flex justify-center items-center text-white">
            { `${time.hour}:${time.minute} ` }
        </section>
    )
}

export default Clock