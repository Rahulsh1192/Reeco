import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const colors = "#1976d2";
export const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    common: {
      theadBg: colors ? colors : "#1976d2",
    },
  },
});
