import { Routes,Route } from "react-router-dom"
import { pagesList } from "../../Router/routes"

export const AppRouter = () =>{
    return(
        <Routes>
            {
                pagesList.map(page=>
                    <Route path={page.path} element={page.element} key={page.path}></Route>
                )
            }
        </Routes>
    )
}