// write code that allows usrs to attempt login upto three times and locks account after three failed attempts
// module.exports = {
//   ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
// };
// object containing git
const userInfo ={
  username : 'user1',
  password : 'pass123',
};

function createLoginTracker(userInfo) {
 const password = prompt("Enter account password");
  // code snippet stores the number of attempts in loggin in using an arrow function
  console.log("event1")
  let attemptCount = 0;
  const checkAttempt = (userInfo,password) => {
    if (password !== userInfo.password){
      attemptCount++;
    }
    
  }
  console.log(attemptCount)
  
    // created an if statement to check if password attempts are more than three
  if( attemptCount < 3){
    
    
      // checks if password is correct and attempts are less than three and provides output if both are correct
      if (password === userInfo.password) {
        return "login Successful";
      }
      // checks if password is incorrect and attempts are less than three and provides output if both are correct
      else  {
        console.log(`Log in attempt : ${attemptCount} , Login Failed!`)
        checkAttempt(userInfo,password)
        return prompt('Try entering password again : ')

      }
    }
  else {
    return 'Account locked due to too many failed login attempts'
  }
  

 
}

const result = createLoginTracker(userInfo)
console.log(result)