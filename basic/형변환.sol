// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract  my {

    // uint으로 선언된 것은 uin256과 같다 
    // 다만 uint256을 uint 8로 바꾸려면 에러가 난다
    // 아래의 uint256을 16으로 바꾸어서 진행해 보고 에러를 확인해보자
    uint[4] public numbers = [0,1,2,3];
    uint256 public result;

    function rand(uint guess) public {
        guess = guess % 4;
        result = numbers[guess];
    }
}
