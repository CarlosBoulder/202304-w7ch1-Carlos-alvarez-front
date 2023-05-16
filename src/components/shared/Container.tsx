import ContainerStyled from "./ContainerStyled";

const Container = (): JSX.Element => {
  return (
    <ContainerStyled
      className="layout-container"
      aria-label="Welcome to the birds robot site"
    ></ContainerStyled>
  );
};

export default Container;
