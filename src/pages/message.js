import React from "react";
import "./message.css"
import {Paper,Typography} from '@material-ui/core'

class Message extends React.Component{
// #42a5f5,white -  #66bb6a,white - 
    render(){
        return(<div style={{display:"flex",justifyContent:this.props.self?"end":"start"}}>
            <Paper style={{color:this.props.self?"white":"black",background:this.props.self?"#303f9f":"white"}} className="message_body">
        <Typography variant="h6" className="name">{this.props.name}</Typography>
        <Typography style={{fontFamily:"\"Roboto\",\"Vazir\""}} className="message">{this.props.message}</Typography>
            </Paper>
        </div>)
    }
}

export default Message;