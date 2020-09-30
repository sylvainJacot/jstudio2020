import React, {useState} from 'react';
import "./reset.css";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import GlobalFonts from "./components/01 Atoms/globalStyle";

import Footer from "./components/04 Organisms/footer/footer";
import AppRoutes from "./components/Routes/approutes";
import HeaderNavigation from "./components/04 Organisms/HeaderNavigation/HeaderNavigation";
import {UserContext} from "./components/Hooks/Providers/Context";





function App() {

    const [value, setValue] = useState(false);

  return (
          <div className="App">
              <UserContext.Provider value={{value, setValue}}>
                  <GlobalFonts/>
                  <AppRoutes />
                  <HeaderNavigation/>

              </UserContext.Provider>

              <MessengerCustomerChat
                  pageId="111788123985865"
                  appId="949279658890551"
                  htmlRef="<REF_STRING>"
              />,
          </div>
  );
}


export default App;

/* "Null" we don't need any props from the store in App.js */
