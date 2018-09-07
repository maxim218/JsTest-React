export default class TesterStudent {
    constructor(studentCodeParam, testsArrParam) {
        this.studentCode = studentCodeParam;
        this.testsArr = testsArrParam;
    }

    static assertInteger(a, b) {
        return a === b;
    }

    getTestingResult() {
        const outputArr = [];

        this.testsArr.forEach((test) => {
            let result = undefined;

            // eslint-disable-next-line
            eval(this.studentCode.toString() + " result = main(" + test.params.join(",") +");");

            if(test.type === "int") {
                outputArr.push(TesterStudent.assertInteger(result, test.answer));
            }
        });

        return outputArr;
    }
}
