import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../theme/theme.jsx";
import Login from "../index.jsx";
import { MemoryRouter } from "react-router-dom"; 

const Component = () => {
    return (
        <MemoryRouter>
            <ThemeProvider theme={theme}>
                <Login />
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

    it('should render login wrapper', () => {
        render(<Component />);
        const greets = screen.getByText('Bem vindo de volta')
        expect(greets).toBeInTheDocument()

        screen.debug();
    })
});

