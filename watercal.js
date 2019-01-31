var unit,unit_use,pay=0,pay1=0,pay2=0,pay3=0

var watercal = function() {

	console.log('Enter water unit : ')
	let stdin = process.openStdin()
	stdin.addListener("data",(value) => {
        unit = value
        stdin.destroy()
        //ใช้น้ำที่เกินจาก 100 หน่วยขึ้นไปคิดหน่วยละ 15 บาท
		if (unit > 100 ){
			{unit_use = unit - 100}
            {pay += unit_use * 15}
            {unit -= unit_use}
            unit = unit
        }
        //ใช้น้ำที่เกินจาก 40 หน่วยแรก แต่ไม่เกิน 100 หน่วย คิดหน่วยละ 10 บาท
		if (unit > 40 && unit <= 100){
			{unit_use = unit - 40}
            {pay1 += unit_use * 10}
            {unit -= unit_use}
            unit = unit
        }
        //ใช้น้ำที่เกินจาก 20 หน่วยแรก แต่ไม่เกิน 40 หน่วย คิดหน่วยละ  7 บาท
		if (unit > 20 && unit <= 40){
            {unit_use = unit - 20}
            {pay2 += unit_use * 7}
            {unit -= unit_use}
            unit = unit
        }
        //ใช้น้ำไม่เกิน 20 หน่วย คิดหน่วยละ 5 บาท โดยคิดรวมทั้ง 10 หน่วยแรกด้วย
        if (unit > 10){
            {pay3 += unit * 5}
        }
		
		console.log('Pay water is : ' + (pay+pay1+pay2+pay3) )
				
	})
}

module.exports.watercal= watercal;