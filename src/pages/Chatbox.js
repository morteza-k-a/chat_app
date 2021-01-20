import React from "react";
import "./Chatbox.css"
import {animateScroll} from "react-scroll";
import Message from "./message.js"

class Chatbox extends React.Component{
componentDidUpdate(){
animateScroll.scrollToBottom({containerId:"messagediv"})
}
    render(){
        const msgs = this.props.data;
        return(<div id="messagediv" className="_body">
          {
            msgs.map(e=>{
              return(
               <Message name={e.sender} message={e.message} self={e.self}/>
              )
            })
          }
        </div>)
    }
}

export default Chatbox;