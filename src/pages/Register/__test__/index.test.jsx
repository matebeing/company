import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../theme/theme.jsx";
import Register from "../index.jsx";
import { MemoryRouter } from "react-router-dom"; 

const Component = () => {
    return (
        <MemoryRouter>
            <ThemeProvider theme={theme}>
                <Register />
            </ThemeProvider>
        </MemoryRouter>
    );
}

describe("Login page", () => {
    it('should render greetings', () => {
        render(<Component />);
        const greets = screen.getByText('Seja bem vindo')
        expect(greets).toBeInTheDocument()

        screen.debug();
    });

    it('should render register wrapper', () => {
        render(<Component />);
        const greets = screen.getByText('Crie uma conta')
        expect(greets).toBeInTheDocument()

        screen.debug();
    })
});

