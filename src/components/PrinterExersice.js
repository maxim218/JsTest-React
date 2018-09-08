import React, {Component} from 'react';
import globalObj from "../actions/globalObj";
import PrintAreaField from "./PrintAreaField";
import write from "../actions/write";
import TesterStudent from "../actions/TesterStudent";
import printTestResult from "../actions/printTestResult";

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
        const resultObj = testerStudent.getTestingResult();
        printTestResult(resultObj);
    };

    render() {
        if(this.state.flag === false) {
            return (
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            );
        }

        const content = "function " + this.getFunctionDetermination() + " {\n\n}\n";

        const obj = {
            content: content.toString()
        };

        return (
            <div>
                <div className="card bg-light">
                    <div className="card-header">
                        <h2>Описание задачи</h2>
                    </div>
                    <div className="card-body">
                        <h3>Номер: {this.state.number + 1}</h3>
                        <h3>Название: {this.state.content}</h3>
                        <br/>
                        <p>
                            <b>Условие: </b>
                            {this.state.condition}
                        </p>
                        <br/>
                        <p>
                            <b>Функция: </b>
                            {this.getFunctionDetermination()}
                        </p>
                        <PrintAreaField paramsObj={obj}/>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.runCode}>Запустить</button>
                    </div>
                </div>
            </div>
        );
    }
}