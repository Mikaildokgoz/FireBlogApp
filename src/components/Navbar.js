import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import cwLogo from "../assets/cw.jpeg";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function PrimarySearchAppBar() {

  const navigate = useNavigate();
  const { currentUser, logOut } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleClick = () => {
    navigate("/")
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleLogin = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/login");
  };
  const handleRegister = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/register");
  };
  const handleProfile = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/profile");
  };
  const handleNew = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/newblog");
  };
  const handleLogout = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/");
    logOut();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      sx={{ mt: "45px" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleLogin}
    >
      {!currentUser && <MenuItem onClick={handleLogin}>Login</MenuItem>}
      {!currentUser && <MenuItem onClick={handleRegister}>Register</MenuItem>}
      {currentUser && <MenuItem onClick={handleProfile}>Profile</MenuItem>}
      {currentUser && <MenuItem onClick={handleNew}>New</MenuItem>}
      {currentUser && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      sx={{ mt: "40px" }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {!currentUser && <MenuItem onClick={handleLogin}>Login</MenuItem>}
      {!currentUser && <MenuItem onClick={handleRegister}>Register</MenuItem>}
      {currentUser && <MenuItem onClick={handleProfile}>Profile</MenuItem>}
      {currentUser && <MenuItem onClick={handleNew}>New</MenuItem>}
      {currentUser && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between",  backgroundColor:"#046582" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick = {handleClick}
          >
            <img src={cwLogo} alt="" style={{ width: "2rem" }} />
           
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            onClick = {handleClick}
            style={{cursor:'pointer'}}
          >
            React Blog App
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
