import './styles/App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = {"Bienvenidos a Mazzanta la Mejores Pizzas Italianas"}/>
    </div>
  );
}

export default App;
