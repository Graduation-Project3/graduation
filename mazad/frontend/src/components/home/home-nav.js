import Typography from '@mui/material/Typography';
import GavelIcon from '@mui/icons-material/Gavel';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useStyle from './styles';


const theme = createTheme({
  palette: {
    primary: {
        main:'#8D8DAA',
    }
  },

});

function Nav() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
    <nav className={classes.nav}>
      
        <Box className={classes.dis}
        >
          <Box className={classes.navLogo} >
            <GavelIcon className='logo'></GavelIcon>
            <Typography variant='h6' component="h3" className={classes.navItem}>Mazad</Typography>
          </Box>
          <Box className={classes.navCategories}>
            <div className={classes.catContainer}>Categories <div className={classes.categoriesText}><KeyboardArrowDownIcon /></div> </div>
          </Box>
          <Box className={classes.navSearch}>
            <TextField
              id="standard-basic"
              label="Search"
              size='small'
              className={classes.mainColor}
              color={'primary'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon className={classes.mainColor} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box className={classes.navButton}>
          <Button variant="contained">Sign In</Button>
          </Box>
        </Box>
      

    </nav>
    </ThemeProvider>
  );
}

export default Nav;
