# jsPasswordObfuscator
### This is far from a finished product!
This is a simple tool which makes it less unsafe to reuse passwords with only a small change.
Of course this does not make it a good idea to re-use passwords on different websites! However, for the people as lazy as me who only append the website name to differentiate between the passwords this helps to make them a bit more secure. It uses the entire UTF-16 range in default mode, so set the bit depth setting according to what you think the website can handle.

To use it in default mode just call the function with your password as a string as the only argument. Optionally you can specify a second argument to decide whether you want to prepend "aA1!" to match most password requirements. The optional third parameter specifies the bit depth per character. Available values are 16, 5, 4, 2.
