import { BORING_AVATAR_COLOR_PALETTE, BORING_AVATAR_ENDPOINT } from "../constant/style"

export function createAvatar(
    wallet,
    size= 120,
    variant = "beam",
    colors = BORING_AVATAR_COLOR_PALETTE
) {
    console.log(wallet)
    if (!wallet) return new URL(`${variant}/${size}/default?colors=${colors.join(",")}`, BORING_AVATAR_ENDPOINT)

    return new URL(`${variant}/${size}/${wallet}?colors=${colors.join(",")}`, BORING_AVATAR_ENDPOINT)
}

export const getRank = (leaderboard, email) =>{
    const rank = leaderboard.findIndex((user)=>user.email === email);
    return rank + 1;
}