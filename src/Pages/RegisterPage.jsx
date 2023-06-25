import RegistrationForm from "components/RegisterForm/RegistrationForm";


const RegisterPage = () => {
  return (
    <div style={styles.container}>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    background: '#C996CC',
    overflow: 'hidden',
  },
};