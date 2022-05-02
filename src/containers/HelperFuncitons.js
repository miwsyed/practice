export const getAgeState = (candidateDetails) => {
  let age = candidateDetails.age;
  if (age < 0) return null;
  else if (age > 0 && age <= 3) return "an Infant";
  else if (age > 3 && age <= 12) return "a Kid";
  else if (age > 12 && age <= 19) return "a Teenager";
  else if (age > 20) return "an Adult";
};
