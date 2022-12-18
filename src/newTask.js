import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useActions } from "./store/helpers";
import { addUncompleted } from "./store/actions";

export const NewTask = () => {
  const actions = useActions({ addUncompleted });
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const onChange = (value) => {
    setValue(value);
    setError(!value);
  };

  const onBlur = (value) => {
    setError(!value);
  };

  const deleteValue = () => {
    setValue("");
    setError(true);
  };

  const onClick = () => {
    if (value) {
      actions.addUncompleted(value);
      setValue("");
    } else {
      setError(true);
    }
  };

  return (
    <div className="row">
      <FormControl variant="outlined" error={error} className="col">
        <InputLabel htmlFor="outlined-adornment-password">New task</InputLabel>
        <Input
          onBlur={(e) => onBlur(e.target.value)}
          onChange={(e) => onChange(e.target.value)}
          id="outlined-adornment-password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="delete" onClick={() => deleteValue()}>
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
      <Button variant="contained" onClick={onClick}>
        ADD
      </Button>
    </div>
  );
};
