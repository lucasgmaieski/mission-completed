type Props = {
    title: string;
    duration: number;
    completed?: boolean;
}

export const Task = ({title, duration, completed}: Props) => {
    return (
        <>
            <h3>{title}</h3>
            <span>Duração: {duration}h</span>
            <div> <i>Completo</i> <i>Excluir</i></div>
        </>
    );
}