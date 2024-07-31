import { useState } from "react";
import * as Clipboard from "expo-clipboard";
import generatePass from "../services/passwordService";

const usePasswordGenerator = () => {
    const [pass, setPass] = useState("");

    const handleGenerateButton = () => {
        let generateToken = generatePass();
        setPass(generateToken);
    };

    const handleCopyButton = () => {
        Clipboard.setStringAsync(pass);
    };

    return {
        pass,
        handleGenerateButton,
        handleCopyButton,
    };
};

export default usePasswordGenerator;
