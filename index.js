import { ethers } from 'ethers';
import fs from 'fs';
import { banner } from './utils/banner.js';
import { askWalletCount } from './utils/ask.js';
import { Logger } from './utils/logger.js';

async function generateWallets(count) {
    const wallets = [];
    
    for(let i = 0; i < count; i++) {
        Logger.process(`正在生成第 ${i + 1} 个小狐狸钱包`);
        // 生成随机钱包
        const wallet = ethers.Wallet.createRandom();
        
        wallets.push({
            address: wallet.address,
            privateKey: wallet.privateKey,
            mnemonic: wallet.mnemonic.phrase
        });
    }
    
    return wallets;
}

async function saveToFile(wallets) {
    const data = JSON.stringify(wallets, null, 2);
    fs.writeFileSync('wallets.json', data);
}

async function main() {
    console.log(banner);
    try {
        const count = await askWalletCount();
        const wallets = await generateWallets(count);
        await saveToFile(wallets);
        Logger.success('钱包生成完成！');
    } catch (error) {
        Logger.error('生成过程出错:', error);
    }
}

main();