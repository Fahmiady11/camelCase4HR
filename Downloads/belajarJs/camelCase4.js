function processData(input) {
  //Enter your code here
  let temp = [];
  for (let i = 0; i < input.length; i++) {
    let _split = input[i].split(';');
    if (_split[0] === 'S') {
      let pisah = _split[2].split(/(?=[A-Z])/);
      for (let k = 0; k < pisah.length; k++) {
        pisah[k] = pisah[k].toLowerCase();
      }
      temp.push(pisah.join(' '));
    } else {
      if (_split[1] === 'V') {
        let pisah = _split[2].split(' ');
        for (let i = 0; i < pisah.length; i++) {
          if (i != 0) {
            pisah[i] = pisah[i].charAt(0).toUpperCase() + pisah[i].slice(1);
          }
        }
        temp.push(pisah.join(''));
      }
      if (_split[1] === 'M') {
        let pisah = _split[2].split(' ');
        for (let i = 0; i < pisah.length; i++) {
          if (i != 0) {
            pisah[i] = pisah[i].charAt(0).toUpperCase() + pisah[i].slice(1);
          }
        }
        temp.push(pisah.join('') + '()');
      }
      if (_split[1] === 'C') {
        let pisah = _split[2].split(' ');
        for (let i = 0; i < pisah.length; i++) {
          pisah[i] = pisah[i].charAt(0).toUpperCase() + pisah[i].slice(1);
        }
        temp.push(pisah.join(''));
      }
    }
  }
  return temp;
}

console.log(
  processData(["S;V;iPad","C;M;mouse pad","C;C;code swarm","S;C;OrangeHighlighter"])
);


