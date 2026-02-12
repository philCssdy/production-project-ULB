import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

//Другой вариант
// const router = createBrowserRouter([
//   { path: "/about", element: <AboutPage /> },
//   { path: "/", element: <MainPage /> },
// ]);

// function App() {
//   return <RouterProvider router={router} />;}

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};

export default App;
