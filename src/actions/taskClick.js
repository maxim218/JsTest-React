import exersices from "../resources/exersices";
import getGlobalObj from "./getGlobalObj";

const BTN_NAME = "btnHidden";

export default function taskClick(numberParam, contentParam) {
    const number = parseInt(numberParam, 10) - 1;
    const taskName = contentParam.toString();

    const exersicesArr = exersices();
    const exersiceElement = exersicesArr[number];

    const condition = exersiceElement.condition;
    const params = exersiceElement.params;
    const tests = exersiceElement.tests;

    getGlobalObj().taskName = taskName;
    getGlobalObj().number = number;
    getGlobalObj().condition = condition;
    getGlobalObj().params = params;
    getGlobalObj().tests = tests;

    document.getElementById(BTN_NAME).click();
}