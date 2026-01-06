let totalBill = 1000;
let tipsPercentage = 10;
let tipsAmount = ((tipsPercentage * totalBill)/100)
let totalSplitAmount = totalBill+tipsAmount;
let friendsCount = 4
let shareAmount = (totalSplitAmount/friendsCount)
console.log('Share Amount :'+shareAmount);
