import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export const NewTask = () => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const onChange = (value) => {
    setValue(value);
    setError(value ? false : true);
  };

  const onBlur = (value) => {
    setError(value ? false : true);
  };

  const onClick = () => {
    setValue("");
    setError(true);
  };

  return (
    <FormControl variant="outlined" error={error} className="col">
      <InputLabel htmlFor="outlined-adornment-password">New task</InputLabel>
      <Input
        onBlur={(e) => onBlur(e.target.value)}
        onChange={(e) => onChange(e.target.value)}
        id="outlined-adornment-password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="delete" onClick={() => onClick()}>
              {value ? <DeleteIcon /> : null}
            </IconButton>
          </InputAdornment>
        }
        label="New task"
        value={value}
      />
      <FormHelperText id="component-error-text">
        {error ? "Text is required!" : ""}
      </FormHelperText>
    </FormControl>
  );
};
