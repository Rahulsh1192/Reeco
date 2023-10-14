import React, { useEffect, useState, useRef, useContext, useCa } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CustomTable from "../../components/Table/Table";

import moment from "moment";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  CustomButtonPrimary,
  CustomButtonSecondery,
  CustomTextButton,
} from "../../components/reusableComponent/customButton";
import SearchBar from "../../components/reusableComponent/SearchBar";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addOrder, approveOrder, approveAll } from "./OrderSlice";
import AlertDialog from "../../components/CommonComponents/confirmDialog";
export const StyledGridItem = styled(Grid)(({ theme, ...props }) => {
  return {
    padding: 15,
    borderRight: `1px solid grey`, // Adjust the divider color
    ".MuiTypography-root:nth-child(2)": {
      color: "gray",
    },
  };
});
const CompanyList = () => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  console.log(order);
  const [orderlist, setOrderlist] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    fetchData().then((res) => {
      dispatch(addOrder(res));
      // setOrderlist(res);
    });
  }, []);

  const headerData = [
    {
      id: 1,
      name: "",
      show: true,
    },
    {
      id: 2,
      name: "Product Name",
      keyName: "name",
      show: true,
    },
    {
      id: 3,
      name: "Brand",
      keyName: "brandName",
      show: true,
    },
    {
      id: 4,
      name: "Price",
      keyName: "price",
      show: true,
    },
    {
      id: 5,
      name: "Quantity",
      keyName: "quantity",
      show: true,
    },
    {
      id: 6,
      name: "Total",
      keyName: "total",
      show: true,
    },
    {
      id: 6,
      name: "Status",
      keyName: "status",
      show: true,
    },
    {
      id: 7,
      name: "Action",
      show: true,
    },
  ];
  async function fetchData() {
    const result = await fetch("data.json");
    const data = await result.json();
    return data;
    console.log(data);
  }

  function ctaHandler(data, actionType) {
    dispatch(approveOrder({ data, actionType }));
  }

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = (actionType) => {
    debugger;
    console.log(orderlist, selectedItem);
    const data = { ...selectedItem };

    dispatch(approveOrder({ data, actionType }));

    setOpenModal(false);
  };

  function MissingHandler(data) {
    setSelectedItem(data);
    setOpenModal(true);
  }

  function approveAllHandler() {
    dispatch(approveAll());
  }
  return (
    <>
      {" "}
      <AlertDialog
        data={selectedItem}
        open={openModal}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <div className="company_create main_container">
        <Box className="main">
          <Grid container>
            <Grid item xs={12}>
              <Typography style={{ paddingTop: 90, paddingLeft: 30 }}>
                <span>Order</span>
                <span></span>
                <ArrowForwardIosIcon />
                <span style={{ textTransform: "capitalize" }}>
                  Order 3246ABC
                </span>
              </Typography>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  style={{ padding: "10px 0 10px 30px" }}
                >
                  Order 3246ABC
                </Typography>
              </Grid>
              <Grid item container xs={6} columnSpacing={0}>
                <Grid item xs={6}></Grid>
                <Grid item xs={3} textAlign={"right"}>
                  <CustomButtonSecondery>Cancel</CustomButtonSecondery>
                </Grid>
                <Grid item xs={3} textAlign={"center"}>
                  <CustomButtonPrimary onClick={approveAllHandler}>
                    Approve Order
                  </CustomButtonPrimary>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="company_create main_container-2">
        <Box className="main-2" sx={{ marginTop: 0 }}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            style={{ padding: 0 }}
          >
            <StyledGridItem item xs={2} textAlign={"center"}>
              <Typography gutterBottom variant="subtitle">
                {" "}
                Supplier
              </Typography>
              <Typography variant="body1">East Coast Fruits & veg</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={2} textAlign={"center"}>
              <Typography gutterBottom> Shipping Date</Typography>
              <Typography variant="bold">
                {moment().format("DD-MM-YYYY")}
              </Typography>
            </StyledGridItem>
            <StyledGridItem item xs={2} textAlign={"center"}>
              <Typography gutterBottom> Total</Typography>
              <Typography variant="bold">{`$ 14.653.76`}</Typography>
            </StyledGridItem>{" "}
            <StyledGridItem item xs={2} textAlign={"center"}>
              <Typography gutterBottom> Category</Typography>
              <Typography variant="bold">East Coast Fruits & veg</Typography>
            </StyledGridItem>{" "}
            <StyledGridItem item xs={2} textAlign={"center"}>
              <Typography gutterBottom> Department</Typography>
              <Typography variant="bold">333-444-555</Typography>
            </StyledGridItem>{" "}
            <Grid item xs={2} textAlign={"center"}>
              <Typography gutterBottom> Status</Typography>
              <Typography variant="bold">Awaiting Your Approval</Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="company_create main_container-2">
        <Box className="main-2" sx={{ marginTop: 0 }}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            style={{ padding: 10 }}
            rowSpacing={2}
          >
            <Grid item container alignItems={"center"} xs={12}>
              <Grid item xs={6}>
                <SearchBar />
              </Grid>
              <Grid item xs={6} textAlign={"right"}>
                <CustomButtonSecondery>Add Item</CustomButtonSecondery>
              </Grid>
            </Grid>
            <Grid item container xs={12}>
              <CustomTable
                tableHeader={headerData}
                tableBody={order}
                ctaHandler={ctaHandler}
                MissingHandler={MissingHandler}
              ></CustomTable>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default CompanyList;
