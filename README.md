# Main information
Contract address: [0xF26BC43aC85B5BF58dDF70fAa86217e9dc6f86E4](https://mumbai.polygonscan.com/address/0xF26BC43aC85B5BF58dDF70fAa86217e9dc6f86E4)
Minted token: [here](https://testnets.opensea.io/assets/mumbai/0xf26bc43ac85b5bf58ddf70faa86217e9dc6f86e4/1)

## Installation
Clone the repository and install the dependencies using the following command:
```
npm i
```

## Deployment
Fill in the .env file and use the command:
```
npx hardhat run scripts/deploy.ts --network polygon-mumbai
```

## Task Running
Running a mint task: 
```
npx hardhat mint --to 0xc0e2a073872F0C90d8A3d19cC86F6A1EbF298964 --id 1 --amount 100000 --contract 0xF26BC43aC85B5BF58dDF70fAa86217e9dc6f86E4 --network polygon-mumbai

```
