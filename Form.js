import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            movieName : '',
            theaterName :'',
            showTiming : '',
            numberofSeats :1
        };
       
        this.state = this.initialState;
    }

    handleMovieChange = event => {   
        const { name, value } = event.target;
        if(value !== -1){
           this.initialState.movieName = name;
           this.setState({movieName:name, theaterName :'',
           showTiming : '',
           numberofSeats :1});
        }

    }
    

    handleTheaterChange = event => {
        const { name, value } = event.target;
        if(value !== -1){
         this.initialState.theaterName = name;
         this.setState({theaterName :name,
           showTiming : '',
           numberofSeats :1});
 
        }   
    }

    handleSeatsCountChange = event =>{
        const { value } = event.target;        
         this.initialState.numberofSeats = value;  
         this.setState({
            numberofSeats :value});   
    }

    handleTimeChange = event =>{
        const { value } = event.target;        
         this.initialState.showTiming = value;
         document.getElementsByClassName ("btn btnSecondary selected").className="btn btn-secondary";
         event.target.className = event.target.className  + " selected";
         this.setState({showTiming : value,
            numberofSeats :1});   
    }
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        // eslint-disable-next-line
        const { name, job } = this.state;

        return (

            <form onSubmit={this.onFormSubmit}>
                <div className="row">
                <div className="col-sm-12">
                    <select onChange={this.handleMovieChange}>
                        <option value="-1">Select Movie</option>
                        <option value="100">Avengers</option>
                        <option value="101">Spiderman</option>
                        <option value="102">Ironman</option>
                        <option value="103">Thor</option>
                    </select>
                </div>
                <div className="col-sm-12 theater">
                    <select onChange={this.handleTheatreChange}>
                        <option value="-1">Select Theatre</option>
                        <option value="100">PVR</option>
                        <option value="101">Inox</option>
                        <option value="102">Gopalan</option>
                        <option value="103">Central</option>
                    </select>
                </div>
                <div className="col-sm-12 timing">
                    <label>Select Timings</label>
                    <div className="row btn-group timeGroupButton" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" onClick={this.handleTimeChange}>11 : 00 AM</button>
                        <button type="button" className="btn btn-secondary" onClick = {this.handleTimeChange}>02 : 00 PM</button>
                        <button type="button" className="btn btn-secondary" onClick = {this.handleTimeChange}>04 : 30 PM</button>
                        <button type="button" className="btn btn-secondary" onClick = {this.handleTimeChange}>06 : 45 PM</button>
                        <button type="button" className="btn btn-secondary" onClick = {this.handleTimeChange}>08 : 00 PM</button>
                        <button type="button" className="btn btn-secondary" onClick = {this.handleTimeChange}>10 : 00 PM</button>
                    </div>
                </div>
                <div className="col-sm-12 seats">
                    <label>Select number of seats</label>
                    <select onChange={this.handleSeatsCountChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div className="col-sm-12 submit">
                    <button type="submit">
                        Confirm
                    </button>
                </div>
                </div>
            </form>
          
        );
    }
}

export default Form;
