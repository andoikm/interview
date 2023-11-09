/**
 * mediator@ object e vor@ hskum e te vonc en mi qani objectner poxazdum
 * The Mediator pattern provides central authority over a group of objects by encapsulating how these objects interact.
 * This model is useful for scenarios where there is a need to manage complex conditions
 * in which every object is aware of any state change in any other object in the group.
 *
 * The Mediator patterns are useful in the development of complex forms.
 * Take for example a page in which you enter options to make a flight reservation.
 * A simple Mediator rule would be: you must enter a valid departure date, a valid return date,
 * the return date must be after the departure date, a valid departure airport, a valid arrival airport,
 * a valid number of travelers, and only then the Search button can be activated.
 */
function Member(name) {
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  send: function (message, toMember) {
    this.chatroom.send(message, this, toMember);
  },
  receive: function (message, fromMember) {
    //console.log(`${fromMember.name} to ${this.name}, ${message}`);
  }
}

function ChatRoom() {
  this.members = [];
}

ChatRoom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatroom = this;
  },
  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  }
}

const chatRoom = new ChatRoom();

const bob = new Member('Bob');
const jhon = new Member('Jhon');
const tim = new Member('Tim');

chatRoom.addMember(bob);
chatRoom.addMember(jhon);
chatRoom.addMember(tim);

// bob.send('hi Jhon', jhon);
// jhon.send('hi Bob', bob);
// tim.send('hi Jhon, are you ok ?', jhon);
