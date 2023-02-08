import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Stack,
  Grid,
  useTheme,
  OutlinedInput,
  Button,
  FormHelperText,
} from "@mui/material";

import Layout from "../Layout";
import { LeftNavbar } from "../Leftbar";
import themes from "../../Assets/Styles/theme";
import userLogo from "../../Assets/Images/user_logo.png";
import closet from "../../Assets/Images/closet.svg";
import nextButton from "../../Assets/Images/next_button.svg";
import "../index.scss";
import { BecomeInfluencer } from "../Dialog/becomeInfluencer";
import { useEffect } from "react";
import { toast } from "react-toastify";
import AuthService from "../../Services/Auth.service";
import Following from "./following";
import Posts from "./posts";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const theme = useTheme();
  const fileInput = useRef();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isProfile, setProfile] = useState(true);
  const [isFollowing, setFollowing] = useState(false);
  const [isPosts, setPosts] = useState(false);
  const [isBecomeInfluencer, setBecomeInfluencer] = useState(false);
  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      error: false,
      errorMessage: "Name is required field.",
    },
    bio: {
      value: "",
      error: false,
      errorMessage: "Bio is required field.",
    },
  });

  const profile = async () => {
    const result = await AuthService.userGet();
    console.log('result',result?.data?.user?.name)
    setFormValues({
      name: { value: result?.data?.user?.name },
      bio: { value: result?.data?.user?.bio },
    });
    setUser(result.data.user);
  };

  useEffect(() => {
    profile();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value,
        error: false,
      },
    });
    console.log(name, value);
  };
  const changePicture = (e) => {
    if (e?.target?.files[0]) {
      let formData = new FormData();
      formData.append("file", e?.target?.files[0]);
      AuthService.userProfilePicture(formData)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Profile updated successfully!");
            setIsEdit(false);
            setDisabled(true);
          }
        })
        .catch((err) => {
          if (err.response?.data?.message) {
            setLoading(false);
            toast.error(err.response.data.message);
          }
        });
    }
    console.log("profile_img", e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };
    let payload = {};

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if (currentValue === "") {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true,
            errorMessage: "This is required field.",
          },
        };
      }
    }
    if (!newFormValues.name.error && !newFormValues.bio.error) {
      payload = {
        ...payload,
        name: newFormValues.name.value,
        bio: newFormValues.bio.value,
        email: user.email,
      };

      AuthService.userUpdate(payload)
        .then((result) => {
          console.log("result ------------->", result);
          if (result.status === 200) {
            toast.success("User updated successfully!");
            setIsEdit(false);
            setLoading(false);
            setDisabled(true);
          }
        })
        .catch((err) => {
          if (err.response?.data?.message) {
            setLoading(false);
            toast.error(err.response.data.message);
          }
        });
    }
    setFormValues(newFormValues);
  };

  console.log(
    "fileInput-------->",
    fileInput,
    fileInput?.files,
    fileInput?.current,
    fileInput?.current?.value,
    fileInput?.current?.files
  );

  return (
    <>
      <Box
        className="container_div"
        sx={{
          marginTop: "8pc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            // maxWidth: "1280px",
          }}
        >
          <Grid
            container
            sx={{
              flexDirection: { xs: "column-reverse", md: "row" },
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            }}
          >
            <Grid
              item
              md={4}
              lg={4}
              className="profile_div"
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <LeftNavbar />
            </Grid>
            {isProfile && (
              <Grid item sx={{ width: "466px" }}>
                <Box
                  sx={{
                    width: "100%",
                    [theme.breakpoints.down("md")]: {
                      display: "flex,",
                      alignItems: "center",
                      justifyContent: "center",
                      width: " 100%",
                    },
                  }}
                >
                  <Box sx={{ width: "144px", height: "144px", margin: "auto" }}>
                    <Box component={"img"} src={userLogo} alt="user_logo" />
                  </Box>
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
                      <Typography
                        sx={{
                          fontSize: "24px",
                          marginRight: "3px",
                          fontWeight: "400",
                          color: "#3C3C3C",
                        }}
                      >
                        {user?.following}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          marginLeft: "3px",
                          fontWeight: "400",
                          color: "#3C3C3C",
                        }}
                      >
                        Following
                      </Typography>
                    </Box>
                    <Box
                      onClick={handlePosts}
                      sx={{ display: "flex", cursor: "pointer" }}
                    >
                      <Typography
                        sx={{
                          fontSize: "24px",
                          marginRight: "3px",
                          fontWeight: "400",
                          color: "#3C3C3C",
                        }}
                      >
                        5
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          marginLeft: "3px",
                          fontWeight: "400",
                          color: "#3C3C3C",
                        }}
                      >
                        Liked Posts
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
                    <input
                      accept="image/*"
                      type="file"
                      onChange={changePicture}
                      ref={fileInput}
                      style={{ display: "none" }}
                    />
                    Change Picture
                  </Button>
                )}
                <Box variant="form">
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
                    value={formValues?.name?.value}
                    size="small"
                    fullWidth
                    name="name"
                    onChange={handleChange}
                    error={formValues.name.error}
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

                  {formValues.name.error && (
                    <FormHelperText error={formValues.name.error}>
                      {formValues.name.errorMessage}
                    </FormHelperText>
                  )}

                  <Grid sx={{ marginTop: "19px" }}>
                    <Typography sx={{ fontSize: "25.4px", fontWeight: "400" }}>
                      Bio
                    </Typography>
                    <OutlinedInput
                      placeholder="Bio"
                      size="small"
                      value={formValues?.bio?.value}
                      disabled={disabled}
                      fullWidth
                      onChange={handleChange}
                      name="bio"
                      error={formValues.bio.error}
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

                    {formValues.bio.error && (
                      <FormHelperText error={formValues.bio.error}>
                        {formValues.bio.errorMessage}
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
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      Save Changes
                    </Button>
                  )}
                </Box>
              </Grid>
            )}
            {isFollowing && <Following />}
            {isPosts && <Posts />}
          </Grid>
        </Stack>
      </Box>
      <BecomeInfluencer
        open={isBecomeInfluencer}
        handleClose={() => setBecomeInfluencer(false)}
      />
    </>
  );
};
export default Layout(Profile);
