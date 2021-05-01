async function generatePw(rawPassword) {
  msgUint8 = new TextEncoder().encode(rawPassword)								//get bytes of password
  hashBuffer = await crypto.subtle.digest('SHA-512', msgUint8)		//use crypto api to generate SHA-512
  hashArray = Array.from(new Uint16Array(hashBuffer))							//array from byte buffer
  obfuscatedPassword = hashArray.map(b => String.fromCharCode(b)).join('')				//map the result to UTF-16
  return obfuscatedPassword
}
