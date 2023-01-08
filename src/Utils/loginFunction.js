export const Login = () => {};
export const Logout = () => {
  localStorage.removeItem("access_token");
};
export const isLogin = () => {
  if (localStorage.getItem("access_token")) {
    return true;
  }
  return false;
};