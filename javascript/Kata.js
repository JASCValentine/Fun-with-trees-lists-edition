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
  if(!root) return null;
  
  let arr = traverse(root);
  let uniqueArray = [];
  
  // eliminate the duplicate elements
  for(let ele of arr){
  
    if(uniqueArray.indexOf(ele) == -1){
      uniqueArray.push(+ele);
    }
  }
  
  // sort
  uniqueArray.sort((a, b) => {return a-b});
  
  // to list
  return toList(uniqueArray);
};

function traverse(root){
  let valueArray = [], leftArray = [], rightArray = [];
  
  // get all elements from value
  let value = root.value;
  while(value){
    valueArray.push(value.data);
    value = value.next;
  }
  
  // get all elements from left
  if(root.left){
    leftArray = traverse(root.left);
  }
  
  // get all elements from right
  if(root.right){
    rightArray = traverse(root.right);
  }
 
  // get all elements
  return valueArray.concat(leftArray).concat(rightArray);
};

function toList(arr){
  if(arr.length == 0) return null;
  let l = new ListNode(arr.shift());
  l.next = toList(arr);
  return l;
};
