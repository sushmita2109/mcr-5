import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export const SearchFeild = () => {
  const [value, setValue] = useState("name");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Search with the term"
          variant="outlined"
        />
      </FormControl>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="name" control={<Radio />} label="Name" />
          <FormControlLabel value="cusine" control={<Radio />} label="Cusine" />
          <FormControlLabel
            value="ingridents"
            control={<Radio />}
            label="Ingridents"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
