import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';


import {PeoplePage} from "./pages/PeoplePage";
import {PlanetsPage} from "./pages/PlanetsPage";
import {NotFound} from "./components/common/NotFound";
import {Header} from "./components/Header";
import {Routes} from "./helpers/Routes";
import {StarshipPage} from "./pages/StarshipPage";

export const App = (props) => {
  const {location} = props;
  return (<>
    <Header/>
    <Switch location={location}>
      <Route exact path="/">
        <Redirect to={Routes.planets}/>
      </Route>
      <Route exact={true} path={Routes.people} component={PeoplePage}/>
      <Route exact={true} path={Routes.planets} component={PlanetsPage}/>
      <Route exact={true} path={Routes.starShip} component={StarshipPage}/>
      <Route path={'*'} component={NotFound}>

      </Route>
    </Switch></>)

}

