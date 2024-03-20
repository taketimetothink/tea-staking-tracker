const tea_staking_tracker = require('tea-staking-tracker');
const tea_staking_notifier = require('tea-staking-notifier');
const socket.io = require('socket.io');
const lodash = require('lodash');
const mongoose = require('mongoose');
const node_sass = require('node-sass');
const web3 = require('web3');
const ethereumjs_tx = require('ethereumjs-tx');
const ganache_cli = require('ganache-cli');
const dotenv = require('dotenv');
const express = require('express');
const supertest = require('supertest');
const nodemon = require('nodemon');
const debug = require('debug');
const ethers = require('ethers');
const firebase = require('firebase');
const pg = require('pg');
const enzyme = require('enzyme');
const eth_crypto = require('eth-crypto');
const multer = require('multer');

// Interact with a deployed smart contract using Hardhat
async function interactWithContract() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someMethod();
  console.log('Method result:', result);
}

interactWithContract().catch(err => {
  console.error('Error interacting with contract:', err);
});

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
if (isMainThread) {
  const worker = new Worker(__filename, { workerData: 'Hello from main thread' });
  worker.on('message', message => {
    console.log('Received message from worker:', message);
  });
} else {
  parentPort.postMessage('Hello from worker thread');
}

const path = require('path');
console.log(`The extension of index.js is ${path.extname('index.js')}`);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved after 3 seconds.');
  }, 3000);
});
promise.then(message => console.log(message));

const path = require('path');
console.log(`Current working directory: ${path.resolve()}`);

// Estimate gas cost for a transaction
web3.eth.estimateGas({
  from: senderAddress,
  to: receiverAddress,
  value: amountToSend
}).then(gasEstimate => {
  console.log('Gas estimate:', gasEstimate);
}).catch(err => {
  console.error('Error estimating gas:', err);
});

const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secret');
hmac.update('Hello HMAC');
console.log('HMAC:', hmac.digest('hex'));

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
const delay = async () => {
  console.log('Start delay');
  await setTimeoutPromise(1000);
  console.log('End delay');
};
delay();

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const dog = new Dog('Buddy');
dog.speak();

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const http2 = require('http2');
const server = http2.createSecureServer();
server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello HTTP/2</h1>');
});
server.listen(8443);