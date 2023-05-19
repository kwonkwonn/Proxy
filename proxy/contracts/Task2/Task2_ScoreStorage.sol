// SPDX-License-Identifier: GPL-3.0

pragma solidity  >= 0.7.0 < 0.9.0;

contract Task2_ScoreStorage {
  uint256 public score;
  
  function setScore(uint256 _score) public {
    score = _score;
  }
  
  function getScore() public view returns(uint256) {
    return score;
  }
}
