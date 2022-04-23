import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useStyle from './styles';







function HomeCard(props) {
    const classes = useStyle();
    console.log(props);
    const items = props.items;
    const [show, setShow] = useState(classes.cardContainer);

    const toggleShow = (e) => {
        if (show === classes.cardContainer) {
            setShow(classes.loadMore)
        }
        if (show === classes.loadMore) {
            setShow(classes.cardContainer)
        }
    }

    return (
        <div className={classes.cards} >
            <div className={show}>

                {items.map((item, i) => (
                    <Item key={i} {...item} />
                ))}
            </div >

            <div className={classes.cardButton}>
                <Button size="small" onClick={toggleShow}>
                    {
                        show === classes.cardContainer ? <KeyboardArrowDownIcon className={classes.arrow}/> : <KeyboardArrowUpIcon className={classes.arrow}/>
                    }
                </Button>
            </div>

        </div>


    );
}
export default HomeCard;



const Item = ({ imageUrl, title, description }) => {
    const classes = useStyle();
    return (
        <Card className={classes.card}>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl[0]}
                alt="green iguana"

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"></Button>
            </CardActions>

        </Card>
    );
};