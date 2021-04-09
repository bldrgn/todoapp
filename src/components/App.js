import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Container, List, Grid } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

import PageHeader from "./PageHeader";
import AddForm from "./AddForm";
import FilterForm from "./FilterForm";
import EditDialog from "./EditDialog";
import TodoItem from "./TodoItem";

dayjs.locale("ja");

const preset = [
  {
    title: "平成との別れを惜しむ",
    dueDate: dayjs().format("2019-4-30").toString(),
    completed: true
  },
  {
    title: "令和のはじまりを祝う",
    dueDate: dayjs().format("2019-5-1").toString(),
    completed: true
  },
  {
    title: "ToDoリストアプリを作成する",
    dueDate: dayjs().format("2021-4-9").toString(),
    completed: false
  }
];

const App = () => {
  const [itemList, setItemList] = useState([]);
  const [filter, setFIlter] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  const [editTarget, setEditTarget] = useState({
    uuid: null,
    title: "",
    dueDate: ""
  });

  useEffect(() => {
    preset.forEach(item => {
      item.uuid = uuidv4();
    });
    setItemList(preset);
    setFilteredList(preset);
  }, []);

  useEffect(() => {
    switch (filter) {
      case "uncompleted":
        setFilteredList(itemList.filter(item => item.completed === false));
        break;
      case "completed":
        setFilteredList(itemList.filter(item => item.completed === true));
        break;
      default:
        setFilteredList(itemList);
        break;
    }
  }, [filter, itemList]);

  const selectFileterVIew = status => setFIlter(status);

  const onAddItem = addItem => {
    const uuid = uuidv4();
    setItemList([...itemList, { ...addItem, uuid: uuid }]);
  };

  const onDeleteClick = deleteItem => {
    setItemList(itemList.filter(item => item.uuid !== deleteItem.uuid));
  };

  const onEditClick = editItem => {
    if (editTarget.uuid == null) setEditTarget(editItem);
  };

  const onEditDone = (uuid, title, dueDate) => {
    setEditTarget({ uuid: null, title: "", dueDate: "" });
    if (uuid == null) return;
    console.log(uuid, title, dueDate);
    const items = [...itemList];
    for (let item of items) {
      if (item.uuid === uuid) {
        item.title = title;
        item.dueDate = dueDate;
      }
    }
    setItemList(items);
  };

  const toggleCompleted = toggleItem => {
    const items = [...itemList];
    for (let item of items) {
      if (item.uuid === toggleItem.uuid) item.completed = !item.completed;
    }
    setItemList(items);
  };

  return (
    <Container maxWidth="sm">
      <Grid>
        <PageHeader title="やることリスト" />
        <AddForm onAddItem={onAddItem} />
        <FilterForm selectFileterVIew={selectFileterVIew} />
        <List>
          {filteredList.map(item => (
            <TodoItem
              key={item.uuid}
              item={item}
              toggleCompleted={toggleCompleted}
              onEditClick={onEditClick}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </List>
      </Grid>
      <EditDialog
        uuid={editTarget.uuid}
        title={editTarget.title}
        dueDate={editTarget.dueDate}
        onEditDone={onEditDone}
      />
    </Container>
  );
};
export default App;
