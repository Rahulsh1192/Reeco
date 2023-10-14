import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";



const CustomSwitch = (props) => {
    const { defaultChecked, size, onchange } = props;
    const Android12Switch = styled(Switch)(({ theme }) => ({
      padding: 8,
      height: size === "small" ? "40px" : "45px",
      width: size === "small" ? "72px" : "80px",
      "& .MuiSwitch-switchBase": {
        top: "-1px",
      },
      "& .MuiSwitch-track": {
        borderRadius: "30px",
        "&:before, &:after": {
          content: '""',
          position: "absolute",
          transform: "translateY(45%)",
          width: 43,
          height: 16,
        },

        "&:before": {
          color: "#fff",
          left: 15,
        },
        "& .Mui-checked &:after": {
          right: "-50px",
        },
        "&:after": {
          color: "#fff",
          right: 15,
        },
      },
      "&.MuiSwitch-root .Mui-checked+.MuiSwitch-track": {
        backgroundColor: "#34C127",
        opacity: 1,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translate(72%, 0%)",
      },
      "& .Mui-checked .MuiSwitch-thumb": {
        background: "linear-gradient(180deg, #ffffff, #8fe387)",
        border: "2px solid #fff",
      },
      "& .MuiSwitch-thumb": {
        boxShadow: "none",
        width: size === "small" ? 20 : 25,
        height: size === "small" ? 20 : 25,
        background: "linear-gradient(180deg, #ffffff, #878787B0)",
        border: "2px solid #fff",
        margin: 2,
      },
    }));
  return <Android12Switch defaultChecked={defaultChecked} onChange={onchange} />;
}

export default CustomSwitch