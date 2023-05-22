


// Alex Titus
// CS 316 (Spr23)


// Node of Binary Search Tree
public class Node {

	// Define data storage structure. 
	int datavalue;
	Node leftNode = null;
	Node rightNode = null;

	// Create node for binary search tree. 
	public Node(int datavalue) {
		setDataValue(datavalue);
	}

	// Get data value for node of binary search tree. 
	public int getDataValue() {
		return datavalue;
	}

	// Check for existence of left child. 
	public boolean hasLeftChildNode() {
		return (leftNode != null);
	}
	// Get left child node. 
	public Node getLeftChildNode() {
		// Return left node. 
		return leftNode;
	}
	// Set left child of node in binary search tree by node. 
	public void setLeftChildByNode(Node node) {
		this.leftNode = node;
	}

	// Check for existence of right child. 
	public boolean hasRightChildNode() {
		return (rightNode != null);
	}
	// Get right child node. 
	public Node getRightChildNode() {
		// Return right node. 
		return rightNode;
	}
	// Set right child of node in binary search tree by node. 
	public void setRightChildByNode(Node node) {
		this.rightNode = node;
	}

	// Set data value for node of binary search tree. 
	public void setDataValue(int datavalue) {
		this.datavalue = datavalue;
	}

	// Set left child of node in binary search tree by value. 
	public void setLeftChildByValue(int value) {
		setLeftChildByNode( new Node(value) );
	}

	// Set right child of node in binary search tree by value. 
	public void setRightChildByValue(int value) {
		setRightChildByNode( new Node(value) );
	}
}
