import React, { useState } from "react";
import { Box, InputLabel, Select, MenuItem } from "@material-ui/core";

const FilterForm = props => {
  const [selected, setSelected] = useState("all");

  const handleFilter = e => {
    setSelected(e.target.value);
    props.selectFileterVIew(e.target.value);
  };

  return (
    <Box
      border={1}
      borderColor="primary.main"
      borderRadius="borderRadius"
      my={1}
      p={1}
    >
      <InputLabel id="label">表示</InputLabel>
      <Select
        labelId="label"
        id="select"
        value={selected}
        onChange={e => handleFilter(e)}
      >
        <MenuItem value="all">全てのタスク</MenuItem>
        <MenuItem value="completed">完了したタスク</MenuItem>
        <MenuItem value="uncompleted">未完了のタスク</MenuItem>
      </Select>
    </Box>
  );
};

export default FilterForm;
