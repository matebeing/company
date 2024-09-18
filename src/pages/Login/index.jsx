// import '../styles/login.css';
import Logo from '../../assets/logo.svg';

import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import useStyles from "./style";

function Login() {

    const classes = useStyles();

    return(
        <main className={classes.mainContainer}>
            <section className={classes.greetingsContainer}>
                <div className={classes.greetingsBlock}>
                    <div id='greetings-block-logo-wrap'>
                        <img src={Logo} id="logo" />
                        {/* <CompanyLogo /> */}
                        
                    </div>
                    <div id='greetings-block-text-wrap'>
                        <h1>Seja bem vindo</h1>
                        <p>Seja bem vindo ao nosso site, a Company está sempre com você!</p>
                    </div>
                </div>
            </section>

            <section className={classes.loginContainer}>
                <div className={classes.loginBlock}>
                    <div className={classes.loginTextBlock}>
                        <h1>Bem vindo de volta</h1>
                        <p className={classes.loginTextBlockParagraph}>Não tem uma conta? <Link to='/cadastro'>Criar conta</Link></p>
                    </div>
                    <LoginForm />
                </div>
            </section>
        </main>
    )
}

export default Login