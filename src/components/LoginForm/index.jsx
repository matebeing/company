
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './style';
import schema from './schema';
import { useNavigate } from 'react-router-dom';
import PasswordField from '../PasswordField/PasswordField';

const LoginForm = () => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        let user = accounts.find(acc => acc.user === data.nickname && acc.password === data.password);
        
        if (user) {
            navigate('/home', {state: {data}})
        } else {
            alert('Dados inválidos');
        }
    };

    const classes = useStyles();

    return ( 
        <form onSubmit={handleSubmit(onSubmit, console.log)} className={classes.loginFormBlock}>
            <Controller
                name="user"
                control={control}
                defaultValue=""
                render={({ field }) => (
                <TextField
                    {...field}
                    label="Usuário"
                    name="Usuário"
                    variant="outlined"
                    error={!!errors.user}
                    helperText={errors.user ? errors.user.message : ''}
                    fullWidth
                />
                )}
            />
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <PasswordField label="Senha" {...field} errors={errors}/>
                )}
            />

             <p className={classes.loginFormBlockForget}>Esqueci minha senha</p>

             <Button variant='contained' color='primary' className={classes.buttonStyle} type='submit' disableElevation>Entrar</Button>

        </form>
    )
}

export default LoginForm