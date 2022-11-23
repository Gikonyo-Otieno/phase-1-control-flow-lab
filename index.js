function scuberGreetingForFeet(feet){
  
  let response 
  if (feet <= 400) {
    response = 'This one is on me!'
  }else if (feet > 2000) {
    response = 'I will gladly take your thirty bucks.'
  } if (feet > 2500 ){
    response = "No can do."
  }
   
  return response

}

function ternaryCheckCity(destination){
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

  

   


function switchOnCharmFromTip(Tip){
  
  let reply 
  switch (Tip){
    case 'generous':
      reply = "Thank you so much.";
      break;
    case 'not as generous':
      reply = "Thank you.";
      break;
    case 'thanks for everything' :
      reply = "Bye.";    
  }
  return reply
}