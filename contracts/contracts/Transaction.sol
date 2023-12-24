// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transaction {
    uint256 transactionCounter;

    // event to describe the transaction that occured
    event Transfer(address from, address to, uint256 amount, string message, uint256 time, string keyword);

    // structure of a transaction
    struct TransactionInfoStruct {
        address from;
        address to;
        uint256 amount;
        string message;
        uint256 time;
        string keyword;
    }

    function main (address payable _to, uint256 _amount, string memory _message, string memory _keyword) public {
        transactionCounter += 1;
        allTransactions.push(TransactionInfoStruct(msg.sender, _to, _amount, _message, block.timestamp, _keyword));

        emit Transfer(msg.sender, _to, _amount, _message, block.timestamp, _keyword);
    }

    // array to store all the transactions
    TransactionInfoStruct[] allTransactions;

    function getAllTransactions () public view returns (TransactionInfoStruct[] memory) {
        return allTransactions;
    }

    function getTransactionCount () public view returns (uint256) {
        return transactionCounter;
    }

}