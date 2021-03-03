import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles/Layout.css';
import MessengerCustomerChat from 'react-messenger-customer-chat'

function Layout(props) {
  /* const children = props.children; */

  return (
    <React.Fragment>
      <div className="layout-global">
        <Navbar />
        <MessengerCustomerChat
    pageId="107560224492216"
    appId="775872919759099"
    /* htmlRef="<REF_STRING>" */
  />
        <div className="layout-content">
          <div className="">{props.children}</div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
