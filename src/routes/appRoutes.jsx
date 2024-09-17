import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home.jsx";
import Tasks from "../pages/tasks.jsx";
import App from "../App.jsx";
import NotCreated from "../pages/notCreated.jsx";
import Add from "../pages/add.jsx";
import Setting from "../pages/setting.jsx";
import Games from "../pages/games.jsx";
import TasksPage from "../pages/tasksPage.jsx"; 
import Task from "../pages/task.jsx";
const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/add",
                element: <Add/>,
            },
            {
                path: "/settings",
                element: <Setting/>,
            },
            {
                path: "/games",
                element: <Games/>,
            },
            {
                path: "/tasks",
                element: <TasksPage/>,
            },
            {
                path: "/tasks/:socialMedia",
                element: <Tasks />,
            },
            {
                path: "/tasks/:socialMedia/:task",
                element: <Task/>,
            },
            {
                path: "/*",
                element: <NotCreated />,
            }
        ]
    }
]);

export default router;