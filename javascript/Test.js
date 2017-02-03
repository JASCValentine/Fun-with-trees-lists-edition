describe("flatten", function() {

  // _testFlatten(input_tree_root, expected_list_head)

  it("null tree", function() {
    _testFlatten(null, null);
  });
  
  it("example tree", function() {
    let l1 = new ListNode(17, new ListNode(1));
    let l2 = new ListNode(3);
    let l3 = new ListNode(1);
    let l4 = new ListNode(2);
    let l5 = new ListNode(16);
    let l6 = new ListNode(7, new ListNode(3));
    let root = new TreeNode(l1, new TreeNode(l2, new TreeNode(l4)), new TreeNode(l3, new TreeNode(l5), new TreeNode(l6)));
    
    let expected = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(7, new ListNode(16, new ListNode(17))))));
    _testFlatten(root, expected);
  });
  
});