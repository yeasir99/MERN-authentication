import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email').required('email is required'),
      password: Yup.string()
        .min(8, 'too short')
        .max(28, 'too big')
        .required('Password is required'),
    }),
    onSubmit: () => {
      console.log('submitting');
    },
  });
  return (
    <div>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        placeholder="Enter Your Email"
      />
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        placeholder="Enter your password"
      />
    </div>
  );
};

export default Login;
