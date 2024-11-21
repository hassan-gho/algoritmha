// ___________________________________________1(1)


let a=6;
let b=2;
let c=7;
let d=4;
if(c+d<a){

    console.log(ac=a*c);
}else{


    console.log(bd=b*d);
}


// ___________________________________________2(2)

// for(let i=2;i<=1000;i+=2){

//     console.log(i);

// }




// ___________________________________________3(3)


// let sum=0;



// for(let i=0; i<=900;i++){


// sum+=i*9;        


// }
// console.log(sum);



// ___________________________________________10(4)


// for(let i=3;i<1000;i++){

//     let dorost=false;



//     for(let m=2;m<i;i++){

//         if(i%m===0 &&m!==i){


//             dorost=true;

//             break;
//         }
//     }


//     if(dorost){

//         console.log(i);

//     }
// }

// ___________________________________________6(5)
// let N=22;
// let sum=0;
// let tb=N;
// while(N!=0){


// sum+=N%10;

// N=  Math.floor(N/10);
// }
// tb%sum===0?

//     console.log("ast"):
//     console.log("nist");

// ___________________________________________7(6)
// function mnadadsahih(m,n){

// let a;
//     if(m>n){

//         a=m;

//         m=n;
//         n=a

//     }
//     for(let i=m;i<=n;i++){

//         if(i%3===0)
//             console.log(i);

//     }
// }

// mnadadsahih(20,60);

// ___________________________________________5(  7)

// let N=5;

// let daramad=60000;

// for(let i=0;i<N;i++){

//     let maliat = daramad;


//     if(maliat<=50000){

//         console.log("moafiat")
//         return;
//     }else if(maliat>=50000&&maliat<=100000){

//         let text=(maliat*10)/100;

//         console.log(text)
//         return;
//     }else if(maliat>100000){


//         let texft1=(maliat*15)/100;


//         console.log(texft1)

//         return;
//     }
// }

// ________________________________________11(8)

// function maghsom(N){


//     let m=0;

//     let sum=0;

//     for(let i=1;i<=N;i++){

//         if(N%i===0&&i%4===0){

//             console.log(i);

//             sum+=i

//             m++;

//         }
//     }

//     console.log(m);
//     console.log(sum);


// }

// maghsom(12);






// _______________________________________________9(9)

// for (let i = 10; i <= 100; i++) {
//     let dahgan = Math.floor(i / 10);
//     let ekan = i % 10;

//     if (dahgan ==  ekan ) { 
//         console.log(i);
//     }
// }


// ___________________________________________________________13(  10  )


// let a=12;
// let b=16;  

// [a,b]=[b,a];

// console.log(a);
// console.log(b);

// ___________________________________________________________24(  11  )

// let pool = 50;

// let c = 0;
// for (let i = 0; i <= Math.floor(pool / 20); i++) {


//     for (let j = 0; j <= Math.floor(pool / 100); j++) {



//         for (let m = 0; m <= Math.floor(pool / 5); m++) {


//             if (i * 20 + j * 100 + m * 5 === pool) {

//                 c++;
//                 console.log(`${c}=20R:${i},100R=${j}  ,5R=${m}`);


//             }


//         }
//     }

// }


// ___________________________________________________________14(  12 )

// let name="hassan";
// let mojoodiA=100000;
// let varisi=[
    
//     {mojoodi:1,taraconesh:50000},
//     {mojoodi:0,taraconesh:20000},
//     {mojoodi:1,taraconesh:30000},
//     {mojoodi:0,taraconesh:10000},

// ];

// varisi.map(varisi =>{

//     if(varisi.mojoodi===1){

//         mojoodiA+=varisi.taraconesh;




//     }else if(varisi.mojoodi===0){

// if(mojoodiA>=varisi.taraconesh){

//     mojoodiA-=varisi.taraconesh;
// }else{

//     console.log("mojoodiat kafi nist");
    
// }
//     }

// });
// console.log(`mojodi=${name}${mojoodiA}`);











// ___________________________________________________________12(  13 )



// const myArr = [];



// for(let i = 1 ; i <= 1000;i++){

