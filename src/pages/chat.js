import {React,useState,useEffect} from "react";
import {Paper,Button,TextField} from "@material-ui/core";
import socketIOClient from "socket.io-client";
import Chatbox from "./Chatbox.js"
import "./chat.css";

const ENDPOINT = "http://192.168.1.4:3001/";

let socket = undefined;
const Chat = props=>{
//const [msgs,setmsgs] = useState([{message:"some text",sender:"Elon Musk",self:true},{message:"some text",sender:"Bill Gates",self:false}]);
const [msgs,setmsgs] = useState([]);
const emt = ()=>{
  const inp = document.getElementById("message_inp");
  const txt = inp.value;
  const newmsgdata = {message:txt,sender:props.location.name,self:true};
  inp.value = "";
  inp.focus();
  // here we emit the data to server
  socket.emit("chat message", {
    message: txt,
    room: props.location.room,
    name: props.location.name,
  });
  // re-render
  setmsgs(msgs.concat(newmsgdata));
}

const HandleEnter = e=>{
  if(e.key==="Enter")
	emt()
}

useEffect(()=>{
  socket = socketIOClient(ENDPOINT);
   socket.emit("subscribe", props.location.room);
   socket.on("chat message", (msg) => {
     const dataToAdd = {message:msg.message,sender:msg.name,self:false}
     console.log("data received")
        setmsgs(m=>m.concat(dataToAdd));
      });
},[props.location.room])

return(

      <div style={{ height: "100%" }}>
        <div className="_head">
          <h2>{"room : "+props.location.room}</h2>
        </div>
<Chatbox data={msgs}/>        
<Paper className="_foot">
        <div className="mcontainer">
 <TextField onKeyPress={HandleEnter} style={{marginTop:".5rem"}} className="msg_inp" id="message_inp" type="text" />
          <Button style={{margin:".5rem"}} variant="contained" color="primary" className="send_btn" onClick={emt}>
            Send
          </Button>
        </div>
</Paper>
      </div>
)
}

export default Chat;