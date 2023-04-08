import { useEffect, useState } from 'react';
import { Task } from './Task';

export type Task = {
    titleTask: string;
    durationTask: number;
    completed?:boolean;
}
export const CreateTask = () => {

    const [title, setTitle] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);
    const [list, setList] = useState<Task[]>([]);
    const handleCreateTask = () => {
        const newTask: Task = {
            titleTask: title,
            durationTask: duration
        }
        setList([...list, newTask]);
    }
    console.log("lista que não atualiza na hora");
    console.log(list);
    return (
        <>
            <div className='border-b-cyan-900 border-b-2 py-4 mb-4'>
                <h2 className='text-center text-3xl'>Adicione sua próxima tarefa:</h2>
                <label className='w-full' htmlFor="nameTask">O que você vai fazer?</label>
                <input className='w-full mb-4 text-black' type="text" name="nameTask" value={title} onChange={e => setTitle(e.target.value)} placeholder="Título da tarefa"/>
                <label className='w-full' htmlFor="duration">Duração</label>
                <input className='w-full text-black' type="number" name="duration" value={duration} onChange={e => setDuration(parseFloat(e.target.value))} placeholder="Tempo estimado (em horas)"/>
                <input onClick={handleCreateTask} className='w-full bg-black border-2 text-white mt-4 py-1 border-cyan-900 rounded-sm' type="button" value="Criar Tarefa" />
            </div>

            <h2 className='text-center mb-2 text-3xl'>Lista de tarefas:</h2>
            <div className='mb-4'>
                <button className='rounded-none border-x-0 border-t-0 border-b-2 border-cyan-900 w-1/3 bg-black  hover:bg-white hover:text-black focus:outline-none active:border-white'>Todas</button>
                <button className='rounded-none border-x-0 border-t-0 border-b-2 border-cyan-900 w-1/3 bg-black  hover:bg-white hover:text-black focus:outline-none active:border-white'>Ativas</button>
                <button className='rounded-none border-x-0 border-t-0 border-b-2 border-cyan-900 w-1/3 bg-black  hover:bg-white hover:text-black focus:outline-none active:border-white'>Concluidas</button>
            </div>
            {list.map((item, key) => (
                <Task key={key} item={item} />
        
            ))}
            
        </>
        
    );
}