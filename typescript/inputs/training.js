var a_ = (() => {

    var ab = (() => {

        console.log([
            2,
            3,
            console.log(2),
            5,
        ].join('\n'))

    })()

})()

function employee(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}
employee.prototype.salary = 2000;

const fred = new employee("Fred Flintstone", "Caveman", 1970);
console.log(fred.salary);


const a = { a: 1 };
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null (d is an object that has null directly as its prototype)
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype


var arr = [1,2,3]
console.dir(Object.getPrototypeOf(arr))

var arr = [1,2,3]
const arrProto = Object.getPrototypeOf(arr)
console.dir(Object.getPrototypeOf(arrProto))
//document.write(Object.getPrototypeOf(arrProto))