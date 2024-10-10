import { ThemeProvider } from "@material-ui/core";
import { fireEvent, screen } from "@testing-library/dom"
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import RegisterForm from "..";
import { render } from "@testing-library/react";
import theme from "../../../theme/theme";
import userEvent from "@testing-library/user-event";




describe('Register Form', () => {
    const handleSubmit = jest.fn(); 

    const Component = () => {
        return (
                <MemoryRouter>
                    <ThemeProvider theme={theme}>
                        <RegisterForm onSubmit={handleSubmit} />
                    </ThemeProvider>
                </MemoryRouter>
        );
    }

    const getField = 

    it("should render all form fields", () => {
        render(<Component />);
    
        expect(screen.getByLabelText("Nome Completo")).toBeInTheDocument();
        expect(screen.getByLabelText("Nome Social")).toBeInTheDocument();
        expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
        expect(screen.getByLabelText("Senha")).toBeInTheDocument();
        expect(screen.getByLabelText("Confirmar senha")).toBeInTheDocument();
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
    })

    it("should allow typing into the fields", async () => {
        render(<Component />);
    
        await userEvent.type(screen.getByLabelText("Nome Completo"), "Mate");
        await userEvent.type(screen.getByLabelText("Nome Social"), "Math");
        await userEvent.type(screen.getByLabelText("E-mail"), "mate@example.com");
        await userEvent.type(screen.getByLabelText("Senha"), "mate123");
        await userEvent.type(screen.getByLabelText("Confirmar senha"), "mate123");
    
        expect(screen.getByLabelText("Nome Completo")).toHaveValue("Mate");
        expect(screen.getByLabelText("Nome Social")).toHaveValue("Math");
        expect(screen.getByLabelText("E-mail")).toHaveValue("mate@example.com");
        expect(screen.getByLabelText("Senha")).toHaveValue("mate123");
        expect(screen.getByLabelText("Confirmar senha")).toHaveValue("mate123");
      });

      it("shows validation errors on submit", async () => {
        render(<Component />);
    
        const checkBox = screen.getByRole("checkbox");
    
        fireEvent.click(checkBox);
    
        const buttons = await screen.findAllByRole('button');
        fireEvent.click(buttons[2]);
    
        const errorFullname = await screen.findByText("O nome completo é obrigatório");
        const errorEmail = await screen.findByText("O e-mail é obrigatório");
        const errorPassword = await screen.findByText("Senha é obrigatória");
        const errorConfirm = await screen.findByText("O nome completo é obrigatório");

        expect(errorFullname).toBeInTheDocument();
        expect(errorEmail).toBeInTheDocument();
        expect(errorPassword).toBeInTheDocument();
        expect(errorConfirm).toBeInTheDocument();
    });
    
})