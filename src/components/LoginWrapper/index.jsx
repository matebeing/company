import { Link } from "react-router-dom";
import useStyles from "./style"
import LoginForm from "../LoginForm";

const LoginWrapper = () => {
    const classes = useStyles();

    return (
        <section className={classes.loginContainer}>
            <div className={classes.loginBlock}>
                <div className={classes.loginTextBlock}>
                    <h1>Bem vindo de volta</h1>
                    <p className={classes.loginTextBlockParagraph}>Não tem uma conta? <Link to='/register'>Criar conta</Link></p>
                </div>
                <LoginForm />
            </div>
        </section>
    )
}

export default LoginWrapper;