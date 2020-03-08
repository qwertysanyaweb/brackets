module.exports = function check(str, bracketsConfig) {
  let strCheck = [];

  bracketsConfig.forEach(element => {
    strCheck.push(element.join(''));
  });

  for(let i=0; i < strCheck.length;){
    if(str.includes(strCheck[i])){
      str = str.replace(strCheck[i],'');
      i = 0;
    } else i++;
  }

  return (str.length == 0) ? true : false
}
