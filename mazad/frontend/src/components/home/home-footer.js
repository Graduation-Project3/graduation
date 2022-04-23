
import Typography from '@mui/material/Typography';
import useStyle from './styles';


function Footer() {
    const classes = useStyle();
    return (
        <footer className={classes.footer}>
            <div className={classes.aboutUs}>
                <Typography variant='h5' marginBottom={2} >About Us</Typography>
                <Typography variant='h7' style={ { display:'inline-block' , marginRight:'5px'} }>Mazad </Typography>
                <Typography style={ { display:'inline'} }>
                     is an auction website that was developed in jordan in 2020
                </Typography>
            </div>
            <div className={classes.aboutUs}>
                <Typography variant='h6' marginBottom={2} >Contact Us</Typography>
                <Typography variant='subtitle1'>Mobile Number : +962787357147</Typography>
                <Typography>E-Mail : temp@temp.com</Typography>
            </div>
        </footer>
    )
}

export default Footer;
