import React, {Component} from 'react';
import getGlobalObj from "../actions/getGlobalObj";

const BTN_NAME = "btnHidden";

export default class ExersicePrinter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskName: getGlobalObj().taskName,
            condition: getGlobalObj().condition,
            params: getGlobalObj().params,
        }
    }

    btnHiddenClick = () => {
        this.setState = ({
            taskName: getGlobalObj().taskName,
            condition: getGlobalObj().condition,
            params: getGlobalObj().params,
        });

        console.log(getGlobalObj().taskName);

        const taskName = this.state.taskName;
        const condition = this.state.condition;
        console.log(taskName + " ___ " + condition);
    };

    render() {
        const taskName = this.state.taskName;
        const condition = this.state.condition;
        console.log(taskName + " ___ " + condition);

        if(!taskName || !condition) {
            return (
                <div>
                    <button id={BTN_NAME} hidden={true} onClick={this.btnHiddenClick}>Btn</button>
                    <h2>Задача не выбрана</h2>
                </div>
            )
        }

        return (
            <div>
                {taskName}
                {condition}
            </div>
        )
    }
}
