import React from 'react';
import {render} from 'react-dom';
import PrintTasksArray from "./components/PrintTasksArray";
import PrinterExersice from "./components/PrinterExersice";

/**
 * функция для вывода всего содержимого страницы
 * @returns {*}
 * @constructor
 */
function PrintMyString() {
    return (
        <div>
            <PrintTasksArray/>
            <br/>
            <div>
                <PrinterExersice/>
            </div>
            <br/>
        </div>
    )
}

/**
 * выводим всё содержимое страницы
 */
render(<PrintMyString/>, document.getElementById('root'));