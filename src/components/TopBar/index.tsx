import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useLocation} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { LocalDrink } from '@mui/icons-material';


interface Props {
  drawerWidth: number;
  handleDrawerToggle: () => void;
}


const TopBar = (props: Props) => {
  const router =  useLocation()  
  console.log(router);
  let headerName = "Beer Details"
  if(router.pathname === '/') {
    headerName = "Home"
  }else if(router.pathname === '/beer') {
    headerName = "BeerList - Flavour The Moment"
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" color={"#fff"} fontFamily={"initial"} fontStyle={"italic"} fontWeight={700} noWrap component="div">
          {headerName}
        </Typography>
      </Toolbar>
    </AppBar>
    );
  }

export default TopBar;