const colors = ['red', 'yellow', 'black']

const Colors = {
    blue : 'blue',
    green : 'green',
    white : 'white'
};

// const yelow = colors[2];
// const red = colors[0];
// const black = colors[1];

// 구조 분해 할당
const [, yellow,] = colors;

/// 객체 >> 순서 안지켜도 됨.
const {green, white} = Colors;


let a = 10;
let b = '10';



///
if (a === b) {
    a = 0;
} else {
    a = 1;
}

/// 삼항 연산자 : 위 if문을 한 줄로
a = (a === b) ? 0 : 1;

(function foo() {

});