// Print out each number from 1 to 100
// replacing numbers divisible by both 3 and 5 with “fizz buzz”
// those divisible by 3 with “fizz”
// and those divisible by 5 with “buzz”
// replacing numbers divisible by both 3 and 5 with “fizz buzz” 


var counter = 0;
var even 

for (var i=1; i<=100; i++) {

	if(i%3==0) {
		if(i%5==0) {
			document.write(	" fizz-buzz ");
		}
		
		else{
			document.write(" fizz ");
		}
	}

	else if (i%5==0) {
		document.write(" buzz ");
		
	}

	else{
		document.write(" "+i+" ");

	}

	
}


/*




if(i/3==0) {
		if(i/5==0)
			{document.write("fizz-buzz")}
		else{document.write("hi")}
	}

	else{
		document.write(i);

	}







var counter = 0;

for (var i=0; i<=99; i++){

	if(counter/3==0) {
		if(counter/5==0)
			{document.write("fizz-buzz")}
		else{document.write("hi")}
	}

	else{
		document.write(counter);

	}


	
}
*/