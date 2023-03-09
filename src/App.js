import styles from './App.module.css';
import AddUser from './components/Users/AddUser';

function App() {
    return (
        <div className={styles.container}>
            <AddUser />
        </div>
    );
}

export default App;
