import styles from './App.module.css';
import Card from './components/UI/Card/Card';
import CardStyles from './components/UI/Card/Card.module.css';
import AddUser from './components/Users/AddUser';

function App() {
    return (
        <div className={styles.container}>
            <Card className={CardStyles['mb-sm']}>
                <AddUser />
            </Card>
        </div>
    );
}

export default App;
