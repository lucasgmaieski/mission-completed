import React from 'react';
import { Task } from './CreateTask';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";


type TaskProps = {
  task: Task;
  onDelete: (id: number) => void;
  onCheck: (item: Task) => void;
};

const TaskComponent: React.FC<TaskProps> = ({ task, onDelete, onCheck }) => {
  return (
    <div>
        <h3 className={task.completedTask ? "text-orange-500 line-through" : ""}>{task.titleTask}</h3>
        <p>Duração: {task.durationTask} horas</p>
        <div className="flex">
            <i className='w-fit' onClick={() => onCheck(task)}>
                {task.completedTask ? <BsBookmarkCheckFill /> : <BsBookmarkCheck />} 
            </i>
            <i className='w-fit'><BsTrash onClick={() => (onDelete(task.id))} /></i>
        </div>
    </div>
  );
};

export default TaskComponent;
