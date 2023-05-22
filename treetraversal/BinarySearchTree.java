


// Alex Titus
// CS 316 (Spr23)


// Binary Search Tree
public class BinarySearchTree {


	// Define data storage structure. 
	private Node rootNode;
	private int currentSize;


	/*****/


	// Create a new binary search tree. 
	public BinarySearchTree() {
		this.rootNode = null;
		this.currentSize = 0;
	}
	// Create a new binary search tree. 
	public BinarySearchTree(int rootdata) {
		this.rootNode = new Node(rootdata);
		this.currentSize = 1;
	}


	// Add new entry to the binary search tree by node. 
	public boolean isEmpty() {
		return (this.rootNode==null/*  || this.currentSize==0 */);
	}

	// Add new entry to the binary search tree by node. 
	public int getSize() {
		return this.currentSize;
	}


	// Add new entry to the binary search tree by value. 
	public void addValue(int newvalue) {
		System.out.println("Add new value: " + newvalue );

		// Create new node. 
		Node newNode = new Node(newvalue);

		// Add new node to tree. 
		addNode( newNode );
	}

	// Add new entry to the binary search tree by node. 
	public void addNode(Node newNode) {

		// If tree empty, set new node as root node. 
		if( this.isEmpty() ) {
			rootNode = newNode;
		}

		// If tree not empty, add new node as a child node. 
		else {

			// TODO: This is where the issue is. 
			if( newNode.getDataValue() <= rootNode.getDataValue() ) {
				rootNode.setLeftChildByNode(newNode);
			}
	
			// TODO: This is where the issue is. 
			else {
				rootNode.setRightChildByNode(newNode);
			}
		}

		// Increment tree size. 
		this.currentSize++;
	}



