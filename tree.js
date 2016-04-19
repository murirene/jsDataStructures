"use strict"
/* Binary Tree Implementation in ES6 Javascript. 
	In Order Traversal
	Pre Order Traversal
	Post Order Traversal
	Breadth First Traversal
	Iterative Pre-Order Traversal	
*/

let List = require('./list.js')

class Node {
	constructor(value){
		this._value = value
		this._left = undefined
		this._right = undefined
	}
	
	get value(){return this._value}
	set value(value){this._value = value}
	get right(){return this._right}
	set right(value){ this._right = new Node(value) }
	get left(){return this._left}
	set left(value){ this._left = new Node(value)} }

class Tree {
	constructor() {
		this._root = undefined
	}
	
	add(value) {
		if(this._root === undefined){
			this._root = new Node(value)
			return
		}
		this._add(this._root, undefined, value)
	}
	
	_add(root, parent, value) {
		if(!root) {
			parent.value <= value? parent.right = value: parent.left = value
			return
		}
		
		root.value <= value ? this._add(root.right, root, value): this._add(root.left, root, value)
	}
	
	inOrderPrint(){
		if(!this._root)
			console.log("Empty Tree")

		this._inOrderPrint(this._root)
	}

	preOrderPrint(){
		if(!this._root)
			console.log("Empty Tree")

		this._preOrderPrint(this._root)
	}
	
	postOrderPrint(){
		if(!this._root)
			console.log("Empty Tree")

		this._postrderPrint(this._root)
	}
	
	_inOrderPrint(root) {
		if(!root){
			return 
		}
		
		this._inOrderPrint(root.left)
		console.log(`${root.value}`)
		this._inOrderPrint(root.right)
	} 

	_preOrderPrint(root) {
		if(!root){
			return 
		}
		console.log(`${root.value}`)
		this._preOrderPrint(root.left)
		this._preOrderPrint(root.right)
	} 	
	_postrderPrint(root) {
		if(!root){
			return 
		}
		this._postrderPrint(root.left)
		this._postrderPrint(root.right)
		console.log(`${root.value}`)
	}
	
	breadthFirst() {
		let queue = new List()
		queue.add(this._root)
		while(!queue.isEmpty()){
			let node = queue.remove()
			console.log(node.value)
			if(node.left)
				queue.add(node.left)
			
			if(node.right)
				queue.add(node.right)
		}
	}
	
	iterativePreOrder(){
		let stack = new List()
		stack.push(this._root)
		while(!stack.isEmpty()){
			let node = stack.pop()
			console.log(node.value)
			if(node.right)
				stack.push(node.right)
			
			if(node.left)
				stack.push(node.left)
		}
	} 	
}