import { useEffect, useState } from "react";
import PhoneBook from "./components/PhoneBook";
import { getAll } from "./services/phonebookServices";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getAll().then((personList) => setPersons(personList));
  }, []);

  return <PhoneBook persons={persons} setPersons={setPersons} />;
};

export default App;
