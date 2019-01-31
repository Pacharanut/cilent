let stdin = process.openStdin()
console.log('Enter your message: ')
stdin.addListener("data",(mes) => {
    if((mes.length%2) == 0){
      var half = (mes.length-2)/2
      var check = 0
      for(let i=0 ; i<=half ; i++){
          if(mes.toString().toLowerCase().substring(half-(i+1),half-i) == mes.toString().toLowerCase().substring(half+i,half+(i+1)))
                check += 1
      }
      if(check == half)
          console.log("Is Palindrome")
      else
          console.log("Not Palindrome")
    }
    else
        console.log("Not Palindrome")
    stdin.destroy()
})