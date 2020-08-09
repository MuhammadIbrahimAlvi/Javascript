// 35-38
// Q1
// function DT(){
//     var mon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
//     var days = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"];
//     var Obj = new Date();

//     var M = Obj.getMonth();
//     var D = Obj.getDay();
//     var Y = Obj.getFullYear();
//     var min = Obj.getMinutes();
//     var sec = Obj.getSeconds();
//     var hr = Obj.getHours;
//     var dat = Obj.getDate();
//     var curTime = Obj.getTimezoneOffset

//     document.write(days[D]+" "+mon[M]+" "+dat+" "+Y);
  
// }

// DT();

// Q2
// var firstNam;
// var secNam;

// function greet(firstNam,secNam){
// this.firstNam = firstNam;
// this.secNam = secNam;
// alert("Greetings"+" "+firstNam+" "+secNam);
// }

// greet("Ibrahim","Alvi");

// Q3
// var fNo = parseInt(prompt("Enter First Number:"));
// var sNo = parseInt(prompt("Enter Second Number:"));
// function Sum(){

// alert("Sum is:"+ " "+(fNo+sNo));
// }

// Sum()
// Q4
// var num1,num2;

// function Op(num1,num2,operator){
//     if(operator==="+"){
//         var result = num1+num2;
//         alert("The Sum Of Two numbers is:"+" "+result);
//     }
//     else if(operator==="-"){
//         var result = num1-num2;
//         alert("The Subtraction Of Two numbers is:"+" "+result);
//     }
//     else if(operator==="/"){
//         var result = num1*num2;
//         alert("The Multiplication Of Two numbers is:"+" "+result);
//     }
//     else{
//         var result = num1/num2;
//         alert("The Division of two numbers is:"+" "+result);
//     }
// }
// var inp1= intParse(prompt("Enter First Number:"));
// var inp2= intParse(prompt("Enter Second Number:"));
// var op = prompt("Enter Operator:");

// Op(inp1,inp2,op);

// CHAPTER 38 TO 42
// TASK 1


// function value(){
//    var a = prompt("enter first value")
//    var b= prompt("enter power of value")
//    var c = Math.pow(a,b)
//     document.write("the value of A raised to B is "+c)
// }
// value();

// TASK 2

// function leap(){
//     var a = prompt("enter your year")
//     if(a % 4==0){
//         document.write(a+" is  a leap year")
//     }
//     else if(a % 100 == 0){
//         document.write(a+" is  a leap year");

//     }
//     else if(a % 400 == 0){
//         document.write(a+" is  a leap year");

//     }
//     else{
//         document.write(a+" is not a leap year")
//     }
// }
// leap();




// TASK 3

// function triangle(){

// var side1 = prompt("enter side A")
// var side2 = prompt("enter side B")
// var side3 = prompt("enter side C")
// var s = (side1 + side2 + side3) / 2;
// var areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
// document.write("the area of triangle is "+areaValue)

// }

// triangle();


// TASK 4

// function main() {
//     var sub1 = +prompt("Enter Marks for Subject 1"); 
//     var sub2 = +prompt("Enter Marks for Subject 2"); 
//     var sub3 = +prompt("Enter Marks for Subject 3"); 
//     document.write("<h1>Student Marks</h1>");
//     document.write("Subject 1: "+sub1+"<br>");
//     document.write("Subject 2: "+sub2+"<br>");
//     document.write("Subject 3: "+sub3+"<br>");
//     document.write("Average: "+avg(sub1,sub2,sub3)+"<br>");
//     document.write("percentage: "+percentage(sub1,sub2,sub3)+"%");
  
  
  
//   }
//   main();
  
  
  
//   function avg(a,b,c){
  
//     return (a + b + c)/3;
  
//   }
  
  
//   function percentage(a,b,c){
  
//    return ((a+b+c)/300)*100;
  
//   }

// TAsk 5
// function find(){
//     var str = "this is adeeel khan";
//     var reg = str.search(/i/g);
//     document.write("i is at no : "+reg);
//     }
//     find();



