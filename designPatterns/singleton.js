/**
 * The Singleton Pattern limits the number of instances of a particular object to just one.
 * This single instance is called the singleton.
 *
 * Singletons are useful in situations where system-wide actions need to be coordinated from a single central place.
 * An example is a database connection pool.
 * The pool manages the creation, destruction,
 * and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.
 *
 * Singletons reduce the need for global variables which is particularly important in JavaScript
 * because it limits namespace pollution and associated risk of name collisions.
 *
 * Several other patterns, such as, Factory, Prototype, and Façade are frequently implemented as Singletons when only one instance is needed.
 */
const Singleton = (function (){
  let instance;

  function ProcessManager() {
    this.numProcess = 0;
  }

  function createProcessManager() {
    instance = new ProcessManager();
    return instance;
  }

  function getProcessManager() {
    if (!instance)
      instance = createProcessManager();
    return instance;
  }

  return {
    getProcessManager,
  }
})();

const processManager = Singleton.getProcessManager();
const processManager1 = Singleton.getProcessManager();

//console.log(processManager === processManager1);
