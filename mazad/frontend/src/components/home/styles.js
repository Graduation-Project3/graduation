import { makeStyles } from '@mui/styles';
import { createTheme, height } from '@mui/system';
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
const useStyle = makeStyles(() => {
  return {
    // page styles 
    mainColor: {
      color: ' #8D8DAA'
    },

    //navbar styles
    dis: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridAutoColumns: '1fr',
      backgroundColor: '#F7F5F2',
    },
    nav: {
      padding: ' 0.9rem 2rem',
      backgroundColor: '#F7F5F2',
      color: ' #8D8DAA',
      height: ' 40px',
      width: 'auto',
    },
    navLogo: {
      gridColumn:'1',
      gridRow:'1',
    },
    navCategories: {
      gridRow: '1',
      gridColumn: '3/6' 
    },
    navSearch: {
      gridColumn:'7/10',
      gridRow:'1',
    },
    navButton: {
      gridColumn:'12',
      gridRow:'1',
    },
    navItem: {
      float: 'left',
    },
    categoriesText: {
      position: 'absolute',
      top: '0.001px',
      display: 'inline',
    },
    catContainer: {
      position: 'relative',
      top: '6px',
    },
    //slider styles
    cas:{
      height:'26rem'
    },
    slider: {
      height: '23rem',
      display: 'block',
      position: 'static',
      backgroundColor: '#F7F5F2',
    },
    sliderButtons: {
      backgroundColor: 'gray',
      borderRadius: 20,
      padding: '10px',
      margin: '0 20px',
    },
    sliderContainer: {
      position: 'relative',
      width: '100%',
      height: '100%',

    },
    sliderImage: {
      width: '100%',
      minHeight: '100%',
    },
    sliderText: {
      position: 'absolute',
      backgroundColor: '#F56D91',
      width: '20%',
      padding: '1%',
      opacity: '0.7',
      bottom: '10%',
      left: '7%',
      color: 'aliceblue',
      float: 'left',
    },
    sliderButton: {
      position: 'absolute',
      bottom: ' 17 ',
      left: '29 ',
      borderRadius: '2%',
    },
    //home card styles
    cards: {
      width: '100%',
      padding: ' 3% 0',
      backgroundColor: '#F7F5F2',
    },
    card:{
      maxWidth: '17rem',
    },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      gridTemplateRows: 'auto ',
      gridAutoRows: '0',
      justifyContent: 'space-evenly',
    },
    loadMore: {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      gridTemplateRows: 'auto ',
      gridAutoRows: '0',
      justifyContent: 'space-evenly',
      gridAutoRows: 'auto',
      rowGap: ' 5%',
    },
    cardButton: {
      margin: '5%',
      textAlign: 'center',
    },
    arrow: {
      borderRdius: '25px',
      color: '#8D8DAA',
    },
    //testomonial styles
    testomonial: {
      display: 'block',
      position: 'static',
      backgroundColor: '#DFDFDE',
      height:'10rem'
    },
    testoContent: {
      textAlign: 'center',
      marginTop:'4rem'
    },
    //footer styles
    footer: {
      padding: '2% 10%',
      width: '80%',
      height:'8rem',
      gridTemplateColumns: 'auto auto',
      justifyContent: 'space-evenly',
      backgroundColor: ' #8D8DAA',
      color: '#F7F5F2',
      textAlign:'center'
    },
    aboutUs: {
      width: '50%',
      float:'left',
      textAlign:'center',
    },
    //responsive 
    [theme.breakpoints.down('tablet')]: { // eslint-disable-line no-useless-computed-key
      navLogo: {
        gridColumn:'1/4',
      },
      navCategories:{
        gridColumn:'5/8',
      },
      navSearch:{
        display:'none'
      },
      navButton:{
        gridColumn:'10/13'
      },
      slider: {
        height: '20rem',
      },
      sliderImage:{
        height:'18rem'
      },
      cardContainer: {
        gridTemplateColumns: 'auto auto',
        justifyContent: 'space-evenly',
      },
      loadMore: {
        gridTemplateColumns: 'auto auto ',
        gridAutoRows: 'auto',
        justifyContent: 'space-evenly',
        gridAutoRows: 'auto',
        rowGap: ' 5%',
      },
      card:{
        maxWidth: '10rem'
      },
      testomonial: {
        height:'7rem'
      },
      testoContent: {
        marginTop:'2rem'
      },
    },
  }
}
);
export default useStyle;