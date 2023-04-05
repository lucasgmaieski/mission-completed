import { Header} from './components/Header';
import './App.css';
import { CreateTask } from './components/CreateTask';

const App = () => {
    return (
        <main className='bg-cyan-900 w-screen h-screen text-white'>
            <div className='max-w-3xl m-auto bg-cyan-800 border-2 rounded border-slate-800 shadow shadow-cyan-700'>
                <Header />
                <CreateTask />
            </div>
        </main>
        
    );
}

export default App;