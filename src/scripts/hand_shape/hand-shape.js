class HandShape {
  constructor(element) {
    this.element = element;
  }

  hidden() {
    this.element.style.display = 'none';
  }

  show() {
    this.element.style.display = 'block';
  }
}

export default HandShape;