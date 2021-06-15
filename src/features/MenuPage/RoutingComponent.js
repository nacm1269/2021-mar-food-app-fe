import React from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Starters from "./MenuCourses/Starters/Starters";
import Mains from "./MenuCourses/Mains/Mains";
import Desserts from "./MenuCourses/Desserts/Desserts";
import Refreshments from "./MenuCourses/Refreshments/Refreshments";
import MenuCourses from "./MenuCourses/MenuCourses";

class RoutingComponent extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/*<Route exact path="/" component={ Home } />*/}
                    <Route path="/menuCourses" component={ MenuCourses } />
                    <Route path="/starters" component={ Starters } />
                    <Route path="/mains" component={ Mains } />
                    <Route path="/desserts" component={ Desserts } />
                    <Route path="/refreshments" component={ Refreshments } />
                    {/*<Route component={ NotFound } />*/}
                </Switch>
            </Router>
        )
    }
}

export default RoutingComponent