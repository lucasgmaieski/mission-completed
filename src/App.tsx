import { Header} from './components/Header';
import './App.css';
import { CreateTask } from './components/CreateTask';
import { Main } from './components/Main';

const App = () => {
    return (
        <Main bgMain="../src/assets/bg.jpg" >
            <div className='max-w-3xl m-auto bg-cyan-800 opacity-90 border-2 rounded border-slate-800 shadow shadow-cyan-700 px-20 z-10 relative'>
                <Header />
                <CreateTask />
            </div>
        </Main>
        
    );
}

export default App;