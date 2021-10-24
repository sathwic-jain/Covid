// function foo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(("hi")),5000);
//     })
// }
// async function compute(){
//     var res= await foo();
//     console.log(res);
// }
// compute();

//
//
//
//
//now for the same one we did in multipleapi but simpler
//
//
//
//

// let cc;
// let resturi='https://restcountries.com/v2/all'
// async function foo(){
//     let rescont=await fetch(resturi);//return is promise,but the data is in the form of readable stream
//     //console.log(rescont);
//     let rescontdata=await rescont.json();
//     //console.log(rescontdata);
//     cc=rescontdata[0].name;
//     let openweath=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=7c6154474af444ea699e82168468588d`)
//     //console.log(openweath);
//     let openweathdata=await openweath.json();
//     //console.log(openweathdata);
//     console.log(`${cc}:${openweathdata.main.temp}`);
// }
// foo();


var countname=document.createElement('input');
countname.setAttribute('type','text');
countname.setAttribute('id','countname')
countname.setAttribute('name','text')

var button=document.createElement('button');
button.style.margin="10px";
button.innerHTML="click me";
button.style.fontSize="20px";
button.addEventListener('click',display);
document.body.append(countname,button);


async function display(){
    var name=document.getElementById('countname').value;
    console.log(name);
    
    let data=await fetch(`https://api.covid19api.com/dayone/country/${name}`);
    let dispdata=await data.json();
    console.log(dispdata);
    for(var i in dispdata){
        console.log(`${name}:${dispdata[i].Confirmed},${dispdata[i].Date},${dispdata[i].Deaths},${dispdata[i].Recovered}`)
        var div=document.createElement('div');
        div.innerHTML=`Date:${dispdata[i].Date} , Confirmed case:${dispdata[i].Confirmed} , Deaths:${dispdata[i].Deaths} , Recovered:${dispdata[i].Recovered}`;
    document.body.append(div);
    }

    
}