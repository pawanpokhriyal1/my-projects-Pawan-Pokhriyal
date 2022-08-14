console.log("This is Assignment 3");

let orderData ={'Below 500': 20,
'500-1000': 29,
'1000-1500': 30,
'1500-2000': 44,
'Above 2000': 76};

let total_Order=0;
let order_prop=0;
for(var i in orderData){
   total_Order=total_Order+orderData[i];
   order_prop++;
   

}
console.log("Total number of orders placed " +" = "+total_Order);
console.log("Total number of order proportions"+" = ",order_prop);

let order_percent;
// let id_index=0;

let getData=Object.entries(orderData);
let value=Object.values(orderData);
let key=Object.keys(orderData);

let str="restaurant : Punjabi Tadka";
// console.log(getData);
// let getkey=Object.keys(orderData);

// for(var i in  orderData){
//   order_percent=(orderData[i]/total_Order)*100;
//   id_index++;
//   console.log('id : '+id_index, ' order : ' +i,'  order percentage : '+order_percent , 'restaurant  :  Punjabi Tadka');
  
// }

// Array.from(getData).forEach(element => {
//   order_percent=(orderData[i]/total_Order)*100;
//   let myarr= {id :index+1,order:Object.keys(orderData), orderpercentage :order_percent,str};

  
// });
// console.log(myarr);
let myarr=[];

for(i=0;i<order_prop;i++){
  order_percent=(value[i]/total_Order)*100;
  myarr.push({'id ':i+1,'order':key[i], 'orderpercentage ':order_percent,str});
  

}
console.log(myarr);
