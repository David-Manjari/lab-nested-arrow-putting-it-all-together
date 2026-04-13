// create a function log in tracker with a parameter userInfo as an object

const userInfo ={
  username : "User1",
  password : "pass123"
}
function createLoginTracker (userInfo) {
  let attemptCount = 0;
  let passTest = (passwordAttempt) => {
    // if statement to increment count
    if(passwordAttempt !== userInfo.password){
      attemptCount++;
      if(attemptCount <=3){
        return `Attempt ${attemptCount}: Login failed`;
      }
      return `Account locked due to too many failed login attempts`;
    }
    else if(attemptCount < 3){
      return `Login successful`;
    }
  }
return  {passTest}
 
}
const user1Login = createLoginTracker(userInfo);

console.log(user1Login.passTest("pass13"))


