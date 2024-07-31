import { Text, Pressable } from "react-native";
import styles from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import usePasswordGenerator from "../../Hooks/usePasswordGenerator";

export function BatButton() {
    const { pass, handleGenerateButton, handleCopyButton } =
        usePasswordGenerator();
    return (
        <>
            <BatTextInput pass={pass} />
            <Pressable onPress={handleGenerateButton} style={styles.button}>
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>
            <Pressable onPress={handleCopyButton} style={styles.button}>
                <Text style={styles.text}>⚡ COPY</Text>
            </Pressable>
        </>
    );
}
