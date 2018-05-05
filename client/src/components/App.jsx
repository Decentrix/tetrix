import React, { Component } from 'react';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import MainContainer from './MainContainer.jsx';
import source from '../../assets/sourceObject';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalCode: source.origContract,
      optimizedCode: source.optContract,
      orgCost: source.origCost,
      optCost: source.optCost,
      difference: source.difference
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
            <Header />
            <MainContainer />
            {/* <Navigation orgCode={this.state.originalCode} optCode={this.state.optimizedCode} orgCost={this.state.orgCost} optCost={this.state.optCost} />
            <Main /> */}
            {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;