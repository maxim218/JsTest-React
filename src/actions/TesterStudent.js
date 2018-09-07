export default class TesterStudent {
    constructor(studentCodeParam, testsArrParam) {
        this.studentCode = studentCodeParam;
        this.testsArr = testsArrParam;
    }

    static assertInteger(a, b) {
        return a === b;
    }

    getTestingResult() {
        const resultObj = {
            all: 0,
            yes: 0,
            no: 0,
        };

        this.testsArr.forEach((test) => {
            resultObj.all++;

            let result = undefined;
            // eslint-disable-next-line
            eval(this.studentCode.toString() + " result = main(" + test.params.join(",") +");");

            if(test.type === "int") {
                if(TesterStudent.assertInteger(result, test.answer)) {
                    resultObj.yes++;
                } else {
                    resultObj.no++;
                }
            }
        });

        return resultObj;
    }
}
