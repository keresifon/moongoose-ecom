import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';



function Layout(props) {
    return (
     <>
     <div  className="pb-100">
     <NavBar />
       <div >
       <div>&nbsp;</div>
       <div>{props.children}</div>
       </div>
       <Footer/>
     </div>
    
     </>
    );
}

export default Layout;