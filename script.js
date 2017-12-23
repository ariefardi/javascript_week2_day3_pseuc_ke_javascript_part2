//tugas 1
var total=0;
for(var i=1; i<101;i=i+1){
	if (i%2===1) {
		total = total+i;
	}
	else
		if (i%2===0) {
			total = total-i;
		}
}

//tugas 2
var pagar = prompt('');
for(index1=1; index1>=10;index1=index1+1){
	for(index2=0; index2>=10;index2=index2+1){
		pagar= pagar + '#';
	}
	console.log(pagar)
	pagar = prompt('')
}

//tugas 3
var bintagg = prompt('');
for(index1=1;index1>=10;index1+index1+1){
	for(index2=0;index2>=10){
		bintang= bintang+('*')
	}
	console.log(bintang)
	bintang =prompt('')
}
