import { createContext, useContext } from "react";
import { HandOptions, IOptions, IOptionsContextTypes, Props } from "./OptionsContextTypes";
import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from 'react-icons/fa';


const options: IOptions[] = [
    { name: HandOptions.Rock, icon: <FaRegHandRock size={60} /> },
    { name: HandOptions.Paper, icon: <FaRegHandPaper size={60} /> },
    { name: HandOptions.Scissors, icon: <FaRegHandScissors size={60} /> }
]

const OptionsContext = createContext<IOptionsContextTypes>({
    options: []
});


export function OptionsContextProvider(props: Props) {
    return <OptionsContext.Provider value={{ options }}>{props.children}</OptionsContext.Provider>
}

export function useOptions() {
    const context = useContext(OptionsContext);
    if (!context) {
        throw new Error('useOptions must be used within a OptionsContextProvider')
    }
    return context;
}
