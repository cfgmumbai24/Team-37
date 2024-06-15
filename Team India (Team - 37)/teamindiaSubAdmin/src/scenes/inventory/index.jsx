import React, { useEffect, useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import fetchProducts from "../../services/apiProducts";
import Header from "../../components/Header";

const Inventory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "category",
      headerName: "CATEGORY",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "color",
      headerName: "COLOR",
      flex: 1,
    },
    {
      field: "imgUrl",
      headerName: "IMAGE",
      flex: 1,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          {params.value}
        </a>
      ),
    },
    {
      field: "quantity",
      headerName: "QUANTITY",
      flex: 1,
      sortComparator: (v1, v2, param1, param2) => {
        if (v1 === 0) return -1;
        if (v2 === 0) return 1;
        return v1 - v2;
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="Managing the Invoices for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckBox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          "& .quantity-zero": {
            backgroundColor: "red !important",
            background: "red !important",
            color: "white !important",
          },
          "& .row-quantity-zero": {
            backgroundColor: "red !important",
            color: "white !important",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={products}
          columns={columns}
          initialState={{
            sorting: {
              sortModel: [{ field: 'quantity', sort: 'asc' }],
            },
          }}
          getRowClassName={(params) =>
            params.row.quantity === 0 ? "row-quantity-zero" : ""
          }
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Inventory;
