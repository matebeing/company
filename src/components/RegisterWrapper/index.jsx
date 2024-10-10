import { Link } from "react-router-dom";
import useStyles from "./style"
import RegisterForm from "../RegisterForm";
import { useState } from "react";
import Icon from '../../assets/icon.svg?react';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';


const RegisterWrapper = () => {

    const [register, setRegister] = useState(false);
    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        setRegister(true);
    };

    return (
        <section className={classes.loginContainer}>
            <div className={classes.loginBlock} style={{display: register ? 'none' : 'block'}}>
                <div className={classes.loginTextBlock}>
                    <h1>Crie uma conta</h1>
                    <p className={classes.loginTextBlockParagraph}>Você já tem uma conta? <Link to='/login'>Entrar</Link></p>
                </div>
                {register && <p>Cadastro realizado com sucesso!</p>}

                <RegisterForm onRegister={handleRegister} />
            </div>
            <div className={classes.registerBlock} style={{display: register ? 'flex' : 'none'}}>
                <Icon className={classes.registerBlockIcon} />
                <strong>Cadastro realizado com sucesso</strong>
                <Button variant='contained' color="primary"  onClick={handleClick} disableElevation>Fazer login</Button>
            </div>
        </section>
    )
}

export default RegisterWrapper;