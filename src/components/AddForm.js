import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import DayjsUtils from "@date-io/dayjs";
import { Box, Button, TextField } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    height: 36,
    marginLeft: "10px"
  }
})(Button);

dayjs.locale("ja");

const AddForm = props => {
  const defaultInputText = "todo";
  const defaultDueDate = new Date().toString();

  const [inputText, setInputText] = useState(defaultInputText);
  const handleInputText = e => setInputText(e.target.value);

  const [selectedDate, setSelectedDate] = useState(defaultDueDate);
  const handleSelectedDate = date => setSelectedDate(date);

  const addItemList = () => {
    setInputText(defaultInputText);
    setSelectedDate(defaultDueDate);
    props.onAddItem({ title: inputText, dueDate: selectedDate });
  };

  return (
    <Box
      border={1}
      borderColor="primary.main"
      borderRadius="borderRadius"
      my={1}
      p={1}
    >
      <form autoComplete="off">
        <TextField
          id="textfield-todo-item"
          label="Todo"
          color="primary"
          defaultValue={defaultInputText}
          helperText={null}
          onChange={e => handleInputText(e)}
        />

        <MuiPickersUtilsProvider utils={DayjsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-due-date"
            label="Due Date"
            placeholder={defaultDueDate}
            format="YYYY年MM月DD日"
            value={selectedDate}
            onChange={date => handleSelectedDate(date)}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>

        <StyledButton
          onClick={() => addItemList()}
          variant="contained"
          color="primary"
          size="small"
        >
          Add
        </StyledButton>
      </form>
    </Box>
  );
};

export default AddForm;
