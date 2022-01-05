import { Header } from "./components/header/Header";
import { EnhancedTable } from "./components/enhancedTable/EnhancedTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "./store/action/todo/todo-action";
import loading from "./assets/loading.svg";
import backGround from "./assets/backGround.png";

const App = () => {
  const isLoading = useSelector((state) => state.todoReducer.isLoading);
  const todos = useSelector((state) => state.todoReducer.todos);
  const statusCode = useSelector((state) => state.todoReducer.status_code);
  const error = useSelector((state) => state.todoReducer.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const homeStyle = {
    backgroundImage: `url(${backGround})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={homeStyle}>
      {error && (
        <div className="alert alert-danger" role="alert">
          * {error}
        </div>
      )}
      <Header />
      {isLoading && (
        <div className="text-center">
          <img src={loading} alt="LOADING..." />
        </div>
      )}
      <EnhancedTable data={todos}></EnhancedTable>
    </div>
  );
};

export default App;
