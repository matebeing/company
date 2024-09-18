import '../styles/login.css';
import Logo from '../assets/logo.svg';
import { Link } from "react-router-dom";
import LoginForm from '../components/LoginForm';

function Login() {
    return(
        <main>
            <section id='greetings-container'>
                <div id='greetings-block'>
                    <div id='greetings-block-logo-wrap'>
                        <img src={Logo} id="logo" />
                    </div>
                    <div id='greetings-block-text-wrap'>
                        <h1>Seja bem vindo</h1>
                        <p>Seja bem vindo ao nosso site, a Company está sempre com você!</p>
                    </div>
                </div>
            </section>

            <section id='login-container'>
                <div id='login-block'>
                    <div id='login-text-block'>
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