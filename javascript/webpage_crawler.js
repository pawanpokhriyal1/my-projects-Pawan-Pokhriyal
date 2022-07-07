let str='google'
let a= document.links;

for(i in Array.from(a)){
    if(a[i].href.includes(str)){
        console.log(a[i].href);
    }
};