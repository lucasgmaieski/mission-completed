import { Header} from './components/Header';
import './App.css';
import { CreateTask } from './components/CreateTask';
import { Main } from './components/Main';
import { TodoList } from './components/TodoList';

const App = () => {
    return (
        <Main bgMain="../src/assets/bg.jpg" >
            <div className='max-w-3xl m-auto bg-black backdrop-blur-sm bg-opacity-70 border-2 rounded border-slate-800 shadow shadow-cyan-700 px-20'>
                <Header />
                <CreateTask />
                {/* <TodoList/> */}
            </div>
        </Main>
        
    );
}

export default App;