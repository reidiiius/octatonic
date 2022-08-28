#!/usr/bin/env js

"use strict";

var Argonaut = new Object();

Argonaut.ogdoad = {
  agate: {
       j3m6: "92 __ 7C B8 __ AA __ 8B C7 __ 29 44 "
  },
  beryl: {
       k2m6: "93 __ __ 39 54 A2 __ 8C C8 __ 2A 45 ",
       m2j6: "93 E7 __ 39 54 A2 __ 8C C8 __ __ 45 ",
      j34m6: "93 __ 7E 39 54 __ __ 8C C8 __ 2A 45 "
  },
  topaz: {
         p6: "95 __ 77 __ 59 A4 __ 86 CC 68 __ 4A ",
         q2: "95 __ 77 3E 59 A4 __ 86 __ 68 __ 4A ",
         p2: "95 E3 77 __ 59 A4 __ 86 __ 68 __ 4A "
  },
  sapphire: {
         q6: "96 __ 78 __ 5A A5 __ 87 __ 69 24 42 "
  },
  peridot: {
       q2k6: "97 __ 79 34 52 A6 __ 88 __ __ 25 4B ",
      j34q6: "97 __ 79 34 52 __ __ 88 __ 6A 25 4B ",
         q2: "97 __ 79 34 52 A6 __ 88 __ 6A __ 4B ",
      j17q2: "__ __ 79 34 52 A6 __ 88 __ 6A 25 43 ",
       k2q6: "97 __ __ 34 52 A6 __ 88 __ 6A 25 43 ",
       j3q6: "97 __ 79 B4 __ A6 __ 88 __ 6A 25 43 ",
       p2j3: "97 EE 79 B4 __ A6 __ 88 __ 6A __ 4B "
  },
  amethyst: {
         m6: "98 __ 7A __ 5B A7 __ 89 C4 __ 26 4C ",
       q2j6: "98 __ 7A 35 53 A7 __ 89 C4 __ __ 4C ",
       j3p6: "98 __ 7A B5 __ A7 __ 89 C4 62 __ 4C "
  },
  onyx: {
       k1m6: "__ E4 72 __ 5C A8 __ 8A C5 __ 27 4E ",
       j2m6: "99 E4 __ __ 5C A8 __ 8A C5 __ 27 4E ",
       j2p6: "99 E4 __ __ 5C A8 __ 8A C5 63 __ 4E ",
         m2: "99 E4 __ 36 5C A8 __ 8A __ 6B __ 4E ",
       m2j6: "99 E4 __ 36 5C A8 __ 8A C5 __ __ 4E ",
      j23q6: "99 E4 __ B6 __ A8 __ 8A __ 6B 27 4E ",
      j23m6: "99 E4 __ B6 __ A8 __ 8A C5 __ 27 4E ",
      j23p6: "99 E4 __ B6 __ A8 __ 8A C5 63 __ 4E ",
         p2: "99 E4 72 __ 5C A8 __ 8A __ 6B __ 4E ",
       p2j6: "99 E4 72 __ 5C A8 __ 8A C5 __ __ 4E ",
       p2j3: "99 E4 72 B6 __ A8 __ 8A __ 6B __ 4E "
  },
  heliotrope: {
      j23p6: "9C E8 __ BA __ AB __ 8E C9 64 __ 46 "
  }
};

