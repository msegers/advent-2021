let input= `001110000001
...
001101010010`.split(/\n/g);

const filterNumbers = (numbers,common, index = 0) => {
const mostCommon = numbers.reduce((a,bytes)=>{
a[bytes[index]] +=1
return a;
}, {1:0, 0:0});
const {'0': a, '1': b} = mostCommon;
console.info(mostCommon)
const commonFilterChar = a > b  ? '0' : '1';
const uncommon = a > b  ? '1' : '0';
let filterChar = common ? commonFilterChar : uncommon;
if (a === b) {
	console.info('equal')
filterChar = common ? '1' : '0'
}

	const leftovers = numbers.filter(n => n[index] === filterChar);
	console.info(leftovers)
	if (leftovers.length > 1) {
		return filterNumbers(leftovers ,common, (index+1))
	} else if (leftovers.length === 0) {
		throw new Error(index);
	}
	return leftovers[0]
}
const commonFilter = filterNumbers(input,  true);
const uncommonFilter = filterNumbers(input, false);

const binToDec = (bstr) => parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
const commonD = binToDec(commonFilter);
const uncommonD = binToDec(uncommonFilter);
console.info({commonD, uncommonD}, commonD * uncommonD)