import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
export default function Headder() {
  let loggedin=useSelector(state=>state.login.loggedin)
  console.log(loggedin);
     const dispatch=useDispatch() 
  const [islogin,setislogin]=useState(!!localStorage.getItem("login"))
  console.log(localStorage.getItem("login"),"qqq");
  useEffect(()=>{
    setislogin(loggedin)
  },[loggedin])
  const NavUnlisted = styled.ul`
width:100%;
  display: flex;
  alignItems:start;
  transform: skew(26deg);
  justify-content: space-between;
margin:0px;
  a {
    text-decoration: none;
  }

  li {
    color: #ae275f;
    margin:0 5px;
    font-size: 17px;
    font-weight:600;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      width:200px;
      border-bottom: 2px solid black;
    }
  }
`;
   return (
   <div className='main_nav_div1'><div className='maintrp1'>
     <div style={{ minWidth: '220px',display:'flex',alignItems:'flex-start' }} >
      <span style={{color:'white',fontSize: 'large',
    fontWeight: '600',lineHeight:'30px',
    fontFamily: 'sans-serif'}}>Bachulars Adda</span>
    </div> <div className='trappizoid1'>
      
      
      {islogin?<div className='trappizoid1_navitems_alogin'>
    <NavUnlisted>
      <div style={{display:'flex', width: '45%',justifyContent: 'space-between'
}}><NavLink to="/home" activeClassName="current" exact>
        <li>Home</li>
      </NavLink>
      <NavLink to="#" activeClassName="current" exact>
        <li>OurMenu</li>
      </NavLink>
      <NavLink to="#" activeClassName="current" exact>
        <li>Orders</li>
      </NavLink></div>
      <div style={{display:'flex', width: '16%',justifyContent: 'space-between',marginRight:'22px'
}}> <NavLink to="#" activeClassName="current" exact>
        <li>
        <Badge color='primary' badgeContent={1} max={9}><ShoppingCartIcon /></Badge></li>
      </NavLink>
      <NavLink to="#" activeClassName="current" exact>
        <li><SettingsIcon/></li>
      </NavLink></div>
    </NavUnlisted>
      </div>:
    <div className='trappizoid1_navitems_alogin'>
    <NavUnlisted>
      <NavLink to="/about" activeClassName="current" exact>
        <li>Signin</li>
      </NavLink>
      <NavLink to="/contact" activeClassName="current" exact>
        <li>Signup</li>
      </NavLink>
    </NavUnlisted>
      </div>}
    
    
    
    <div className='side' >
      </div> <div className='side11' >
        </div>
        </div>
        </div>
        </div>

    )
}









// import React, { Fragment, useState } from 'react';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// // import logo from 'https://img.icons8.com/bubbles/344/amazon-alexa-logo.png';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Paper from '@mui/material/Paper';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   mixins: {
//     toolbar: {
//       minHeight: 60,
//     },
//   },
// });

// const styles = {
//   toolbarMargin: {
//     ...theme.mixins.toolbar,
//     marginBottom: '3em',
//     [theme.breakpoints.down('md')]: {
//       marginBottom: '2em',
//     },
//     [theme.breakpoints.down('xs')]: {
//       marginBottom: '1.25em',
//     },
//   },
//   logo: {
//     height: '8em',
//     [theme.breakpoints.down('md')]: {
//       height: '7em',
//     },
//     [theme.breakpoints.down('xs')]: {
//       height: '5.5em',
//     },
//   },
//   logoContainer: {
//     padding: 0,
//     '&:hover': {
//       backgroundColor: 'transparent',
//     },
//   },
//   tabs: {
//     marginLeft: 'auto',
//     '& .MuiButtonBase-root.MuiTab-root': {
//       fontSize: 20,
//     },
//     '& .Mui-selected': {
//       backgroundColor: '#fce0a2',
//       color: '#000',
//       opacity: 0.7,
//       borderRadius: 2,
//     },
//   },
//   tab: {
//     ...theme.typography.tab,
//     minWidth: 10,
//     marginLeft: '25px',
//     color: 'white',
//   },

//   hamburgerMenuIcon: {
//     height: '50px',
//     width: '50px',
//   },
//   menuIconContainer: {
//     marginLeft: 'auto',
//     color: 'white',
//     '&:hover': {
//       opacity: 1,
//     },
//   },
//   appbar: {
//     zIndex: theme.zIndex.modal + 1,
//   },
// };

// const DesktopNavigation = () => {
//   const [value, setValue] = useState(0);
// const [islogin,setislogin]=useState(!!localStorage.getItem('login'))

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <Tabs
//       value={value}
//       onChange={handleChange}
//       aria-label="nav tabs example"
//       sx={styles.tabs}
//     >
//       {islogin?<><Tab sx={styles.tab} label="Home" component={Link} to="/" />
//       <Tab sx={styles.tab} label="About us" component={Link} to="/about" />
//       <Tab sx={styles.tab} label="Contact us" component={Link} to="/contact" />
//       <Tab sx={styles.tab} label="logout" component={Button} onClick={()=>{
//         localStorage.clear()
//         setislogin(!!localStorage.getItem("login"))
//       }} /></>:<>
//       <Tab sx={styles.tab} label="Signin" component={Link} to="/about" />
//       <Tab sx={styles.tab} label="Signup" component={Link} to="/contact" /></>}
//     </Tabs>
//   );
// };

// const MobileNavigation = () => {
//   const [openDrawer, setOpenDrawer] = React.useState(false);

//   const iOS =
//     typeof navigator !== 'undefined' &&
//     /iPad|iPhone|iPod/.test(navigator.userAgent);

//   return (
//     <React.Fragment>
//       <SwipeableDrawer
//         disableBackdropTransition={!iOS}
//         disableDiscovery={iOS}
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//         onOpen={() => setOpenDrawer(true)}
//       >
//         <Box sx={styles.toolbarMargin} />
//         <Paper>
//         <List disablePadding>
//          {localStorage.getItem('login')?
//             <ListItem
//               divider
//               button
//               component={Link}
//               to='/home'
//               onClick={() => setOpenDrawer(false)}
//             >
//               <ListItemText disableTypography>Home</ListItemText>
//             </ListItem>:null}
//             <ListItem
//               divider
//               button
//               component={Link}
//               to="/about"
//               onClick={() => setOpenDrawer(false)}
//             >
//               <ListItemText disableTypography>About us</ListItemText>
//             </ListItem>
//             <ListItem
//               divider
//               button
//               component={Link}
//               to="/contact"
//               onClick={() => setOpenDrawer(false)}
//             >
//               <ListItemText disableTypography>Contact us</ListItemText>
//             </ListItem>
//           </List>
//         </Paper>
//       </SwipeableDrawer>
//       <IconButton
//         sx={styles.menuIconContainer}
//         onClick={() => setOpenDrawer(!openDrawer)}
//         disableRipple
//       >
//         <MenuIcon sx={styles.hamburgerMenuIcon} />
//       </IconButton>
//     </React.Fragment>
//   );
// };

// const Header = () => {
//   const isMobileMode = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Fragment>
//       <AppBar
//         position="fixed"
//         sx={styles.appbar}
//         color="secondary"
//         elevation={9}
//       >
//         <Toolbar disableGutters={true}>
//           <Button
//             disableRipple
//             component={Link}
           
//             sx={styles.logoContainer}
//           >
//             <Box alt="company logo" />
//             LOGO
//           </Button>
//           {isMobileMode ? <MobileNavigation /> : <DesktopNavigation />}
//         </Toolbar>
//       </AppBar>
//     </Fragment>
//   );
// };

// export default Header;
