import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes"
import { createTheme, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";

const themes = createTheme(theme);
  

const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={themes}>
                <AppRoutes />
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App;