import globalObj from "./globalObj";
import exersices from "../resources/exersices";

let areaCreated = false;

function createDeterminationOfFunction(params) {
    return "function main (" + params.join(", ") + ") {\n\n}\n";
}

export default function taskClick(numberParam, contentParam) {
    const number = parseInt(numberParam, 10) - 1;
    const content = contentParam.toString();

    const printer = globalObj().namespace;
    const exersice = exersices()[number];

    printer.setContent(exersice.condition, exersice.params, exersice.tests, content, number);

    if(areaCreated === true) {
        globalObj().areaNameSpace.setContent(createDeterminationOfFunction(exersice.params));
    }

    areaCreated = true;
}