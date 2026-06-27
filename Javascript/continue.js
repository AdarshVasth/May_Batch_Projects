//continue is a keyword in JavaScript that is used to skip the current iteration of a loop and move on to the next iteration. It can be used in loops such as for, while, and do...while.

for (let i = 1; i<=10; i++) {
    if (i%3 === 0) {
        continue;
    }
    console.log(i); 
}
