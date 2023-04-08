import { useState } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

type Props = {
    idTask: number;

    titleTask: string;
    durationTask: number;
    completedTask: boolean;
}

export const Task = ({idTask, titleTask, durationTask, completedTask}: Props) => {
    const [completed, setCompleted] = useState<boolean>(completedTask);
    const handleCheckTask = () => {
        {completed ? setCompleted(false) : setCompleted(true) }
    }
    return (
        <>
            <h3 className={completed ? "text-orange-500 line-through" : ""}>{titleTask}</h3>
            <p>Duração: {durationTask}h</p>
            <div> <i onClick={handleCheckTask}> {completed ? <BsBookmarkCheckFill /> : <BsBookmarkCheck />} </i> <i><BsTrash /></i></div>
        </>
    );
}