/// 변수 >> 원본 값 영향 X (복사)
let a = 10;
let b = a;

b = 20;


/// 객체 >> 객체의 위치값이 복사되므로 원래 값에도 영향을 줌 (참조).
/// Unique함. 

let o = {
    isLoading : false,
}


function foo(o) {
    o.isLoading = true;
}

foo(o);

console.log('done')