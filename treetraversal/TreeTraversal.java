


// Alex Titus
// CS 316 (Spr23)


// Binary Search Tree Depth-First Traversal
public class TreeTraversal {

	// Traversal a binary search tree in six different ways. 
	public static void main(String[] args) {

		// Get user input. 
		System.out.print("\n\nPlease enter your input:  ");
		String sampleuserinput = "23 10 30 5 15 25 40 1 8";
		// kb.nextInt();
		// System.out.println( sampleuserinput );

		// Get list of user input numbers. 
		String[] sampleuserinputlist = sampleuserinput.split(" ");
		printList(sampleuserinputlist);

		// Create binary search tree. 
		BinarySearchTree bst = new BinarySearchTree();
		// Add list elements. 
		for(int i=0 ; i<sampleuserinputlist.length ; i++) {

			// Check size before data entry. 
			// System.out.println("Size (before): " + bst.getSize() );

			// Get value for data entry. 
			int datavalue = Integer.parseInt( sampleuserinputlist[i] );

			// Add data entry to tree. 
			bst.addValue( datavalue );

			// Check size after data entry. 
			// System.out.println("Size (after): " + bst.getSize() );
		}

		// 
		System.out.println("\n\nbst: " + bst );
		System.out.println("Size: " + bst.getSize() );
		

		// Display depth-first traversals. 
		System.out.println("\n\nBinary Search Tree Depth-First Traversals");
		System.out.println("---------------------------------------------");
		System.out.println("1) Inorder LVR -> " + bst.traverseTreeLVR() );
		System.out.println("2) Inorder RVL -> " + bst.traverseTreeRVL() );
		System.out.println("3) Preorder VLR -> " + bst.traverseTreeVLR() );
		System.out.println("4) Preorder VRL -> " + bst.traverseTreeVRL() );
		System.out.println("5) Postorder LRV -> " + bst.traverseTreeLRV() );
		System.out.println("6) Postorder RLV -> " + bst.traverseTreeRLV() );
		System.out.println();
		System.out.println();
	}

	// Print list. 
	public static void printList(String[] list) {

		// Open list. 
		System.out.print("[");

		// Print list elements. 
		for(int i=0 ; i<list.length ; i++) {
			System.out.print( " " + list[i] );
		}

		// Close list. 
		System.out.println(" ]");
	}

}

