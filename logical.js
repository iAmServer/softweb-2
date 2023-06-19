// var age = 25;
// var gender = "MALE";

// const INEC_AGE_CONDITION = 18;
// const INEC_GENDER_CONDITION = "MALE";

// var checkUser =
//   age >= INEC_AGE_CONDITION && gender == INEC_GENDER_CONDITION
//     ? "Welcome to the INEC voting system"
//     : "Sorry! You have to meet the coditions of being above 18 and also a MALE";

// console.log(checkUser);
let entranceScore = 80;
let studyPhysic = true;
let studyChemistry = false;
let hasDisciplinaryAction = false;

let response =
  entranceScore >= 70 &&
  (studyPhysic || studyChemistry) &&
  !hasDisciplinaryAction
    ? "Eligible for Admission"
    : "Not Eligible for Admission";

console.log(response);
