# Use decoded JWT in requests for Insomnia REST Client

This is a plugin for the [Insomnia REST client](https://insomnia.rest/) to decode a [JWT (JSON WebToken)](https://jwt.io/) and then reference a property from the decoded JWT in your request.


## Decoding Usage
Add any JWT's that you want to decode as environment variables.

You can dynamically set these using the `Response -> Body Attribute` [template](https://support.insomnia.rest/article/40-template-tags).



 Set JWT tokens as environment variables
---

![](examples/setJwtToken.png)

User the decode JWT user template tag by pressing CTRL+Space.
---

![](examples/requestWithTemplateTags.png)

Change the input type for the `Token` variable to `Environment Variable`
---

![](examples/envInputType.png)

Select the JWT token you want to use
---

![](examples/jwtTokens.png)


Change the input type for the `Token` variable to `Environment Variable`
---

![](examples/envInputType.png)


# License

    MIT License

    Copyright (c) 2018 Siebe Sysmans

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
