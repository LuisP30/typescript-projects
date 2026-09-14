type MapStringsCB = (item: string) => string; // callback

function mapStrings(array: string[], callback: MapStringsCB): string[] {
  const newArray: string[] = [];
  for(const i of array){
    newArray.push(callback(i));
  };
  return newArray;
};

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase())

console.log(abcMapped);
