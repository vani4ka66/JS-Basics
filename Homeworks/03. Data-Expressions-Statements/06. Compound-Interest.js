function solve([p, i, period, t]) {
[p, i, period, t] = [p, i, period, t].map(Number);

    i /= 100;
    let frequency = 12/period;
    
    let total = p * Math.pow(1 + i/frequency, frequency * t);
    
    console.log(total.toFixed(2));
  
}
