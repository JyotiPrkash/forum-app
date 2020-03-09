import React, { Component } from 'react'
class Forum extends Component {
    
    constructor(props){
        super(props); 
        this.state = {
            posts:[],
            newPostTitle:"",
            newPostBody:""
        }

        this.publish = this.publish.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getAllPosts();


    }

    handleChange({ target }) {
        this.setState({
          [target.name]: target.value
        });
    }
    
    publish() {
        console.log( this.state );
    }

    getAllPosts = async(e)=>{
        const data = await fetch('http://localhost:3001/api/all')
                            .then(res => res.json())
                            .catch(err => err)

        const posts_data=  await data
        this.setState({
            posts:posts_data.data
        })
        console.log(this.state.posts)
    }

    addNewPost = () =>{
        console.log(this.state);
        const newPost = fetch('http://localhost:3001/api/new', {
                            method: 'POST',
                            headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                postBody: this.state.newPostBody,
                                postTitle:this.state.newPostTitle
                            })
                        })
                        .then(
                            this.setState({
                                newPostTitle:'',
                                newPostBody:''
                            })
                        )
                        .catch(err => err)

    }

    render() {
        return (
            <div className="div">
            <h1 className="display-4">Forum</h1>
                       
            <div className="container">
                <div className="row">
                <p>Posts : </p>
                    <div className="col-sm-12 forum-posts">
                        
                        <div className="row">  
                            {this.state.posts.map(posts => ( 
                                <div className="col-sm-10 news-class">
                                    <div className="Newsdiv" key={posts._id}>
                                        <p className="post-title">{posts.title}</p>   
                                        <p className="post-body">{posts.body}</p>                    
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-sm-12 newPost">
                        <p>New Post : </p>
                        <input type="text" name="newPostTitle" value={this.state.newPostTitle} onChange={this.handleChange} className="col-sm-10 form-control new-title-input"/>
                        <input type="text" name="newPostBody" value={this.state.newPostBody} onChange={this.handleChange} className="col-sm-10 form-control new-post-input"/>
                        <br/>
                        
                        <input type="button" onClick={this.addNewPost} value="Add New Post" className="col-sm-4 btn btn-primary"/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
 
export default Forum 