//The Quiz Game
var color=require('chalk');
var takeinput=require('readline-sync');
var score=0;
var leaderboard = [
  {
    Name: "Frederick",
    Score: 60
  },
  {
    Name: "Susan",
    Score: 55
  },
  {
    Name: "George",
    Score: 50
  },
  {
    Name: "Tom",
    Score: 45
  },
  {
    Name: "Frank",
    Score: 45
  },
  {
    Name: "Daniel",
    Score: 40
  },
  {
    Name: "Paul",
    Score: 35
  },
  {
    Name: "Chris",
    Score: 30
  },
  {
    Name: "Suresh",
    Score: 25
  },
  {
    Name: "Ramesh",
    Score: 20
  },
  {
    Name: "Mukesh",
    Score: 15
  },
  {
    Name: "Naresh",
    Score: 10
  },
  {
    Name: "Lokesh",
    Score: 5
  },
  {
    Name: "Sushant",
    Score: 0
  }
];
var quizList=[
  {
    que:"Am I Male?",
    ans:true
  },
  {
    que:"Do I Smoke?",
    ans:false
  },
  {
    que:"Do I Drink Alcohol?",
    ans:false
  },
  {
    que:"Do I wear Spectacles?",
    ans:true
  },
  {
    que:"Am I married?",
    ans:false
  },
  {
    que:"Well, What's my name?",
    ans:1,
    options:["Jacky Shaw","Benard Shaw","Owen Shaw","Joseph Dawkins"]
  },
  {
    que:"Where do I live?",
    ans:2,
    options:["Bangalore","Kolkata","Delhi","Mumbai"]
  },
  {
    que:"Whom do I admire the most?",
    ans:4,
    options:["Shah Rukh Khan","Salman Khan","Priyanka Chopra","Vivekananda"]
  },
  {
    que:"Which is my favourite book?",
    ans:4,
    options:["Three Mistakes of My Life","One Night at the Call Centre","Half Girlfriend","The Power of Now"]
  },
  {
    que:"What's my favourite passtime?",
    ans:2,
    options:["Chattering","Self-Enquiry","Mindless Browsing","Eating"]
  },
  {
    que:"What do I prefer?",
    ans:3,
    options:["Coffee","Tea","Green Tea","Plain Water"]
  },
  {
    que:"What is my Mother tounge?",
    ans:1,
    options:["Hindi","English","Telegu","Bengali"]
  },
  {
    que:"Which is my favourite genre?",
    ans:3,
    options:["Comics","Fiction","Spirituality","Politics"]
  },
  {
    que:"Who is my favourite cartoon character?",
    ans:4,
    options:["Shin Chan","Oggy","Ben 10","Doraemon"]
  },
  {
    que:"Who is my favourite superhero?",
    ans:1,
    options:["Iron Man","Hulk","Captain America","Spiderman"]
  },
  {
    que:"How many brothers do I have?",
    ans:2,
    options:["One","Two","Three"]
  },
  {
    que:"How many sisters do I have?",
    ans:2,
    options:["One","Two","Three"]
  },
  {
    que:"What is my best habit?",
    ans:3,
    options:["Honesty","Compassion","Veganism"]
  },
  {
    que:"What is my worst habit?",
    ans:2,
    options:["Anger","Perfectionism","Gossip"]
  },
  {
    que:"What am I best at?",
    ans:2,
    options:["Coding","Wasting Time","Bargaining"]
  },
  {
    que:"What is my religion?",
    ans:3,
    options:["Muslim","Sikh","Hindu"]
  },
  {
    que:"What is my biggest lack?",
    ans:1,
    options:["Lack of Clarity","Lack of Money","Lack of Motivation"]
  },
  {
    que:"What's is my favourite subject?",
    ans:1,
    options:["Computer Science","Astrophysics","Politics"]
  },
  {
    que:"What's my pet name?",
    ans:3,
    options:["Rocky","Cherry","I have no pet"]
  },
  {
    que:"What is my skin colour?",
    ans:1,
    options:["Brown","White","Black"]
  },
  {
    que:"How many relationships have I had?",
    ans:3,
    options:["One","Three","Zero"]
  },
  {
    que:"How are my people skills?",
    ans:2,
    options:["Awesome","Average","Unsocial"]
  },
  {
    que:"What's my favourite Movie?",
    ans:3,
    options:["Avengers","Life of Pi","Interstellar"]
  },
  {
    que:"Who is my favourite singer?",
    ans:1,
    options:["Anyone who's voice touches","Shreya Ghosal","Arijit Singh"]
  },
  {
    que:"What do I do when I am completely free?",
    ans:2,
    options:["Meditate","Read Spiritual Books","Youtube Marathon"]
  }
];

