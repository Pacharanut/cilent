var i=1,num,fact=1

var test1 = function() {
	console.log('Enter number Factorial : ')
	let stdin = process.openStdin()
	stdin.addListener("data",(value) => {
        num = value
		for (i = 1 ; i <= num ; i++) {
            {fact = fact * i}
            stdin.destroy()	
        }
        console.log('Factorial : ' + fact  )
    }) 
}

module.exports.test1= test1; 