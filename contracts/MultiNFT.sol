// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MultiNFT is ERC1155, Ownable {
    constructor(string memory _URI) ERC1155(_URI) {
        _mint(msg.sender, 0, 10**19, "");
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(
        address account, 
        uint256 id, 
        uint256 amount)
        public
        onlyOwner
    {
        _mint(account, id, amount, "");
    }

}