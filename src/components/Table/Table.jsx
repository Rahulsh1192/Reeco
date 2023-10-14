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
} from "@mui/material";
import "./Table.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { CustomButtonPrimary } from "../reusableComponent/customButton";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.theadBg,
    backgroundColor: "var(--clr-default-1)",
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

const CustomTable = (props) => {
  const {
    MissingHandler,
    ctaHandler,
    tableHeader,
    tableBody,
    currentRowDataHandle,
    tableRef,
  } = props;
  console.log(tableBody);
  const row = (row, index, header) => {
    // console.log(tableBody,"tableBodyrfjheuutr")

    return (
      <StyledTableRow
        key={row.id}
        // onClick={() => currentRowDataHandle(row)}
        style={{ cursor: "pointer" }}
      >
        {header.map((ele, i) => {
          return ele.name == "S.No" ? (
            <StyledTableCell>{index + 1}</StyledTableCell>
          ) : (
            ele.show && (
              <StyledTableCell
                key={i}
                sx={{
                  whiteSpace: "nowrap",
                  // color:
                  // row.isActive == true
                  //     ? "#67C971"
                  //     : row.isActive == false
                  //     ? "#E26767"
                  //     : "",
                }}
              >
                {ele.name == "Action" ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      columnGap: 5,
                    }}
                  >
                    <span
                      style={{ color: "rgb(39 108 83)" }}
                      onClick={() => ctaHandler(row, "APPROVED")}
                    >
                      <CheckIcon />
                    </span>

                    <span
                      style={{ color: "#E26767" }}
                      onClick={() => MissingHandler(row)}
                    >
                      <ClearIcon></ClearIcon>
                    </span>
                    <span style={{ color: "#2190e4" }}>edit</span>
                  </div>
                ) : ele.keyName == "status" ? (
                  <div
                    style={{
                      width: 150,
                      font: ".2rem",
                      textAlign: "center",
                      background:
                        row.status == "Approved"
                          ? "green"
                          : row.status == "missing"
                          ? "orange"
                          : row.status == "missing_urgent"
                          ? "red"
                          : "green",
                      color: "#fff",
                      borderRadius: 20,
                      padding: "5px 10px",
                    }}
                  >
                    {row[ele.keyName]}
                  </div>
                ) : (
                  row[ele.keyName]
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
      <TableContainer sx={props.style}>
        <Table stickyHeader aria-label="sticky table" ref={tableRef}>
          <TableHead>
            <StyledTableRow>
              {tableHeader &&
                tableHeader.map((ele, i) => {
                  return (
                    true && (
                      <StyledTableCell key={i} sx={{ whiteSpace: "nowrap" }}>
                        {ele.name}
                      </StyledTableCell>
                    )
                  );
                })}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {tableBody && tableBody.map((data, i) => row(data, i, tableHeader))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
