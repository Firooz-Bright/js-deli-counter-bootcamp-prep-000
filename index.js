
var katzDeliLine = [];
function takeANumber(line,name){
  line.push(name);
    
    console.log("Welcome, " + name + ". You are number " + line.length+ " in line.");
  
  return "Welcome, " + name + ". You are number " + line.length + " in line."

}

function nowServing(line){
  if (!line.length){
     console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  }else{ 
     return "Now serving " + line.shift();
}


}
function currentLine(katzDeliLine){
  
  var newLine=[]
  if(!katzDeliLine.length) {
    return "The line is currently empty.";
}
  for(var i=0; i<line.length; i++) {
   newLine.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + newLine)
  return "The line is currently: " + newLine.join(', ');
} 
