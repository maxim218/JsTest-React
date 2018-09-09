import write from "./write";

const LINE_LONG = "---------------------------------------------";
const LINE_SHORT = "-------------------------";

/**
 * функция для получения количества полей в объекте
 * @param obj
 * @returns {number}
 */
function fieldsNumber(obj) {
    let number = 0;
    // eslint-disable-next-line
    for(let key in obj) {
        number++;
    }
    return number;
}

/**
 * класс для тестирования
 */
export default class TesterStudent {
    /**
     * конструктор для инициализации кода пользователя и списка тестов
     * @param studentCodeParam
     * @param testsArrParam
     */
    constructor(studentCodeParam, testsArrParam) {
        this.studentCode = studentCodeParam;
        this.testsArr = testsArrParam;
    }

    /**
     * метод для сравнения объектов друг с другом
     * @param obj1
     * @param obj2
     * @returns {boolean}
     */
    static assertObjects(obj1, obj2) {
        // существует ли первый объект
        if(obj1 === null || obj1 === undefined) {
            return false;
        }

        // существует ли второй объект
        if(obj2 === null || obj2 === undefined) {
            return false;
        }

        // является ли первый параметр объектом
        if(typeof(obj1) !== "object") {
            return false;
        }

        // является ли второй параметр объектом
        if(typeof(obj2) !== "object") {
            return false;
        }

        // одинаковое ли количество полей у объектов
        if(fieldsNumber(obj1) !== fieldsNumber(obj2)) {
            return false;
        }

        let ok = true;

        // сравниваем соответствующие поля объектов друг с другом
        for(let key in obj1) {
            if(obj1[key.toString()] !== obj2[key.toString()]) {
                ok = false;
            }
        }

        return ok;
    }

    /**
     * метод для сравнения целых чисел друг с другом
     * @param a
     * @param b
     * @returns {boolean}
     */
    static assertInteger(a, b) {
        return a === b;
    }

    /**
     * метод для сравнения массивов объектов
     * @param arrFirst
     * @param arrSecond
     * @returns {boolean}
     */
    static assertObjectsArray(arrFirst, arrSecond) {
        // первый параметр массив
        if(Array.isArray(arrFirst) === false) {
            return false;
        }

        // второй параметр массив
        if(Array.isArray(arrSecond) === false) {
            return false;
        }

        // сравнение длин массивов
        if(arrFirst.length !== arrSecond.length) {
            return false;
        }

        // сравниваем объекты в массивах
        for(let i = 0; i < arrFirst.length; i++) {
            const b = TesterStudent.assertObjects(arrFirst[i], arrSecond[i]);
            if(b === false) {
                return false;
            }
        }

        return true;
    }

    /**
     * сравнение двух целочисленных массивов
     * @param arrFirst
     * @param arrSecond
     * @returns {boolean}
     */
    static assertIntegerArray(arrFirst, arrSecond) {
        // первый параметр массив
        if(Array.isArray(arrFirst) === false) {
            return false;
        }

        // второй параметр массив
        if(Array.isArray(arrSecond) === false) {
            return false;
        }

        // у массивов одинаковая длина
        if(arrFirst.length !== arrSecond.length) {
            return false;
        }

        // сравниваем элементы в массивах
        for(let i = 0; i < arrFirst.length; i++) {
            if(arrFirst[i] !== arrSecond[i]) {
                return false;
            }
        }

        return true;
    }

    /**
     * увеличиваем количество правильных ответов
     * @param resultObj
     */
    static addYes(resultObj) {
        resultObj.yes++;
        write("Ответ верный");
    }

    /**
     * увеличиваем количество НЕправильных ответов
     * @param resultObj
     * @param errorExistsFlag
     */
    static addNo(resultObj, errorExistsFlag) {
        resultObj.no++;
        if(errorExistsFlag === false) {
            write("Ответ НЕ верный");
        } else {
            write("Ошибка во время выполнения");
        }
    }

    /**
     * метод для начала тестирования
     * @returns {{all: number, yes: number, no: number}}
     */
    getTestingResult() {
        /**
         * объект хранит количество правильных ответов, неправильных ответов и общее количество вопросов
         * @type {{all: number, yes: number, no: number}}
         */
        const resultObj = {
            all: 0,
            yes: 0,
            no: 0,
        };

        write(LINE_LONG);

        // проходим по списку тестов
        this.testsArr.forEach((test) => {
            write(LINE_SHORT);

            resultObj.all++;
            let errorFound = false;
            let result = undefined;

            write("Input: " + test.params);
            write("NormalResult: " + test.answer);

            // вызываем код пользователя с контролем ошибки
            try {
                // eslint-disable-next-line
                eval(this.studentCode.toString() + " result = main(" + test.params.join(",") + ");");
                write("UserCodeAnswer: " + result);
            } catch (err) {
                errorFound = true;
            }

            // если в коде пользователя нет ошибки
            if(errorFound === false) {
                if (test.type === "int") {
                    if (TesterStudent.assertInteger(result, test.answer)) {
                        TesterStudent.addYes(resultObj);
                    } else {
                        TesterStudent.addNo(resultObj, false);
                    }
                }

                if (test.type === "intarr") {
                    if(TesterStudent.assertIntegerArray(result, test.answer)) {
                        TesterStudent.addYes(resultObj);
                    } else {
                        TesterStudent.addNo(resultObj, false);
                    }
                }

                if(test.type === "obj") {
                    if(TesterStudent.assertObjects(result, test.answer)) {
                        TesterStudent.addYes(resultObj);
                    } else {
                        TesterStudent.addNo(resultObj, false);
                    }
                }

                if(test.type === "objarr") {
                    if(TesterStudent.assertObjectsArray(result, test.answer)) {
                        TesterStudent.addYes(resultObj);
                    } else {
                        TesterStudent.addNo(resultObj, false);
                    }
                }
            } else {
                TesterStudent.addNo(resultObj, true);
            }

            write(LINE_SHORT);
        });

        write(LINE_LONG);

        return resultObj;
    }
}
