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
            <h2>Задачи</h2>
            <div style={{height: "180px", padding: "20px", overflowY: "scroll", background: "#bcbcbc"}}>
                {arr}
            </div>
        </div>
    )
}