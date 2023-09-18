import { createContext, useContext, useReducer } from "react";
import { HandOptions, IOptions, IOptionsContextTypes, Props } from "./OptionsContextTypes";
import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from 'react-icons/fa';
import { initialState } from "./initialContextValues";
import scoreReducer from "../reducers/scoreReducer";


const options: IOptions[] = [
    { name: HandOptions.Rock, icon: <FaRegHandRock size={60} /> },
    { name: HandOptions.Paper, icon: <FaRegHandPaper size={60} /> },
    { name: HandOptions.Scissors, icon: <FaRegHandScissors size={60} /> }
]

const OptionsContext = createContext<IOptionsContextTypes>({
    options: [],
    state: initialState,
    dispatch: () => { }
});


export function OptionsContextProvider(props: Props) {
    const [state, dispatch] = useReducer(scoreReducer, initialState);
    const contextValue = {
        options,
        state,
        dispatch
    };
    return <OptionsContext.Provider value={contextValue}>{props.children}</OptionsContext.Provider>
}

export function useOptions() {
    const context = useContext(OptionsContext);
    if (!context) {
        throw new Error('useOptions must be used within a OptionsContextProvider')
    }
    return context;
}
