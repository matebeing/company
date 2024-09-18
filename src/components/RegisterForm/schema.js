import * as Yup from 'yup';

const schema = Yup.object().shape({
    fullName: Yup.string().required('O nome completo é obrigatório'),
    nickname: Yup.string(),
    email: Yup.string().required('O nome completo é obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
    confirmPassword: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória')
});

export default schema;