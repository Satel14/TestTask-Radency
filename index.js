const chooseDistance = (t, k, ls) => {
  const number = [];
  if (k > ls.length) {
    console.log(null);
  } else {
    for (let i = 0; i < 2 ** ls.length; i++) {
      let temp = [];
      for (let j = 0; j < ls.length; j++) {
        if (i & (2 ** j)) {
          temp.push(ls[j]);
        }
      }
      if (temp.length === k) {
        number.push(
          temp.reduce(function (x, y) {
            return x + y;
          })
        );
      }
    }
    number.sort(function (x, y) {
      return y - x;
    });
    let specialnumberall = [...new Set(number)];
    let bestDistance;
    for (let y = 0; y <= specialnumberall.length; y++) {
      if (specialnumberall[y] == t) {
        bestDistance = specialnumberall[y];
      } else if (specialnumberall[y] > t) {
        bestDistance = specialnumberall[y + 1];
      } else if (specialnumberall[specialnumberall.length - 1] > t) {
        bestDistance = t + " Min dist " + k +  " min can be " +specialnumberall[specialnumberall.length - 1];
      } else if (specialnumberall[0] < t) {
        bestDistance = t + " Big dist " + k + " max can be " + specialnumberall[0];
      }
    }
    console.log(bestDistance);
  }
};

chooseDistance(174, 3, [51, 56, 58, 59, 61]);//173
chooseDistance(163, 3, [50]); //null
chooseDistance(1616, 4, [354, 10, 252, 208, 235, 242, 34, 379]); //1227
