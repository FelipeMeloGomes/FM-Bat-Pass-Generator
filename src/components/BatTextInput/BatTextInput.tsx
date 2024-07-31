import React from "react";
import { TextInput } from "react-native";
import styles from "./BatTextInputStyles";
import { BatTextInputProps } from "./BateTextInputProps";

export function BatTextInput(props: BatTextInputProps) {
    return (
        <TextInput
            style={styles.inputer}
            placeholder="pass"
            value={props.pass}
        />
    );
}
