const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Task1-Test", function () {
    async function deployTokenFixture() {
        const ScoreV1 = await ethers.getContractFactory("Task1_ScoreV1");
        const ScoreV2 = await ethers.getContractFactory("Task1_ScoreV2");
        const owner = await ethers.getSigners();
    
        const Task1_ScoreV1 = await ScoreV1.deploy();
        await Task1_ScoreV1.deployed();

        const Task1_ScoreV2 = await ScoreV2.deploy();
        await Task1_ScoreV2.deployed();
    
        // Fixtures can return anything you consider useful for your tests
        return { ScoreV1,ScoreV2, Task1_ScoreV1,Task1_ScoreV2, owner };
      }
  describe("ScoreV1", function (){
    it("setScoreV1", async function () {
      const { Task1_ScoreV1} = await loadFixture(deployTokenFixture);
      console.log("SetScore: 5");
      const result1 = await Task1_ScoreV1.implSetScore(5);
      expect(result1);
      console.log("Get ScoreV1: ",await Task1_ScoreV1.getScore());
    });
  })
  describe("ScoreV2", function (){
  it("setScoreV2", async function () {
      const { Task1_ScoreV2} = await loadFixture(deployTokenFixture);
      console.log("SetScore: 5");
      const result2 = await Task1_ScoreV2.implSetScore(5);
      expect(result2);

      console.log("Get ScoreV2: ",await Task1_ScoreV2.getScore());
    });
  })

});