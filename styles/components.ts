import { StyleSheet } from "react-native";
import { bgBlue500, px4, py2, roundedMd } from "./utility";

const style = StyleSheet.create({
    botao: {
        borderRadius: roundedMd.borderRadius,
        paddingHorizontal: px4.paddingHorizontal,
        paddingVertical: py2.paddingVertical,
        backgroundColor: bgBlue500.backgroundColor,
    },
})

export const botao = style.botao