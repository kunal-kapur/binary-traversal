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
      if (currNode.left == null) {
        currNode.left = givenNode;
        break;
      }
      currNode = currNode.left;

    }
  }

}

function buildOrderedTree(nums) {
  nodeVals = [];
  bottom = 0;
  top = 3;

  prevNode = null;


  for (let i = 0; i < nums; i++) {
    let random = getRandomArbitrary(bottom, top);

    const currNode = new treeNode(null, null, random);
    if (i == 0) {

    }

    bottom = random + 1
    top = bottom + 3
  }

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
