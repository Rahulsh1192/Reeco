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
  IconButton,
  Typography,
} from "@mui/material";
import { CleaningServices } from "@mui/icons-material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import { fontSize } from "@mui/system";
import editIcon from "../../img/icons/edit.svg";
import deleteIcon from "../../img/icons/delete.svg";
import CustomSwitch from "../reusableComponent/Switch";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.theadBg,
    backgroundColor: "var(--clr-default-4)",

    color: theme.palette.common.white,
    padding: "10px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "0px 10px",
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
const SecondaryTable = (props) => {

  const {
    isLoading,
    tableData,
    tableHeader = [],
    tableBody,
    editHandle,
    update_permission,
    status_permission,
    // deleteHandle,
    activationHandle,
  } = props;
  const deleteHandle = () => {
    alert('deleted')
  }
  const row = (row, index, header) => {
    console.log(tableBody,"tableBodyjjuuu");
    return (
      <StyledTableRow key={row.id}>
        {header.map((ele, i) => {
          return ele.name == "S.No" ? (
            <StyledTableCell>{index + 1}</StyledTableCell>
          ) : ele.name === "Action" ? (
            <StyledTableCell>
              <div
                style={{
                  width: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
              {
                update_permission.length>0 &&
                <IconButton onClick={() => editHandle(row)}>
                  <img src={editIcon}></img>
                </IconButton>

              }
                
                {/* <IconButton onClick={() => activationHandle(row)}>
                  <img src={deleteIcon}></img>
                </IconButton> */}
                {
                  status_permission.length>0 &&
                  <CustomSwitch
                  defaultChecked={row.isActive}
                  onchange={() => activationHandle(row)}
                  size={"small"}
                />

                }
               
              </div>
            </StyledTableCell>
          ) : ele.name === "Status" ? (
            <StyledTableCell>
              <Typography
                sx={{ color: row.isActive === true ? "#67C971" : "#E26767" }}
              >
                {row.isActive === true ? "Active" : "Inactive"}
              </Typography>
            </StyledTableCell>
          ) : (
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
                {row[ele.keyName]}
              </StyledTableCell>
             
            )
          );
        })}
        
      </StyledTableRow>
    );
  };
  return (
    <div className="table">
      {/* <TableContainer sx={{ height: "calc(100vh - 200px)" }}> */}
      <TableContainer sx={{ height: "auto", maxHeight: "calc(100vh - 200px)" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {!isLoading &&
                tableHeader.length > 0 &&
                tableHeader.map((ele, i) => {
                  return (
                    ele.show && (
                      <StyledTableCell key={i} sx={{ whiteSpace: "nowrap" }}>
                        {ele.name === "Is Active"
                          ? ele.name
                          : "Status" && ele.name}
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

export default SecondaryTable;
