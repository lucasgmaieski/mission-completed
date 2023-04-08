import { Task } from "./Task";


export const TodoList = () => {
    return (
        <>
            <h2 className='text-center mb-2 text-3xl'>Lista de tarefas:</h2>

            <div className='mb-4'>
                <button className='rounded-none border-x-0 border-t-0 border-b-2 border-cyan-900 w-1/3 bg-black  hover:bg-white hover:text-black focus:outline-none active:border-white'>Todas</button>
                <button className='rounded-none border-x-0 border-t-0 border-b-2 border-cyan-900 w-1/3 bg-black  hover:bg-white hover:text-black focus:outline-none active:border-white'>Ativas</button>
                <button className='rounded-none border-x-0 border-t-0 border-b-2 border-cyan-900 w-1/3 bg-black  hover:bg-white hover:text-black focus:outline-none active:border-white'>Concluidas</button>
            </div>
            
            <Task />
        </>
    );
}