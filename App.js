import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        movieName : '',
        theaterName :'',
        showTiming : '',
        numberofSeats :1
    };

    

    handleSubmit = (character) => {
        ReactDOM.render(<Table numberofSeats={character.numberofSeats} seatClick ={this.seatClick}/>, 
            document.getElementsByClassName("col-sm-7")[0]
            );
            this.allocateNumberOfSeats(character.numberofSeats);
//        this.setState((state)=>{numberofSeats: return character.numberofSeats});
          
    }

    allocateNumberOfSeats = (numberofSeats) => {
         let availableSeats = document.getElementsByClassName("seatAvailable");
        for(let i=0;i<numberofSeats;i++)
        {
            availableSeats[i].className = "seatsPossible";
        }
        this.forceUpdate();          
    }
    seatClick = (event,rowName, seatNumber, numberofSeats) => {
        // eslint-disable-next-line 
        let selSeats =document.getElementsByClassName("seatsSelected");
        let seatsPossible = document.getElementsByClassName("seatsPossible");
        if(selSeats.length < numberofSeats)
        {
            event.target.className = "seatsSelected";
            seatsPossible[0].className = "seatAvailable";
            this.forceUpdate();          
        }
        // this.setState({
        //     characters: characters.filter((character, i) => {
        //         return i !== index;
        //     })
        // });
    }

    render() {
        return (
            <div className="container">
               
                <div className="row" >  
                    <div className = "col-sm-3 divider">                 
                        <Form handleSubmit={this.handleSubmit} />
                    </div>                    
                    <div className="col-sm-7 seats divider">
                    
                    </div>
                    <div className="col-sm-2">                        
                            <div className="row legends">
                                <span  className="legendSelected"/>
                               <span>Your Booked Seats</span>
                            </div>
                            <div className="row legends" >
                                <span className="seatsPossible"/><span> Possbile Seat Combinations</span>
                            </div>
                            <div className="row legends">
                                <span className="legendAvailable"/><span> Available Seats</span>
                                </div>
                            <div className ="row legends" >
                                <span className="seatsUnAvailable"/><span>Unavailable Seats</span>
                                </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default App;