// TASK 6

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }
  
//   var sentence = prompt("Enter Sentence to remove vowels sentences must be of 25 characters");
//   sentence = sentence.slice(0,25);
//   document.write("Original Sentence : " + "<strong>"+sentence+"</strong> <br>");
//   document.write("After vowel Removal  : " + "<strong>"+disemvowel(sentence)+"</strong>");


// TASK 7
// function vowel() {
//     var sentence = "Pleases read this application and give me gratuity";
//     var count = 0;
//     var found = false;
  
//     for (var letter of sentence.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (found) {
//               count++;
//               found = false;
//             } else {
//              found = true;
//             }
//             break;
//           }
//         default:
//           found = false
//       }
//     }
//     document.write("sentence --> : "+ sentence+"<br>");
//     return count;
//   }
  
//   document.write("The Number of occurence of two vowels in Succession is : "+ vowel());

// TASK 8

// function distance(){
//     var km = +prompt("Enter Distance Between two Cities in Km to convert in various units");
//     document.write("Distance Between Two Cities in KiloMeters = " +km+" Km<br>");
//     document.write("Distance Between Two Cities in Meters = " + meters(km)+" M<br>");
//     document.write("Distance Between Two Cities in Feets = " + feets(km)+" Ft<br>");
//     document.write("Distance Between Two Cities in Inches = " + inches(km)+" In<br>");
//     document.write("Distance Between Two Cities in Centimeteres = " + centimeters(km)+" Cm<br>");
//     }
//     distance();
    
//     function meters(km){
//     return km * 1000;
    
    
//     }
    
//     function feets(km){
    
//       return km * 3281;
//     }
    
//     function inches(km){
//       return km * 39370;
//     }
//     function centimeters(km){
//     return km * 100000;
    
//     }


// TASK 9

// function overtime(){
//     var emp =1;
//     var ot,ovpay;
//     document.write("<h4>Employee OverTime Pay Calculator</h4>")
//     while(emp <= 10){
//     var whours = +prompt("Enter Working Our For Employee to count its OverTime Pay");
//     if(whours > 40){
    
//     ot = whours - 40;
//     ovpay = ot * 12;
//     document.write("Employee : "+emp+" overtime pay is : " +ovpay +"RS <br>");
    
//     }else{
    
//     document.write('Employee : '+emp+" need to work for more than 40 hours to get overTime <br>");
    
    
//     }
    
//     emp++;
//     }
    
//     }
    
//     overtime();


// TASK 10


// function notes(){

//     document.write("<h4>Currency Notes Denomination</h4>")
//     var amt = +prompt("Enter amount for withdrawal");
//     var hundreds = parseInt((amt / 100));
//     var fifties = parseInt((amt % 100)/50);
//     var tens = parseInt((((amt % 100) % 50)/10));
//     document.write("you will have "+hundreds+ " Hundred , "+fifties+" fifty , "+tens+ " ten -- Notes ");
    
//     }
    
//     notes();



// CHAPTER 43 TO 48

// TaSk 11

// TASK 12

// TASK 13

// function del(){
//     var td = event.target.parentNode;
//       var tr = td.parentNode;
// tr.parentNode.removeChild(tr);
     
// }

// TASK 14

// TASK 15

// var count = 0;

// function inc(){
// var counter = document.getElementById('counter');
// counter.innerHTML ="Count: "+ ++count;

// }

// function dec(){
//     var counter = document.getElementById('counter');
//     counter.innerText = "Count: "+ --count;    

// }



// CHAPTER 49 TO  52


// TASK 16

// function display(){

//     var name = document.getElementById('name').value;
//     var pass = document.getElementById('pass').value;
//     var email = document.getElementById('email').value;
//     var number = document.getElementById('number').value;
//   if( name === "" || pass === "" || email === "" || number === ""){
// alert("Fields are Empty");
//   }else{
// document.write("<h1> Form Details </h1>");
// document.write("Name: "+name + "<br/>" + "Password: " + pass  + "<br/>" + "Email: " + email  + "<br/>" + "Number: " + number +"<br>" );
// document.write("<button style='margin-top:30px;'><a href='index.html' style='text-decoration:none;'> Go Back </a> </button>");
//   }
// }

