const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const keythereum = require('keythereum');
const path = require('path');
const findUp = require('find-up');

module.exports = {
    networks: {
        'development': {
            host: 'localhost',
            port: 8545,
            network_id: '*',
            gas: 8000000
        },
        'develop': {
            host: 'localhost',
            port: 9545,
            network_id: '*',
            gas: 8000000
        },
        'ganache': {
            host: 'localhost',
            port: 7545,
            network_id: '*',
            gas: 8000000
        },
        'ganache-cli': {
            host: 'localhost',
            port: 8545,
            network_id: '*',
            gas: 8000000
        },
        'ropsten': {
            provider: () => {
                console.log(`cwd: ${process.cwd()}`);
                const dataDir = path.dirname(findUp.sync('keystore', {type: 'directory'}));
                const keyObject = keythereum.importFromFile(process.env.ETH_TESTNET_ACCOUNT, dataDir);
                const privateKey = keythereum.recover(process.env.ETH_TESTNET_SECRET, keyObject).toString('hex');
                return new HDWalletProvider(privateKey, 'https://geth-ropsten.dev.hubii.net')
            },
            network_id: '3',
            gas: 8000000
        },
        'ropsten-infura': {
            provider: () => {
                const dataDir = path.dirname(findUp.sync('keystore', {type: 'directory'}));
                const keyObject = keythereum.importFromFile(process.env.ETH_TESTNET_ACCOUNT, dataDir);
                const privateKey = keythereum.recover(process.env.ETH_TESTNET_SECRET, keyObject).toString('hex');
                return new HDWalletProvider(privateKey, 'https://ropsten.infura.io/v3/36deff216fd744b9bfba9f884df9fdc3')
            },
            network_id: '*',
            gas: 8000000
        },
        'rinkeby': {
            host: 'geth-rinkeby.ethereum',
            port: 80,
            network_id: '*',
            gas: 8000000
        },
        'mainnet': {
            host: 'geth-homestead.ethereum',
            port: 80,
            network_id: '1',
            gas: 8000000
        },
        'mainnet-infura': {
            provider: () => {
                const keyObject = keythereum.importFromFile(process.env.ETH_MAINNET_ACCOUNT, '.');
                const privateKey = keythereum.recover(process.env.ETH_MAINNET_SECRET, keyObject).toString('hex');
                return new HDWalletProvider(privateKey, 'https://mainnet.infura.io/v3/36deff216fd744b9bfba9f884df9fdc3')
            },
            network_id: '*',
            gas: 8000000
        },
        'mainnet-hubii': {
            host: 'ethereum.hubii.com',
            port: 8545,
            network_id: '1',
            gas: 8000000
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 0
        }
    },
    mocha: {
        reporter: process.env.MOCHA_REPORTER || 'spec'
    }
};
