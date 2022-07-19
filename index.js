function scuberGreetingForFeet(someValue) {
   
  if (someValue < 200){
    return 'This one is on me!'
  }
  else if (someValue > 200 && someValue < 2000){
    return 'That will be twenty bucks.'
  }
  else if (someValue > 2000 && someValue <=2500){
    return 'I will gladly take your thirty bucks.'
  }
  else (someValue > 2500)
  {
    return 'No can do.'
  }
}

function ternaryCheckCity(someValue){
if(someValue == 'NYC'){
  return 'Ok, sounds good.'
}
else(someValue != 'NYC')
{
return 'No go.'
}
}


function switchOnCharmFromTip(tip){
  // Write your code here!
if (tip == 'generous'){
  return 'Thank you so much.'
}
else if(tip == 'not as generous'){
return 'Thank you.'
}
else (tip == 'thanks for everything')
{
return "Bye."
}
}