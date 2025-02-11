import { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";
import { getMenuItems } from "./menuOption";


const drawerWidth = 240;

const SideBar = ({ open, toggleSidebar }) => {
  const location = useLocation();
  const theme = useTheme();
  const [openMenus, setOpenMenus] = useState({});

  const menuItems = getMenuItems(location.pathname);

  const handleToggle = (segment) => {
    setOpenMenus((prev) => ({ ...prev, [segment]: !prev[segment] }));
  };

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      sx={{
        width: open ? drawerWidth : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          mt: "64px",
        },
      }}
      variant={isSmallScreen ? "temporary" : "persistent"}
      anchor="left"
      open={open}
    >
      <List>
        {menuItems.map(({ segment, title, icon, path, children }) => (
          <div key={segment}>
            {path ? (
              // Regular menu item
              <ListItem
                component={Link}
                to={path}
                sx={{
                  backgroundColor:
                  location.pathname === path
                    ? theme.palette.mode === "dark"
                      ? theme.palette.primary.dark // Dark mode selected color
                      : theme.palette.grey[300] // Light mode selected color
                    : "inherit",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? theme.palette.primary.light // Dark mode hover color
                      : theme.palette.grey[200], // Light mode hover color
                },
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            ) : (
              // Parent menu item with children
              <>
                <ListItem onClick={() => handleToggle(segment)}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={title} />
                  {openMenus[segment] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openMenus[segment]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {children.map(({ segment: childSegment, title: childTitle, path: childPath, icon: childIcon }) => (
                      <ListItem
                        key={childSegment}
                        component={Link}
                        to={childPath}
                        sx={{
                          pl: 4,
                          backgroundColor:
                              location.pathname === childPath
                                ? theme.palette.mode === "dark"
                                  ? theme.palette.primary.dark // Dark mode selected color
                                  : theme.palette.grey[300] // Light mode selected color
                                : "inherit",
                            "&:hover": {
                              backgroundColor:
                                theme.palette.mode === "dark"
                                  ? theme.palette.primary.light // Dark mode hover color
                                  : theme.palette.grey[200], // Light mode hover color
                            },
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <ListItemIcon>{childIcon}</ListItemIcon>
                        <ListItemText primary={childTitle} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            )}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
