
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './style';
import schema from './schema';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const RegisterForm = () => {
    const [success, setSuccess] = useState(false)
    
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        alert("boo")
    };

    const classes = useStyles();

    return ( 
        <form onSubmit={handleSubmit(onSubmit)} className={classes.loginFormBlock}>
            <section className={classes.loginFormBlockName}>
                <Controller
                    name="fullName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                    <TextField
                        {...field}
                        label="Nome Completo"
                        variant="outlined"
                        error={!!errors.fullName}
                        helperText={errors.fullName ? errors.fullName.message : ''}
                        fullWidth
                        margin="normal"
                    />
                    )}
                />
                <Controller
                    name="nickname"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                    <TextField
                        {...field}
                        label="Nome Social"
                        variant="outlined"
                        error={!!errors.nickname}
                        helperText={errors.nickname ? errors.nickname.message : ''}
                        fullWidth
                        margin="normal"
                    />
                    )}
                />         
            </section>
            
            <section className={classes.loginFormBlockCredentials}>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                    <TextField
                        {...field}
                        label="E-mail"
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                        fullWidth
                    />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Senha"
                            type="password"
                            variant="outlined"
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : ''}
                            fullWidth
                        />
                    )}
                />

                <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Confirmar senha"
                            type="password"
                            variant="outlined"
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                            fullWidth
                        />
                    )}
                />                
            </section>  
            <section className={classes.loginFormBlockTerms}>
                <Checkbox color='primary'/>
                <p>Eu aceito todos os <Link>Termos e Serviços</Link> e <Link>Políticas de Privacidades</Link></p>
            </section>

            <Button variant='contained' color='primary' className={classes.buttonStyle} type='submit' disableElevation>Criar Conta</Button>

        </form>
    )
}

export default RegisterForm