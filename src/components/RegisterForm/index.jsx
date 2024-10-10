
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './style';
import schema from './schema';
import { Link } from 'react-router-dom';
import PasswordField from '../PasswordField/PasswordField';


const RegisterForm = ({ onRegister }) => {
    const classes = useStyles();

    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        // accounts.push(data);

        const newAccounts = [...accounts, data]
        localStorage.setItem('accounts', JSON.stringify(newAccounts));

        onRegister();
    };

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
                        id="fullName"
                        variant="outlined"
                        error={!!errors.fullName}
                        helperText={errors.fullName ? errors.fullName.message : ''}
                        fullWidth
                        margin="normal"
                        InputProps={{
                            inputProps: {
                                'data-testid': "name-input"
                            }
                        }}
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
                        id="nickname"
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
                        id="email"
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
                        <PasswordField label="Senha"  id="password" {...field} errors={errors}/>
                    )}
                />

                <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <PasswordField label="Confirmar senha" id="confirm" {...field} errors={errors}/>
                    )}
                />                
            </section>  
            <section className={classes.loginFormBlockTerms}>
                <Checkbox required color='primary'/>
                <p>Eu aceito todos os <Link>Termos e Serviços</Link> e <Link>Políticas de Privacidades</Link></p>
            </section>

            <Button variant='contained' color='primary' className={classes.buttonStyle} type='submit' disableElevation>Criar conta</Button>

        </form>
    )
}

export default RegisterForm