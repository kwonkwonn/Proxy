// SPDX-License-Identifier: GPL-3.0

import "./Task4_ProxyStorage.sol";

pragma solidity >= 0.7.0 < 0.9.0;

contract Task4_Proxy is Task4_ProxyStorage {
  
    uint256 public score;
  
    constructor(address _imple) {
        implementation = _imple;
    }
    
    function setImplementation(address _imple) public {
        implementation = _imple;
    }

    function getScore() public view returns(uint256){
        return score;
    }
    
    fallback () external {
        //solium-disable-next-line security/no-inline-assembly
        assembly {
            let ptr := mload(0x40)
            calldatacopy(ptr, 0, calldatasize())
            let result := delegatecall(gas(), sload(implementation.slot), ptr, calldatasize(), 0, 0)
            let size := returndatasize()
            returndatacopy(ptr, 0, size)
            
            switch result
            case 0 { revert(ptr, size) }
            default { return(ptr, size) }
        }
    }
}
