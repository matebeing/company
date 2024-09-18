import * as Yup from 'yup';

const schema = Yup.object().shape({
    user: Yup.string().required('Usuário é obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

export default schema;