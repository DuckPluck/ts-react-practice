import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <BrowserRouter>                                                 {/* На потомков этого тэга будет распространяться роутинг */}
        <Routes>                                                    {/* '*' в 'path' означает, что возможны более глубокие пути внутри эл-та */}
            <Route path={'/*'} element={<App />} />                  {/* В App.tsx нельзя указать этот роут, тк будет циклический рендер */}
        </Routes>
    </BrowserRouter>
)
