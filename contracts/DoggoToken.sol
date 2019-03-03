pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";
import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract DoggoToken is ERC20, DetailedERC20, MintableToken, BurnableToken {

    function DoggoToken(
        string name,
        string symbol,
        uint8 decimals
    )
        BurnableToken()
        MintableToken()
        DetailedERC20(name, symbol, decimals)
        ERC20()
        public
    {}
}