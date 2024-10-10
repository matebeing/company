import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes"
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";  

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