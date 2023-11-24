interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

// concrete observable
class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}
  
  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }

  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}

// concrete observer
class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;    
    }
  }
}

// cliente code
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

const input = new InputObservable(makeInput());
const input2 = new InputObservable(makeInput());


