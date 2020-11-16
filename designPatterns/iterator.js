/**
 * The Iterator pattern allows clients to effectively loop over a collection of objects
 *
 * A common programming task is to traverse and manipulate a collection of objects.
 * These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure.
 * In addition, you may need to access the items in the collection in a certain order,
 * such as, front to back, back to front, depth first (as in tree searches), skip evenly numbered objects, etc.
 */
const items = ['ddd', 1, 2, 1.5, true];

function Iterator(items = []) {
  this.items = items;
  this.index = items.length - 1;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index >= 0;
  },
  next: function () {
    return this.items[this.index--];
  },
};

const iterator = new Iterator(items);

//while (iterator.hasNext())
//  console.log(iterator.next());
