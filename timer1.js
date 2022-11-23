let time = process.argv.slice(2);
let seconds = 0;

for (let num of time){
  const timer = function (time){
    let seconds = (num * 1000)
      if (isNaN(time)){
        console.log('errorOne: please only enter a whole number.')
        process.exit();
      }
      if (seconds < 0){
        console.log('errorTwo: please enter a number above 0.')
        process.exit();
      }
      setTimeout(() => {
        process.stdout.write('\x07')
      }, seconds);
      seconds += seconds;
  } 
  timer(num);
};


