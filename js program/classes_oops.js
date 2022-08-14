class Restaurant {
    constructor(givenresName, givenLoc, givenCuizine) {
        this.Restaurant = givenresName;
        this.location = givenLoc;
        this.Cuizine = givenCuizine;
    }
    starter() {
        return `all vaities of starter are available at ${this.Restaurant} situated at location : ${this.location}`;
    }
    spa() {
        return "One time spa facilities is available";
    }      
    

    static fare(p, d) {
        let charge = p * d*1000;
        return "totAL bill is :" + charge;
    }


}

plaza=new Restaurant("STAR PLAZA","JOGIVALA","CONTINENTAL");
console.log(plaza.starter());
console.log(plaza.spa());
console.log(Restaurant.fare(8,4))
console.log(plaza);

class partyArea extends Restaurant {
    constructor(givenresName, givenLoc, givenCuizine, givenDrinks, givenMusic) {
        super(givenresName, givenLoc, givenCuizine)
        this.Drinks = givenDrinks;
        this.Music = givenMusic;
    }
    favouriteMusic(){
        if(this.Music=='english'){
            return "play English Songs";
        }
        else{
            return "play native songs";
        }
        
    }
    static partyCharges(h,p){
        let bill=h*p*200;
        return `party bill is : ${bill}`;
    }

}

Dance_floor=new partyArea("Taj Hotel","Bhanivala","Indian","wine","desi-pop");
console.log(Dance_floor);
console.log(Dance_floor.favouriteMusic())
console.log(partyArea.partyCharges(10,100))