import LoginForm from "components/LoginForm/LoginForm";


const LoginPage = () => {
  return (
    <div style={styles.container}>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    background: '#C996CC',
    overflow: 'hidden',
  },
};