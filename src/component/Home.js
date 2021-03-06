import React from 'react';
import {  Media, Button } from 'react-bootstrap';
import Slide from './assets/Slide';

import {Link} from 'react-router-dom'
import Trending from './product/Trending';

function Home(props) {
	
	return (
       <div>
        <div className="pb-100">
		<div className="py-4 pt-md-5 bg-secondary">
			<div className="container py-xl-2">
				<div className="row">
					<div className="col-xl-9 pt-xl-4 order-xl-2">
                        <div  > < Slide /></div>
                    </div>
					<div className="col-xl-3 order-xl-1 pt-4 mt-3 mt-xl-0 pt-xl-0">
						<Media className="bg-faded-info rounded-lg">
							<img
								width={125}
								height={152}
								className="mr-3"
								src="https://res.cloudinary.com/kwesiblack/image/upload/v1594328607/assets/banner-sm02_ic7lor.png"
								alt="Generic placeholder"
							/>
							<Media.Body className="py-4 px-2">
                            <h5 className="mb-2"><span className="font-weight-light">Top Rated</span><br/>Gadgets<br/><span className="font-weight-light">are on </span>Sale</h5>
                            <div className="text-warning font-size-sm">Shop now<i className="czi-arrow-right font-size-xs ml-1"></i></div>
							</Media.Body>
						</Media>
						<div className="py-2"></div>
						<Media className="bg-faded-warning  rounded-lg">
							<img
								width={125}
								height={152}
								className="mr-3"
								src="https://res.cloudinary.com/kwesiblack/image/upload/v1594328607/assets/banner-sm01_t8dfy4.png"
								alt="Generic placeholder"
							/>
							<Media.Body className="py-4 px-2">
                            <h5 className="mb-2"><span className="font-weight-light">Next Gen</span><br/>Video <span className="font-weight-light">with</span><br/>360 Cam</h5>
                            <div className="text-info font-size-sm">Shop now<i className="czi-arrow-right font-size-xs ml-1"></i></div>
							</Media.Body>
						</Media>
						<div className="py-2"></div>
						<Media className="bg-faded-success rounded-lg">
							<img
								width={125}
								height={152}
								className="mr-3"
								src="https://res.cloudinary.com/kwesiblack/image/upload/v1594328606/assets/banner-sm03_zspnev.png"
								alt="Generic placeholder"
							/>
							<Media.Body className="py-4 px-2">
                            <h5 className="mb-2"><span className="font-weight-light">Catch Big</span><br/>Deals <span className="font-weight-light">on</span><br/>Earbuds</h5>
                            <div className="text-success font-size-sm">Shop now<i className="czi-arrow-right font-size-xs ml-1"></i></div>
							</Media.Body>
						</Media>
					</div>
				</div>
			</div>
		</div>
        <div className = "container">
			<div className = "row border-bottom ">
            <div className = "h4 font-weight-bold     pt-5 col-md-4 mr-2  ">Trending products</div>
            <div className=" col-md-4  pt-5 ml-auto  d-flex pb-4  justify-content-end" > <Button variant="outline-primary"> <Link to="/products">More Products</Link></Button></div>
			</div>
			
			<div className = "pt-5 "><Trending /></div>
        </div>
        </div>
		<div>
			{/* <Footer/> */}
		</div>
		</div>  
        
	);
}

export default Home;
