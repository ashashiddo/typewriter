
const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay * 1000);
  delay++;
}

// for (let i = 0; i < sentence.length; i++) {
//     setTimeout(() => {
//         process.stdout.write(sentence[i]);
//     }, 1 * 1000);
// }
