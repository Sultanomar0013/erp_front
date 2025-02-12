import { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography,Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark mode icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Light mode icon
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { getMenuItemStyles } from "./theme/globalStyle";
const NavBar = ({ toggleSidebar, mode, toggleTheme }) => {

  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (mod) => {
    setAnchorEl(null);
    if(mod === 'userMod'){
      navigate('/userMod/home');
    }else if(mod === 'itMod'){
      navigate('/itMod/home');
    }else if(mod === 'accMod'){
      navigate('/accMod/home');
    }
  };

  const [selectedItem, setSelectedItem] = useState("User Module");

  useEffect(() => {
    if(   location.pathname.startsWith("/userMod")){
      setSelectedItem("User Module");
    }else if(   location.pathname.startsWith("/itMod")){
      setSelectedItem("It Module");
    }else if(   location.pathname.startsWith("/accMod")){
      setSelectedItem("Acc Module");
    }
  }, [])



  return (
    <AppBar position="fixed" sx={{ height: "64px", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>

        <Button
        variant="contained"
        onClick={handleClick}
        sx={{marginLeft: 'auto'}}
      >
      { selectedItem }
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose('userMod')}  sx={getMenuItemStyles(theme)}>User Module</MenuItem>
        <MenuItem onClick={() => handleClose('itMod')} sx={getMenuItemStyles(theme)}>It Module</MenuItem>
        <MenuItem onClick={() => handleClose('accMod')} sx={getMenuItemStyles(theme)}>Accounts Module</MenuItem>
      </Menu>

        {/* Theme Toggle Button */}
        <IconButton color="inherit" onClick={toggleTheme} >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
