import { useEffect, useState } from 'react';


const useStorageState = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        var parsedValue;

        try {
            parsedValue = JSON.parse(storedValue);
        }
        catch(e) {
            console.log(e);
            parsedValue = defaultValue;
        }
        return parsedValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

export default useStorageState;
