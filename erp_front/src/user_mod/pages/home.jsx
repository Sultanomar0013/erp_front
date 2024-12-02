import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
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
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import UserReport from '../components/userReport';
import UserAccessPage from '../report/user_access_report';



const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'userAccess',
    title: 'User Access Management',
    icon: <ManTwoToneIcon />,
    children: [
      {
        segment: 'accessibility',
        title: 'Accessibility',
        icon: <ManageAccountsTwoToneIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Inventory/Warehouse',
  },
  {
    segment: 'item',
    title: 'Item',
    icon: <CategoryTwoToneIcon />,
    children: [
      {
        segment: 'addItem',
        title: 'Add Item',
        icon: <AddTwoToneIcon />,
      },
      {
        segment: 'itemReport',
        title: 'Item Report',
        icon: <BarChartIcon />,
      },
    ],
  },
  {
    segment: 'warehouse',
    title: 'warehosue',
    icon: <WarehouseTwoToneIcon />,
    children: [
      {
        segment: 'addWarehouse',
        title: 'Add WareHouse',
        icon: <AddTwoToneIcon />,
      },
      {
        segment: 'warehouseReport',
        title: 'Warehouse Report',
        icon: <BarChartIcon />,
      },
    ],
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});


function DemoPageContent({ pathname }) {

  // const [currentPath, setCurrentPath] = useState(pathname);

  // const handleButtonClick = (userId) => {
  //   setCurrentPath('/user-AccessReport/:userId');
  // };


  // useEffect(() => {
  //   setCurrentPath(pathname);
  // }, [pathname]);


  // if (currentPath === '/userAccess/accessibility') {
  //   return <UserReport onButtonClick={handleButtonClick} />;
  // } else if (currentPath.startsWith('/user-AccessReport/')) {
  //   return <UserAccessPage />;
  // }

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}


DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        // logo: <img src={Logo} alt="Custom Logo" style={{ height: '40px' }} />,
        title: 'Inventory'
      }}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {

};

export default DashboardLayoutBasic;
