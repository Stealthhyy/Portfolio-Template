import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

// Font awesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

// Stand alone components
import Header from "./components/Header";

// Nav page components
import Projects from "./components/pages/Projects";

// Project components
import ExampleProject from "./components/projects/ExampleProject";
import UntamedProject from "./components/projects/UntamedProject";
import SGEProject from "./components/projects/SGEProject";
import DoorNineProject from "./components/projects/DoorNineProject";
import SAMProject from "./components/projects/SAMProject";
import StripeProject from "./components/projects/StripeProject";

// Font awesome setup
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);

export default function App() {
  return (
    <Router>
      <Container fluid className="main">

        {/* Adds page header to all pages */}
        <Header />

        <Container>
          <Row className="justify-content-center">
            {/* Registers route listeners */}
            <Switch>
              <Route path="/" exact component={() => <Projects />} />
              <Route path="/projects" exact component={() => <Projects />} />

              {/* Projects */}
              <Route path="/projects/untamed" exact component={() => <UntamedProject />} />
              <Route path="/projects/sge" exact component={() => <SGEProject />} />
              <Route path="/projects/door9" exact component={() => <DoorNineProject />} />
              <Route path="/projects/server-auth-movement" exact component={() => <SAMProject />} />
              <Route path="/projects/stripe" exact component={() => <StripeProject />} />

            </Switch>
          </Row>
        </Container>

      </Container>
    </Router>
  );
}