function check(obj,i){
  console.log(color.bold.bgBlue.underline("QUESTION "+(i+1)+":-"));
  if(i<5){
    var userAnswer=takeinput.keyInYNStrict(color.yellow.bold.italic(obj.que));
    console.log(color.cyan.bold("You entered : ")+color.bold.magentaBright(userAnswer? "Yes":"No"));
    console.log(color.cyan.bold("Correct answer : ")+color.bold.magentaBright(obj.ans));
    if(userAnswer==obj.ans){
    console.log(color.bgGreen.bold.italic("CONGRATS!! You are Right!"));
    score=score+2;
    }
    else{
    console.log(color.bgRed.bold.italic("Uh oh! You are Wrong!"));
    score=score-1;
    }
  }
  else{
    console.log(color.yellow.bold.italic(obj.que));
    var userAnswer=takeinput.keyInSelect(obj.options,color.yellow.bold("Choose:-"),{cancel: false});
    console.log(color.cyan.bold("You entered : ")+color.bold.magentaBright(userAnswer+1));
    console.log(color.cyan.bold("Correct answer : ")+color.bold.magentaBright(obj.options[obj.ans-1]));
    if((userAnswer+1)==obj.ans){
    console.log(color.bgGreen.bold.italic("CONGRATS!! You are Right!"));
    score=score+2;
    }
    else{
    console.log(color.bgRed.bold.italic("Uh oh! You are Wrong!"));
    score=score-1;
    }
  }
  if(i!=29){
    console.log(color.cyan.bold("Your SCORE = ")+color.bold.magentaBright(score)+"\n");
    console.log(color.redBright("=========================="));
  }else{
    console.log(color.bgCyanBright.bold.black.underline("\nTHANK YOU FOR PLAYING..."+userName+"!!"));
    console.log(color.cyan.bold("\nYour FINAL SCORE = ")+color.bold.magentaBright(score)+"\n");
  }
}

var userName=takeinput.question(color.yellow.bold("What's you name?\n"));
console.log(color.redBright("==============================================="));
console.log(color.redBright("==============================================="));
console.log(color.bgCyanBright.bold.black.underline("Hello! "+userName+" WELCOME to WHO KNOWS ME BEST Quiz!\n"));
console.log(color.redBright("==============================================="));
console.log(color.redBright("==============================================="));
console.log(color.bgMagenta.bold.underline("RULES:-"));
console.log(color.bgGreen.blue.bold.italic("1.There are 3 levels."));
console.log(color.bgGreen.blue.bold.italic("2.Level-ONE has 5 questions of simple YES/NO type.\n  (Level-ONE Full Marks = 2*5=10)\n  Level-TWO has 10 MCQ type questions each with 4-options.\n  (Level-TWO Full-Marks = 10*2=20)\n  Level-Three has 15 MCQ type questions each with 3-options.\n  (Level-Three Full Marks = 15*2=30)"));
console.log(color.bgGreen.blue.bold.italic("3.To reach level-TWO Minimum Score needed = 4/10 in Level-ONE\n  To reach level-THREE Minimum Score needed = 8/20 in Level-TWO"));
console.log(color.bgGreen.blue.bold.italic("4.Each correct answer will give you 2 points."));
console.log(color.bgGreen.blue.bold.italic("5.But each wrong answer will take away 1 points.\n"));
console.log(color.blue.bgWhiteBright.bold("All THE BEST "+userName+"!\n"));
console.log(color.bgMagenta.bold.italic("Level-ONE Begins:-"));

for(var i=0;i<5;i++){
  check(quizList[i],i);
}
if(score>=4){
  console.log(color.yellow.bold("Congratulations! You have passed Level-ONE.\nWelcome to Level-TWO:-"));
  console.log(color.bold.italic.bgMagenta("Level-TWO Begins:-"));
  for(var i=5;i<15;i++){
  check(quizList[i],i);
  }
}else{
  console.log(color.red.bold("Sorry you could not clear Level-ONE"));
  console.log(color.cyan.bold("\nYour FINAL SCORE = ")+color.bold.magentaBright(score)+"\n");
  process.exit();
}
console.log(color.redBright("==============================================="));
if(score>=12){
  console.log(color.yellow.bold("Congratulations! You have passed Level-TWO.\nWelcome to Level-THREE:-"));
  console.log(color.bold.italic.bgMagenta("Level-THREE Begins:-"));
  for(var i=15;i<30;i++){
  check(quizList[i],i);
  }
}else{
  console.log(color.red.bold("Sorry you could not clear Level-TWO"));
  console.log(color.cyan.bold("\nYour FINAL SCORE = ")+color.bold.magentaBright(score)+"\n");
  process.exit();
}
console.log(color.redBright("==============================================="));

console.log(color.bgCyanBright.bold("LEADER-BOARD:-"));
console.log(color.bold.bgBlue("NAME")+"  -  "+color.bold.bgBlue("SCORE"));
var flag=0;
for(var i=0;i<leaderboard.length;i++){
  if(leaderboard[i].Score>score){
    console.log(color.bold.green(leaderboard[i].Name)+"  -  "+color.bold.red(leaderboard[i].Score));
  }
  else{
    console.log(color.bold.yellow.italic(userName)+"  -  "+color.bold.green.italic(score));
    flag=1;
    break;
  }
}
if(flag==1){
  while(i<leaderboard.length){
    console.log(color.bold.green(leaderboard[i].Name)+"  -  "+color.bold.red(leaderboard[i].Score));
    i++;
    //console.log();
  }
}
console.log(color.green.bold.italic("Send me a screenshot of the leaderboard so that I can update the leaderboard with your name and score!"));
console.log(color.redBright("==============================================="));