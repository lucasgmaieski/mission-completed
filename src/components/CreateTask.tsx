import { useEffect, useState } from 'react';
import TaskComponent from './TaskComponent';


const API = import.meta.env.VITE_API;

// export const API = "http://localhost:5000";
export type Task = {
    id: number;
    titleTask: string;
    durationTask: number;
    completedTask:boolean;
}
interface Props  {
    setAnimatedCompleted: (animate: boolean) => void;
}

export const CreateTask = ({setAnimatedCompleted}: Props) => {

    const [title, setTitle] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [list, setList] = useState<Task[]>([]);
    const [activeButton, setActiveButton] = useState(1);
    const [completed, setCompleted] = useState<boolean>(false);
    // const [ animateCompleted, setAnimateCompleted ] = useState<boolean>(false);
    console.log('api ' + API);
    //Load todos on page load
    useEffect(() => {
        const loadData = async() => {
            setLoading(true);

            const res = await fetch(API + "todos")
                .then((res) => res.json())
                .then((data) => data)
                .catch((err) => console.log(err));
            
            setLoading(false);
            setList(res);
        }
        loadData();
    }, []);
    const handleCheckTask = async (item: Task) => {
        console.log(item);
        
        item.completedTask = !item.completedTask;
        const data = await fetch(API + "todos/" + item.id, {
            method: "PUT",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => data)
        
        if(item.completedTask) {
            setAnimatedCompleted(true);
            setTimeout(() => {
                setAnimatedCompleted(false);
                console.log("ta entrando no setTimeout");
                console.log("set:" + setAnimatedCompleted);
            }, 1000);
        }
        console.log(data);
        setList((prevState) => prevState.map((t) => (t.id === data.id ? (t = data) : t)));
        
    }
    const toggleActiveBtn = (id: number) => {
        setActiveButton(id);
    }
    const handleCreateTask = async () => {
        const newTask: Task = {
            id: Math.random(),
            titleTask: title,
            durationTask: duration,
            completedTask: false,
        }

        await fetch(API + "todos", {
            method: "POST",
            body: JSON.stringify(newTask),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setList([...list, newTask]);
        setTitle("");
        setDuration(0);
    }
    
    const handleDelete = async (id: number) => {
        await fetch(API + "todos/" + id, {
            method: "DELETE"
        });
        setList((prevState) => prevState.filter((item) => item.id !== id));
        console.log(id);
    }

    console.log("lista que não atualiza na hora");
    console.log(list);
    return (
        <>
            <div className='border-b-cyan-900 border-b-2 py-4 mb-4'>
                <h2 className='text-center text-3xl mb-2'>Adicione sua próxima tarefa:</h2>
                <label className='w-full' htmlFor="nameTask">O que você vai fazer?</label>
                <input className='w-full mt-1 mb-4 text-black focus-visible:outline-cyan-800 focus-visible:outline-2'
                    type="text" 
                    name="nameTask" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    placeholder="Título da tarefa"
                 />
                <label className='w-full' htmlFor="duration">Duração</label>
                <input className='w-full mt-1 text-black focus-visible:outline-cyan-800 focus-visible:outline-2' 
                    type="number" 
                    name="duration" 
                    value={duration} 
                    onChange={e => setDuration(parseFloat(e.target.value))} 
                    placeholder="Tempo estimado (em horas)"
                />
                <input onClick={handleCreateTask} className='w-full bg-black border-2 text-white mt-4 py-2 border-cyan-900 rounded-sm hover:bg-white hover:text-black transition-all' type="button" value="Criar Tarefa" />
            </div>

            <h2 className='text-center mb-2 text-3xl'>Lista de tarefas:</h2>
            <div className='mb-4'>
                <button className={`rounded-none border-x-0 border-t-0 border-b-4 border-cyan-900 w-1/3 bg-black  hover:bg-white hover:text-black hover:border-black focus:outline-none active:border-white ${activeButton === 1 ? 'border-white' : '' }`} onClick={() => toggleActiveBtn(1)}>Todas</button>
                <button className={`rounded-none border-x-0 border-t-0 border-b-4 border-cyan-900 w-1/3 bg-black  hover:bg-white hover:text-black hover:border-black focus:outline-none active:border-white ${activeButton === 2 ? 'border-white' : '' }`} onClick={() => toggleActiveBtn(2)}>Ativas</button>
                <button className={`rounded-none border-x-0 border-t-0 border-b-4 border-cyan-900 w-1/3 bg-black  hover:bg-white hover:text-black hover:border-black focus:outline-none active:border-white ${activeButton === 3 ? 'border-white' : '' }`} onClick={() => toggleActiveBtn(3)}>Concluidas</button>
            </div>

        
            {list.length === 0 && <p>Não há tarefas!</p>}
            {activeButton === 1 && list.map((item, key) => (
                <TaskComponent
                key={key}
                task={item}
                onDelete={handleDelete}
                onCheck={handleCheckTask}
                />
            )) }
            {activeButton === 2 && list.filter((item) => item.completedTask === false).map((item, key) => (
                <TaskComponent
                key={key}
                task={item}
                onDelete={handleDelete}
                onCheck={handleCheckTask}
                />
            ))}
            {activeButton === 3 && list.filter((item) => item.completedTask === true).map((item, key) => (
                <TaskComponent
                key={key}
                task={item}
                onDelete={handleDelete}
                onCheck={handleCheckTask}
                />
            ))}
            
        </>
    );
}