var readlinesync = require('readline-sync');
var username = readlinesync.question('Hello Guys \n  Can i have your name ? ');
score= 0;

console.log('Welcome '+username+'\n Do you  know about Comedians?');
var newone = readlinesync.question('Do you want to learn & Play? \n  Enter choice Yes or No ');

if(newone === "Yes")
{
console.log("  Please Type in Your Answers :");
}
else
{
console.log(" Don't give up ");
}

// function is created
function play(question1,answer1)
{
  var username1 = readlinesync.question(question1);
  if(username1 === answer1)
  { 
    console.log(" Dekha Londa phigal gye na ");
    score= score+1;
    console.log("Vaaah bhai bde Heavy Driver ho:  "+score)
  }
   else
  {
    console.log(" Sakhti dekh rheo londe ki ");
    score = score-1;
    console.log("Glti krdiya btake tere ko: "+score)
  }

}
// array is made
var questions =
 [ 
 {
   question1 : " Sakht Londa refers to which comedian ?",
    answer1 : "zakir khan"
 },
 {
  question1 : "Uncle john wale bhai ka name btao bhai?",
  answer1 : "Bassi"
 },
 {
  question1 : " 6000 main to Russian aa jati hai wale bhai konse khandan se hai ? ",
  answer1 : "gujral"
 }
 ]
  for(var i=0;i<questions.length;i++)
  {
      currentvalue = questions[i];
      play(currentvalue.question1,currentvalue.answer1);
  }
 
