// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//     process.stdout.write(char); // avoids automatically adding an extra "newline character" at the end each time
//   }

const sentence = "hello there from lighthouse labs\n";

for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
        process.stdout.write(sentence[i]);
    }, 1 * 1000);
}