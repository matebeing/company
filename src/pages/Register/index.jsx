// import '../styles/login.css';

import GreetingsWrapper from '../../components/GreetingsWrapper';
import RegisterWrapper from "../../components/RegisterWrapper";
import useStyles from "./style";


function Register() {

    const classes = useStyles();

    return(
        <main className={classes.mainContainer}>
            <GreetingsWrapper/>
            <RegisterWrapper/>
        </main>
    )
}

export default Register