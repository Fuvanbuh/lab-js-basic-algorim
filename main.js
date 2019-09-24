let hacker1 = `Gerard`;
let hacker2 = prompt("Dime tu nombre");
//falta la p de prompt
console.log(`the driver's name is ${hacker1} `);

console.log(`the navigator's name is ${hacker2} `);





  if (hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
}else if (hacker1.length < hacker2.length){
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
}else {
  console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`);
 }
editName(hacker1);
reverseName (hacker2);
compareName(hacker1, hacker2);

function editName (name){
  let result = ""  ;
  for (let i = 0; i < name.length; i++){     
      result += name[i].toUpperCase() + ' ';
      
    }
console.log(result);
}



function reverseName (name){
  let result = "";
 for(let i= name.length -1; i>=0; i--){
   result += name[i];
 }
  console.log(result);
}


function compareName(name1, name2){
let res = name1.localeCompare(name2);
 if (res === 1 ){
   console.log("The driver's name goes first"); 
 }else if (res === -1){
   console.log("Yo, the navigator goes first definitely");   
 }else {
   console.log("What?! You both got the same name?");
 }
}

let palindrom = propt("Dime algo que sea palindrome");
let minusPal = palindrom.toLowerCase();
let arrPal = minusPal.split("");
let Rev = 