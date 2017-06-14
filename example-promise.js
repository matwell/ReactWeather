function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Is not a number');
    }
  });
}

addPromise(2,'a').then(function (result) {
  console.log(result);
}, function (e) {
  console.log(e);
});
