import React, {Component} from 'react';


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FloatingActionButtons from './NewTask.js';

const useStyles = then =>({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 12,
    },
    pos: {
        width: "auto",
        alignItems: "center",
        alignContent: "center",


    },
    titleProgress: {
        fontSize: 40,
        color: "#fd6363",
    },
    titleReady: {
        fontSize: 40,
        color: "#fd6363",
    },
    titleCompleted: {
        fontSize: 40,
        color: "#fd6363",
    },

});

class FunctionCard extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const {classes} = this.props;
        const bull = <span className={classes.bullet}>•</span>;
        const date = new Date().getDate()+"/"+ new Date().getMonth() +"/"+ new Date().getFullYear()

        return (

            <Card className={classes.root}>
                <CardContent>
                    {this.props.estado==="In progress" && <Typography className={classes.titleProgress} color="textPrimary" gutterBottom>{this.props.titulo}</Typography>}
                    {this.props.estado==="Ready" && <Typography className={classes.titleReady} color="textPrimary" gutterBottom>{this.props.titulo}</Typography>}
                    {this.props.estado==="Completed" && <Typography className={classes.titleCompleted} color="textPrimary" gutterBottom>{this.props.titulo}</Typography>}
                    <br></br>
                    <br></br>
                    <Typography variant="h5" component="h5" color="textSecondary">
                        Santiago Carrillo
                    </Typography>
                    <Typography variant="h5" component="h5" color="textSecondary">
                        sancarbar@gmail
                    </Typography>
                    <Typography variant="h5" component="h5">
                        {this.props.estado}
                    </Typography>
                    <br></br>
                    <Typography variant="h5" component="h3">
                        {date}
                    </Typography>
                </CardContent>

            </Card>
        );

    }
}
export default withStyles(useStyles, { withTheme: true })(FunctionCard);
