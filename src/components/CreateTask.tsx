import { useState } from 'react';

export const CreateTask = () => {
    return (
        <div className='border-b-cyan-800'>
            <h2>Adicione sua próxima tarefa:</h2>
            <label htmlFor="nameTask">O que você vai fazer?</label>
            <input type="text" name="nameTask" placeholder="Título da tarefa"/>
            <label htmlFor="duration">Duração</label>
            <input type="number" name="duration" placeholder="Tempo estimado (em horas)"/>

            <input type="button" value="Criar Tarefa" />
        </div>
    );
}