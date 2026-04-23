let score = 110;
let grade;
//switch(true) pattern

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score <= 89:
    grade = "B";
    break;
  case score >= 70 && score <= 79:
    grade = "C";
    break;
  case score >= 60 && score <= 69:
    grade = "D";
    break;
  case score >= 0 && score < 60:
    grade = "F";
    break;
  default:
    grade = "Invalid Mark";
}

console.log("Q1 Score:", score, "Grade:", grade);

//here we check if pass or fail (in this case, 60 or above is a pass)
let result = score >= 60 ? "Pass" : "Fail";
console.log("Q1 Result:", result);
