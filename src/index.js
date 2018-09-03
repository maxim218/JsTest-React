import React from 'react';
import {render} from 'react-dom';
import PrintTasksArray from "./components/PrintTasksArray";
import ExersicePrinter from "./components/ExersicePrinter";

function PrintMyString() {
    return (
        <div>
            <PrintTasksArray/>
            <br/>
            <ExersicePrinter/>
        </div>
    )
}

render(<PrintMyString/>, document.getElementById('root'));