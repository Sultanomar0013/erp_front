import React, { useState, useEffect } from 'react';
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  BarChart as BarChartIcon,
  Description as DescriptionIcon,
  Layers as LayersIcon,
  AddTwoTone as AddTwoToneIcon,
  ManTwoTone as ManTwoToneIcon,
  ManageAccountsTwoTone as ManageAccountsTwoToneIcon,
  WarehouseTwoTone as WarehouseTwoToneIcon,
  CategoryTwoTone as CategoryTwoToneIcon,
  Inventory2TwoTone as Inventory2TwoToneIcon
} from '@mui/icons-material';
import PropTypes from 'prop-types';

const NAVIGATION = [
  {
    kind: "header",
    title: "User Moudle",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },

  {
    segment: "userAccess",
    title: "User Access Management",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "accessibility",
        title: "Accessibility",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/userAccess/accessibility",
      },
    ],
  },
  {
    segment: "myAccount",
    title: "My Account",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "myProfile",
        title: "My Profile",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/myProfile",
      },
      {
        segment: "updateProfile",
        title: "Update Profile",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/updateProfile",
      },
    ],
  },
  {
    segment: "memberBasicInfo",
    title: "Member Basic Info",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "allMemberContacts",
        title: "All Member Contacts",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/allMemberContacts",
      },
    ],
  },
  {
    segment: "notice",
    title: "Notice",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "notice",
        title: "Notice",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/notice",
      },
    ],
  },
  {
    segment: "attendance",
    title: "Attendance",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "putAttendance",
        title: "Put Attendance",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/putAttendance",
      },
    ],
  },
  {
    segment: "documentSection",
    title: "Document Section",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "documentType",
        title: "Document Type",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/documentType",
      },
      {
        segment: "documentList",
        title: "Document List",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/documentList",
      },
    ],
  },
  {
    segment: "meetingSchedule",
    title: "Meeting Schedule",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "meetingLocation",
        title: "Meeting Location",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/meetingLocation",
      },
      {
        segment: "createSchedule",
        title: "Create Schedule",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/createSchedule",
      },
    ],
  },
  {
    segment: "itSupport",
    title: "It Support",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "supportRequest",
        title: "Support Request",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/supportRequest",
      },
      {
        segment: "requestStatus",
        title: "Request Status",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/requestStatus",
      },
    ],
  },
  {
    segment: "hrAdminSupport",
    title: "HR & Admin Support",
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: "newRequest",
        title: "New Request",
        icon: <ManageAccountsTwoToneIcon />,
        path: "/newRequest",
      },
    ],
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "My User Board",
  },
];