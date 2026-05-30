const List = (props) => {
  return (
    <div>
      {props.searchInput === ""
        ? props.persons.map((person) => {
            return (
              <p key={person.id}>
                {person.name} {person.number}{" "}
                <button type="submit" onClick={() => props.handleDelete(person.id)}>
                  delete
                </button>
              </p>
            );
          })
        : props.persons
            .filter(
              (person) =>
                person.name
                  .toLowerCase()
                  .includes(props.searchInput.toLowerCase()) ||
                person.number.includes(props.searchInput),
            )
            .map((person) => {
              return (
                <p key={person.id}>
                  {person.name} {person.number}{" "}
                  <button type="submit" onClick={() => props.handleDelete(person.id)}>
                    delete
                  </button>
                </p>
              );
            })}
    </div>
  );
};

export default List;
