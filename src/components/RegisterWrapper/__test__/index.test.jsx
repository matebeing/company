import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../theme/theme.jsx";
import RegisterWrapper from "../index.jsx";
import { MemoryRouter } from "react-router-dom"; 

const Component = () => {
    return (
        <MemoryRouter>
            <ThemeProvider theme={theme}>
                <RegisterWrapper />
            </ThemeProvider>
        </MemoryRouter>
    );
}

describe("Register", () => {
    it('should render heading and link properly', () => {
        render(<Component />);
        
        const heading = screen.getByText('Crie uma conta');
        expect(heading).toBeInTheDocument();

        const link = screen.getByRole('link', { name: 'Entrar' });
        expect(link).toHaveAttribute('href', '/login');
    });
});

