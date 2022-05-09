import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function TaskDivs({ adatok, handleTableChange }) {
  const taskdivs = []
  const [selectedTask, setSelectedTask] = useState("1. feladat") // useState(adatok.tasks[0].name)

  function Clicked(thetask) {
    setSelectedTask(thetask)

    handleTableChange(parseInt(thetask.split("")[0]) - 1)
  }


  if (adatok.tasks.length == 0) {
    return (
      <div>
          <span> A fáljban nincsenek feladatok! </span>
      </div>
  );
  } else{
    adatok.tasks.forEach(element => {
      taskdivs.push(element.name)
  
    });
  
    return (
      <div>
  
  
        {taskdivs.map((thetask) =>
          <button
            className={selectedTask == thetask ? "active" : "notactive"}
            onClick={() => Clicked(thetask)}
          >
            {thetask}
          </button>
        )}
      </div>
    );

  }

  
 
}


