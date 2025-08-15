import { useEffect, useState } from 'react' 
import CardList from './components/card-list/card-list.component'
import SearchBar from './components/SearchBar/SearchBar.component.component'
import './App.css'


const App = () => {
  console.log('Rendering App')
  const [kittens,setKittens] = useState([]);
  console.log(kittens);
  const [filteredKittens, setFilteredKittens] = useState([]);

  const onChange = (event)=> {
            const searchString = event.target.value.toLowerCase();
            const newFilteredKittens = kittens.filter((kitten) => kitten.name.toLowerCase().includes(searchString))
            setFilteredKittens(newFilteredKittens);
            console.log('Se ejecuto');
            }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setKittens(data)
        setFilteredKittens(data)
      });
      
      
    }, []);
  
  return (
    <>
      <section className="app-container">
        <h1 className="app-title">Kittens Rolodex</h1>
        <SearchBar onChange ={onChange}/>
        <CardList  kittens={filteredKittens}></CardList>
      </section>
    </>
  )
}

export default App
