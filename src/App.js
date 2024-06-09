import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SideNav from './components/SideNav';
import Home from './components/Home';
import { WorkOrders, WorkOrderDetails } from './components/WorkOrders';
import { AppWrapper, MainWrapper } from './styles/app';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

const theme = unstable_createMuiStrictModeTheme();

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <SideNav />
        <MainWrapper>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/workOrders">
                <WorkOrders />
              </Route>
              <Route path="/workOrders/:id">
                <WorkOrderDetails />
              </Route>
            </Switch>
          </ThemeProvider>
        </MainWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;