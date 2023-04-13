import React from 'react';
import { Task } from './CreateTask';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";


type TaskProps = {
  task: Task;
  onDelete: (id: number) => void;
  onCheck: (item: Task) => void;
};

const TaskComponent = ({ task, onDelete, onCheck }: TaskProps) => {
  return (
    <div className='mb-3 hover:bg-black bg-opacity-40'>
        <h3 className={task.completedTask ? "text-orange-500 line-through" : ""}>{task.titleTask}</h3>
        <p>Duração: {task.durationTask} horas</p>
        <div className="flex gap-2">
            <i className='w-fit cursor-pointer' onClick={() => onCheck(task)}>
                {task.completedTask ? <BsBookmarkCheckFill /> : <BsBookmarkCheck />} 
            </i>
            <i className='w-fit cursor-pointer'><BsTrash onClick={() => (onDelete(task.id))} /></i>
        </div>
    </div>
  );
};

export default TaskComponent;
