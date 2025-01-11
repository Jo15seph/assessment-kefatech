import NavBar from "./layouts/NavBar";
const HeaderHOC = (WrappedComponent) => {
    return (props) => (
      <>
        <NavBar />
        <WrappedComponent {...props} />
      </>
    );
  };
  
  export default HeaderHOC;
