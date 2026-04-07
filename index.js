// write code that allows usrs to attempt login upto three times and locks account after three failed attempts
// module.exports = {
//   ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
// };
// object containing git
const userInfo ={
  username : 'user1',
  password : 'pass123',
};
let attemptCount = 0;
function createLoginTracker(userInfo,password) {
  // code snippet stores the number of attempts in loggin in using an arrow function
  console.log("event1")
  
  const checkAttempt = (userInfo,password) => {
    if (password !== userInfo.password){
      attemptCount++;
      return attemptCount;
    }
    
  }
  console.log(attemptCount)
  // created an if statement to check if password attempts are more than three
  if( attemptCount < 3){
    // created an anonymus function that checks if password is correct and the number of attempts
    console.log("umbrella succ")
    const passwordAttempt = function (userInfo,password,attemptCount) {
      // checks if password is correct and attempts are less than three and provides output if both are correct
      if (password === userInfo.password && attemptCount <= 3) {
        return "login Successful";
      }
      // checks if password is incorrect and attempts are less than three and provides output if both are correct
      if(attemptCount<3)  {
        console.log(`Log in attempt : ${attemptCount} , Login Failed!`)
        checkAttempt()
        return prompt('Try entering password again : ')

      }
    }
  }
  else{
    return 'Account locked due to too many failed login attempts'
  }
}

let password = createLoginTracker(prompt("Enter account password"))