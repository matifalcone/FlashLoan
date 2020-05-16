let Flashloan = artifacts.require("Flashloan")

module.exports = async function (deployer, network) {
    try {

        let lendingPoolAddressesProviderAddress;

        switch(network) {
            case "mainnet":
            case "mainnet-fork":
            case "development": // For Ganache mainnet forks
                lendingPoolAddressesProviderAddress = "0x9CBBBA619F42f9e706Ccbd5163a6b006378c8aF0"; break
            case "ropsten":
            case "ropsten-fork":
                lendingPoolAddressesProviderAddress = "0x1007a9FbCb9a2B66527f2888eC18D5d115c34102"; break
            case "kovan":
            case "kovan-fork":
                lendingPoolAddressesProviderAddress = "0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5"; break
            default:
                throw Error(`Are you deploying to the correct network? (network selected: ${network})`)
        }

        await deployer.deploy(Flashloan, lendingPoolAddressesProviderAddress)
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}