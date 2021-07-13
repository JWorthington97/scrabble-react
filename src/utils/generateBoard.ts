export const generateBoard = () => {
    let arr = [];
    for (let y = 0; y < 15; y++) {
      let runArr = [];
      for (let x = 0; x < 15; x++) {
        runArr.push({
          letter: "A",
          x: x,
          y: y,
          id: x.toString() + "," + y.toString(),
        });
      }
      arr.push(runArr);
    }
    return arr;
  };