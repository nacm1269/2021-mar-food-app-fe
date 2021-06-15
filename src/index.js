import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from "react-router-dom";
import MenuCourses from "./features/MenuPage/MenuCourses/MenuCourses";
import Starters from "./features/MenuPage/MenuCourses/Starters/Starters";
import Mains from "./features/MenuPage/MenuCourses/Mains/Mains";
import Desserts from "./features/MenuPage/MenuCourses/Desserts/Desserts";
import Refreshments from "./features/MenuPage/MenuCourses/Refreshments/Refreshments";


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <MenuCourses>
              <Route path="/starters" component={Starters}/>
              <Route path="/mains" component={Mains}/>
              <Route path="/desserts" component={Desserts}/>
              <Route path="/refreshments" component={Refreshments}/>
          </MenuCourses>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
