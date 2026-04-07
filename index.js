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
let password = prompt("Enter account password");
  // code snippet stores the number of attempts in loggin in using an arrow function
  let attemptCount = 0;
  const checkAttempt = (userInfo,password) => {
    if (password !== userInfo.password){
      ++attemptCount;
    }
    
  }
  
    // created an if statement to check if password attempts are more than three
  for(attemptCount;attemptCount < 3;){
    if (attemptCount < 3) {


      // checks if password is correct and attempts are less than three and provides output if both are correct
      if (password === userInfo.password) {   return "login Successful";
        
        
      }
      password = prompt('Try entering password again : ')
        checkAttempt(userInfo, password)
        console.log(`Log in attempt : ${attemptCount} , Login Failed!`)
    }
    return "Account locked due to too many failed login attempts";
    

  }
  
}

const result = createLoginTracker(userInfo)
console.log(result)