import { useState } from "react";
import SearchBar from "./SearchBar";
import Form from "./Form";
import List from "./List";
import {
  addPerson,
  deletePerson,
  updatePerson,
} from "../services/phonebookServices";

const Phonebook = (props) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleDelete = (id) => {
    const person = props.persons.find((person) => person.id === id);
    if (person === undefined) {
      alert(`Requested person not in the list.`);
      return;
    } else {
      const result = window.confirm(
        `Do you really want to delete ${person.name}?`,
      );
      console.log(result);
      if (result === false) return;
    }
    deletePerson(id)
      .then((data) => {
        const newList = props.persons.filter((person) => person.id !== data.id);
        props.setPersons(newList);
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleInputNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = props.persons.find((obj) => obj.name === newName);
    if (user) {
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with the new one?`,
      );
      if (result === false) return;
      updatePerson(user, newNumber)
        .then((data) => {
          const index = props.persons.findIndex(
            (person) => person.id === data.id,
          );
          const newArray = props.persons.with(index, data);
          props.setPersons(newArray);
        })
        .catch((error) => console.log(error));
    } else {
      const newPersonObject = {
        name: newName,
        number: newNumber,
      };

      addPerson(newPersonObject)
        .then((personList) => {
          props.setPersons(props.persons.concat(personList));
        })
        .catch((error) => console.log(error));
    }
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
      <List
        persons={props.persons}
        searchInput={searchInput}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Phonebook;
