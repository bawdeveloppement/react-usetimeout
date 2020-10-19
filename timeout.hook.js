import { useEffect, useState } from "react";

/**
 * Cette fonction éxecute un callback à la fin d'un délay donné
 * @param {*} sec 
 * @param {*} callback 
 */
export const useTimeout = (sec, callback) => {
    const [time, setTime] = useState(sec);
    // 
    useEffect(() => {
        let timeOut;
        if (time > 0) {
            timeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else callback()
        // Cette ligne sert de nettoyage
        // Lorsque le composant sera démonté, stop et enléve le timeOut 
        return () => clearTimeout(timeOut); 
    }, [time, callback]);
    // Ici on renvoit le temps actuel
    return time
}