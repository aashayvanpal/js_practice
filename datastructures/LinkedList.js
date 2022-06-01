// Linked List data structure
// A user defined Class Node 

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}



// Linked List class
class LinkedList {
    constructor() {
        this.head = 0
        this.size = 0
    }

    // functions to be implemented
    // add(element)
    // adds an element at the end of the list 
    add(element) {
        // creates a new Node
        var Node = new Node(element)

        // to store current node 
        var current

        // if the list is empty,make it the head node
        if (this.head == null)
            this.head = Node
        else {
            current = this.head

            // iterate till end node 
            while (current.next) {
                current.next = node
            }

            // add node
            current.next = node
        }
        this.size++
    }




    // insertAt(element, location)
    // working here



    // removeFrom(location)
    // removeElement(element)

    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList
}
