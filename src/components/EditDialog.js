import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import DayjsUtils from "@date-io/dayjs";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

dayjs.locale("ja");

const preset = {
  uuid: "",
  title: "default todo",
  dueDate: dayjs().format("2019-4-30").toString(),
  completed: false
};

const EditDialog = props => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [inputText, setInputText] = useState(preset.title);
  const handleInputText = e => setInputText(e.target.value);

  const [selectedDate, setSelectedDate] = useState(preset.dueDate);
  const handleSelectedDate = date => setSelectedDate(date);

  useEffect(() => {
    if (props.uuid != null) {
      setDialogVisible(true);
      setInputText(props.title);
      setSelectedDate(props.dueDate);
    } else {
      setDialogVisible(false);
      setInputText(preset.title);
      setSelectedDate(preset.dueDate);
    }
  }, [props.dueDate, props.title, props.uuid]);

  const handleEditDone = success => {
    setDialogVisible(false);
    if (success) props.onEditDone(props.uuid, inputText, selectedDate);
    else props.onEditDone(null, null, null);
  };

  return (
    <Dialog
      open={dialogVisible}
      onClose={() => handleEditDone(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">タスクの編集</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          id="textfield-todo-item"
          label="タスク"
          color="primary"
          value={inputText}
          helperText={null}
          onChange={e => handleInputText(e)}
          fullWidth
        />
        <MuiPickersUtilsProvider utils={DayjsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-due-date"
            label="Due Date"
            format="YYYY年MM月DD日"
            value={selectedDate}
            onChange={date => handleSelectedDate(date)}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
            fullWidth
          />
        </MuiPickersUtilsProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleEditDone(false)} color="primary">
          キャンセル
        </Button>
        <Button onClick={() => handleEditDone(true)} color="primary">
          完了
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default EditDialog;
