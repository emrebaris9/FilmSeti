import React, { Component } from 'react';
import News from './News' 
import Sidenews from './Sidenews'



class Haberler extends Component {
  constructor(props){
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=wsj.com,nytimes.com'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com'
      }
      
    }
  }
  render() {
    return (
      <div className="container">
        <div className="navbar-fixed">
         <h3>Haberler</h3>
        </div>
        <div className="row">
          <div className="col s2">
            <News news={this.state.news1}/>
            <News news={this.state.news2}/>
          </div>
          <div className= "col s4">
            <Sidenews news={this.state.news3}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Haberler;