var i=1,multi

var test1 = function() {
	console.log('Enter number : ')
	let stdin = process.openStdin()
	stdin.addListener("data",(value) => {
		for (i = 1; i <= 12; i++) {
			multi = value
			console.log(multi + 'x' + i + '=' +i*multi) 
		    stdin.destroy()	
		}
	})
}

module.exports.test1= test1;

