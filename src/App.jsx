import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes"
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme();

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <AppRoutes />
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App;