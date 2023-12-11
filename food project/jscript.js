// // alert("hi there");


// function fun(){
//     document.getElementById("hi").innerHTML='functionality';
//      // window.print();
//      /*
//      document.write will delete all html contents
//      console.log will print in console
     
//      */
//  }
//  let a={
//     name:"harsh",
//     fun:true
//  }
// a['friend']=true;
// console.log(String(100+23));
// let sum=0;
// for(let v=0;v<=5;v++){
//     sum+=v;
// }
// // console.log(sum);
// let g=3.5;
// console.log(Math.floor(g));
// let h=[2,3,4];
// console.log(h.length);
// let j='raju';
// let k='san\rj\ru';
// console.log(k);
// con=`${j} is a friend of ${k}`;
// console.log()
// //  b="hell";
// //  console.log(typeof (a+b));
// //  console.log(a+b);
// //  console.log(a[h]);
let a=[
    {apple:4,guava:3,lemon:5},
    {green:5,fal:5},
    {apple:6,banana:9}
  ];
  let ele={}
  a.forEach(element=>{
    
    for (let each in element){
      if(Object.keys(ele).some(key=>key===each))ele[each]+=element[each];
    else{
      ele[each]=element[each]
    }
    }}
    );
  
  console.log(ele)
 