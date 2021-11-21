import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "../components/header/Header";
import CertificatesScreen from "../screens/certificatesScreen/CertificatesScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import NowScreen from "../screens/nowScreen/NowScreen";
import ProjectsScreen from "../screens/projectsScreen/ProjectsScreen";
import ResumeScreen from "../screens/resumeScreen/ResumeScreen";
import TalkScreen from "../screens/talkScreen/TalkScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const AppRouter = () => {

  return (
    <Router>

      <Header>
        
        <Switch>
          <Route path="/about">
            <AboutScreen />
          </Route>
          <Route path="/certificates">
            <CertificatesScreen />
          </Route>
          <Route path="/resume">
            <ResumeScreen />
          </Route>
          <Route path="/projects">
            <ProjectsScreen />
          </Route>
          <Route path="/talk">
            <TalkScreen />
          </Route>
          <Route path="/now">
            <NowScreen />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      
      </Header>
    
    </Router>
  );

}

export default AppRouter;