import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navabar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useState } from "react";
import { PageLoader } from "widgets/PageLoader/PageLoader";
import { Modal } from 'shared/ui/Modal/Modal';



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
