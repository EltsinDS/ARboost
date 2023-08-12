import React, { useState } from "react";
import { IPersonsList } from "../types/componentTypes";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import { CloseIcon, CalendarIcon } from "@chakra-ui/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PersonsList({
  person,
  deletePerson,
  updatePersonWeekends,
}: IPersonsList): JSX.Element {
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDate = (date: Date | null): void => {
    setSelectedDate(date);
    updatePersonWeekends(date, person.name);
  };

  return (
    <Box>
      <Center mb="10px">
        <Button onClick={() => setCalendarOpen(!calendarOpen)}>
          <CalendarIcon />
        </Button>
        <Text w="150px" textAlign="center">
          {person.name}
        </Text>
        <Button onClick={() => deletePerson(person.name)}>
          <CloseIcon />
        </Button>
      </Center>

      {calendarOpen! ? (
        <Center mt="10px" mb="10px" p="5px">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => handleDate(date)}
            placeholderText="Выбрать дни"
            shouldCloseOnSelect={false}
            highlightDates={person.weekends.map((date) => new Date(date))}
          />
        </Center>
      ) : null}
    </Box>
  );
}

export default PersonsList;
