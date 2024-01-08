// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Space is ERC721A, Ownable {
    
    string public baseUrl;
    string public prompt;

    constructor() ERC721A("Space", "Spc") {
        baseUrl = "https://gateway.pinata.cloud/ipfs/QmUHVj7XKfSsjBfzfcnxhfY2C8hv7pvABWxbZ3WwT3EG9N/";
        prompt = "robots reading Sanskrit scripts in outer space to restore Earth";
    }

    // Function to mint NFTs accessible by owner only
    function mint( uint256 num_of_nft ) external onlyOwner {
        
        _mint(msg.sender, num_of_nft);
    
    }

    //  function to return the base URL for the NFTs gnerated
    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    // Return the prompt that is given to generate the NFTs
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
