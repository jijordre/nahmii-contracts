/*!
 * Hubii - Omphalos
 *
 * Copyright (C) 2017-2018 Hubii AS
 */
pragma solidity ^0.4.21;

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    function Migrations() public {
        owner = msg.sender;
    }

    function setCompleted(uint completed) public onlyOwner {
        last_completed_migration = completed;
    }

    function upgrade(address newAddress) public onlyOwner {
        Migrations upgraded = Migrations(newAddress);
        upgraded.setCompleted(last_completed_migration);
    }

    modifier onlyOwner() {
        require (msg.sender == owner);
        _;
    }
}