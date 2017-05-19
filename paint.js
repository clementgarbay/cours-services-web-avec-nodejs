const request = require('request');
const _ = require('lodash');

request('https://b6748aed.ngrok.io/model', (err1, res1, body1) => {
  if (err1) throw err1;

  const table = JSON.parse(body1);
  const solution = [];

  for (let y = 0; y < table.length; y++) {
    const line = table[y];

    let x1 = null;

    for (let x = 0; x < line.length; x++) {
      const element = line[x];

      console.log('element', element)

      if (element && !line[x - 1]) {
        x1 = x;
      } else if ((!element && x1) || (element && x === line.length)) {
        solution.push({
          x1,
          x2: x - 1,
          y1: y,
          y2: y,
          command: 'PAINT_LINE'
        });
        x1 = null;
      }
    }
  }


  // const solution = _.flatMap(JSON.parse(body1), (line) => {
  //   const falseCount = _.filter(line, elem => elem === false).length;
  //   const trueCount = _.filter(line, elem => elem === true).length;

  //   let newLine = null;

  //   if (falseCount > trueCount) {
  //     newLine = _(line)
  //       .map((elem) => {
  //         const res = {
  //           x,
  //           y,
  //           command: (elem ? 'PAINT' : 'ERASE')
  //         };
  //         x += 1;
  //         return res;
  //       })
  //       .filter(elem => elem.command !== 'ERASE')
  //       .value();
  //   } else {
  //     newLine = _(['PAINT_LINE', ...line])
  //       .map((elem) => {
  //         let res = null;
  //         if (elem === 'PAINT_LINE') {
  //           res = {
  //             x1: 0,
  //             x2: 79,
  //             y1: y,
  //             y2: y,
  //             command: 'PAINT_LINE'
  //           };
  //         } else {
  //           res = {
  //             x,
  //             y,
  //             command: (elem ? 'PAINT' : 'ERASE')
  //           };
  //         }

  //         x += (elem === 'PAINT_LINE') ? 0 : 1;
  //         return res;
  //       })
  //       .filter(elem => elem.command !== 'PAINT')
  //       .value();
  //   }

    // const newLine = line.map((val) => {
    //   const res = {
    //     x,
    //     y,
    //     command: (val ? 'PAINT' : 'ERASE')
    //   };
    //   x += 1;
    //   return res;
    // });

    // const newLine = _(line)
    //   .map((val) => {
    //     const res = {
    //       x,
    //       y,
    //       command: (val ? 'PAINT' : 'ERASE')
    //     };
    //     x += 1;
    //     return val === 'ERASE' ? null : res;
    //   })
    //   .omit(null)
    //   .value();

  //   x = 0;
  //   y += 1;

  //   return newLine;
  // });

  console.log('solution', solution);

  request.post({
    url: 'https://b6748aed.ngrok.io/',
    json: {
      name: 'Nanou et Clément',
      solution
    }
  }, (err2, res2, body2) => {
    console.log('err2', err2);

    if (err2) throw err2;

    console.log('body2', body2);
  });
});
