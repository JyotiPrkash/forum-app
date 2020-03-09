import React, { Component } from 'react'
import forum from './forum';
import {withRouter, Link} from 'react-router-dom'
class Home extends Component {
    constructor(props){
        super(props); 
        this.redirectToPage = this.redirectToPage.bind(this)
    }
    redirectToPage(){
        console.log(this.props)
        this.props.history.push('/forum')
    }

    render() {
        return (
            <div className="home-div">
              <div className="row" style={{marginRight:'0px'}}>
                <div className="col-sm-12 home-body">
                    <p className="home-pri-text">Welcome to Forum for Ideas!</p>
                    <p className="home-sub-text">put up your thoughts here. Share your Ideas. Let the world know, how it is. Get engaged with people ideas. Collab!</p>
                    <p className="home-sub-text">Get the perfect brainstorming done. Ideas can be carved into something great, only after proper execution. So find your execution buddy here</p>
                    <p className="home-sub-text">Enough Talk, Now let's get things</p>
                    <div className="backdrop shibuya">
                        <p onClick={this.redirectToPage} className="text shibuya">
                          <span className="done-text">DONE</span>
                        </p>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}
 
export default withRouter(Home) 