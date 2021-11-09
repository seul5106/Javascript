function solution(K, N, M) {
  if(K*N > M){
    return console.log("동수가 부모님께 받아야 하는 돈은 %d원 입니다.", K*N-M);
  }
  else{
    return console.log("동수가 부모님께 받아야 하는 돈은 0원 입니다.");
  }
  
}


solution(30, 4, 100);
solution(250, 2, 140);
solution(20, 6, 120);
solution(20, 10, 320);