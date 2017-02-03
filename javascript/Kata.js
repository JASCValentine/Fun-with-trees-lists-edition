function TreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function ListNode(data, next = null) {
  this.data = data;
  this.next = next;
};

function flatten(root) {
  if (!root) {
    return null;
  }
  
  const tree = (root, set) => {
    if (root) {
      list(root.value, set);
      tree(root.left, set);
      tree(root.right, set);
    }
  };
  const list = (head, set) => {
    if (head) {
      set.add(head.data);
      list(head.next, set);
    }
  };
  
  let set = new Set();
  tree(root, set);
  let arr = Array.from(set).sort((a, b) => a - b);
  
  let head = new ListNode(arr.shift());
  let temp = head;
  for (let i of arr) {
    temp.next = new ListNode(i);
    temp = temp.next;
  }
  
  return head;
};
