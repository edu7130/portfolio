import { useEffect, useReducer } from "react";
import { getProjects } from "./api/projects";
import { ProjectsContext } from "./context/projectsContext";
import { projectsReducer } from "./reducers/projectReducer";
import { AppRouter } from "./routers/AppRouter";

function App() {

  const [state, dispatch] = useReducer(projectsReducer, { projects: [], hasError: false });

  useEffect(() => {
    getProjects()
      .then((projects) =>
        dispatch({
          type: 'ADD_PROJECTS',
          payload: projects
        })
      )
      .catch(()=>
      dispatch({
        type: 'ERROR_LOADING'
      }))

  }, [])

  return (
    <ProjectsContext.Provider value={state}>
      <AppRouter />
    </ProjectsContext.Provider>

  );
}

export default App;
