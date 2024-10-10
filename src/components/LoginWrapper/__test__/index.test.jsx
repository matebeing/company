import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../theme/theme.jsx";
import { BrowserRouter } from "react-router-dom";
import LoginWrapper from "../index.jsx";
import userEvent from "@testing-library/user-event"; 
import '@testing-library/jest-dom';

const Component = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <LoginWrapper/>
            </ThemeProvider>
        </BrowserRouter>

    )
}

describe("Login", () => {
    it("should say welcome back ", () => {
        render(<Component/>)
        expect(screen.getByText('Bem vindo de volta')).toBeInTheDocument();
    })

    it("should ask if user doesn't have account", () => {
        render(<Component />)
        expect(screen.getByText('Não tem uma conta?')).toBeInTheDocument()
    })

    it("should have a link to create an new account", () => {
        render(<Component />)
        const link = screen.getByRole('link', {name: 'Criar conta'})
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/register')
    })
})
