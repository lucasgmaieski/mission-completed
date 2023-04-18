import { Header} from './components/Header';
import './App.css';
import { CreateTask } from './components/CreateTask';
import { Container } from './components/Container';
import { useEffect, useState } from 'react';

const App = () => {
    const [animateCompleted, setAnimateCompleted] = useState<boolean>(false);

    useEffect(() => {
        console.log("animação" + animateCompleted);

    }, [animateCompleted]);
    return (
        <Container bgMain="../src/assets/bg.jpg" >
            <div className='max-w-3xl m-auto  bg-black backdrop-blur-sm bg-opacity-70 border-2 rounded border-slate-800 shadow shadow-cyan-700 px-20 py-2'>
                <Header animatedCompleted={animateCompleted}/>
                <CreateTask setAnimatedCompleted={setAnimateCompleted}/>
                
            </div>
        </Container>
        
    );
}

export default App;