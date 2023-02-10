import React from "react";
import { Box, Checkbox, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddressService from "../../Services/Address.service";
import { toast } from "react-toastify";
import theme from "../../Assets/Styles/theme";
import "./index.scss";

const AddressContainer = ({ data, handleData }) => {
  const navigate = useNavigate();

  const handleCheck = async (e, id) => {
    console.log("--------~~~>", id, e);
    // if (window.confirm('Are you sure want to change default address ?')) {
    //   const result = await AddressService.update(id, { ...data, isDefault: e.target.checked })
    //   if (result.status < 400) {
    //     toast.success("Updated Successfully!");
    //     // handleData();
    //   }
    //   console.log('result---->', result)
    // }
  };
  const handleDelete = async (id) => {
    const result = await AddressService.delete(id);
    console.log("result", result);
    if (result.status === 200) {
      toast.success("Deleted Successfully!");
      handleData();
    }
  };
  const handleEdit = (id) => {
    navigate(`/address/edit/${id}`);
  };
  return (
    <Grid item className="address_container" sx={{ marginBottom: "10px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 17px 0px 17px",
        }}
      >
        <Box sx={{ marginBottom: "30.5px" }}>
          <Typography className="address_name">{data.name}</Typography>
          <Typography className="address_add">{`${data.address?.address1},${data.address?.address2},${data?.city} , ${data?.state} - ${data?.pinCode}`}</Typography>
          <Typography sx={{ fontWeight: "600", fontSize: "13.5px" }}>
            9896927760
          </Typography>
        </Box>
        <Box>
          <Checkbox
            onChange={(e) => handleCheck(e, data._id)}
            sx={{
              p: 0,
              "& .MuiSvgIcon-root": {
                fontSize: 38,
                color: theme.primaryColor,
                // borderRadius: 20
              },
            }}
            defaultChecked={data.isDefault}
            name="isDefault"
          />
        </Box>
      </Box>
      <Box className="action_section">
        <Grid className="adress_action" onClick={() => handleEdit(data._id)}>
          <Typography variant="span"> Edit</Typography>
        </Grid>
        <Grid className="adress_action" onClick={() => handleDelete(data._id)}>
          <Typography variant="span"> Remove</Typography>
        </Grid>
      </Box>
    </Grid>
  );
};
export default AddressContainer;
