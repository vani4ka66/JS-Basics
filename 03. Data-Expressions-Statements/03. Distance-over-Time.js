function solution(input) {

    let v1 = input[0];
    let v2 = input[1];
    let t = input[2];

    let dis1 = (v1)*(t);
    let dis2 = v2*t;

    let result = (Math.abs(dis1 - dis2))/3.6;

    console.log(result);
}
