import  { createContext, useState } from 'react';


export const DarkModeContext = createContext({}); 


export const DarkModeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);

    const changeDarkMode = (value) => {
        setDarkMode(value);
    }


    return (
        <DarkModeContext.Provider value={{darkMode, changeDarkMode}}>
            { children }
        </DarkModeContext.Provider>
    )

}