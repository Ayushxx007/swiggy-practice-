import React,{Component} from 'react'



class About extends Component {

  constructor(props){
    console.log("constructor has been called");
    super(props);
    this.state = {
      count:0
    }

  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };


  componentDidMount(){
    console.log("component has mounted");

  }

  componentDidUpdate(){
    console.log("component has updated");

  }

  componentWillUnmount(){
    console.log("component has unmounted");
  }



  render(){

    return (
      <div>

       <div>rendering</div>
       <button onClick={this.incrementCount}>click</button>
       <div>{this.state.count}</div>


      </div>
    

    )

  }








}

export default About;

