import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons/";

dayjs.locale("ja");

const TodoItem = props => {
  const handleChecked = () => {
    props.toggleCompleted(props.item);
  };

  const handleDeleteClick = () => {
    props.onDeleteClick(props.item);
  };

  const handleEditClick = () => {
    props.onEditClick(props.item);
  };

  const item = props.item;
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          checked={item.completed}
          tabIndex={-1}
          onChange={() => handleChecked()}
        />
      </ListItemIcon>
      <ListItemText
        primary={item.title}
        secondary={dayjs(item.dueDate).format("YYYY年MM月DD日")}
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => handleEditClick()}
          edge="start"
          aria-label="edit"
          color="primary"
        >
          <Edit />
        </IconButton>
        <IconButton
          onClick={() => handleDeleteClick()}
          edge="end"
          aria-label="delete"
          color="secondary"
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
