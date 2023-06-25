const { default: UserBar } = require('./UserBar');

const Nav = () => {
  return (
    <div style={styles.hedder}>
      <h3 style={{ fontSize: 28, margin: 0, display: 'block', color: 'black'}}>
        PhoneBook
      </h3>
      <UserBar />
    </div>
  );
};
export default Nav;
const styles = {
  hedder: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '5px',
    marginBottom: '25px',
  },
};