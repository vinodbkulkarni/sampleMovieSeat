
const ServiceProvider = {
    
    getShowTiming :function ( movieName, theatreName) {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1";
        const sampleUrl =url; //string.format("http://www.google.com/api/svc?movieName ={0}&theater = {1}",movieName,theatreName);
        let returnData = null;    
        fetch(url)
                .then(result => result.json())
                .then(result => {
                    returnData =  result;
                }).catch(error =>{
                    console.log(error);
                    returnData = null;
                } );
                return returnData;
    },
    
    random_seats :function (items){
        let bookedSeats = items.map((selectedRow,index)=>{
        const numberofSeats = Math.floor(Math.random()*selectedRow.capacity);
        let randomSeats = []
        while(randomSeats.length < numberofSeats){
            var r = Math.floor(Math.random()*selectedRow.capacity)+ 1;
            if(randomSeats.indexOf(r) === -1) randomSeats.push(r);
        }
        return {rowName:selectedRow.rowName, filledSeats:randomSeats, type:selectedRow.type}; 
    });
        return bookedSeats;
    }
};
export default ServiceProvider;
