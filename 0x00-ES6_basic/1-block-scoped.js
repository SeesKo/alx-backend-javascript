export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var
  const task2 = true; // Use const instead of var

  if (trueOrFalse) {
    task = true; // Update the existing variable
    // task2 = false; // This will cause an error because const variables cannot be reassigned
  }

  return [task, task2];
}
