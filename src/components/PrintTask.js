import React from 'react';
import taskClick from "../actions/taskClick";

/**
 * функция для вывода на экран названия задания
 * @param props
 * @returns {*}
 * @constructor
 */
export default function PrintTask(props) {
    const {paramsObj} = props;

    // получаем параметры
    const numberParam = paramsObj.numberParam;
    const contentParam = paramsObj.contentParam;

    // функция вызывается при щелчке по данному заданию
    function elementClickFunction() {
        taskClick(numberParam, contentParam);
    }

    // выводим на экран название задания
    return (
        <li className="list-group-item" style={{cursor: "pointer"}} onClick={elementClickFunction}>
            <b>Номер:</b> {numberParam}
            <br/>
            <b>Название:</b> {contentParam}
        </li>
    )
}
