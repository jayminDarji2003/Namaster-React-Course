// This hook return whether am i online or not
// logic for you are online or offline

import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnlie] = useState(true)

    useEffect(() => {
        window.addEventListener("online", () => {
            setIsOnlie(true)
        })
        window.addEventListener("offline", () => {
            setIsOnlie(false)
        })
    }, [])

    return isOnline; // return true or false
}

export default useOnline;