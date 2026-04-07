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
  // code snippet stores the number of attempts in loggin in using an arrow function
  let attemptCount = () => {
    if (password !== userInfo.password){
      attemptcount++;
    }
  }
  // created an anonymus function that checks if password is correct and the number of attempts
  const passwordAttempt = function (){
    password = prompt('Enter User Password'); // prompts the user to enter a password
    // checks if password is correct and attempts are less than three and provides output if both are correct
    if(password === userInfo.password && attemptCount <=3){
      return "login Successful";
    }
      // checks if password is incorrect and attempts are less than three and provides output if both are correct
    else if (password !== userInfo.password && attemptCount <= 3){
      return `Log in attempt : ${attemptcount} , Login Failed!`
     
    }
  }
}