	// Traverse binary search tree (inorder LVR). 
	public String traverseTreeLVR() {

		// Start recursive process of tree traversal. 
		return traverseSubTreeLVR(rootNode);
	}
	// Traverse binary search tree (inorder LVR). 
	private String traverseSubTreeLVR(Node n) {

		// Initialize result. 
		StringBuffer result = new StringBuffer("");

		// Check for left child node. 
		if( n.hasLeftChildNode() ) {
			
			// Get left child node. 
			Node leftChildNode = n.getLeftChildNode();

			// Print value of left subtree. 
			result.append( traverseSubTreeLVR( leftChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Print value. 
		result.append( n.getDataValue() );

		// Add space. 
		result.append(' ');

		// Check for right child node. 
		if( n.hasRightChildNode() ) {
			
			// Get right child node. 
			Node rightChildNode = n.getRightChildNode();

			// Print value of right subtree. 
			result.append( traverseSubTreeLVR( rightChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Return result. 
		return result.toString();
	}


	// Traverse binary search tree (inorder RVL). 
	public String traverseTreeRVL() {

		// Start recursive process of tree traversal. 
		return traverseSubTreeRVL(rootNode);
	}
	// Traverse binary search tree (inorder RVL). 
	private String traverseSubTreeRVL(Node n) {

		// Initialize result. 
		StringBuffer result = new StringBuffer("");

		// Check for right child node. 
		if( n.hasRightChildNode() ) {
			
			// Get right child node. 
			Node rightChildNode = n.getRightChildNode();

			// Print value of right subtree. 
			result.append( traverseSubTreeRVL( rightChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Print value. 
		result.append( n.getDataValue() );

		// Add space. 
		result.append(' ');

		// Check for left child node. 
		if( n.hasLeftChildNode() ) {
			
			// Get left child node. 
			Node leftChildNode = n.getLeftChildNode();

			// Print value of left subtree. 
			result.append( traverseSubTreeRVL( leftChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Return result. 
		return result.toString();
	}


	// Traverse binary search tree (preorder VLR). 
	public String traverseTreeVLR() {

		// Start recursive process of tree traversal. 
		return traverseSubTreeVLR(rootNode);
	}
	// Traverse binary search tree (preorder VLR). 
	private String traverseSubTreeVLR(Node n) {

		// Initialize result. 
		StringBuffer result = new StringBuffer("");

		// Print value. 
		result.append( n.getDataValue() );

		// Add space. 
		result.append(' ');

		// Check for left child node. 
		if( n.hasLeftChildNode() ) {
			
			// Get left child node. 
			Node leftChildNode = n.getLeftChildNode();

			// Print value of left subtree. 
			result.append( traverseSubTreeVLR( leftChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Add space. 
		result.append(' ');

		// Check for right child node. 
		if( n.hasRightChildNode() ) {
			
			// Get right child node. 
			Node rightChildNode = n.getRightChildNode();

			// Print value of right subtree. 
			result.append( traverseSubTreeVLR( rightChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Return result. 
		return result.toString();
	}


	// Traverse binary search tree (preorder VRL). 
	public String traverseTreeVRL() {

		// Start recursive process of tree traversal. 
		return traverseSubTreeVRL(rootNode);
	}
	// Traverse binary search tree (preorder VRL). 
	private String traverseSubTreeVRL(Node n) {

		// Initialize result. 
		StringBuffer result = new StringBuffer("");

		// Print value. 
		result.append( n.getDataValue() );

		// Add space. 
		result.append(' ');

		// Check for right child node. 
		if( n.hasRightChildNode() ) {
			
			// Get right child node. 
			Node rightChildNode = n.getRightChildNode();

			// Print value of right subtree. 
			result.append( traverseSubTreeVRL( rightChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Check for left child node. 
		if( n.hasLeftChildNode() ) {
			
			// Get left child node. 
			Node leftChildNode = n.getLeftChildNode();

			// Print value of left subtree. 
			result.append( traverseSubTreeVRL( leftChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Return result. 
		return result.toString();
	}


	// Traverse binary search tree (postorder LRV). 
	public String traverseTreeLRV() {

		// Start recursive process of tree traversal. 
		return traverseSubTreeLRV(rootNode);
	}
	// Traverse binary search tree (postorder LRV). 
	private String traverseSubTreeLRV(Node n) {

		// Initialize result. 
		StringBuffer result = new StringBuffer("");

		// Check for left child node. 
		if( n.hasLeftChildNode() ) {
			
			// Get left child node. 
			Node leftChildNode = n.getLeftChildNode();

			// Print value of left subtree. 
			result.append( traverseSubTreeLRV( leftChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Check for right child node. 
		if( n.hasRightChildNode() ) {
			
			// Get right child node. 
			Node rightChildNode = n.getRightChildNode();

			// Print value of right subtree. 
			result.append( traverseSubTreeLRV( rightChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Print value. 
		result.append( n.getDataValue() );

		// Add space. 
		result.append(' ');

		// Return result. 
		return result.toString();
	}


	// Traverse binary search tree (postorder RLV). 
	public String traverseTreeRLV() {

		// Start recursive process of tree traversal. 
		return traverseSubTreeRLV(rootNode);
	}
	// Traverse binary search tree (postorder RLV). 
	private String traverseSubTreeRLV(Node n) {

		// Initialize result. 
		StringBuffer result = new StringBuffer("");

		// Check for right child node. 
		if( n.hasRightChildNode() ) {
			
			// Get right child node. 
			Node rightChildNode = n.getRightChildNode();

			// Print value of right subtree. 
			result.append( traverseSubTreeRLV( rightChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Check for left child node. 
		if( n.hasLeftChildNode() ) {
			
			// Get left child node. 
			Node leftChildNode = n.getLeftChildNode();

			// Print value of left subtree. 
			result.append( traverseSubTreeRLV( leftChildNode ) );

			// Add space. 
			result.append(' ');
		}

		// Print value. 
		result.append( n.getDataValue() );

		// Return result. 
		return result.toString();
	}
}
