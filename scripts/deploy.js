const ethers = hre.ethers

async function main() {
    const baseTokenUri = "ipfs://bafkreifoxg4mux3oourrrambpykjrayyv7k3c23fi4vwe567wbg4inghpy"
    const JirNFT = await ethers.getContractFactory('JirToken')
    const jirNFT = await JirNFT.deploy(baseTokenUri)

    await jirNFT.deployed()

    console.log("Contract's address: ", jirNFT.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });