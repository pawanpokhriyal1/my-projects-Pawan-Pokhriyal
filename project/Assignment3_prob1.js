class restaurantManager{
    list=[];
    name=[];
    // findbycity;

    

    constructor(restaurantList,myname){
        this.list=restaurantList;
        this.name=myname;
        // this.findbycity=cityname;
        
    }
    



    printAllRestaurantNames(){
        
        for(var i=0;i<this.list.length;i++){
        this.name.push(this.list[i].Name);
        
    }
    console.log(this.name);

    };


    // filterRestaurantByCity(){
    //         let restauname;
    //         for(let i=0;i<this.list.length;i++){
    //             if(this.List[i].city===$(this.findbycity)){
    //                 restauname=this.List[i].Name;
    //             }
    
    //         }
    //         return restauname;
        


    // }
        
}
let myname=[];


let restaurantList=[{Name : 'PunjabiTadka', Address:'Gopalganj' ,city:'mohali'},
        {Name : 'familycafe', Address:'Dariyaganj' ,city:'shimla'},
        {Name : 'kotchulla', Address:'Bakerstreet' ,city:'Goa'},
        {Name : 'Thalaivacafe', Address:'rangarajstreet' ,city:'chennai'},
        {Name : 'shahikitchen', Address:'Miyabazar' ,city:'hyedarabad' }];





        
function filterRestaurantByCity(name){
    let restauname;
    for(let i=0;i<restaurantList.length;i++){
        if(restaurantList[i].city===name){
            restauname=restaurantList[i].Name;
        }
    }
    console.log(restauname);


 }







let restauinfo= new restaurantManager(restaurantList,myname);

restauinfo.printAllRestaurantNames();

filterRestaurantByCity('chennai');






















// class restaurantManager{
//     restaurantList=[];
//     restaurantList=[{Name : 'PunjabiTadka', Address:'Gopalganj' ,city:'mohali'},
//         {Name : 'familycafe', Address:'Dariyaganj' ,city:'shimla'},
//         {Name : 'kotchulla', Address:'Bakerstreet' ,city:'Goa'},
//         {Name : 'Thalaivacafe', Address:'rangarajstreet' ,city:'chennai'},
//         {Name : 'shahikitchen', Address:'Miyabazar' ,city:'hyedarabad' }];

//     restaurantList= newobject;
    
//     printAllRestaurantNames(){
//         console.log(newobject.Name);

//     }

// }
// let restauinfo= new restaurantManager;
// restauinfo.printAllRestaurantNames();