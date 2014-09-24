var numbers={
	'primes':[2, 3, 5, 7, 11, 13, 17, 19, 23],
	'npn':[0, 0, 1, 2, 0, 3, 0, 4, 0, 0, 0, 5, 0, 6, 0, 0, 0, 7, 0, 8, 0, 0, 0, 9],
	'threesmooth':[2,3,4,6,8,9,12,16,18,24,27,32,36,48,54,64,72,81,96,108,128,144,162,192,216,243,256,288,324,384,432,486,512,576,648,729,768,864,972],
    'fivesmooth':[2,3,4,5,6,8,9,10,12,15,16,18,20,24,25,27,30,32,36,40,45,48,50,54,60,64,72,75,80,81,90,96,100,108,120,125,128,135,144,150,160,162,180,192,200,216,225,240,243,250,256,270,288,300,320,324,360,375,384,400,405,432,450,480,486,500,512,540,576,600,625,640,648,675,720,729,750,768,800,810,864,900,960,972,1000],
	'elevensmooth':[2,3,4,5,6,7,8,9,10,11,12,14,15,16,18,20,21,22,24,25,27,28,30,32,33,35,36,40,42,44,45,48,49,50,54,55,56,60,63,64,66,70,72,75,77,80,81,84,88,90,96,98,99,100,105,108,110,112,120,121,125,126,128,132,135,140,144,147,150,154,160,162,165,168,175,176,180,189,192,196,198,200,210,216,220,224,225,231,240,242,243,245,250,252,256,264,270,275,280,288,294,297,300,308,315,320,324,330,336,343,350,352,360,363,375,378,384,385,392,396,400,405,420,432,440,441,448,450,462,480,484,486,490,495,500,504,512,525,528,539,540,550,560,567,576,588,594,600,605,616,625,630,640,648,660,672,675,686,693,700,704,720,726,729,735,750,756,768,770,784,792,800,810,825,840,847,864,875,880,882,891,896,900,924,945,960,968,972,980,990,1000],
    'twentythreesmooth':[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,34,35,36,38,39,40,42,44,45,46,48,49,50,51,52,54,55,56,57,60,63,64,65,66,68,69,70,72,75,76,77,78,80,81,84,85,88,90,91,92,95,96,98,99,100,102,104,105,108,110,112,114,115,117,119,120,121,125,126,128,130,132,133,135,136,138,140,143,144,147,150,152,153,154,156,160,161,162,165,168,169,170,171,175,176,180,182,184,187,189,190,192,195,196,198,200,204,207,208,209,210,216,220,221,224,225,228,230,231,234,238,240,242,243,245,247,250,252,253,255,256,260,264,266,270,272,273,275,276,280,285,286,288,289,294,297,299,300,304,306,308,312,315,320,322,323,324,325,330,336,338,340,342,343,345,350,351,352,357,360,361,363,364,368,374,375,378,380,384,385,390,391,392,396,399,400,405,408,414,416,418,420,425,429,432,437,440,441,442,448,450,455,456,459,460,462,468,475,476,480,483,484,486,490,494,495,500,504,506,507,510,512,513,520,525,528,529,532,539,540,544,546,550,552,560,561,567,570,572,575,576,578,585,588,594,595,598,600,605,608,612,616,621,624,625,627,630,637,640,644,646,648,650,660,663,665,672,675,676,680,684,686,690,693,700,702,704,714,715,720,722,726,728,729,735,736,741,748,750,756,759,760,765,768,770,780,782,784,792,798,800,805,810,816,819,825,828,832,833,836,840,845,847,850,855,858,864,867,874,875,880,882,884,891,896,897,900,910,912,918,920,924,931,935,936,945,950,952,960,966,968,969,972,975,980,988,990,1000]
}


function factor(n) {
 if(n==1) return [1];
 var minFactor = leastFactor(n);
 var primes = [minFactor];
 if (n==minFactor) return primes;
 return primes.concat(factor(n/minFactor));
}

function leastFactor(n) {
 if (n==0) return 0;
 for (var i=0;i<numbers.primes.length;i++) {
  if (n%numbers.primes[i]==0) return numbers.primes[i];
 }
 console.log("It's all gone wrong!")
 return NaN;
}

function tanh(x) {
  return (Math.exp(x) - Math.exp(-x))/(Math.exp(x)+Math.exp(-x));
}