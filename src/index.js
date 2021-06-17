import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css'
import {Route, BrowserRouter as Router} from "react-router-dom";
import MenuCourses from "./features/MenuPage/MenuCourses/MenuCourses";
import Starters from "./features/MenuPage/MenuCourses/Starters/Starters";
import Mains from "./features/MenuPage/MenuCourses/Mains/Mains";
import Desserts from "./features/MenuPage/MenuCourses/Desserts/Desserts";
import Refreshments from "./features/MenuPage/MenuCourses/Refreshments/Refreshments";
import OrderForm from "./features/FormPage/OrderForm/OrderForm";
import LandingPage from "./features/LandingPage/LandingPage";
import ReviewOrderItems from "./features/SubmitOrderPage/ReviewOrderItems/ReviewOrderItems";
import EditQuantity from "./features/SubmitOrderPage/EditQuantity/EditQuantity";


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/formpage" component={OrderForm}/>
          <Route exact path="/menu" component={MenuCourses}/>
          <Route exact path="/starters" component={Starters}/>
          <Route exact path="/mains" component={Mains}/>
          <Route exact path="/desserts" component={Desserts}/>
          <Route exact path="/refreshments" component={Refreshments}/>
          <Route exact path="/reviewOrder" component={ReviewOrderItems}/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
