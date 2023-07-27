import { task } from 'hardhat/config'
import { BigNumber, ContractTransaction, ContractReceipt } from "ethers";
import { Address } from 'cluster';


//npx hardhat mint --to 0xc0e2a073872F0C90d8A3d19cC86F6A1EbF298964 --id 1 --amount 100000 --contract 0xF26BC43aC85B5BF58dDF70fAa86217e9dc6f86E4 --network polygon-mumbai
task('mint', 'AddLiquidity for token A and token B')
    .addParam('to', 'recipient address')
    .addParam('id', 'token ID')
    .addParam('amount', 'mint token amount')
    .addParam('contract', 'contract address')
	.setAction(async ({from, id, amount, contract}, { ethers }) => {
        const Token = await ethers.getContractFactory('MultiNFT')
        const token = Token.attach(contract)

        const contractTx: ContractTransaction = await token.mint(from, id, amount);
        const contractReceipt: ContractReceipt = await contractTx.wait();

        const event = contractReceipt.events?.find(event => event.event === 'TransferSingle');
        const eOperator: Address = event?.args!['operator'];
        const eSender: Address = event?.args!['from'];
        const eRecipient: Address = event?.args!['to'];
        const eIDt: BigNumber = event?.args!['id'];            
        const eValue: BigNumber = event?.args!['value'];   
                    
        console.log(`operator: ${eOperator}`)
        console.log(`from: ${eSender}`)
        console.log(`to: ${eRecipient}`)
        console.log(`id: ${eIDt}`)
        console.log(`value: ${eValue}`)
    })