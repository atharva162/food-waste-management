import React, { Component } from 'react';
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CircularProgress from '@material-ui/core/CircularProgress';

const Post = props => (
    <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto" style={{zIndex: 1}}>
        <Link to={'/connect/'+props.post._id} style={{color: "inherit" }}>
    <div className="card">
      <img src={props.post.image || 'data:image/png;base64,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'} className="card-img img-fluid"></img>
      <div className="card-body">
        <h4 className="card-title" style={{color: "inherit" }}>{props.post.title}</h4>
     </div>
    </div>
    </Link>
  </div>
)

export class postslist extends Component {
    constructor(props){
        super(props);
        this.state = {posts: [], isLoading: true};
    }
    componentDidMount(){
        axios.get('https://medisocial.herokuapp.com/posts/').then(response =>{
        this.setState({posts: response.data,isLoading: false});  
        }).catch((error)=>{
            console.log(error);
        })
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
           console.log(foundUser);
        }else{
            window.location='/home';
        }
    }
        postList(){
            return this.state.posts.map(currentPost=>{
                return <Post post={currentPost} key={currentPost._id}/>
            })
        }
    render() {
        return (
            <>
      <Fab color="secondary" aria-label="add" style={{ 
         position: 'fixed',
         zIndex: 2,
         bottom: 0,
         left: '44%',
         margin: '0 auto',
        }}>
          <Link to="/create"><AddIcon /></Link>
      </Fab>
           <Card>
           <CardContent>
           <Typography variant="body2" component="p">
            <Link to="/shops" style={{color: "inherit" }}>
            See all restaurants and NGOs registered in the application
            </Link>
           </Typography>
           </CardContent>
           </Card>
           <hr/> 
           <Card>
           <CardContent>
           <Typography variant="body2" component="p">
            All leftover foods <ArrowDownwardIcon color="primary"/>, click on the post to see its details and to connect with the restaurant
           </Typography>
           </CardContent>
           </Card>
            <div className="row">
               {this.state.isLoading? <div className="justify-content-md-center"><CircularProgress/></div>: this.postList() }
            </div>
            </>
        )
    }
}

export default postslist
