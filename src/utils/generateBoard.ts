export const generateBoard = () => {
    let arr = [];
    for (let y = 0; y < 15; y++) {
      let runArr = [];
      for (let x = 0; x < 15; x++) {
        runArr.push({
          letter: "",
          x: x,
          y: y,
          id: x.toString() + "," + y.toString(),
          locked: false
        });
      }
      arr.push(runArr);
    }
    return arr;
  };