pragma solidity >=0.7.0 <0.9.0;

contract  my {

    // contract storage에 선언한 변수들을 저장함
    uint price; //by default 
    string publc location;

    address immutable public owner;

    int constant area = 100;

    // constructor 선언
    // contract 배포시 딱 한 번만 일어남 
    constructor(uint _price, string memory _location) {
        price = _price;
        location = _location;
        owner = msg.owner;
    }

    // 가격을 정하기위한 함수
    function setPrice(uint _price) public {
        int a;
        a = 10;
        price = _price;
    }

    // 지역을 정하기위한 함수
    function setLocation(string memory _location) public {
        location = _location;
    }
}
