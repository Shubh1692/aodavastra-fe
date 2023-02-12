import React, { useState } from "react";
import { Box, Checkbox, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddressService from "../../Services/Address.service";
import { toast } from "react-toastify";
import theme from "../../Assets/Styles/theme";
import "./index.scss";
import { DeleteDialog } from "../dialog/deleteDialog";

const AddressContainer = ({ data, handleData }) => {
  const navigate = useNavigate();
  const [isDelete, setDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null)

  const handleCheck = async (e, id) => {
    console.log("--------~~~>", id, e);
    const result = await AddressService.update(id, { ...data, isDefault: e.target.checked })
    if (result.status < 400) {
      toast.success("Updated Successfully!");
      handleData();
    }
  };
  const deleteAction = (id) => {
    setDeleteId(id);
    setDelete(true);
  }

  const handleDelete = async () => {
    const result = await AddressService.delete(deleteId);
    if (result.status < 400) {
      toast.success("Deleted Successfully!");
      setDelete(false);
      handleData();
    }
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
          <Typography sx={{ fontWeight: "600", fontSize: "13.5px" }}>{data?.phoneNo}</Typography>
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
        <Grid className="adress_action" onClick={() => navigate(`/address/edit/${data._id}`)}>
          <Typography variant="span" sx={{ color: theme.primaryColor }}> Edit</Typography>
        </Grid>
        <Grid className="adress_action" onClick={() => deleteAction(data._id)}>
          <Typography variant="span" sx={{ color: theme.lightGray }}> Remove</Typography>
        </Grid>
      </Box>
      <DeleteDialog open={isDelete} handleClose={() => setDelete(false)} handleDelete={handleDelete} />
    </Grid>
  );
};
export default AddressContainer;
