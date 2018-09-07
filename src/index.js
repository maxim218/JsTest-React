import React from 'react';
import {render} from 'react-dom';
import PrintTasksArray from "./components/PrintTasksArray";
import PrinterExersice from "./components/PrinterExersice";

function PrintMyString() {
    return (
        <div>
            <PrintTasksArray/>
            <br/>
            <PrinterExersice/>
            <br/>
        </div>
    )
}

render(<PrintMyString/>, document.getElementById('root'));