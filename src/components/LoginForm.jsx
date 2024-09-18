import '../styles/login.css';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';


const schema = Yup.object().shape({
    user: Yup.string().required('Usuário é obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter pelo menos 8 caracteres').required('Senha é obrigatória'),
});

const useStyles = makeStyles({
    buttonStyle: {
        width: '250px',
        marginTop: '1em'
    }
})

const LoginForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const classes = useStyles();

    return ( 
        <form onSubmit={handleSubmit(onSubmit)} id='login-form-block'>
            <Controller
                name="user"
                control={control}
                defaultValue=""
                render={({ field }) => (
                <TextField
                    {...field}
                    label="Usuário"
                    variant="outlined"
                    error={!!errors.user}
                    helperText={errors.user ? errors.user.message : ''}
                    fullWidth
                    margin="normal"
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
                    margin="normal"
                    
                />
                )}
            />
             <p>Esqueci minha senha</p>

             <Button variant='contained' color='primary' className={classes.buttonStyle} type='submit'>Entrar</Button>

        </form>
    )
}

export default LoginForm