import logo from './logo.svg';
import './App.css';


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

function printTree(root) {

  if (root == null) {
    return
  }
  console.log(root.val);

  if (root.left != null) {
    printTree(root.left);
  }
  if (root.right != null) {
    printTree(root.right);
  }

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

  const root = new treeNode(null, null, Math.floor(getRandomArbitrary(0, 3)));
  for (let i = 1; i < nums; i++) {
    let random = getRandomArbitrary(bottom, top);

    let currNode = new treeNode(null, null, Math.floor(random));

    insertNode(root, currNode);
    bottom = random + 1;
    top = bottom + 3;
  }
  //printTree(root);
  return root
}


function renderTree() {
  const root = buildOrderedTree(10);


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

export default App;
