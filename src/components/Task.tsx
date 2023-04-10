import { useState } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import { API, CreateTask } from "./CreateTask";

type Props = {
    idTask: number;
    id: number;

    titleTask: string;
    durationTask: number;
    completedTask: boolean;
    listTask: Props[]
}

export const Task = ({listTask, id, idTask, titleTask, durationTask, completedTask}: Props) => {
    const [completed, setCompleted] = useState<boolean>(completedTask);
    const [list, setList] = useState<Props[]>(listTask);

    const handleCheckTask = () => {

        {completed ? setCompleted(false) : setCompleted(true) }
    }
    const handleDelete = async (id: number) => {
        await fetch(API + "/todos/" + id, {
            method: "DELETE"
        });
        setList((prevState) => prevState.filter((item) => item.id !== id));
        <CreateTask />
        console.log(id);
    }
    return (
        <>
            <h3 className={completed ? "text-orange-500 line-through" : ""}>{titleTask}</h3>
            <p className="italic">Duração: {durationTask}h</p>
            <div className="flex"> <i className='w-fit' onClick={handleCheckTask}> {completed ? <BsBookmarkCheckFill /> : <BsBookmarkCheck />} </i> <i className='w-fit'><BsTrash onClick={() => (handleDelete(id))} /></i></div>
        </>
    );
}