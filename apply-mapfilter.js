const student = [
    {id: 21, name: 'omer Sunny'},
    {id: 31, name: ' Manna'},
    {id: 41, name: 'Ilias'},
    {id: 51, name: 'Deepjol'}
];

const names = student.map( s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id>40);
console.log(bigger);