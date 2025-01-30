import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import ReactRouterApp from './navigation.tsx';


// const domNode = document.getElementById('navigable')!
const root = createRoot(document.body)
root.render(
    <BrowserRouter>
        <ReactRouterApp/>
    </BrowserRouter>
)