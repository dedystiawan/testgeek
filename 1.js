function printDigitValue(angka){
	let A,B,C,D,E,F,G,H,I,J,K,L,M;

	A=angka/10000000000;
	angka%=10000000000;
	B=angka/1000000000;
	angka%=1000000000;
	C=angka/100000000;
	angka%=100000000;
	D=angka/10000000;
	angka%=10000000;
	E=angka/1000000;
	angka%=1000000;
	F=angka/100000;
	angka%=100000;
	G=angka/10000;
	angka%=10000;
	H=angka/1000;
	angka%=1000;
	I=angka/100;
	angka%=100;
	J=angka/10;
	angka%=10;
	K=angka/1;
	angka%=1;

	console.log(A+"0000000000"
		+B+"000000000"
		+C+"00000000"
		+D+"0000000"
		+E+"000000"
		+F+"00000"
		+G+"0000"
		+H+"000"
		+I+"00"
		+J+"0"
		+K+"")
};

printDigitValue(12345678901);

