/**
 * The Observer pattern offers a subscription model in which objects subscribe
 * to an event and get notified when the event occurs.
 * This pattern is the cornerstone of event driven programming, including JavaScript.
 * The Observer pattern facilitates good object-oriented design and promotes loose coupling.
 *
 * When building web apps you end up writing many event handlers.
 * Event handlers are functions that will be notified when a certain event fires.
 * These notifications optionally receive an event argument with details about the event
 * (for example the x and y position of the mouse at a click event).
 *
 * The event and event-handler paradigm in JavaScript is the manifestation of the Observer design pattern.
 * Another name for the Observer pattern is Pub/Sub, short for Publication/Subscription.
 */
class Subject {
  constructor(observes = []) {
    this.observers = observes;
  }

  unSubscribe(fn) {
    return this.observers = this.observers.filter(item => item !== fn);
  }

  subscribe(fn) {
    this.observers.push(fn);

    return () => this.unSubscribe(fn);
  }

  notify() {
    this.observers.forEach(item => item.call());
  }
}

const fn1 = () => console.log('fn1 is notify');
const fn2 = () => console.log('fn2 is notify');

/* create new instance of Subject */
const sb = new Subject();

sb.subscribe(fn1);
sb.subscribe(fn2);
//sb.notify();
