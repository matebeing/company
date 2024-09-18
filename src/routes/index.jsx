import { Route, Routes } from "react-router-dom"
import routes from "./routes"

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route path={route.path} element={route.element} key={route.path} />
            ))}
        </Routes>
    )
}

export default AppRoutes