import { useState } from 'react';

export const CreateTask = () => {
    return (
        <div className='border-b-cyan-800'>
            <h2>Adicione sua próxima tarefa:</h2>
            <label className='w-full' htmlFor="nameTask">O que você vai fazer?</label>
            <input className='w-full opacity-100' type="text" name="nameTask" placeholder="Título da tarefa"/>
            <label className='w-full' htmlFor="duration">Duração</label>
            <input className='w-full' type="number" name="duration" placeholder="Tempo estimado (em horas)"/>

            <input className='bg-transparent border-2 border-white rounded-sm' type="button" value="Criar Tarefa" />
        </div>
    );
}