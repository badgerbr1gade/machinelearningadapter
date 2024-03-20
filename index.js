const responsivegridlayout = require('responsivegridlayout');
const machinelearningadapter = require('machinelearningadapter');
const debug = require('debug');
const mongoose = require('mongoose');
const validator = require('validator');
const express = require('express');
const enzyme = require('enzyme');
const ganache_cli = require('ganache-cli');
const body_parser = require('body-parser');
const underscore = require('underscore');
const sequelize = require('sequelize');
const eth_crypto = require('eth-crypto');
const bcrypt = require('bcrypt');
const ethereumjs_tx = require('ethereumjs-tx');
const supertest = require('supertest');
const react_redux = require('react-redux');
const truffle = require('truffle');
const web3 = require('web3');

const regex = new RegExp('\\bHello\\b');
console.log(regex.test('Hello World'));

// Get the number of uncles for a block in Ethereum by block hash
web3.eth.getBlockUncleCount('0xblockHash').then(uncles => {
  console.log('Number of uncles by block hash:', uncles);
}).catch(err => {
  console.error('Error getting uncles by block hash:', err);
});

const os = require('os');
console.log(`Total memory: ${os.totalmem()} bytes`);

const fs = require('fs');
fs.mkdir('new-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory created successfully');
});

const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

const { Readable } = require('stream');
const inStream = new Readable({
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) { this.push(null); }
  }
});
inStream.currentCharCode = 65;
inStream.pipe(process.stdout);

const fs = require('fs');
const stream = fs.createReadStream('file.txt', 'utf8');
stream.on('data', chunk => {
  console.log('Chunk received:', chunk);
});