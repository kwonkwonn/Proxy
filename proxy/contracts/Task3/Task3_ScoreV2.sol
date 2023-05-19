// SPDX-License-Identifier: GPL-3.0

import "./Task3_ScoreStorage.sol";

pragma solidity >= 0.7.0 < 0.9.0;

contract Task3_ScoreV2 {
  
  Task3_ScoreStorage ss;
  
  bytes32 public constant SCORE = keccak256("score");
  
  constructor(address scoreStorage){
    ss = Task3_ScoreStorage(scoreStorage);
  }
  
  function setScore() public {
    ss.setUints(SCORE, ss.getUints(SCORE) + 1);
  }
}
