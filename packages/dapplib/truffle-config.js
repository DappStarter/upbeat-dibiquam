require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'install loan off seed drift rate pitch essay imitate prison forget gentle'; 
let testAccounts = [
"0xbdcd295c9d1906a0a250f41e1d13e304c58b00489a42384e0308f8b9b2bf02b0",
"0x0bd98bf1ace5bacbc021838b198f4a82b698b8567fefb3fc9090a435bf2276f2",
"0x06e05b1766a44e1119c4474356ffabc3f954a250b36633d6a30674b465d11335",
"0x569e2857a4efdd49c0cc943d8883797e904068c385948a2c72bc4fd0cb901cdb",
"0xfe7d597555c6d62018930bd661228e918ebc146ced5078784cb6389cfb142e4a",
"0x28b0c261b8182f13ce3fda8606839cc3fc68ec02a0b54f3447f9e270a902a658",
"0x548bbe2fb60d5a592e7d7b25ec260716ba460d9b3e3596d79364fe9fe8817012",
"0x00faa1e7b9c6ac1ae92aa15ac3e42c24a7ac5c641e4b7f5dc26f906f550a557d",
"0xaefc845ca2663267713be46595ec1cab9b29390964b38d9e630862aa9fd69893",
"0xe82ddaf7da1a1aaee1533aa7104e1c4ce8402fbf71d54ae0b59a51ab45b7d7af"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

