import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number : 1785125152
    }
  ]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState(0);
  const handleInputChange = (event) => {
    setNewName(event.target.value);
  }

  const handleInputNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(persons.find(obj => obj.name === newName)){
      alert(`${newName} is already added to phonebook`);
      return;
    };
    const newPersonObject = {"name" : newName, "number" : newNumber};
    const newPersonArray = persons.concat(newPersonObject);
    setPersons(newPersonArray);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={handleInputChange} />
        </div>
        <div>
          number : <input type="number" value={newNumber} onChange={handleInputNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, i) => {
          return (
            <p key={i}>{person.name} {person.number}</p>
          )
        })}
      </div>
    </div>
  )
}

export default App