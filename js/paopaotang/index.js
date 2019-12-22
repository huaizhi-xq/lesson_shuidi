function Player(name, teamColor) {
  this.enemies = []; //敌人
  this.partners = []; //队友
  this.name = name;
  this.teamColor = teamColor;
  this.status = 'live';
}
Player.prototype.win = function() {
  // kill all
  console.log(this.name + 'win');
}
Player.prototype.loose = function() {
  console.log(this.name + 'loose');
}
Player.prototype.die = function() {
  console.log(`${this.name} die`);
  this.status = 'die';
  let all_dead = true; //假设一开始都死了
  for (var i = 0, partner; partner = this.partners[i++];) {
    if (partner.status === 'live'){
      all_dead = false;
      break;
    }
  }
  if (all_dead) {
    for (var i = 0, partner; partner = this.partners[i++];) {
      partner.loose();
    }
    this.loose();
    for (var i = 0, enemy; enemy = this.enemies[i++];){
      enemy.win();
    }
  }
}
// 组队 生成玩家， 工厂类来负责
var players = [];
var playerFactory = function(name, teamColor) {
  var newPlayer = new Player(name, teamColor);
  for (var i = 0, player; player = players[i++];) {
    if (player.teamColor === newPlayer.teamColor) {
      player.partners.push(newPlayer);
      newPlayer.partners.push(player);
    } else {
      player.enemies.push(newPlayer);
      newPlayer.enemies.push(player);
    }
  }
  players.push(newPlayer);
  return newPlayer;
}

var player1 = playerFactory('小一', 'red');
var player2 = playerFactory('小儿', 'red');
var player3 = playerFactory('小彡', 'red');
var player4 = playerFactory('笑死', 'red');
var player5 = playerFactory('小屋', 'blue');
var player6 = playerFactory('小流', 'blue');
var player7 = playerFactory('小器', 'blue');
var player8 = playerFactory('小吧', 'blue');
console.log(player1.partners, player1.enemies);
player1.die();
player2.die();
player3.die();
player4.die();
//  队友是谁 敌人是谁 交给工厂去做