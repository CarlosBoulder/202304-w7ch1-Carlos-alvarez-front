import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Given a Container component", () => {
  describe("When it is rendered", () => {
    test("Then it should render a div with a label text 'Welcome to the birds robot site'", () => {
      render(<Container></Container>);

      const text = "Welcome to the birds robot site";

      const containerLabelText = screen.getByLabelText(text);

      expect(containerLabelText).toBeInTheDocument();
    });
  });
});
