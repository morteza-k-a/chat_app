import { Component ,React} from "react";
import {Grid,Paper,Button,TextField} from "@material-ui/core";
import "./join.css"
class Join extends Component{
	
    constructor(props){
        super(props);
        this.state = {name:undefined,room:undefined}
    }
    Join_room = ()=>{
        this.props.history.push({
           pathname: "/room",  
            room: this.state.room,
            name: this.state.name
          });

    }
    render(){
        return(<div className={"field_container"}>
            <Paper  className="Paper_style" elevation={3}>
                <Grid className="Grid_style" item container direction={"column"}>
                    <TextField style={{margin:".5rem"}} id={"name_inp"} value={this.state.name} onChange={e=>{this.setState({name:e.target.value,room:this.state.room})}} label={"name"}/>
                    <TextField style={{margin:".5rem"}} id={"room_inp"} value={this.state.room}  onChange={e=>{this.setState({name:this.state.name,room:e.target.value})}} label={"room id"}/>
                    <Button style={{margin:"0.5rem"}} variant="contained" color="primary" onClick={this.Join_room}>
                        Join room
                    </Button>
                </Grid>
        </Paper>
        </div>)
    }

}

export default Join;

