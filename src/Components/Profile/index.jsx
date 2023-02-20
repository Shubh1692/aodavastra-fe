import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  OutlinedInput,
  Button,
  FormHelperText,
  Input,
} from "@mui/material";

import Layout from "../Layout";
import { LeftNavbar } from "../leftbar";
import themes from "../../Assets/Styles/theme";
import userLogo from "../../Assets/Images/ic_user_white.svg";
import closet from "../../Assets/Images/closet.svg";
import nextButton from "../../Assets/Images/next_button.svg";
import "../index.scss";
import { BecomeInfluencer } from "../dialog/becomeInfluencer";
import { toast } from "react-toastify";
import AuthService from "../../Services/Auth.service";
import Following from "./following";
import Posts from "./posts";
import { useFormik } from "formik";
import * as yup from "yup";
import { BlockLoading } from "../loading";

const Profile = () => {
  const fileInput = useRef();
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isProfile, setProfile] = useState(true);
  const [isFollowing, setFollowing] = useState(false);
  const [isPosts, setPosts] = useState(false);
  const [liked, setLiked] = useState([]);
  const [isBecomeInfluencer, setBecomeInfluencer] = useState(false);
  const [blockLoading, setBlock] = useState(false);

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    bio: yup.string().required("Bio  is required"),
  });

  const formik = useFormik({
    initialValues: { name: "", bio: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const payload = {
        email: user.email,
        name: values.name,
        bio: values.bio,
      };
      const result = await AuthService.userUpdate(payload);
      if (result.status < 400) {
        toast.success("User updated successfully!");
        setIsEdit(false);
        setLoading(false);
        setDisabled(true);
      }
    },
  });

  const profile = async () => {
    const result = await AuthService.userGet();
    if (result?.status < 400) {
      formik.setValues({
        name: result?.data?.user?.name,
        bio: result?.data?.user?.bio,
      });
      setUser(result.data.user);
    }
  };
  const likedPost = async () => {
    const result = await AuthService.likedPost();
    if (result?.status < 400) {
      setLiked(result.data);
    }
  };

  useEffect(() => {
    profile();
    likedPost();
  }, []);

  const handleFollower = () => {
    setFollowing(true);
    setProfile(false);
  };
  const handlePosts = () => {
    setPosts(true);
    setProfile(false);
  };
  const handleEdit = () => {
    setIsEdit(true);
    setDisabled(false);
  };

  const changePicture = async (e) => {
    if (e?.target?.files[0]) {
      let formData = new FormData();
      formData.append("file", e?.target?.files[0]);
      const result = await AuthService.userProfilePicture(formData);
      if (result.status < 400) {
        toast.success("Profile updated successfully!");
        setIsEdit(false);
        setDisabled(true);
      }
    }
    console.log("profile_img", e.target.files[0]);
  };

  const handleClose = (activeTab) => {
    console.log(activeTab,'======================================================')
    if (activeTab === "post") {
      setPosts(false);
    } else {
      setFollowing(false);
    }
    setProfile(true);
  };
  console.log("user------------->", user);
  return (
    <>
      <Box className="container_div">
        <Grid container>
          <Grid
            item
            md={4}
            lg={4}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <LeftNavbar />
          </Grid>
          {isProfile && (
            <Grid item sx={{ width: "466px" }}>
              <Box className="profile_image_div">
                <Box component={"img"} src={userLogo} alt="user_logo" />
              </Box>
              {!isEdit ? (
                <Grid sx={{ display: "flex", margin: "22px 0px 24px 0px" }}>
                  <Box
                    onClick={handleFollower}
                    sx={{
                      display: "flex",
                      width: "50%",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Typography className="user_text">
                      {user?.following} Following
                    </Typography>
                  </Box>
                  <Box
                    onClick={handlePosts}
                    sx={{ display: "flex", cursor: "pointer" }}
                  >
                    <Typography className="user_text">
                      {liked?.length} Liked Posts
                    </Typography>
                  </Box>
                </Grid>
              ) : (
                <Button
                  className="linear-button"
                  variant="outlined"
                  onClick={() => fileInput.current.click()}
                  sx={{
                    width: "50%",
                    margin: "24px auto",
                    cursor: "pointer",
                  }}
                >
                  <Input
                    accept="image/*"
                    type="file"
                    onChange={changePicture}
                    ref={fileInput}
                    style={{ display: "none" }}
                  />
                  Change Picture
                </Button>
              )}
              <Box
                component={"form"}
                noValidate
                onSubmit={formik?.handleSubmit}
              >
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "25.4px", fontWeight: "400" }}>
                    Name
                  </Typography>
                  {!isEdit && (
                    <Typography
                      sx={{
                        fontSize: "14.8px",
                        fontWeight: 600,
                        textDecorationLine: "underline",
                        color: themes.primaryColor,
                        cursor: "pointer",
                      }}
                      onClick={handleEdit}
                    >
                      Edit Profile
                    </Typography>
                  )}
                </Grid>

                <OutlinedInput
                  disabled={disabled}
                  placeholder="Name"
                  value={formik?.values?.name}
                  size="small"
                  fullWidth
                  name="name"
                  onChange={formik?.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  inputProps={{
                    sx: {
                      height: 34,
                      "&::placeholder": {
                        opacity: 0.7,
                        fontSize: "19px",
                      },
                    },
                  }}
                />

                {formik.errors?.name && (
                  <FormHelperText error={Boolean(formik.errors?.name)}>
                    {formik.errors?.name}
                  </FormHelperText>
                )}

                <Grid sx={{ marginTop: "19px" }}>
                  <Typography sx={{ fontSize: "25.4px", fontWeight: "400" }}>
                    Bio
                  </Typography>
                  <OutlinedInput
                    placeholder="Bio"
                    size="small"
                    value={formik?.values?.bio}
                    disabled={disabled}
                    fullWidth
                    onChange={formik?.handleChange}
                    name="bio"
                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                    multiline
                    inputProps={{
                      sx: {
                        "&::placeholder": {
                          opacity: 0.7,
                          fontSize: "19px",
                        },
                      },
                    }}
                    rows={4}
                  />

                  {formik.errors?.bio && (
                    <FormHelperText error={Boolean(formik.errors?.bio)}>
                      {formik.errors?.bio}
                    </FormHelperText>
                  )}
                </Grid>

                {!isEdit ? (
                  <Grid
                    className="become_creator"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setBecomeInfluencer(true)}
                  >
                    <Box
                      component={"img"}
                      src={closet}
                      width="38"
                      height="24"
                      alt="become_logo"
                    />
                    <Typography>Become a ModaVastra creator</Typography>
                    <Box component={"img"} src={nextButton} alt="next_logo" />
                  </Grid>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    className="save_changes"
                    disabled={loading}
                  >
                    Save Changes
                  </Button>
                )}
              </Box>
            </Grid>
          )}
          {isFollowing && <Following data={liked} handleClose={handleClose} />}
          {isPosts && <Posts data={liked} handleClose={handleClose} />}
        </Grid>
      </Box>
      {/* <BlockLoading blocking={blockLoading} /> */}
      <BecomeInfluencer
        open={isBecomeInfluencer}
        handleClose={() => setBecomeInfluencer(false)}
      />
    </>
  );
};
export default Layout(Profile);
