import React, { useState } from "react";
import { IAddForm } from "../types/componentTypes";
import { Box, Button, Input, Text } from "@chakra-ui/react";

function AddForm({ addPerson }: IAddForm): JSX.Element {
  const [form, setForm] = useState<string>("");
  const handleForm = (): void => {
    if (form) {
      addPerson(form);
    }
    setForm("");
  };

  return (
    <Box display="flex" gap="10px" mb="20px">
      <Input
        type="text"
        placeholder="Введите имя"
        value={form}
        onChange={(el) => setForm(el.target.value)}
      />
      <Button onClick={() => handleForm()}>
        <Text>Добавить</Text>
      </Button>
    </Box>
  );
}

export default AddForm;
