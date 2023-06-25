import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div style={{width: '100%'}}>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;