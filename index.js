// create a function log in tracker with a parameter userInfo as an object

const userInfo ={
  username : "User1",
  password : "pass123"
}
function createLoginTracker (userInfo) {
  let attemptCount = 0;
  return (passwordAttempt) => {
    // if statement to increment count
    if(passwordAttempt !== userInfo.password){
      attemptCount++;
      if(attemptCount < 4){
        return `Attempt ${attemptCount}: Login failed`;
        
        
      }
      else {
              return `Account locked due to too many failed login attempts`;
      }
      

    }
    else if(attemptCount < 3){
      // attemptCount = 0;
      return `Login successful`;
    }
  }

 
}
const user1Login = createLoginTracker(userInfo);

console.log(user1Login())
console.log(user1Login())
console.log(user1Login())
console.log(user1Login())


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

