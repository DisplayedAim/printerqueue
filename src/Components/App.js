import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import FileDashboard from "./FileDashboard";
import Empty from "./Empty";
import {BrowserRouter,Route,Switch} from "react-router-dom";
class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <React.Fragment>
                <main>
                    <Header />
                    <Sidebar />
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/files" exact component={FileDashboard}/>
                        <Route path="/folder" exact component={Empty}/>
                        <Route path="/message" exact component={Empty}/>
                        <Route path="/shapes" exact component={Empty}/>
                    </Switch>
                </main>
            </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;