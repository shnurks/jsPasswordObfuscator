async function obfusPw(rawPassword, satisfyRequirements = true, mode = 16) {	//first parameter is your password, second parameter specifies wheter you want to add a certain string to pass most password requirements, thrid parameter specifies how many bits deep each character should be
	
	if(satisfyRequirements == true) {
		complianceString = "aA1!"
	} else {
		complianceString = ""
	}
	

	msgUint8 = new TextEncoder().encode(rawPassword)
	hashBuffer = await crypto.subtle.digest('SHA-512', msgUint8)
	switch(mode) {
	case 16:
		return complianceString + Array.from(new Uint16Array(hashBuffer)).map(b => String.fromCharCode(b)).join('')
	break
	case 8:
		console.warn("Using UTF-8 will produce unexpected results")
		return complianceString + Array.from(new Uint8Array(hashBuffer)).map(b => String.fromCharCode(b)).join('')
	break
	case 5:
		return complianceString + Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(32).padStart(2, '0')).join('')
	break
	case 4:
		return complianceString + Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
	break
	case 2:
		return complianceString + Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(2).padStart(8, '0')).join('')
	break
	default:
		console.error("This bit depth is invalid")
		throw "This bit depth is invalid"
	break
	}
}
