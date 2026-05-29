import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleInputNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.find((obj) => obj.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPersonObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    const newPersonArray = persons.concat(newPersonObject);
    setPersons(newPersonArray);
  };

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    const result = persons.filter(
      (person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        person.number.includes(event.target.value),
    );

    setSearchArray(result);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={searchInput} onChange={handleSearch} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          number :{" "}
          <input value={newNumber} onChange={handleInputNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {searchInput === ""
          ? persons.map((person) => {
              return (
                <p key={person.id}>
                  {person.name} {person.number}
                </p>
              );
            })
          : persons
              .filter(
                (person) =>
                  person.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                  person.number.includes(searchInput),
              )
              .map((person) => {
                return (
                  <p key={person.id}>
                    {person.name} {person.number}
                  </p>
                );
              })}
      </div>
    </div>
  );
};

export default App;
