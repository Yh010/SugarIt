import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    
    const onSubmit = async (prompt) => {
        await runChat(prompt)
    }
    
    onSubmit("what is react")

    const contextValue = {

    }
    return (
        <ContextProvider value = {contextValue}>
            {props.children}
        </ContextProvider>
    )
}

export default ContextProvider;