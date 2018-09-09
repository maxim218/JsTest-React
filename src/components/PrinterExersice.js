import React, {Component} from 'react';
import globalObj from "../actions/globalObj";
import PrintAreaField from "./PrintAreaField";
import write from "../actions/write";
import TesterStudent from "../actions/TesterStudent";
import printTestResult from "../actions/printTestResult";

/**
 * класс для полного вывода задания
 */
export default class PrinterExersice extends Component{
    /**
     * конструктор
     * @param props
     */
    constructor(props) {
        super(props);

        // передаём область видимости для общего доступа
        globalObj().namespace = this;

        // задаём начальное состояние
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

    /**
     * метод для изменения состояния
     * @param conditionParam
     * @param paramsParam
     * @param testsParam
     * @param contentParam
     * @param numberParam
     */
    setContent(conditionParam, paramsParam, testsParam, contentParam, numberParam) {
        // задаём новое состояние
        this.setState({
            condition: conditionParam,
            params: paramsParam,
            tests: testsParam,
            content: contentParam,
            number: numberParam,
            flag: true,
        });
    }

    /**
     * метод для генерации строки, описывающей название функции
     * @returns {string}
     */
    getFunctionDetermination() {
        return "main (" + this.state.params.join(", ") + ")";
    }

    /**
     * метод вызывается при нажатии на кнопку запуска
     */
    runCode = () => {
        // получаем код из поля ввода
        const studentCode = globalObj().areaNameSpace.getContent();
        // получаем список тестов
        const testsArr = this.state.tests;
        // создаём экземпляр тестирующего класса
        const testerStudent = new TesterStudent(studentCode, testsArr);
        // получаем результат тестирования
        const resultObj = testerStudent.getTestingResult();
        // выводим результат тестирования
        printTestResult(resultObj);
    };

    /**
     * метод для отрисовки задания
     * @returns {*}
     */
    render() {
        // если задание не выбрано
        if(this.state.flag === false) {
            return (
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            );
        }

        // получаем шаблон функции
        const content = "function " + this.getFunctionDetermination() + " {\n\n}\n";

        const obj = {
            content: content.toString()
        };

        // выводим задание на экран
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