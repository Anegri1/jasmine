var Bob = function() {
    this.hey = function(greeting) {
      if (isSilent(greeting)) {
        return 'Fine. Be that way!';
      }
      if (isShouting(greeting)) {
        return 'Woah, chill out!';
      }
      if (isInterrogating(greeting)) {
        return 'Sure.';
      }
      return "Whatever.";
    }
  
    var isShouting = function(greeting) {
      return greeting === greeting.toUpperCase();
    }
    var isInterrogating = function(greeting) {
      return greeting.slice(-1) === '?';
    }
    var isSilent = function(greeting) {
      return greeting.trim() === '';
    }
  }
  
  module.exports = Bob;