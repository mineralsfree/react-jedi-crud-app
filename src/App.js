import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/navbar/NavBar";
import PeoplePage, {addPeople} from "./components/pages/PeoplePage";
import PlanetsPage from "./components/pages/PlanetsPage";
import StarshipsPage from "./components/pages/StarshipsPage";
import NotFound from "./components/pages/NotFound";
import {PeopleEditPage} from "./components/pages/PeopleEditPage";
import {PlanetsEditPage} from "./components/pages/PlanetsEditPage";
import ReactJoiValidations from 'react-joi-validation'
import Joi from 'joi-browser'
ReactJoiValidations.setJoi(Joi);

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route path="/people/edit/:id/"
                 component={PeopleEditPage}/>
          <Route path="/people/new/"
                 isEdit={true}
                 component={PeopleEditPage}/>
          <Route path="/people"
                 exact={true}
                 component={PeoplePage}/>
          <Route path="/planets/edit/:id/"
                 component={PlanetsEditPage}/>
          <Route path="/planets" component={PlanetsPage}/>
          <Route path="/starships" component={StarshipsPage}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect exact from="/" to="/people" component={PeoplePage}/>
          <Redirect to="/not-found"/>
        </Switch>
      </div>
    </>
  );
}

export default App;
