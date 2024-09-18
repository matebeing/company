// import '../styles/login.css';
// import Logo from '../assets/logo.svg';
//import {CompanyLogo} from '../assets';

import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import useStyles from "./style";

function Login() {

    const classes = useStyles();

    return(
        <main className={classes.mainContainer}>
            <section className={classes.greetingsContainer}>
                <div id='greetings-block' className={classes.greetingsBlock}>
                    <div id='greetings-block-logo-wrap'>
                        {/* <img src={Logo} id="logo" /> */}
                    </div>
                    <div id='greetings-block-text-wrap'>
                        <h1>Seja bem vindo</h1>
                        <p>Seja bem vindo ao nosso site, a Company está sempre com você!</p>
                    </div>
                </div>
            </section>

            <section id='login-container' className={classes.loginContainer}>
                <div id='login-block' className={classes.loginBlock}>
                    <div id='login-text-block' className={classes.loginTextBlock}>
                        <h1>Bem vindo de volta</h1>
                        <p>Não tem uma conta? <Link to='/cadastro'>Criar conta</Link></p>
                    </div>
                    <LoginForm />
                </div>
            </section>
        </main>
    )
}

export default Login