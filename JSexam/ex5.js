

class Student {
  constructor(){
    this._grade = new Array();
  }
  

  set grade(param){
    this._grade = param;
  }

  getSumAvg(){
    let sum = 0;
    for(let key in this._grade){
      sum += this._grade[key];
    }
    let avg = sum/this._grade.length;
    this._avg = avg
    return [sum,avg];
  }

  getMinMax(){
    let max = this._grade[0]
    let min = this._grade[0]
    for(let i = 1; i < this._grade.length; i++){
      if(max < this._grade[i]){
        max = this._grade[i];
      }
    }
    for(let j = 1; j < this._grade.length; j++){
      if(min > this._grade[j]){
        min = this._grade[j];
      }
    }
    return {"최하점":min,"최고점":max};
    
  }

  getVar(){
    let variance = 0;
    let avg = this._avg;
    for(let i = 0; i <this._grade.length; i++){   
      variance = variance + (this._grade[i]-avg)*(this._grade[i]-avg);
    }
    variance = variance/this._grade.length;
    this._variance = variance;
    return variance;
  }

  getStd(){
    let variance = this._variance;
    let Std =  Math.sqrt(variance);
    return Std;
  }

}
const s = new Student();
s.grade = [82,76,91,98,64]

console.log(s.getSumAvg())
console.log(s.getMinMax())
console.log("분산: ", (s.getVar()).toFixed(2))
console.log("표준편차: ",(s.getStd()).toFixed(2))