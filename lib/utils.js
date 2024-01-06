import { Connection } from "@solana/web3.js"
import { BORING_AVATAR_COLOR_PALETTE, BORING_AVATAR_ENDPOINT } from "../constant/style"
import { PythHttpClient, getPythClusterApiUrl, getPythProgramKeyForCluster } from "@pythnetwork/client"

export function createAvatar(
    wallet,
    size = 120,
    variant = "beam",
    colors = BORING_AVATAR_COLOR_PALETTE
) {
    console.log(wallet)
    if (!wallet) return new URL(`${variant}/${size}/default?colors=${colors.join(",")}`, BORING_AVATAR_ENDPOINT)

    return new URL(`${variant}/${size}/${wallet}?colors=${colors.join(",")}`, BORING_AVATAR_ENDPOINT)
}

export const getRank = (leaderboard, email) => {
    const rank = leaderboard.findIndex((user) => user.email === email);
    return rank + 1;
}

export const getSOLtoUSD = async() => {
    const PYTHNET_CLUSTER_NAME = "pythnet"
    const connection = new Connection(getPythClusterApiUrl(PYTHNET_CLUSTER_NAME))
    const pythPublicKey = getPythProgramKeyForCluster(PYTHNET_CLUSTER_NAME)

    const pythClient = new PythHttpClient(connection, pythPublicKey)
    const data = await pythClient.getData()
    for (const symbol of data.symbols) {
        if (symbol === "Crypto.SOL/USD") {
            const price = data.productPrice.get(symbol);
            if (price.price && price.confidence) {
                return price.price?.toFixed(4)
            }
        }
    }
}