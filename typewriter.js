const sentence = "Good Morning from Calgary to Moscow!";
let charArr = sentence.split("");
let time = 0;
// console.log(charArr);
for (let i = 0; i < sentence.length; i++) {
  time += 50;
  // console.log(time);
  setTimeout(() => {
    if (i === sentence.length - 1) {
      process.stdout.write(`${sentence[i]}\n`);
    } else {
      process.stdout.write(sentence[i]);
    }
  }, time);
}
