import {ethers, run, network} from 'hardhat'

const delay = async (time: number) => {
	return new Promise((resolve: any) => {
		setInterval(() => {
			resolve()
		}, time)
	})
}

async function main() {
  const URI = "ipfs://QmXcvr1ka4pnMvFRH1gNyRz5N32K6g6WVppWtP8sPr9uHE";
  const MultiToken = await ethers.getContractFactory("MultiNFT");
  const multiToken = await MultiToken.deploy(URI);
  await multiToken.deployed();

  console.log(
    `MyToken contract deployed to ${multiToken.address}`
  );

  console.log('wait of delay...')
	await delay(15000) // delay 15 secons
	console.log('starting verify token...')
	try {
		await run('verify:verify', {
			address: multiToken!.address,
			contract: 'contracts/MultiNFT.sol:MultiNFT',
			constructorArguments: [ URI ],
		});
		console.log('verify success')
	} catch (e: any) {
		console.log(e.message)
	}
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});