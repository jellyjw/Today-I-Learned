class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  // 찾는것
  contains(value) {
    if (this.value === value) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      const chileNode = this.children[i];
      if (chileNode.contains(value)) {
        return true;
      }
    }
    return false;
  }
}
