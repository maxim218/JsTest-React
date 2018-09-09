import React, {Component} from 'react';
import globalObj from "../actions/globalObj";
import write from "../actions/write";

/**
 * класс для вывода текстового поля ввода
 */
export default class PrintAreaField extends Component {
    /**
     * конструктор
     * @param props
     */
    constructor(props) {
        super(props);

        // передаём область видимости для общего доступа
        globalObj().areaNameSpace = this;

        const {paramsObj} = props;
        const content = paramsObj.content.toString();

        // задаём начальное состояние
        this.state = {
            content: content
        };

        write("PrintAreaField CREATED");
    }

    /**
     * метод вызывается при изменении содержимого текстового поля
     * @param e
     */
    onContentChange = (e) => {
        // меняем состояние
        this.setState({
            content: e.target.value
        });
    };

    /**
     * метод для замены состояния
     * @param contentString
     */
    setContent(contentString) {
        // меняем состояние
        this.setState({
            content: contentString.toString()
        });
    }

    /**
     * метод для получения содержимого текстовго поля
     * @returns {string}
     */
    getContent() {
        const content = this.state.content;
        return content.toString();
    }

    /**
     * метод для отрисовки текстового поля
     * @returns {*}
     */
    render() {
        return(
            <div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <span className="lead">&nbsp;&nbsp;&nbsp;Код&nbsp;&nbsp;&nbsp;</span>
                        </span>
                    </div>
                    <textarea rows="7" className="form-control" aria-label="Код" onChange={this.onContentChange} value={this.state.content}/>
                </div>
            </div>
        );
    }
}