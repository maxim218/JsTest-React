import React from 'react';
import taskClick from "../actions/taskClick";

const CLASS_NAME = "taskClass";

export default function PrintTask(props) {
    const {paramsObj} = props;

    const numberParam = paramsObj.numberParam;
    const contentParam = paramsObj.contentParam;

    function elementClickFunction() {
        taskClick(numberParam, contentParam);
    }

    return (
        <div className={CLASS_NAME} onClick={elementClickFunction}>
            <b>Номер:</b> {numberParam}
            <br/>
            <b>Название:</b> {contentParam}
        </div>
    )
}
