const Blockchain = require("./blockchain");
let feiCoin = new Blockchain();

feiCoin.createNewTransaction(
    "100",
    "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
    "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
);
console.log(feiCoin);
feiCoin.createNewBlock();
console.log(feiCoin);
console.log("\n");
console.log("transakce druhého bloku:", feiCoin.chain[1].transactions);