// TASK 17

// TASK 18


// CHAPTER 59 TO 67

// TASK 19

// function aa(){
//     //1 Get element of id “main-content” and assign them in a variable
//     var main = document.getElementById('main-content');
//     var first = document.getElementById('first-name');
//     var last = document.getElementById('last-name');
//     var email = document.getElementById('email');
//     //2 Display all child elements of “main-content” element
//     console.log(main.childNodes);
//     //3 Get all elements of class “render” and show their innerHTML in browser.
//     var render0 = document.getElementsByClassName('render')[0];
//     var render1 = document.getElementsByClassName('render')[1];
//     var render2 = document.getElementsByClassName('render')[2];
//     var render3 = document.getElementsByClassName('render')[3];
//     var render4 = document.getElementsByClassName('render')[4];
//     document.write(render0.innerHTML);
//     document.write(render1.innerHTML);
//     document.write(render2.innerHTML);
//     document.write(render3.innerHTML);
//     document.write(render4.innerHTML);
//     //4 Fill input value whose element id first-name using javascript
//     render0.innerText = "First Name : "+ first.value;
//     //5 Repeat part iv for id ”last-name” and “email
//     render1.innerText = "Last Name : "+last.value;
//     render2.innerText = "Email : "+email.value; 
//     }


// TASK 20

// function aa(){
//     //1 node type of element having id form-content
// var formcontent = document.getElementById('form-content');
// var maincontent = document.getElementById('main-content');
// var lastname = document.getElementById('lastName');
// var email = document.getElementById('email');
// document.write("<h3>Task2 DOM</h3>");
// document.write("<strong> 1 node type of element having id form-content </strong> <br>");
// document.write("form-content --> NodeType = "+formcontent.nodeType);
// document.write("<br>");
// document.write("form-content --> NodeName = "+formcontent.nodeName);
// document.write("<br><br>");

// //2 node type of element having id last name and its child node
// document.write("<strong>2 node type of element having id last name and its child node </strong><br>");
// document.write("LastName --> NodeType = "+lastname.nodeType);
// document.write("<br>");
// document.write("LastName --> NodeName = "+lastname.nodeName);
// document.write("<br>");
// document.write("LastName --> child --> NodeType = "+lastname.childNodes[0].nodeType);
// document.write("<br>");
// document.write("LastName --> child --> NodeName = "+lastname.childNodes[0].nodeName);
// document.write("<br> <br>");

// // 3 update childNodes of element having id LastName
// document.write("<strong> 3 update childNodes of element having id LastName </strong> <br>");
// document.write("LastName --> child --> before updation of = "+lastname.childNodes[0].nodeValue);
// var c= lastname.childNodes[0].nodeValue = "Adeel";
// document.write("<br>");
// document.write("LastName --> child --> After update = " +c);
// document.write("<br><br>");

// //4 Get First and last child of id “main-content”
// document.write("<strong> 4 Get First and last child of id main-content </strong> <br>");
// document.write("First child of Main Content = "+maincontent.firstChild);
// document.write("<br>");
// document.write("Last child of Main Content = "+maincontent.lastChild);
// document.write("<br> <br>");
// //5 Get next and previous siblings of id “lastName”.
// document.write("<strong> 5 Get next and previous siblings of id lastName </strong> <br>");
// document.write("Next Sibbling of LastName = "+lastname.nextSibling);
// document.write("<br>");
// document.write("Previous Sibbling of LastName = "+lastname.previousSibling);
// document.write("<br> <br>");
// //6 Get parent node and node type of element having id “email”

// document.write("<strong> 6 Get parent node and node type of element having id email </strong><br>");
// document.write("ParentNode of email = "+email.parentNode);
// document.write("<br>");
// document.write("NodeType of email = "+email.nodeType);



// }