// const lista1 = [2,3,5,7]

// lista1.map(x => x*x)
// .forEach(x => console.log(x))

//node_modules/.bin/tsc ./index.ts -w
const lista:Array<number> = [2,3,5,7]

lista.map((x:number) => x*x)
.forEach((x:number) => console.log(x))