Argonaut.orthodigraph = {
  gj: function(qp) {return(qp.slice(18,36).concat(qp.slice(0,18)))},
  dj: function(qp) {return(qp.slice( 3,36).concat(qp.slice(0, 3)))},
  aj: function(qp) {return(qp.slice(24,36).concat(qp.slice(0,24)))},
  ej: function(qp) {return(qp.slice( 9,36).concat(qp.slice(0, 9)))},
  bj: function(qp) {return(qp.slice(30,36).concat(qp.slice(0,30)))},
  fn: function(qp) {return(qp.slice(15,36).concat(qp.slice(0,15)))},
  cn: function(qp) {return(qp.slice( 0,36).concat(qp.slice(0, 0)))},
  gn: function(qp) {return(qp.slice(21,36).concat(qp.slice(0,21)))},
  dn: function(qp) {return(qp.slice( 6,36).concat(qp.slice(0, 6)))},
  an: function(qp) {return(qp.slice(27,36).concat(qp.slice(0,27)))},
  en: function(qp) {return(qp.slice(12,36).concat(qp.slice(0,12)))},
  bn: function(qp) {return(qp.slice(33,36).concat(qp.slice(0,33)))},
  fk: function(qp) {return(qp.slice(18,36).concat(qp.slice(0,18)))},
  ck: function(qp) {return(qp.slice( 3,36).concat(qp.slice(0, 3)))},
  gk: function(qp) {return(qp.slice(24,36).concat(qp.slice(0,24)))},
  dk: function(qp) {return(qp.slice( 9,36).concat(qp.slice(0, 9)))},
  ak: function(qp) {return(qp.slice(30,36).concat(qp.slice(0,30)))}
};

Argonaut.gamut = function(ndx, qp) {
  var sym = "orthodigraph";
  var arr = [
    this[sym].fn(qp),
    this[sym].cn(qp),
    this[sym].gn(qp),
    this[sym].dn(qp),
    this[sym].an(qp),
    this[sym].en(qp),
    this[sym].bn(qp),
    this[sym].fk(qp),
    this[sym].ck(qp),
    this[sym].gk(qp),
    this[sym].dk(qp),
    this[sym].ak(qp)
  ];
  return arr[ndx];
};

Argonaut.chronoMetric = function() {
  var nwdt = new Date();
  return nwdt.getTime();
};

Argonaut.serialStamp = Argonaut.chronoMetric();

Argonaut.inStrum = function() {
  var t = arguments[0], a = arguments[1].reverse();
  var s = "\t", h = "-", g, i, j, k, m;
  for (i in this.ogdoad) {
    g = i.slice( 0, 4);
    for (j in this.ogdoad[i]) {
      m = s + g + h + j + h + t + "-v" + this.serialStamp;
      console.log("\n" + m);
      for (k = 0; k < a.length; k++) {
        console.log(s + this.gamut(a[k], this.ogdoad[i][j]));
      }
      console.log();
    }
  }
};

Argonaut.cxliv = function() {
  var headstock = [];
  for (var i = 11; i >= 0; i--) headstock.push(i);
  this.inStrum('cxliv', headstock);
};

Argonaut.beadgcf = function() {
  this.inStrum('beadgcf', [6, 5, 4, 3, 2, 1, 0]);
};

Argonaut.bfbfb = function() {
  this.inStrum('bfbfb', [6, 0, 6, 0, 6]);
};

Argonaut.cgdae = function() {
  this.inStrum('cgdae', [1, 2, 3, 4, 5]);
};

Argonaut.dadgad = function() {
  this.inStrum('dadgad', [3, 4, 3, 2, 4, 3]);
};

Argonaut.dgdgbd = function() {
  this.inStrum('dgdgbd', [3, 2, 3, 2, 6, 3]);
};

Argonaut.eadgbe = function() {
  this.inStrum('eadgbe', [5, 4, 3, 2, 6, 5]);
};

Argonaut.fkbjdn = function() {
  this.inStrum('fkbjdn', [7, 11, 3, 7, 11, 3]);
};

console.log();

const argots = process.argv.slice(2);

if (argots.length > 0) {

  switch (argots[0]) {
    case "beadgcf" :
      Argonaut.beadgcf();
      break;
    case "bfbfb" :
      Argonaut.bfbfb();
      break;
    case "cgdae" :
      Argonaut.cgdae();
      break;
    case "dadgad" :
      Argonaut.dadgad();
      break;
    case "dgdgbd" :
      Argonaut.dgdgbd();
      break;
    case "eadgbe" :
      Argonaut.eadgbe();
      break;
    case "fkbjdn" :
      Argonaut.fkbjdn();
      break;
    default :
      Argonaut.eadgbe();
  }
}
else {
  Argonaut.eadgbe();
}

console.log();

