export const Login = () => {};
export const Logout = () => {
  localStorage.removeItem("Token_key");
};
export const isLogin = () => {
  if (localStorage.getItem("Token_key")) {
    return true;
  }
  return false;
};