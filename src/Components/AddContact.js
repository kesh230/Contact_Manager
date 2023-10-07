import React from "react";
class AddContact extends React.Component{
  state={
    name:"" ,
    email:""
  };
  add =(e)=>{
       e.preventDefault();
       if(this.state.name==="" && this.state.email===""){
        alert("all fields are mandatory");
        return 
       }
       this.props.addcontact(this.state);
       this.setState({name:"",email:""});

  }
  
    render(){
        return(
          <div>
        <div className="ui main">
        <h2 style={{margin:"40px"}}> Add Contacts </h2>
        <form className="ui form" style={{margin:"-30px 0px 0px 0px",}} onSubmit={this.add}>
            <div className="field">
                <label>Name:
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>{
                  this.setState({name:e.target.value})
                }} />
                </label>
            </div>
            <div className="field">
                <label>Email:
                 <input type="text" name="Email" value={this.state.email} placeholder="Email" onChange={(e)=>{
                  this.setState({email:e.target.value})
                 }} />
               </label>
            </div>
            <button className="ui button blue">Add</button>
        </form>
      </div>
      </div>
        );
    }
}
export default AddContact;