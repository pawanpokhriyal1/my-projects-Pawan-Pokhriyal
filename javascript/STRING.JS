console.log("string methods and properties");

//charAt(pos)
var myString = 'JAVASCRIPT !!!';
console.log(myString.charAt(0));
console.log(myString.charAt(1));
console.log(myString.charAt(2));
console.log(myString.charAt(3));
console.log(myString.charAt(4));
console.log(myString.charAt(5));


//concat (p1,p2)

var str1="javascript";
var str2=" is awesome";
console.log(str1.concat(str2," i "," am learning it"));


//indexOf(substr,[start_from])

var str3="i want to be web developer";
console.log(str3.indexOf("want"));
console.log(str3.indexOf("was"));

//lastindexof(substr,[start_from])

var yourString='web dev and web designing';
console.log(yourString.lastIndexOf('d'));

//slice(start,[end])
var text="programming";
console.log(text.slice(0,));
var mystr4=text.slice(0,4);
console.log(mystr4);

//split(delimiter,limit)

var txt="a,b,c,d,e,f,g";
console.log(txt.split(","));

//substring(from,[to])

var myString5='javascript programming';
console.log(myString5.substring(2,12));
myStr6=myString5.substring(5,15);
console.log(myStr6);

//toLowercase()

var mycase='JAVASCRIPT';
mycase=mycase.toLowerCase();
console.log(mycase);

//toUppercase()
var mycase_1='web development';
mycase_1=mycase_1.toUpperCase();
console.log(mycase_1);

//search("str")
var str="welcome to programming world!!";
var pos=str.search("programming");
console.log(pos);

//Substr() method

var my_str="apple,banana,kiwi,mango";
console.log(my_str.substr(6,8));


//javascript tempelate literal

let fruit1='orange\'';
let fruit2='Apple';
let myHtml=`hello ${str}
           <h1>This is "my heading" </h1>
           <p>you like ${fruit1} and ${fruit2}</p>`;
console.log(myHtml);



