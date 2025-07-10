import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too Short!').required('Required'),
  password: Yup.string().min(4, 'Too Short!').required('Required'),
});

export default LoginSchema;
