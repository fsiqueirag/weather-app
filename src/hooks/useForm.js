import { useState } from "react";

export const useForm = (initialState) => {
    const [inputValue, setInputValue] = useState(initialState);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const clearInput = () => {
        setInputValue("");
    }


    return [inputValue, handleInputChange, clearInput];
}
