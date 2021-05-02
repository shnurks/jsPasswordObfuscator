# jsPasswordObfuscator
### This is far from a finished product!
This is a simple tool which makes it less unsafe to reuse passwords with only a small change.
Of course this does not make it a good idea to re-use passwords on different websites! However, for the people as lazy as me who only append the website name to differentiate between the passwords, this helps to make them a bit more secure. Don't use this on important passwords because it might even decrease the entropy on long passwords.

To use it in default mode just call the function with your password as a string as the only argument. Optional parameters are:

  2: whether to prepend "aA1!" to make it comply with most rules

  3: the bit depth of each character (16, 5 (default), 4, 2) (Most websites will not like 16)

  4: The hashing algorithm (default: "SHA-256", available algorithms: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#supported_algorithms)

	
