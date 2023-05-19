// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

contract Task3_ScoreStorage {

  mapping(bytes32=>uint256) uints;
  
  function setUints(bytes32 key, uint256 score) public {
    uints[key] = score;
  }
  
  function getUints(bytes32 key) public view returns(uint256) {
    return uints[key];
  }
}
