"use strict"

/* Double Link List Implementation in ES6 Javascript. 
	isEmpty metho
	Push/Pop Stack methods
	Add/Remove Queue methods	
*/

class Node {
	constructor(value) {
		this._value = value
		this._next = undefined
		this._prev = undefined
	}
	
	get value() {return this._value}
	set value(v) {this._value = v}
	get next() {return this._next}
	set next(n) {this._next = n}
	get prev() {return this._prev}
	set prev(n) {this._prev = n}
}

module.exports =  class List {
	constructor() {
		this._head = undefined
		this._tail = undefined
	}
	
	isEmpty(){
		return this._head === undefined
	}
	
	print(){
		let str 
		if(this._head === undefined){
			str = "Empty list"
		} else {
			let traveler = this._head
			do{
				str = `${str? str:""} | ${traveler.value} `
				traveler = traveler.next
			} while(traveler !== undefined)
		}
		console.log(str)
	}
	
	printReverse(){
		let str 
		if(this._head === undefined){
			str = "Empty list"
		} else {
			let traveler = this._tail
			do{
				str = `${str? str:""} | ${traveler.value} `
				traveler = traveler.prev
			} while(traveler !== undefined)
		}
		console.log(str)
	}	
	
	pop(){
		let n = this._tail
		if(this._tail === this._head){
			this._head = undefined
			this._tail = undefined
		} else {
			this._tail.next = undefined
			this._tail = this._tail.prev
		}
		return n.value
	}
	
	push(value){
		this.add(value)
	}
			
	add(value){
		if(this._head === undefined) {
			this._head = this._tail = new Node(value)
			return 
		} else {
			this._tail.next = new Node(value)
			this._tail.next.prev = this._tail
			this._tail = this._tail.next	
		}
	}
			
	remove(){
		let n = this._head
		this._head = this._head.next		
		if (this._head)
			this._head.prev = undefined
		return n.value
	}
}