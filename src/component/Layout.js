import React from 'react';
import NavBarIn from './NavBarIn';
import Footer from './Footer';



function Layout(props) {
    return (
     <>
     <div  className="pb-100">
     <NavBarIn />
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