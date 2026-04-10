// create a function log in tracker with a parameter userInfo as an object

const userInfo ={
  username : "User1",
  password : "pass123"
}
function createLoginTracker(userInfo) {
  let attemptCount = 0;
  (passwordAttempt) =>{
    // if statement to increment count
    if(passwordAttempt !== userInfo.password){
      attemptCount++;
      
    }
    else if(attemptCount < 3){
      return `Login Succesful`
    }
  }
}