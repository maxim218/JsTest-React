import React, {Component} from 'react';
import globalObj from "../actions/globalObj";

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
        }
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

    render() {
        if(this.state.flag === false) {
            return (
                <div>
                    <h2>Задача не выбрана</h2>
                </div>
            );
        }

        const textAreaId = "mainInputTextArea";
        const textAreaText = "function " + this.getFunctionDetermination() + " {\n\n}\n";

        function areaChangedFunction(event) {
            document.getElementById(textAreaId).setState({value: event.target.value});
        }

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
                <textarea id={textAreaId} value={textAreaText} onChange={areaChangedFunction}/>
                <br/>
            </div>
        );
    }
}