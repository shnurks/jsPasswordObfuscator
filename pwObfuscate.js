async function obfusPw(rawPassword, mode = 16) {	//first parameter is your password, second parameter specifies how many bits deep the characters should be
	msgUint8 = new TextEncoder().encode(rawPassword)
	hashBuffer = await crypto.subtle.digest('SHA-512', msgUint8)
	switch(mode) {
	case 16:
		return Array.from(new Uint16Array(hashBuffer)).map(b => String.fromCharCode(b)).join('')
	break
	case 8:
		console.warn("Using UTF-8 will produce unexpected results")
		return Array.from(new Uint8Array(hashBuffer)).map(b => String.fromCharCode(b)).join('')
	break
	case 5:
		return Array.from(new Uint16Array(hashBuffer)).map(b => b.toString(32).padStart(2, '0')).join('')
	break
	case 4:
		return Array.from(new Uint16Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
	break
	case 2:
		hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8)
		return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(2).padStart(8, '0')).join('')
	break
	default:
		console.error("This bit depth is invalid")
		throw "This bit depth is invalid"
	break
	}
}
