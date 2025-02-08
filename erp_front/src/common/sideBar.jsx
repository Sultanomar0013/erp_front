import { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;

// Menu items using 'segment' approach
const menuItems = [
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon />, path: "/userMod/home/Dashboard" },
  { segment: "user_access", title: "User Access", icon: <DashboardIcon />, path: "/userMod/home/UserAccess" },
  {
    segment: "my_account",
    title: "My Account",
    icon: <CodeIcon />,
    children: [
      { segment: "profile", title: "My Profile", path: "/userMod/home/ProfilePanel", icon: <StarIcon /> },
      { segment: "update_profile", title: "Update Profile", path: "/userMod/home/UpdateProfile", icon: <StarIcon /> },
    ],
  },
  { segment: "member_info", title: "Member Basic Info", icon: <SettingsIcon />, path: "/userMod/home/MemberBasicInfo" },
  { segment: "notice", title: "Notice", icon: <SettingsIcon />, path: "/userMod/home/NoticeReport" },
  { segment: "attendance", title: "Attendance", icon: <SettingsIcon />, path: "/userMod/home/Attendance" },
  {
    segment: "document",
    title: "Document",
    icon: <CodeIcon />,
    children: [
      { segment: "doc_type", title: "Document Type", path: "/userMod/home/DocType", icon: <StarIcon /> },
      { segment: "doc_list", title: "Document List", path: "/userMod/home/DocAtt", icon: <StarIcon /> },
    ],
  },
  {
    segment: "meeting",
    title: "Meeting Schedule",
    icon: <CodeIcon />,
    children: [
      { segment: "meet_location", title: "Meeting Location", path: "/userMod/home/MeetLocate", icon: <StarIcon /> },
      { segment: "meet_schedule", title: "Create Schedule", path: "/userMod/home/MeetSchedule", icon: <StarIcon /> },
    ],
  },
  {
    segment: "it_support",
    title: "IT Support",
    icon: <CodeIcon />,
    children: [
      { segment: "it_request", title: "IT Request Status", path: "/userMod/home/ItRequestStatus", icon: <PersonIcon /> },
      { segment: "it_list", title: "IT Support List", path: "/userMod/home/ItSupport", icon: <SettingsIcon /> },
    ],
  },
  { segment: "hr_support", title: "HR & Admin Support", icon: <SettingsIcon />, path: "/userMod/home/HrRequest" },
];

const SideBar = ({ open, toggleSidebar }) => {
  const location = useLocation();
  const theme = useTheme();
  const [openMenus, setOpenMenus] = useState({});

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
