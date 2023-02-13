* Mock specific function module in only 1 test case

``` javascript
jest
      .spyOn(jest.requireActual('nookies'), 'parseCookies')
      .mockImplementation(() => {
        return {
          language: 'fr',
          country: 'us',
        }
      })

afterEach(() => {
    jest.restoreAllMocks()
  })

```
