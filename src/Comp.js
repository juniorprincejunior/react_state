import React, { Component} from 'react'
import logo from './logo.jpg'



export class Comp extends Component {

    
constructor(props) {
    super(props)

    this.state = {
        name : "junior Hervé",
        Bio : "Developpeur",
        imgSrc : logo,
        shows : false,
        time : 0
    }

    
}
/*timing()=>{
    setInterval(() => {
    this.setState({
        time : time +1
    })
    }, 1000)
}*/
//
//this.state.times=()=>this.setState({time:+1})


    render() {
        const cool1=()=>this.setState({shows : !this.state.shows});
        const cool2=()=>{setInterval(() => {
        this.setState({
            time : this.state.time +1
        })
    }, 1000)};
        function cool(){
    
        cool1()
        cool2()
            
            
        }
        return (
            <>
                {
                    this.state.shows ? <img  style={{width: "20%", margin:"0 auto"}} src={this.state.imgSrc} alt="logo" /> : null
                }
                
                <p style = {{textAlign: 'center'}}>Fullname: {this.state.name}</p>
                <p style = {{textAlign: 'center'}}> Bio: {this.state.Bio}</p>
                <button className='btn btn-primary' style={{width: "150px", margin:"auto"}}  onClick={cool} >click me</button>
                <p style = {{textAlign: 'center' , marginTop : '10px'}}>time: {this.state.time}</p>

            </>
        )
    }
}

export default Comp

