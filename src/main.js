// AHMET GOCER
// BLOCKCHAIN DEVELOPMENT 
// 06.2021 

const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('2f113e6dfcf9235f1d2e8f13fd8e2500c441301c386975d226af8e28861082d6');
const myWalletAddress = myKey.getPublic('hex');

let gocerCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key', 10);
tx1.signTransaction(myKey);
gocerCoin.addTransaction(tx1);


console.log('\n Starting the miner...');
gocerCoin.minePendingTransactions(myWalletAddress);


console.log('\nBalance of Ahmet is', gocerCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', gocerCoin.isChainValid());

