import { render, screen } from "@testing-library/react";
import GreetingsWrapper from '../index.jsx';
import Logo from '../../../assets/logo.svg?react'
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../theme/theme.jsx";

const Component = () => {
    return (
        <ThemeProvider theme={theme}>
                <GreetingsWrapper/>
        </ThemeProvider>
    )
}

describe("Greetings", () => {
    it("should load company logo", () => {
        render(<Component/>)
        expect(screen.getByLabelText('Company Logo')).toBeInTheDocument();
    })

    it("should greet user correctly", () => {
        render(<Component/>)
        expect(screen.getByText("Seja bem vindo")).toBeInTheDocument()
    })
    it("should introduce user correctly", () => {
        render(<Component/>)
        expect(screen.getByText("Seja bem vindo ao nosso site, a Company está sempre com você!")).toBeInTheDocument()
    })
})
