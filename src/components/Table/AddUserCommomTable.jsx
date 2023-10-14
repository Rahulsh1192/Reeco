import React from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  Table,
  TableContainer,
  Paper,
  TableRow,
  styled,
  TableHead,
  TableBody,
  Switch,
} from "@mui/material";
import { CleaningServices } from "@mui/icons-material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import { fontSize } from "@mui/system";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.theadBg,
    color: theme.palette.common.white,
    padding: "10px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "10px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const label = { inputProps: { "aria-label": "Size switch demo" } };
const AddUserCommomTable = (props) => {
  const { isLoading, tableData, tableHeader=[], tableBody=[] } = props;
  console.log(tableHeader, "tableHeader");
  const row = (row, index, header) => {
    return (
      <StyledTableRow key={row.id}>
        {header.map((ele, i) => {
          console.log(i, "ele");
          return (
            ele.show && (
              <StyledTableCell
                key={i}
                sx={{ whiteSpace: "nowrap" }}
                style={{
                  color:
                    row[ele.keyName] == "Active"
                      ? "#67C971"
                      : row[ele.keyName] == "InActive"
                      ? "#E26767"
                      : "",
                }}
              >
                {ele.keyName !== "Action" ? (
                  row[ele.keyName]
                ) : (
                  <div
                    style={{
                      width: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <BorderColorIcon
                      style={{
                        color: "#0489D3",
                        fontSize: "15px",
                        margin: " 0 5px",
                        cursor: "pointer",
                      }}
                    />{" "}
                    <AutoDeleteIcon
                      style={{
                        color: "#E26767",
                        fontSize: "15px",
                        cursor: "pointer",
                      }}
                    />
                    <Switch {...label} defaultChecked size="small" />
                  </div>
                )}
              </StyledTableCell>
            )
          );
        })}
      </StyledTableRow>
    );
  };
  return (
    <div className="table">
      <TableContainer sx={{ height: "calc(100vh - 200px)" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {!isLoading &&
                tableHeader.map((ele, i) => {
                  return (
                    ele.show && (
                      <StyledTableCell key={i} sx={{ whiteSpace: "nowrap" }}>
                        {ele.name}
                      </StyledTableCell>
                    )
                  );
                })}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {!isLoading &&
              tableBody.map((data, i) => row(data, i, tableHeader))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AddUserCommomTable;
