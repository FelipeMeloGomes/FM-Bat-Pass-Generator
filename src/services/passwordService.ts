export default function generatePass() {
    let password: string = "";
    let characters: string =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~\\";

    for (let i = 32; i <= 126; i++) {
        if (!characters.includes(String.fromCharCode(i))) {
            characters += String.fromCharCode(i);
        }
    }

    let passwordLength = 8;

    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return password;
}
