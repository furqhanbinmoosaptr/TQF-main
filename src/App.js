import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Views from "./Views/index";
import { useLocation } from "react-router-dom";
import Donations from "Views/Postlogin/Donations";


import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Flashbar,
  Header,
  HelpPanel,
  Link,
  SideNavigation,
  SplitPanel,
} from '@cloudscape-design/components';
import ProcurementHeader from "components/TQFHeader";
import TQFHeader from "components/TQFHeader";

function App() {
  // const location = useLocation();
  return (
    <Router>
      <div className="App">
        {/* {window.location.pathname !== "/auth/signup" &&
          window.location.pathname !== "/auth/signin" &&
          window.location.pathname !== "/auth/forgot-password" && <Header />
          } */}
{/* temporyy block code  */}

<TQFHeader/>

<>
    <AppLayout
        navigation={
        <Sidebar/>
        }
               content={
        <MainContent/>
        }
      />
    
  
    </>
      
      </div>
    </Router>


  );
}
function MainContent() {

  const location = useLocation();
  return (
    // <>
    //   {location.pathname !== "/auth/signup" &&
    //     location.pathname !== "/auth/signin" &&
    //     location.pathname !== "/auth/forgot-password" && (
    //       <Sidebar key={location.pathname} />
    //     )}
    //   <Routes>
    //     <Route path="*" element={<Views />} />
    //   </Routes>
    // </>.

   <>
      <Routes>
        <Route path="*" element={<Views />} />
      </Routes>
   </>
  );
}
export default App;
