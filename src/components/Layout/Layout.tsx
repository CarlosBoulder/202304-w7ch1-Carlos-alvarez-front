import Outlet from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import HomePage from "../pages/HomePage/HomePage";

const Layout = (): JSX.Element => {
  return (
    <ContainerStyled>
      <HomePage />
      <Outlet />
    </ContainerStyled>
  );
};

export default Layout;
