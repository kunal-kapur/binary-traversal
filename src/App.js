import logo from './logo.svg';
import './App.css';
import './tree.css';


class treeNode {
  constructor(left, right, val) {
    this.left = left;
    this.right = right;
    this.val = val
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


function insertNode(root, givenNode) {
  if (root == null) {
    return
  }
  let currNode = root;
  while (true) {
    if (givenNode.val <= currNode.val) {
      if (currNode.left == null) {
        currNode.left = givenNode;
        break;
      }
      currNode = currNode.left;
    }
    else {
      if (currNode.right == null) {
        currNode.right = givenNode;
        break;
      }
      currNode = currNode.right;
    }
  }

}

function buildOrderedTree(nums) {
  const nodeVals = [];
  let bottom = 4;
  let top = 7;

  let prevNode = null;

  const root = new treeNode(null, null, Math.floor(getRandomArbitrary(0, 50)));
  for (let i = 1; i < nums; i++) {
    let random = getRandomArbitrary(0, 50);

    let currNode = new treeNode(null, null, Math.floor(random));

    insertNode(root, currNode);
    bottom = random + 1;
    top = bottom + 3;
  }
  //printTree(root);
  return root
}


function printTree(root, direction) {

  if (root == null) {
    return
  }

  console.log(root.val);

  let name = "node-area"

  if (direction == 1) {
    name += " left"
  }
  else if (direction == 2) {
    name += " right"
  }

  return (
    <div className={name} id={root.val}>
      <div className="node-container">
        <div className="node">{root.val}</div>
        {direction == 1 &&
          <div className="line-wrapper left"></div>}

        {direction == 2 && <div className="line-wrapper right"></div>}
      </div>
      {root.left != null && printTree(root.left, 1)}

      {root.right != null && printTree(root.right, 2)}
    </div>
  );
}

function preorder(root) {
  if (root == null) {
    return;
  }
  setTimeout(null);
  //root.style.color = "mediumspringgreen";
  preorder(root.left);
  preorder(root.right);

}

setTimeout(function () {

}, 1000);


function RenderTree() {
  const root = buildOrderedTree(5);
  console.log(root);
  preorder(root);
  return printTree(root, 0);
}





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export { App, RenderTree };

