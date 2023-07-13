const quiz = [
  {
    question:'「集中的な」を英語で？',
    answers:[
      'concentrated',
      'mission',
      'moderate',
      'ample'
    ],
    correct:'concentrated'
  },
  {
    question:'「有資格の」を英語で？',
    answers:[
      'scenic',
      'cuisine',
      'certified',
      'acclaimed'
    ],
    correct:'certified'
  },
  {
    question:'「望ましい」を英語で？',
    answers:[
      'observe',
      'desirable',
      'consist',
      'aisle'
    ],
    correct:'desirable'
  },
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// HTMLのオブジェクトは$をつける！
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文，選択肢を定義する関数
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

// 正誤表示の関数
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
      window.alert('正解！');
      score++;
    } else{
      window.alert('残念！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
      // 問題まだあるとき
      setupQuiz();
    }else{
      // 問題もうないとき
      window.alert(`終了！あなたの正解数は${score}/${quizIndex}です！`);
    }

};

// ボタンクリック正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}