// import '../styles/login.css';

import GreetingsWrapper from '../../components/GreetingsWrapper';
import LoginWrapper from "../../components/LoginWrapper";
import useStyles from "./style";


function Login() {

    const classes = useStyles();

    return(
        <main className={classes.mainContainer}>
            <GreetingsWrapper/>
            <LoginWrapper/>
        </main>
    )
}

export default Login