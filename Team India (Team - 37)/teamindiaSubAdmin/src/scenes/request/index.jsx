import React, { useEffect, useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import fetchProducts from "../../services/apiProducts";
import Header from "../../components/Header";
import supabase from "../../services/supabase"; // Ensure the correct path to your Supabase setup

const Request = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [products, setProducts] = useState([]);
  const [approvals, setApprovals] = useState({});

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

  const handleApprovalChange = (id, value) => {
    console.log('Approval status changed:', id, value);
    setApprovals((prev) => ({ ...prev, [id]: value === "approve" ? 2 : 1 }));
  };

  const handleSubmit = async (id) => {
    console.log('Submitting approval status:', id);
    try {
      const approve = approvals[id];
      
      if (approve != undefined) {
        console.log('Approval status:', approve);
        const { data, error } = await supabase
          .from('products')
          .update({ 'adminApprove':approve })
          .eq('id', id);
          
          console.log(data, error);

        if (error) {
          throw error;
        }

        console.log('Approval status updated:', data);
      } else {
        console.log('No status change for this product.');
      }
    } catch (error) {
      console.error('Error updating approval status:', error);
    }
  };

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
      field: "description",
      headerName: "DESCRIPTION",
      flex: 1,
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
    },
    {
      field: "approve",
      headerName: "APPROVE",
      flex: 1,
      renderCell: (params) => {
        return (
          <select
            value={approvals[params.row.id] === 2 ? "approve" : approvals[params.row.id] === 1 ? "reject" : ""}
            onChange={(e) => handleApprovalChange(params.row.id, e.target.value)}
            style={{
              padding: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              color: '#333',
              cursor: 'pointer',
            }}
          >
            <option value="">Select</option>
            <option value="approve">Approve</option>
            <option value="reject">Reject</option>
          </select>
        );
      },
    },
    {
      field: "submit",
      headerName: "SUBMIT",
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit(params.row.id)}
        >
          Submit
        </Button>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Requests"
        subtitle="Verify the products."
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
        }}
      >
        <DataGrid
          checkboxSelection
          rows={products}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Request;
