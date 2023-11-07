// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Marketplace is ERC721URIStorage {
    uint256 public tokenIdCounter;

    mapping(uint256 => address) public _tokenSellers;
    mapping(uint256 => uint256) public _tokenPrices;
    mapping(uint256 => uint256) public _tokenRoyalty;
    mapping(uint256 => bool) public _tokenExists;

    constructor() ERC721("APPAVENGER", "AVENGER") {}

    function mint(address _to, uint256 _price, uint256 _royalty, string calldata _uri) external returns (uint256) {
        tokenIdCounter++;
        uint256 newTokenId = tokenIdCounter;
        _mint(_to, newTokenId);
        _setTokenURI(newTokenId, _uri);

        _tokenSellers[newTokenId] = _to;
        _tokenPrices[newTokenId] = _price;
        _tokenRoyalty[newTokenId] = _royalty;
        _tokenExists[newTokenId] = true;

        return newTokenId;
    }

    function setTokenPrice(uint256 _tokenId, uint256 _price) external {
        require(ownerOf(_tokenId) == msg.sender, "Market: Caller is not the token owner");
        _tokenPrices[_tokenId] = _price;
    }

   function buyNFT(uint256 _tokenId) external payable {
     require(_tokenExists[_tokenId], "Market: Token not found");

    address payable seller = payable(_tokenSellers[_tokenId]);
    uint256 price = _tokenPrices[_tokenId];
 
    uint256 royalty = (_tokenRoyalty[_tokenId] * price) / 100 ;

    address buyer = msg.sender;

    if (_tokenSellers[_tokenId] != ownerOf(_tokenId)) {
        address payable originalOwner = payable(ownerOf(_tokenId));
        originalOwner.transfer(royalty); // Transfer royalty to the original token owner
    }

    seller.transfer(price - royalty); // Transfer the remaining amount to the seller

    _transfer(seller, buyer, _tokenId); // Transfer ownership of the token

    _tokenSellers[_tokenId] = buyer; // Update the seller to the buyer
    _tokenPrices[_tokenId] = 0; // Remove the token from sale

    emit Transfer(seller, buyer, _tokenId); // Emit transfer event
}

    function getTokenPrice(uint256 _tokenId) external view returns (uint256) {
        return _tokenPrices[_tokenId];
    }

    function getTokenRoyalty(uint256 _tokenId) external view returns (uint256) {
        return _tokenRoyalty[_tokenId];
    }
}