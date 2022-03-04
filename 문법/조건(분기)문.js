let age = 10;


if (age === 10 || age > 20) {
    console.log('나이는 10세');
} else if (age === 20) {
    console.log('나이는 20세');
} else {
    console.log('모르겠습니다.');
}


let value = 1;

switch(value) {
    case 1 :
        console.log(1);
        break
    case 2 :
        console.log(2);
        break
    case 3 :
        console.log(3);
        break
    default : ///else 같은 역할
        console.log('??');
        break;
}
