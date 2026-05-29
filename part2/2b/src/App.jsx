import { useEffect, useState } from "react";
import PhoneBook from "./components/PhoneBook";
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setPersons(res.data));
  }, []);

  return <PhoneBook persons={persons} setPersons={setPersons} />;
};

export default App;