//   myArr.push(i);
// }

// function binarySearch(myArr, val) {



//   let shoroo = 0;
//   let paian = myArr.length - 1;

//   while (shoroo <= paian) {
//       let mid = Math.floor((shoroo + paian) / 2);

//       if (myArr[mid] === val) {
//           return mid; 
//       }

//       if (val < myArr[mid]) {
//           paian = mid - 1; 
//       } else {
//           shoroo = mid + 1;
//       }
//   }
//   return -1; 
// }



// const rond = 752;


// const result = binarySearch(myArr, rond);

// if (result === -1) {

//   console.log(rond , "not exist");

// } else {


//   console.log(rond , "founded in " , `${result}th` , "index");
// }


// ___________________________________________________________15(  14 )





// const person=[


//     {name:"hassan",id:1, Ndiplom:2,AGE:16,codRshte:24,gensiat:2},
//     {name:"taranom",id:2, Ndiplom:0,AGE:20,codRshte:24,gensiat:1},
//     {name:"mlis",id:3, Ndiplom:1,AGE:30,codRshte:20,gensiat:1},
//     {name:"ali",id:4, Ndiplom:2,AGE:16,codRshte:22,gensiat:2},
// ]


// const print = []
// for(let element of person){
//     if(element.codRshte === 24 && element.gensiat == 1){
//         print.push({name: element.name , codRshte: element.codRshte})
//     }
// }
// console.log(" students: " , print.length);
// console.log(print);



// for(let element of person){
    

//     if (element.AGE < 18) {
//         print.push({name: element.name , AGE: element.AGE})  
        
//     }
// }
// console.log(" students: " , print.length);
// console.log(print);


// for(let element of person){
//     if(element.codRshte === 24){
//         print.push({name: element.name , codRshte: element.codRshte})
//     }
// }
// console.log(" students darsad: " , (print.length / person.length)*100 );







// ___________________________________________________________16(  15 )

// const list=[



//     {id:1,mah:20000},
//     {id:2,mah:60000},
//     {id:3,mah:26000},
//     {id:4,mah:66000},
//     {id:5,mah:1000},

// ];


// let a;
// list.map(item =>{


//     if(item.mah<=500000){


//         a= 3*(item.mah*12)/100;

        

//     }else if(item.mah>500000&&item.mah<700000){


//         a=15(item.mah*12)/100
//     }

// console.log(item.id ," , ",a," , ",item.mah*12 );

// })





// ___________________________________________________________18(  16 )


// let x1=1,y1=2;
// let x2=2,y2=2;
//  switch (x1===x2) {
//     case true:
//         console.log(x1);
        
//         break;
 
//     default:


//     let a1=y2-y1;
//     let a2=x1-x2;
//     let a3=x2*y1-x1*y2;

//     console.log(`${a1} x + ${a2} y+ ${a3}=0`);
//     break
    

//  }



// ___________________________________________________________19( 17 )



// const N=122;
// const tol = N.toString().split("");
// let a=0;b=0;c=0;

// tol.map(item=>{

//     const adad = parseInt(item);

//     if(adad===0){

//         a++;
//     }else if(  adad%2===0){

//         b++;
//     }else{

//         c++;
//     }
// });
// console.log("zoj  " , b ,"fard",a," sefr",c)




// ___________________________________________________________17( 18 )



// function rozN(rooz){

//     const troz=[

//         31,31,31,31,30,,30,30,30,30,30,30,30
//     ]


//     let mah=0;

//     while(rooz>mah){



//         rooz-=mah

//         mah++;

//     }

//     return(mah+1)+"/"+rooz;

// }
// console.log(rozN(20));


// ___________________________________________________________4( 19 )

// for(let i=1000;i<10000;i++){







//     let hezargan=i/1000|0;


//     let sadgan=(i%1000)/100|0;

//     let dahgan=(i%100)/10|0;


//     let ekan=i%10



//     if(hezargan%2!==0){

//         if(sadgan%2===0){

//             if(dahgan%2!==0){

//                 if( ekan %2===0){

//                     console.log(i);
                    
//                 }
//             }
//         }
//     }

// }