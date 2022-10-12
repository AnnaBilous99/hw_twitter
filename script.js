/*********twitter********* */
function twitterUser(someUserName) {
  this.userName = someUserName;
  this.follow_to_me = [];
  this.i_follow = [];

  this.addFollower = function (someUser) {
    this.follow_to_me.push(someUser);
    someUser.i_follow.push(this);
  };

  this.sendMessage = function (myPost) {
    this.follow_to_me.forEach((follower) => {
      follower.getMessage(myPost, this.userName);
    });
  };

  this.getMessage = function (theMessage, sender) {
    console.log(
      this.userName + " got this massage from " + sender + ": " + theMessage
    );
  };
}

let myUser1 = new twitterUser("Michael");
let myUser2 = new twitterUser("Idan");
let myUser3 = new twitterUser("lior");
let myUser4 = new twitterUser("Olga");

myUser1.addFollower(myUser2);
myUser1.addFollower(myUser3);
myUser1.addFollower(myUser4);
myUser2.addFollower(myUser3);
myUser2.addFollower(myUser4);
myUser3.addFollower(myUser4);

myUser1.sendMessage("Hello");
myUser2.sendMessage("Goodbye");
myUser3.sendMessage("mazal tov");
myUser4.sendMessage("whatsapp men?");

console.log("The followers of User1 are: ");
console.log(myUser1.follow_to_me);
console.log("The followers of User2 are: ");
console.log(myUser2.follow_to_me);
console.log("The followers of User3 are: ");
console.log(myUser3.follow_to_me);
console.log("The followers of User4 are: ");
console.log(myUser4.follow_to_me);
