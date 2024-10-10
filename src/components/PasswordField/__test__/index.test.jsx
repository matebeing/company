import {fireEvent, render, screen} from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../theme/theme.jsx";
import { MemoryRouter } from "react-router-dom"; 
import PasswordField from "../../PasswordField/PasswordField.jsx";

const Component = () => {
    return (
        <MemoryRouter>
            <ThemeProvider theme={theme}>
                <PasswordField />
            </ThemeProvider>
        </MemoryRouter>
    );
}

describe('PasswordField', () => {
    it('should render password field', () => {
        render(<PasswordField/>)
        const passwordInput = screen.getByTestId('password-input');
        expect(passwordInput).toBeInTheDocument()
    })

    it('should check password toggle visibility', () => {
        render(<PasswordField/>)
        screen.debug()

        const passwordInput = screen.getByTestId('password-input');
        const visibilityButton = screen.getByTestId('showPassword')

        expect(passwordInput).toHaveAttribute('type', 'password');

        fireEvent.click(visibilityButton)
        fireEvent.mouseDown(visibilityButton)

        expect(passwordInput).toHaveAttribute('type', 'text');

        screen.debug()

    })
})