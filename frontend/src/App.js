import React, {Component} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ReadablePage from "./components/readable-page/Readable.page";
import {Switch, Route, Redirect} from 'react-router-dom';
import CreateEditPage from "./components/create-edit-page/CreateEdit.page";
import DetailPage from "./components/detail-page/Detail.page";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <main className="App__main container">
                    <Switch>
                        <Route exact path="/" component={ReadablePage}/>
                        <Route exact path="/create" component={CreateEditPage}/>
                        <Route exact path="/edit" component={CreateEditPage}/>
                        <Route exact path="/post/:id" component={DetailPage}/>
                        <Redirect  path="**" component={ReadablePage}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
