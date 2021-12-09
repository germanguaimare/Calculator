import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Home = () => {
	return (
		<Fragment>
			<Container
				className="d-flex flex-column justify-content-center"
				id="calcSpace">
				<Container id="screenSpace" className="gx-0">
					<div id="screen1">
						<p>Here it show what you typed</p>
					</div>
					<div id="screen2">
						<p>Here it shows the results</p>
					</div>
				</Container>
				<Container id="buttonSpace" className="align-items-center">
					<Button color="dark" size="lg">
						7
					</Button>
					<Button color="dark" size="lg">
						8
					</Button>
					<Button color="dark" size="lg">
						9
					</Button>
					<Button color="dark" size="lg">
						%
					</Button>
					<Button color="dark" size="lg">
						4
					</Button>
					<Button color="dark" size="lg">
						5
					</Button>
					<Button color="dark" size="lg">
						6
					</Button>
					<Button color="dark" size="lg">
						X
					</Button>
					<Button color="dark" size="lg">
						1
					</Button>
					<Button color="dark" size="lg">
						2
					</Button>
					<Button color="dark" size="lg">
						3
					</Button>
					<Button color="dark" size="lg">
						-
					</Button>
					<Button color="dark" size="lg">
						0
					</Button>
					<Button color="dark" size="lg">
						.
					</Button>
					<Button color="dark" size="lg">
						+
					</Button>
					<Button color="dark" size="lg">
						=
					</Button>
				</Container>
			</Container>
		</Fragment>
	);
};

export default Home;
