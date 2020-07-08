import React from 'react';
import Products from './product/Products';


function Home(props) {
    return (
       <div className="vh-100"> <div className = "container display-4"> Welcome</div>
        <Products />
        
        </div>
    );
}

export default Home;