import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { TextField, Autocomplete } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// const colors = JSON.parse(localStorage.getItem("bgStyles"));


// TextField Component

export const CustomSearchField = styled(TextField)(({ theme, ...props }) => ({
  //pointerEvents: "auto",
  "& input": {
    padding: "10px 15px !important",
    margin: 0,
    fontSize: "13px",
  },
  "& .MuiInputBase-root": {
    background: props.background ? props.background : "#EFF0F2",
    width: props.width ? props.width : "100%",
    borderRadius: "5px",
    padding: "0",
    borderLeft: props.required ? "2px solid #EF3434" : "0",
  },

  // marginBottom: "10px",
  "& .MuiFormLabel-asterisk": {
    display: "none",
  },
  "& fieldset": {
    border: "0",
  },
  "& label": {
    lineHeight: "initial",
    fontSize: "13px",
  },
}));



/* 
children
*/
