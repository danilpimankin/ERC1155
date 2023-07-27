import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";


describe("MultiNFT test", () => {
  let owner: SignerWithAddress, user1: SignerWithAddress, user2: SignerWithAddress, users: SignerWithAddress[];
  let tokenContract: Contract;
  let TokenContract;
  let tokenURI = "something";

  before(async () => {
    [owner, user1, user2, ...users] = await ethers.getSigners();
    TokenContract = await ethers.getContractFactory('MultiNFT');
    tokenContract = await TokenContract.deploy(tokenURI);
  });

  describe("deployment", () => {
    it("mint 10^19 tokens", async () => {
      expect(await tokenContract.balanceOf(owner.address, 0)).to.be.eq(ethers.utils.parseUnits("10", "ether"));
      expect(await tokenContract.uri(0)).to.be.eq(tokenURI);
    });
  });

  describe("functionality test", () => {
    it.only("mint and transfer", async () => {
      await tokenContract.setURI("newURI");
      await tokenContract.mint(user1.address, 1, ethers.utils.parseUnits("10", "ether"))
      expect(await tokenContract.balanceOf(user1.address, 1)).to.be.eq(ethers.utils.parseUnits("10", "ether"));
      expect(await tokenContract.uri(1)).to.be.eq("newURI");

      await tokenContract.connect(user1).safeTransferFrom(user1.address, owner.address, 1, ethers.utils.parseUnits("5", "ether"), 0)
      expect(await tokenContract.balanceOf(user1.address, 1))
      .to.be.equal(ethers.utils.parseUnits("5", "ether")) 
      expect(await tokenContract.balanceOf(owner.address, 1))
      .to.be.equal(ethers.utils.parseUnits("5", "ether"))
    });
  });

});