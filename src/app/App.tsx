import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navabar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import  {useTranslation}  from "react-i18next";
import { PageLoader } from "widgets/PageLoader/PageLoader";



function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader/>}>
        <Navbar />
      
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
export default App;
