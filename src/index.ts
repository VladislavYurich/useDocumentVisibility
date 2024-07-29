import { useState, useEffect  } from 'react';

interface IDocumentVisibility {
    counter: number;
    visibility: boolean;
    visibilityChange: (callback:TCallbackFunc) => void;
}
type TCallbackFunc = (visibility:boolean) => void;


const useDocumentVisibility = ():IDocumentVisibility => {
    const [counter, setCounter] = useState(0); 
    const [visibility, setVisibility] = useState(true);  

    const checkVisibilityFunc = () => {
            if (document.visibilityState === 'hidden') {   
                setVisibility(false);
                setCounter( counter => counter + 1)
                return
            }
            setVisibility(true)
    }
    const visibilityChange = (callback:TCallbackFunc) => {
       return callback(visibility)
    }

    useEffect(() => {
        document.addEventListener("visibilitychange", checkVisibilityFunc)
        return () => {
            document.removeEventListener("visibilitychange", checkVisibilityFunc)
        } 
    }, [])

    return {
        counter, 
        visibility,
        visibilityChange
    }
}

export default useDocumentVisibility;