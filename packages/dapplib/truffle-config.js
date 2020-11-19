require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture strong response mean proud inside light army gasp'; 
let testAccounts = [
"0x710795e2a9e76217ee3e8c22e9f192b6c65e66c98729d492085cea7e033c99ff",
"0xc13a853c5df83f2f894c33dc51bad0e061fab60ea1934c320dc8564c2f4f3dfb",
"0x34594a9bf6f37a97d2ecb346a25848031332f3367bc79cba8ba062d2713afdf3",
"0xd4d5f6632a5fd8ab3d5bb208699cf3c66d1f27c82b6d35451ba7bc1595120add",
"0x7201269aae3a2de01264578fd5239568125194c14926956926a7d58999f6bf65",
"0xc68322940d09db5aadb09d496a5a906b09337a6748d08e090d5b1efa10d7c428",
"0x1b35e1e3df16701e738e4d0d93f5f7338a27fc098e8cca7422eeaa6ed2d1f7a3",
"0x1da0284077e5d36a7c47f39798cb7fb7de7a38df736067ba631338781b9eb949",
"0x5b4533a9afaa242e0577e906524dc309daf3630df9c96edd828f965ddc3e48b9",
"0x7125f3cdc6e6d13779250200a1e965cd65b40e08c76598521d14af038da1ea45"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
