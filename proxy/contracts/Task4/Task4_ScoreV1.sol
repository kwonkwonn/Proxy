// SPDX-License-Identifier: GPL-3.0

import "./Task4_ProxyStorage.sol";
import "./Task4_ScoreStorage.sol";

pragma solidity >= 0.7.0 < 0.9.0;

contract Task4_ScoreV1 is Task4_ProxyStorage, Task4_ScoreStorage {

    function setScore(uint256 _score) public {
        score = _score;
    }
    
    function getEncodedSignature(string memory _func, uint256 num) 
        external 
        pure
        returns(bytes memory) {
        return abi.encodeWithSignature(_func, num);
        }
}

