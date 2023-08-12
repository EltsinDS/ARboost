import React, { useState } from "react";
import PersonsList from "./PersonsList";
import MatchesList from "./MatchesList";
import AddForm from "./AddForm";
import { IPersons } from "../types/componentTypes";
import { Box, Center } from "@chakra-ui/react";

function App() {
  const [persons, setPersons] = useState<IPersons[]>([]);

  const addPerson = (name: string): void => {
    setPersons((prev) => [...prev, { name, weekends: [] }]);
  };

  const deletePerson = (name: string): void => {
    setPersons(persons.filter((person) => person.name !== name));
  };

  const updatePersonWeekends = (date: Date | null, name: string): void => {
    if (date) {
      const stringDate: string = date
        .toLocaleDateString("ko-KR")
        .replaceAll(". ", "-")
        .replace(".", "");

      if (
        persons
          .find((person) => person.name === name)
          ?.weekends.indexOf(stringDate) !== -1
      ) {
        setPersons((prev) =>
          prev.map((person) => {
            if (person.name === name)
              person.weekends = person.weekends.filter(
                (el) => el !== stringDate
              );
            return person;
          })
        );
      } else {
        setPersons((prev) =>
          prev.map((person) => {
            if (person.name === name) person.weekends.push(stringDate);
            return person;
          })
        );
      }
    }
  };

  return (
    <Center>
      <Box mt="30px">
        <AddForm addPerson={addPerson} />

        <Box borderBottom="1px" borderColor="black" mb="10px">
          {persons.map((person, index) => {
            return (
              <React.Fragment key={index}>
                <PersonsList
                  person={person}
                  deletePerson={deletePerson}
                  updatePersonWeekends={updatePersonWeekends}
                />
              </React.Fragment>
            );
          })}
        </Box>

        <MatchesList persons={persons} />
      </Box>
    </Center>
  );
}

export default App;
