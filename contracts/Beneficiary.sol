/*
 * Hubii Striim
 *
 * Compliant with the Hubii Striim specification v0.12.
 *
 * Copyright (C) 2017-2018 Hubii AS
 */

pragma solidity ^0.4.24;

/**
@title Beneficiary
@notice A recipient of ethers and tokens
*/
contract Beneficiary {
    function receiveEthers(address wallet) public payable;

    //NOTE: 'wallet' must call ERC20.approve first
    function receiveTokens(address wallet, int256 amount, address token) public;
}
