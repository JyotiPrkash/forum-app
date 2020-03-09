import React, { Component } from 'react'
var moment = require("moment");
class worldNews extends Component {
    constructor(){
        super(); 
        this.getNews()
    }

    state = {
        articles:[]
    }
    getNews = async(e)=>{
    
        const data = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=373c52d41d724fa6b177bcc6c2269422')
        const news_data=  await data.json();
        console.log(news_data);
    
        this.setState({
            articles:news_data.articles
        })
      
    }
    getDateTime(dt){
        var dt_tm = moment(dt).format('YYYY-MM-DD HH:mm');
        return dt_tm;
    }
    render() {
        return (
        <div className="jumbotron">
            <h1 className="display-4">World News</h1>
                       
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">  
                            {this.state.articles.map(articles => ( 
                                <div className="col-sm-6 news-class">
                                    <div className="movieTitle">
                                        <div className="movieCard">
                                            <div className="Newsdiv" key={articles.publishedAt}>
                                                <h4>{articles.title}</h4>
                                                <img className="imgclass" src={articles.urlToImage} alt="news"/>
                                                <p className="articledesc">{articles.description}</p>
                                                <p className="articledesc">{articles.content}</p>
                                                <p className="publish">
                                                   Publised At : {this.getDateTime(articles.publishedAt)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
 
export default worldNews 