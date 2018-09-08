import React from 'react';
import taskClick from "../actions/taskClick";

export default function PrintTask(props) {
    const {paramsObj} = props;

    const numberParam = paramsObj.numberParam;
    const contentParam = paramsObj.contentParam;

    function elementClickFunction() {
        taskClick(numberParam, contentParam);
    }

    return (
        <li className="list-group-item" style={{cursor: "pointer"}} onClick={elementClickFunction}>
            <b>Номер:</b> {numberParam}
            <br/>
            <b>Название:</b> {contentParam}
        </li>
    )
}
