const givenString = 'India.pdf.myfile';
const stringArray = string.split('.');
console.log(stringArray); // [ 'India', 'pdf', 'myfile' ]

stringArray.pop(); // pop() will remove last item i.e. --> 'myfile'
console.log(stringArray); // [ 'India', 'pdf']

const newString = stringArray.join('.');
console.log(newString); // 'India.pdf'
