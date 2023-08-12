import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { IMatchesList } from "../types/componentTypes";

function MatchesList({ persons }: IMatchesList): JSX.Element {
  const matchesDates: { [key: string]: Array<string> } = {};
  const showMatches: Array<Array<string>> = [];
  persons
    .map((person) => person.weekends)
    .forEach((el) => el.forEach((date) => (matchesDates[date] = [])));

  for (let key in matchesDates) {
    persons.forEach((person) => {
      if (person.weekends.indexOf(key) !== -1)
        matchesDates[key].push(person.name);
    });
  }

  for (let key in matchesDates) {
    if (matchesDates[key].length > 1)
      showMatches.push([key, ...matchesDates[key]]);
  }
  showMatches.sort((a, b) => b.length - a.length);

  return (
    <Box>
      {showMatches.length !== 0 ? (
        showMatches.map((matches) => (
          <Center key={matches[0]}>
            <Text>{matches.join(" ")}</Text>
          </Center>
        ))
      ) : (
        <Center>
          <Text>Нет совпадений</Text>
        </Center>
      )}
    </Box>
  );
}

export default MatchesList;
