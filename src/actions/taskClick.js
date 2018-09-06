import globalObj from "./globalObj";
import exersices from "../resources/exersices";

export default function taskClick(numberParam, contentParam) {
    const number = parseInt(numberParam, 10) - 1;
    const content = contentParam.toString();

    const printer = globalObj().namespace;
    const exersice = exersices()[number];

    printer.setContent(exersice.condition, exersice.params, exersice.tests, content, number);
}