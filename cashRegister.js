function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;
  let cidTotal = 0;
  for ( let elem of cid){
    cidTotal += elem[1]*100;
  }
  if (change > cidTotal){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if ( change == cidTotal){
    return {status: "CLOSED", change: cid};
  } else {
    let none = [];
    cid = cid.reverse();
    let money = {
  "ONE HUNDRED": 10000,
  "TWENTY": 2000,
  "TEN": 1000,
  "FIVE": 500,
  "ONE": 100,
  "QUARTER": 25,
  "DIME": 10,
  "NICKEL": 5,
  "PENNY": 1
}
    for ( let elem of cid){
      let trash = [elem[0], 0];
      elem[1] = elem[1]*100;
      while (change >= money[elem[0]] && elem[1] > 0){
        change -= money[elem[0]];
        elem[1] -= money[elem[0]];
        trash[1] += money[elem[0]]/100;
       }
       if ( trash[1] > 0){
         none.push(trash);
       }
      }
      if (change > 0){
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change: none};
  } 
  }

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
