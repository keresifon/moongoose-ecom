import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

function Slide(props) {
	return (
		<Carousel>
			<Carousel.Item>
				<Container>
					<Row>
						<Col >
            <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-left">
                      <h2 className="font-weight-light pb-1 from-bottom">Check </h2>
                      <h1 className="display-4 from-bottom delay-1">Smartphones</h1>
                      <h5 className="font-weight-light pb-3 from-bottom delay-2"> </h5>
                      <a className="btn btn-primary btn-shadow scale-up delay-4" href="shop-grid-ls.html">Shop Now<i className="czi-arrow-right ml-2 mr-n1"></i></a>
                    </div>
							
						</Col>
						<Col md="auto">
							<img
								className=" "
								src="https://res.cloudinary.com/kwesiblack/image/upload/v1594330738/assets/06_ml8hf9.jpg"
								alt="First slide"
							/>
						</Col>
					</Row>
				</Container>
			</Carousel.Item>
			<Carousel.Item>
				<Container>
					<Row>
						<Col>
            <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-left">
                      <h2 className="font-weight-light pb-1 from-bottom">Exlore </h2>
                      <h1 className="display-4 from-bottom delay-1">VR Collection</h1>
                      <h5 className="font-weight-light pb-3 from-bottom delay-2"> </h5>
                      <a className="btn btn-primary btn-shadow scale-up delay-4" href="shop-grid-ls.html">Shop Now<i className="czi-arrow-right ml-2 mr-n1"></i></a>
                    </div>
						</Col>
						<Col md="auto">
							<img
								className="d-block "
								src="https://res.cloudinary.com/kwesiblack/image/upload/v1594330738/assets/04_xqxich.jpg"
								alt="Third slide"
							/>
						</Col>
					</Row>
				</Container>
			</Carousel.Item>
			<Carousel.Item>
				<Container>
					<Row>
						<Col>
            <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-left">
                      <h2 className="font-weight-light pb-1 from-bottom">Music</h2>
                      <h1 className="display-4 from-bottom delay-1">Headphones</h1>
                      <h5 className="font-weight-light pb-3 from-bottom delay-2"> </h5>
                      <a className="btn btn-primary btn-shadow scale-up delay-4" href="shop-grid-ls.html">Shop Now<i className="czi-arrow-right ml-2 mr-n1"></i></a>
                    </div>
						</Col>
						<Col md="auto">
							<img
								className="d-block "
								src="https://res.cloudinary.com/kwesiblack/image/upload/v1594330737/assets/05_hooumd.jpg"
								alt="Third slide"
							/>
						</Col>
					</Row>
				</Container>
			</Carousel.Item>
		</Carousel>
	);
}

export default Slide;
