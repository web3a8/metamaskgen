# 批量生成以太坊钱包工具 🦊

一个简单高效的批量生成以太坊（MetaMask）钱包工具。支持自定义生成数量，并提供安全的私钥存储方案。

## ✨ 特性

- 🚀 批量生成以太坊钱包
- 🔐 安全的私钥和助记词生成
- 💾 自动保存为JSON格式
- 🎨 友好的命令行界面
- 📝 详细的操作日志
- ⚡ 高效的批量处理

## 🛠️ 技术栈

- Node.js
- ethers.js
- Inquirer.js
- Chalk

## 📦 安装

1. 克隆项目
```bash
git clone https://github.com/web3a8/metamaskgen.git
```

2. 安装依赖
```bash
cd metamaskgen
npm install
```

## 🚀 使用

1. 运行脚本
```bash
node index.js
```

2. 按照提示输入要生成的钱包数量

3. 等待程序生成钱包

4. 查看生成的 `wallets.json` 文件

## 📁 输出格式

生成的钱包信息将保存在 `wallets.json` 文件中，格式如下：
```json
[
{
"address": "0x...",
"privateKey": "0x...",
"mnemonic": "word1 word2 ... word12"
}
]
```


## ⚠️ 安全提示

- 请妥善保管生成的私钥和助记词
- 不要将私钥分享给任何人
- 建议在离线环境下使用本工具
- 生成后请及时备份并删除敏感信息

## 👨‍💻 作者

- X：[web3a8@onebookman](https://twitter.com/onebookman)
- 网站：[web3a8.com](https://web3a8.com)

## 🙏 鸣谢

- [ethers.js](https://docs.ethers.io/)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- [Chalk](https://github.com/chalk/chalk)
