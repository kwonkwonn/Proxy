const { expect } = require("chai");


describe("Task4-Test", function () {
    it("ProxyContract", async function() {
        const Task4_Proxy = await ethers.getContractFactory("Task4_Proxy");
        const Task4_ScoreV1 = await ethers.getContractFactory("Task4_ScoreV1");
        const Task4_ScoreV2 = await ethers.getContractFactory("Task4_ScoreV2");
        [owner] = await ethers.getSigners();

        //ScoreV1 Deploy
        const ScoreV1 = await Task4_ScoreV1.connect(owner).deploy();
        await ScoreV1.deployed();
        //V1 Contract Address
        const ScoreV1Address = await ScoreV1.deployTransaction.creates;
        
        // ScoreV2 Deploy
        const ScoreV2 = await Task4_ScoreV2.connect(owner).deploy();
        await ScoreV2.deployed();
        //V2 Contract Address
        const ScoreV2Address = await ScoreV2.deployTransaction.creates; 
  
        //Proxy Deploy ScoreV1
        const Proxy = await Task4_Proxy.connect(owner).deploy(ScoreV1Address);
        await Proxy.deployed(ScoreV1Address);
        const ProxyContractAddress = Proxy.deployTransaction.creates;

        //function signature (8byte)
        const functionSignature = ethers.utils.solidityKeccak256(["string"],['setScore(uint256)']).substr(0, 10);
        console.log("Function Signature",functionSignature);

        //encodeFunctionData = functionSignature + Data
        let ABI = ["function setScore(uint256 _score) public "];
        let iface = new ethers.utils.Interface(ABI);
        let callData = await iface.encodeFunctionData("setScore",['15']);
        console.log("EncodeFunctionData: ",callData);

        
        //call fallback function
        await owner.sendTransaction({
          to: ProxyContractAddress,
          data: callData
        });

        console.log("V1Score: ",await Proxy.getScore());


        //Proxy upgrade -ScoreV2
        await Proxy.setImplementation(ScoreV2Address);

        //call fallback function
        await owner.sendTransaction({
          to: ProxyContractAddress,
          data: callData
        })

        console.log("V2Score: ",await Proxy.getScore());
      })
  })

