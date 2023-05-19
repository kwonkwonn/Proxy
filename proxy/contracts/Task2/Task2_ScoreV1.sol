// SPDX-License-Identifier: GPL-3.0
import "./Task2_ScoreStorage.sol";

pragma solidity >= 0.7.0 < 0.9.0;

contract Task2_ScoreV1 {
  Task2_ScoreStorage ss;
  
  constructor (address scoreStorage) {
    ss = Task2_ScoreStorage(scoreStorage);
  }
  
  function incrementScore(uint256 _score) public {
    ss.setScore(_score);
  }

  
}
