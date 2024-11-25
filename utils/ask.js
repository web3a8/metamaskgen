import inquirer from 'inquirer';

export const askWalletCount = async () => {
  const questions = [
      {
          type: 'input',
          name: 'count',
          message: '请输入你想要生成的小狐狸钱包数量:',
          validate: function(value) {
              const num = parseInt(value);
              if (isNaN(num)) {
                  return '请输入有效的数字！';
              }
              if (num < 1 || num > 10000) {
                  return '请输入1-10000之间的数字！';
              }
              return true;
          },
          filter: function(value) {
              return parseInt(value);
          }
      }
  ];

  const answers = await inquirer.prompt(questions);
  return answers.count;
}

