import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../theme/theme.jsx";
import { MemoryRouter } from "react-router-dom"; 
import LoginForm from "../index.jsx";

const Component = () => {
    return (
        <MemoryRouter>
            <ThemeProvider theme={theme}>
                <LoginForm />
            </ThemeProvider>
        </MemoryRouter>
    );
}

describe('LoginForm', () => {
    it('should render user field', () => {
        render(<Component />)
        const userField = screen.getByRole('textbox');
        expect(userField).toBeInTheDocument()
        expect(userField).toHaveAttribute('name', 'Usuário');
    })

    it('should render forgot my password link and login button', () => {
        render(<Component/>)
        const button = screen.getByText('Entrar')
        const link = screen.getByText('Esqueci minha senha')

        expect(button).toBeInTheDocument()
        expect(link).toBeInTheDocument()
    })
})