// What is a singly linked list
// A data structure that contains a head, tail and length property.
// Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push its a function that add a value to the end of the list
    // If there is a tail, we set the tail of the list to be the value passed in paramenters
    // and the next of the old tail do be the new value
    // Pseudocode
    // This function should accept a value
    // Create a new node using the value passed to the function
    // If there is no head property on the list, set the head and tail to be the newly created node
    // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    // Increment the length by one
    // Return the linked list
    push(val){
        var newNode = new Node(val)
        // Se não tiver head, é pq a lista está vazia, então dessa forma eu seto o novo vertice par ser 
        // tail e head
        // caso contrario existe valores na lista, então eu pego e seto o tail.next atual para ser o novo vertice
        // e o novo vertice para ser a nova tail
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        // incremento o length e retorno a lista
        this.length++
        return this
    }

    traverse() {
        let current = this.head;
        while (current) {
          console.log(current.val);
          current = current.next;
        }
        return 
      }

    // Pop consists in a function that remove the value of the tail
    // We get tha value before the tail, set its next to be null

    // If there are no nodes in the list, return undefined
    // Loop through the list until you reach the tail
    // Set the next property of the 2nd to last node to be null
    // Set the tail to be the 2nd to last node
    // Decrement the length of the list by 1
    // Return the value of the node removed
    pop(){
        // Pra saber se nao tem valor eu posso verificar pelo length ou da mesma forma que foi feito no push
        if(!this.head){
            return undefined
        }
        // É preciso ir até o penultimo valor da lista e para fazer isso podemos percorrer a lista enquanto
        // o current.next != null
        // criamos uma variavel current que inicia no head da lista
        var current = this.head
        // E uma variavel newTail 
        var newTail = current
        while(current.next){
            // newTail agora é current
            newTail = current
            // e mudamos o current para ser o next do valor atual 
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--;
        return this
    }

    // Shifting consists to remove a node from the beginning of a lista
    // We set the next of the current head to be new head

    // If there are no nodes, return undefined
    // Store the current head property in a variable
    // Set the head property to be the current head's next property
    // Decrement the length by 1
    // Return the value of the node removed
    shift(){
        if(!this.head){
            return undefined
        }
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        return currentHead;
    }

    // Unshifting
    // Adding a new node to the beginning of the Linked List!
    // Set the new node to be the new head and the old head to be next of the new head

    //     This function should accept a value
    // Create a new node using the value passed to the function
    // If there is no head property on the list, set the head and tail to be the newly created node
    // Otherwise set the newly created node's next property to be the current head property on the list
    // Set the head property on the list to be that newly created node
    // Increment the length of the list by 1
    // Return the linked list
    unshift(val){
        if(!this.head){
            this.push(val)
        }else{
            var newNode = new Node(val)
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    // Get consists to find a value by its index
    // We should traverse the list until a counter is equal to the index passed in parameters
    //     This function should accept an index
    // If the index is less than zero or greater than or equal to the length of the list, return null
    // Loop through the list until you reach the index and return the node at that specific index

    get(index){
        if(index < 0 || index > this.length){
            return null
        }
        var current = this.head
        var counter = 0;
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }

    // set consists to find a node by its index and change its value by the new value passed in
    // parameters

    //     This function should accept a value and an index
    // Use your get function to find the specific node.
    // If the node is not found, return false
    // If the node is found, set the value of that node to be the value passed to the function and return true

    set(index, val){
        var foundNode = this.get(index)
        if(foundNode === null){
            return false
        }
        foundNode.val = val
        return true
    }

    // Insert Adding a node to the Linked List at a specific position
    // We find a node an index before the index passed in function, set its next
    // to be the value passed in function and this value.next to be the old value
    // of this index
    //     If the index is less than zero or greater than the length, return false
    // If the index is the same as the length, push a new node to the end of the list
    // If the index is 0, unshift a new node to the start of the list
    // Otherwise, using the get method, access the node at the index - 1
    // Set the next property on that node to be the new node
    // Set the next property on the new node to be the previous next
    // Increment the length
    // Return true

    insert(index, val){
        if(index < 0 || index > this.length){
            return false
        }
        if(index === 0){
            this.unshift(val)
        }else if(index == this.length){
            this.push(val)
        }
        var newNode = new Node(val)
        var previousNode = this.get(index - 1)
        var temp = previousNode.next
        previousNode.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    // Remove consists to remove a node at specific index
    // So we should a node before the index passed in function, sext its next node to be
    // the next of its next

    // If the index is less than zero or greater than the length, return undefined
    // If the index is the same as the length-1, pop
    // If the index is 0, shift
    // Otherwise, using the get method, access the node at the index - 1
    // Set the next property on that node to be the next of the next node
    // Decrement the length
    // Return the value of the node removed

    remove(index){
        if(index < 0 || index > this.length){
            return undefined
        }
        var previousNode = this.get(index - 1)
        var nodeToBeRemove = previousNode.next
        previousNode.next = nodeToBeRemove.next
        this.length--;
        return nodeToBeRemove.val
    }

    // Swap the head and tail
    // Create a variable called next
    // Create a variable called prev
    // Create a variable called node and initialize it to the head property
    // Loop through the list
    // Set next to be the next property on whatever node is
    // Set the next property on the node to be whatever prev is
    // Set prev to be the value of the node variable
    // Set the node variable to be the value of the next variable
    // Once you have finished looping, return the list

    reverse(){
        // Change head and tail position
        var current = this.head
        this.head = this.tail 
        this.tail = current
        var next;
        var prev = null;
        for(let i = 0; i < this.length; i++){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        //          current
        // prev             next
        // 1    ->   2   ->  3
        return this
    }
}


var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
// console.log(list.unshift("Oi oi"))
// console.log(list.set(0, "Hello"))
// console.log(list.set(1, "World"))
// list.insert(1, ",")
// // list.remove(1)
console.log("Before reverse")
console.log(list.traverse())
console.log("After reverse")
list.reverse()
console.log(list.traverse())