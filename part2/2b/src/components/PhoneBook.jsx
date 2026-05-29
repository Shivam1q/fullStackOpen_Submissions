import { useState } from "react";
import SearchBar from "./SearchBar";
import Form from "./Form";
import List from "./List";

const Phonebook = (props) => {
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
    if (props.persons.find((obj) => obj.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPersonObject = {
      name: newName,
      number: newNumber,
      id: props.persons.length + 1,
    };
    const newPersonArray = props.persons.concat(newPersonObject);
    props.setPersons(newPersonArray);
  };

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    const result = props.persons.filter(
      (person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        person.number.includes(event.target.value),
    );
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar searchInput={searchInput} handleSearch={handleSearch} />
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        handleInputChange={handleInputChange}
        handleInputNumberChange={handleInputNumberChange}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <List persons={props.persons} searchInput={searchInput} />
    </div>
  );
};

export default Phonebook;
