const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) { // for of loop iterating through the sentence variable
  setTimeout(() => {process.stdout.write(char)}, delay) //always looks like this, include what you want done in {} backets and then the delay
  delay += 50; //adds 50 to delay variable for every iteration of char in the loop
};

setTimeout(() => {
  console.log(" ")
}, delay)