/// Basic Types 

/* let name: string 
let age: number | string
let isStudent: boolean
let hobbies: string[]
let role: [number, string] */

/// Typing objets 

type Person1 = {
  name: string,
  age?: number // <-- Optional value
}

let person: Person1 = { name: 'Said' }

/// Array of 

let lotsOfPeople: Person1[]

/// Functions Types 

let printName: (name: string) => void

/// Types extends 

type X1 = {
  a: string,
  b: number
}

type Y1 = X1 & {
  c: string,
  d: number
}

let y: Y1 = {
  a: "Hello",
  b: 4,
  c: 'world',
  d: 2
}

/// Interface Exteds

interface Person2 {
  name: string,
  age: number
}

interface Guy extends Person2 {
  profession: string;
}

let guy: Guy = { name:'Said', age: 35, profession: 'programmer' }

/// Extends type from interface 

interface Person2 {
  name: string,
  age: number
}

type X2 = Person2 & {
  a: string,
  b: number
}

/// Extends interface from type 

type X3 = {
  a: string,
  b: number
}

interface Person3 extends X3 {
  name: string,
  age: number
}