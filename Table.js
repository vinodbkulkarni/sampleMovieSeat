import React, { Component } from 'react';
import ServiceProvider from "./svc/serviceProvider.js";

const  MovieClassEnum = {
 Classic : 1,
 Prime :2,
 properties: {
    1: {name: "Classic", price: 150},
    2: {name: "Prime", price: 250}
 }
};

const TableHeader = () => { 
    return (
        <thead>
           
        </thead>
    );
}

const TableBody = props => { 
    const maxColumns =22;
    const classicRows = props.rows.filter((row, index)=> MovieClassEnum.properties[1].name === row.type);
    const primeRows =  props.rows.filter((row, index)=> MovieClassEnum.properties[2].name === row.type);
    let rows =[];
    rows.push(<tr>
        <td className="no-seat" colSpan={maxColumns}> Prime Row @ Rs 250</td>
        </tr>);
    const tablePrimeRows = primeRows.reverse().map((row,index) =>{
        return (<tr key={row.rowName + index}>
         <td className ="no-seat">{row.rowName}</td>
         <Seats rowName ={row.rowName} rowSeatCapacity = {row.capacity} maxSeats= {maxColumns} 
         seatClick ={props.seatClick} bookedSeats = {props.bookedSeats}                
         numberofSeats = {props.numberofSeats}></Seats>
        {// <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
        }
     </tr> 
     )});
     rows.push(tablePrimeRows);
     rows.push(<tr>
         <td className="no-seat" colSpan={maxColumns}> Classic Row @ Rs 150</td>
         </tr>);
     rows.push(classicRows.reverse().map((row, index) => {
        return (
            <tr key={index}>
                <td className="no-seat">{row.rowName}</td>
                <Seats rowName ={row.rowName} rowSeatCapacity = {row.capacity} maxSeats= {maxColumns}
                seatClick ={props.seatClick} bookedSeats = {props.bookedSeats} 
                numberofSeats = {props.numberofSeats} ></Seats>
               {// <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
               }         1
            </tr>
        );
    }));
    
    return <tbody>{rows}</tbody>;
}

const Seats = props =>{
    let seats =[];
    let {filledSeats} = props.rowName ? props.bookedSeats.find(({rowName}) =>rowName === props.rowName) :[];
   for(let i =0; i< props.maxSeats;i++)
   {
       if(i < props.rowSeatCapacity && i!==15){
       let classValue = filledSeats && filledSeats.indexOf(i+1) >=0? "seatsUnAvailable":"seatAvailable";
       let emptySeat = classValue === "seatAvailable" ;
          
       const onClickFunction = (event)=>(emptySeat ? 
       props.seatClick(event,props.rowName, i+1, props.numberofSeats):void(0));
        seats.push(<td key={props.rowName+i.toString()} onClick={onClickFunction} >
            <div className ={classValue} id={props.rowName+(i+1).toString()} ></div>
        </td>);
       }
        else{
            seats.push(<td className ="no-seat" key={props.rowName+i.toString()} >
                <div className ="no-seat"></div>
            </td>);
        }
   }
   return seats;
}

class Table extends Component {

          render() {
     
        const rows =[{rowName:"A", capacity:"14", type:"Classic"},
        {rowName:"B", capacity:"15", "type":"Classic"},
        {rowName:"C", capacity:"15", "type":"Classic"},
        {rowName:"D", capacity:"15", "type":"Prime"},
        {rowName:"E", capacity:"15", "type":"Prime"},
        {rowName:"F", capacity:"16", "type":"Prime"},
        {rowName:"G", capacity:"16", "type":"Prime"},
        {rowName:"H", capacity:"16", "type":"Prime"},
        {rowName:"I", capacity:"16", "type":"Prime"},
        {rowName:"J", capacity:"19", "type":"Prime"},
        {rowName:"K", capacity:"19", "type":"Prime"},
        {rowName:"L", capacity:"20", "type":"Prime"},
        {rowName:"M", capacity:"20", "type":"Prime"}
        ];
         const totalSeats = rows.reduce((accumulator, rowSeatCount) => accumulator + rowSeatCount);
         let bookedSeats = new Array(totalSeats);
         bookedSeats =  ServiceProvider.random_seats(rows);
        return (
            <table>
                <TableHeader />
                <TableBody rows={rows} numberofSeats={this.props.numberofSeats} bookedSeats = {bookedSeats} 
                seatClick={this.props.seatClick}/>
            </table>
        );
    }

    

}

export default Table;


