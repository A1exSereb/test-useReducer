import './App.css';
import AddUser from './components/AddUser';
import Users from './components/Users';
import { UsersProvider } from './contexts/users';


function App() {
  return (
    <div className="App">
      <UsersProvider>
        <AddUser/>
        <Users/>
      </UsersProvider>
    </div>
  );
}

export default App;
