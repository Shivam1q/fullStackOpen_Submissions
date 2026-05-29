import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]); 
  const [newName, setNewName] = useState('')

  const handleInputChange = (event) => {
    console.log(newName);
    setNewName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPersonObject = {"name" : newName};
    const newPersonArray = persons.concat(newPersonObject);
    setPersons(newPersonArray);
    console.log(persons);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, i) => {
          return (
            <p key={i}>{person.name}</p>
          )
        })}
      </div>
    </div>
  )
}

export default App