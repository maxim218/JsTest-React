import write from "./write";

const LINE_LONG = "---------------------------------------------";
const LINE_SHORT = "-------------------------";

export default class TesterStudent {
    constructor(studentCodeParam, testsArrParam) {
        this.studentCode = studentCodeParam;
        this.testsArr = testsArrParam;
    }

    static assertInteger(a, b) {
        return a === b;
    }

    static assertIntegerArray(arrFirst, arrSecond) {
        if(Array.isArray(arrFirst) === false) {
            return false;
        }

        if(Array.isArray(arrSecond) === false) {
            return false;
        }

        if(arrFirst.length !== arrSecond.length) {
            return false;
        }

        for(let i = 0; i < arrFirst.length; i++) {
            if(arrFirst[i] !== arrSecond[i]) {
                return false;
            }
        }

        return true;
    }

    static addYes(resultObj) {
        resultObj.yes++;
        write("Ответ верный");
    }

    static addNo(resultObj, errorExistsFlag) {
        resultObj.no++;
        if(errorExistsFlag === false) {
            write("Ответ НЕ верный");
        } else {
            write("Ошибка во время выполнения");
        }
    }

    getTestingResult() {
        const resultObj = {
            all: 0,
            yes: 0,
            no: 0,
        };

        write(LINE_LONG);

        this.testsArr.forEach((test) => {
            write(LINE_SHORT);

            resultObj.all++;
            let errorFound = false;
            let result = undefined;

            write("Input: " + test.params);
            write("NormalResult: " + test.answer);

            try {
                // eslint-disable-next-line
                eval(this.studentCode.toString() + " result = main(" + test.params.join(",") + ");");
                write("UserCodeAnswer: " + result);
            } catch (err) {
                errorFound = true;
            }

            if(errorFound === false) {
                if (test.type === "int") {
                    if (TesterStudent.assertInteger(result, test.answer)) {
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
