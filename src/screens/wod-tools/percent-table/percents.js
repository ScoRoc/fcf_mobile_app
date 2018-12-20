const percentGenerator = () => {
  let num = 39;
  const increaseNum = () => {
    num++;
    return num;
  };
  return increaseNum;
};
const getNextPercent = percentGenerator();
const numOfPercents = 70;
const percents = [];
for (let i = 0; i <= numOfPercents; i++) {
  percents.push(getNextPercent());
};

export default percents;
