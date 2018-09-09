import globalObj from "./globalObj";
import exersices from "../resources/exersices";

let areaCreated = false;

/**
 * функция генерирует строку, хранящую шаблон функции
 * @param params
 * @returns {string}
 */
function createDeterminationOfFunction(params) {
    return "function main (" + params.join(", ") + ") {\n\n}\n";
}

/**
 * функция вызывается при щелчке по названию задания
 * @param numberParam
 * @param contentParam
 */
export default function taskClick(numberParam, contentParam) {
    // преобразуем полученные параметры
    const number = parseInt(numberParam, 10) - 1;
    const content = contentParam.toString();

    // получаем область видимости класса для вывода содержимого
    const printer = globalObj().namespace;
    // получаем объект задания
    const exersice = exersices()[number];

    // выводим задание на экран
    printer.setContent(exersice.condition, exersice.params, exersice.tests, content, number);

    // если текстовое поле уже создано
    if(areaCreated === true) {
        // задаём содержимое текстовому полю
        globalObj().areaNameSpace.setContent(createDeterminationOfFunction(exersice.params));
    }

    areaCreated = true;
}