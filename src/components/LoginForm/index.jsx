
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './style';
import schema from './schema';

const LoginForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const classes = useStyles();

    return ( 
        <form onSubmit={handleSubmit(onSubmit)} className={classes.loginFormBlock}>
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
             <p className={classes.loginFormBlockForget}>Esqueci minha senha</p>

             <Button variant='contained' color='primary' className={classes.buttonStyle} type='submit' disableElevation>Entrar</Button>

        </form>
    )
}

export default LoginForm