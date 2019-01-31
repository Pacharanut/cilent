var i=1
var s1,s2,s3,s4,s5,avggr=0
var math,phy,bio,chem,eng

var gpacalu = function() {
	console.log('Enter your math grade : ')
	let stdin = process.openStdin()
	stdin.addListener("data",(value) => {
		if (i === 1){
			s1 = value
			math = checkGpa(s1.toString().trim());
			console.log('Enter your physics grade :')}
		else if (i === 2){
			s2 = value
			phy = checkGpa(s2.toString().trim())
			console.log('Enter your biology grade :')}
		else if (i === 3){
			s3 = value
			bio = checkGpa(s3.toString().trim())
			console.log('Enter your chemistry grade :')}
		else if (i === 4){
			s4 = value
			chem = checkGpa(s4.toString().trim())
			console.log('Enter your english grade :')}
		else {
			s5 = value
			eng = checkGpa(s5.toString().trim())
			stdin.destroy()
			avggr = ((math*3)+(phy*3)+(bio*3)+(chem*3)+(eng*3))/15
			console.log('Result : '+ avggr)	
		}
	i++	
	})
}

var checkGpa = function(subj) {
	subj = subj.toUpperCase()
	if(subj === 'A'){
		subj = 4
		return subj
	}	
	else if(subj === 'B+'){
		subj = 3.5
		return subj
	}
	else if(subj === 'B'){
		subj = 3
		return subj
	}
	else if(subj === 'C+'){
		subj = 2.5
		return subj
	}
	else if(subj === 'C'){
		subj = 2
		return subj
	}
	else if(subj === 'D+'){
		subj = 1.5
		return subj
	}
	else if(subj === 'D'){
		subj = 1
		return subj
	}
	else if(subj === 'E'){
		subj = 0
		return subj
	}
	else{
		return subj
	}

}

module.exports.gpacalu= gpacalu;