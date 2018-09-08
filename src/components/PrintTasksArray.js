import React from 'react';
import tasks from "../resources/tasks";
import PrintTask from "./PrintTask";

const TASK = "taskKeyNum";

export default function PrintTasksArray() {
    const tasksArray = tasks();

    const arr = tasksArray.map((element, index) => {
        const taskParam = {
            numberParam: parseInt(index.toString(), 10) + 1,
            contentParam: element.toString(),
        };

        return <PrintTask key={TASK + index} paramsObj={taskParam}/>
    });

    return (
        <div>
            <div className="card bg-light">
                <div className="card-header">
                    <h2>Список задач</h2>
                </div>
                <div className="card-body">
                    <div style={{overflowY: "scroll", height: "350px"}}>
                        <ul className="list-group" data-offset="0">
                            {arr}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}