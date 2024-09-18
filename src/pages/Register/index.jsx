// import '../styles/login.css';
import Logo from '../../assets/logo.svg';

import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";
import useStyles from "./style";

function Register() {

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
                        <h1>Crie uma conta</h1>
                        <p className={classes.loginTextBlockParagraph}>Você já tem uma conta? <Link to='/login'>Entrar</Link></p>
                    </div>
                    <RegisterForm />
                </div>
            </section>
        </main>
    )
}

export default Register