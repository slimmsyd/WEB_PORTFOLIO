// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

 import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";



error contract_Owner(); 
contract NFT is ERC1155{
    //Assign ID for contract
    uint256 public constant sydNFT = 0; 
    uint256 private immutable i_max_TokenIds = 20000;
    uint private immutable i_price = 0.01 ether; 
    address private immutable i_owner; 

    //Keep track of the tokenIds using a counter 
    uint256 public tokenIds = 0;


    //Get the base URI later 
    string private constant baseURI = "ipfs://QmWQ3h3NNzSHS2RxumvPvd9tjDxHk4u5RDRUN5ovz4QfQs/";

    modifier onlyOwner() 
    {
         //This is for only the owners of contract can withdraw the funds submitted 
         if(i_owner != msg.sender)
         {
            revert contract_Owner();
         }
         _;
    }

    constructor() ERC1155(baseURI)
    {
        i_owner = msg.sender;
    }


    //Mint aka get the nft 
    function mint() payable public 
    {
        require(balanceOf(msg.sender, 0) <= 1," You can't mint no mo");
        require(tokenIds <= i_max_TokenIds, "There are none available for mint!");
        require(msg.value >= i_price, "Send more mony in man!");

        _mint(msg.sender, 0,1, ""); 
        tokenIds++;
    }

    function withdraw() onlyOwner public
    { 
        address owner = i_owner; 
        uint256 amount = address(this).balance;
        (bool sent,) = owner.call{value: amount}("");
        require(sent, "Failed to send crypto");
    }

    //Label some getting functions 
    function getBalanceOfSender() public view returns(uint256)
    { 
        return msg.sender.balance;
    }
    function getBalanceOfTokens(address _sender) public view returns(uint256) { 
        return balanceOf(_sender, 0); 

    }
    function getBalance() public view returns (uint256) { 
        return address(this).balance;
    }
    function getTokenID() public view returns (uint256) { 
        return tokenIds;

    }
    function _baseURI() public pure returns(string memory) { 
        return baseURI;
    }
    function maxTokenIDS() public pure returns(uint256) { 
        return i_max_TokenIds; 
    }


}
