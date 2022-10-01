const uuid = () => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substring(2);
  
  return head + tail;
}

uuid();

const generateQuickGuid = () => {
  return Math.random().toString(36).substring(2, 15) +
         Math.random().toString(36).substring(2, 15);
}

generateQuickGuid();

const uuidV4 = (valor: number) => {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

  var uuid = [], rnd = Math.random, r;
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
  uuid[14] = '4'; // version 4

  for (var i = 0; i < valor; i++) {
    if (!uuid[i]) {
      r = 0 | rnd()*16;
      uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8: r & 0xf];
    }
  }

  return uuid.join('');
}

uuidV4(36);

var rand = Math.random;
function UUID() {
  var nbr, randStr = "";
  
  do {
    randStr += (nbr = rand()).toString(16).substring(3, 6);
  } while (randStr.length < 30);
  
  return (
    randStr.substring(0, 8) + "-" +
    randStr.substring(8, 4) + "-4" +
    randStr.substring(12, 3) + "-" +
    ((nbr*4|0)+8).toString(16) + // [89ab]
    randStr.substring(15, 3) + "-" +
    randStr.substring(18, 12)
  );
}

UUID();