import React, {Component} from 'react';
import globalObj from "../actions/globalObj";
import PrintAreaField from "./PrintAreaField";
import write from "../actions/write";
import TesterStudent from "../actions/TesterStudent";

const BUTTON_CLASS_NAME = "btn";

export default class PrinterExersice extends Component{
    constructor(props) {
        super(props);

        globalObj().namespace = this;

        this.state = {
            condition: undefined,
            params: undefined,
            tests: undefined,
            content: undefined,
            number: undefined,
            flag: false,
        };

        write("PrinterExersice CREATED");
    }

    setContent(conditionParam, paramsParam, testsParam, contentParam, numberParam) {
        this.setState({
            condition: conditionParam,
            params: paramsParam,
            tests: testsParam,
            content: contentParam,
            number: numberParam,
            flag: true,
        });
    }

    getFunctionDetermination() {
        return "main (" + this.state.params.join(", ") + ")";
    }

    runCode = () => {
        const studentCode = globalObj().areaNameSpace.getContent();
        const testsArr = this.state.tests;
        const testerStudent = new TesterStudent(studentCode, testsArr);
        const resultTestArr = testerStudent.getTestingResult();
    };

    render() {
        if(this.state.flag === false) {
            return (
                <div>
                    <h2>Задача не выбрана</h2>
                </div>
            );
        }

        const content = "function " + this.getFunctionDetermination() + " {\n\n}\n";

        const obj = {
            content: content.toString()
        };

        return (
            <div>
                <h2>Номер: {this.state.number + 1}</h2>
                <h3>Название: {this.state.content}</h3>
                <p>
                    <b>Условие: </b>
                    {this.state.condition}
                </p>
                <p>
                    <b>Функция: </b>
                    {this.getFunctionDetermination()}
                </p>
                <h3>Ваш код:</h3>
                <PrintAreaField paramsObj={obj}/>
                <br/>
                <div className={BUTTON_CLASS_NAME} onClick={this.runCode} align="center">Запустить</div>
            </div>
        );
    }
}