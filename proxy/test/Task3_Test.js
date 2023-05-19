const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Task3-Test", function () {
    async function deployTokenFixture() {
        const Task3_ScoreStorage = await ethers.getContractFactory("Task3_ScoreStorage");
        const Task3_ScoreV1 = await ethers.getContractFactory("Task3_ScoreV1");
        const Task3_ScoreV2 = await ethers.getContractFactory("Task3_ScoreV2");

        //ScoreStorage Deploy
        const ScoreStorage = await Task3_ScoreStorage.deploy();
        await ScoreStorage.deployed();
        //ScoreStorage Contract Address
        const ScoreStorageAddress = ScoreStorage.deployTransaction.creates;     
    
        //ScoreV1 Deploy
        const ScoreV1 = await Task3_ScoreV1.deploy(ScoreStorageAddress);
        await ScoreV1.deployed();

        // ScoreV2 Deploy
        const ScoreV2 = await Task3_ScoreV2.deploy(ScoreStorageAddress);
        await ScoreV2.deployed();        

        //keccak256("score")
        const scorebytes = await ethers.utils.keccak256(ethers.utils.toUtf8Bytes("score"));
       
        //SetScoreV1
        console.log("SetScoreV1(10)");
        await ScoreV1.setScore(10);

        //Check ScoreStorage and Compare to 10
        console.log("Check ScoreStorage: ",await ScoreStorage.getUints(scorebytes));
        expect(await ScoreStorage.getUints(scorebytes)).to.equal(10);

        // Fixtures can return anything you consider useful for your tests
        return { ScoreV1, ScoreV2, Task3_ScoreStorage, ScoreStorage, ScoreStorageAddress, scorebytes };
      }

      it("SetScoreV2", async function() {
        const {ScoreV2, ScoreStorage,scorebytes} = await loadFixture(deployTokenFixture);
        //SetScoreV2(10)
        await ScoreV2.setScore();
        
        //Check ScoreStorage and Compare to 11
        console.log("Get ScoreStorage: ", await ScoreStorage.getUints(scorebytes));
        expect(await ScoreStorage.getUints(scorebytes)).to.equal(11);
      })


  })


