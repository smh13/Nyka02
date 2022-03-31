function footer(){
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=5.0"
        />
        <link rel="stylesheet" href="FooterCss.css" />
      </head>
    
      <body>
        <div id="app">
          <footer id="footer">
            <div class="blackF">
              <div class="sub-blackF">
                <div class="sub-blackF-left">
                  <img
                    style="border-radius: 10px; background-blend-mode: color-dodge"
                    width="8%"
                    height="40%"
                    src="https://toppng.com/uploads/preview/ic-message-comments-email-icon-free-sv-11563249014fwcqzgmd83.png"
                    alt=""
                  />
                  <a id="botME">GET SPECIAL DISCOUNT ON YOUR INBOX</a>
                  <input
                    placeholder="YOUR EMAIL"
                    id="email"
                    type="email"
                    width="90%"
                    style="
                      background-color: #3f414d;
                      background-blend-mode: lighten;
                      border: 0px solid;
                      border-bottom: 3px solid black;
                    "
                  />
                  <button class="send">SEND</button>
                </div>
                <div class="sub-blackF-middle">
                  <div class="imgDiv">
                    <img
                      class="img2"
                      style="border-radius: 10px; color: white"
                      src="https://i.pinimg.com/originals/63/b3/d9/63b3d9ccb82555c2c9611ba41a62044d.png"
                      alt="filter applied"
                    />
                  </div>
                  <div>
                    <a>GET THE APP ON GOOGLE PLAY</a>
                  </div>
                </div>
                <div class="sub-blackF-right">
                  <div class="imgDiv">
                    <img
                      class="img3"
                      style="border-radius: 10px; color: white"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAC8CAMAAAC672BgAAAAgVBMVEUAAAD+/v7t7e3////s7Oz29vbw8PDz8/P4+Pj7+/uYmJjn5+fS0tLp6emwsLAgICBISEiCgoJBQUE7Ozvc3Nzi4uK9vb0pKSmRkZGpqamKiop3d3e2trZPT09cXFyjo6MvLy9vb29nZ2cTExPHx8c1NTUPDw9WVlZ9fX0jIyOdnZ3KF+7XAAARH0lEQVR4nO1d6XrjrA42YMBuli5ZmrZp03aSme/M/V/gsY2dsIjVTuLMjH6ZJ1aA1yCEkERGUEWE45qYKLCmQJsCyuvnvKwLpBQF8Ra1sRCABdlYuMSCC4WlKRTND1huZcuCTZYyggUBLJloJs/1ZuYqGM1zofTMw1I0z6WHRQbDzmLtmcoit9LOYu3Y7YNBdDDIPzD+gTE4GKQhntfERAE3Bdo8o+a5kjM1FaIAsLCmwEVBvFU0z6UooKZAm2d8NhZfK30dy3hDhSC5QM0Cld+iJgvAn8DCL8mitDLD+XG0qYtaM0DzbrTl0pgGWNoVysNC20Ut11lymaWbRqks3czTW5krHYNYMjyG2Sr37HqSC/0D4x8YbjCiZIbJIs1m7JcZBksFhhD9GJQZCGY51QLKDKBjJzBgmdGK1rKmQi60Qrd5Lls5LRcAlkJmsfLDLLNl1VUh3MOq9NSSwjIWPYO/Ztn/vn7v6zLG19Iz0BhmawXGdybo+W0+ZZz91eo4f8hO9Pm2nVTf/28FA+c/MpU+tvV0QH8lGKvMpO898fbsehu10iNAqSzaFBafNMR7AIwsu79bURYuQFGQAC3sAhQAWHxGj/Us4Ztg85sclYY1CEY9XaZNywWLrGe0gw3rg02tBdIzTBZtb2KCYc5WQOlygZEHDNAjGHc2MLLssCYt/9+ijr/ZwaiW2y3jfxMY7y4wqsV2ztjfAgYmP91gZNliTdn5wUjQnYdXhAsfFhV9LImnlr6bggywfgEGO59Zry8Lnm++n71w3DV/56sl3fiYdaJfACzGdPsZUbPfbj+jmAbtNzFYwG+CmkWt/SZigAIs9TPJGedsNt19u9F43lPJrGfUIrcSyx3jQR0bVAPFRTsnomdre7xYz5zlzilL3zC7CXWc5/u7r++33RTzNDAalgqP1fzDNTjK8YPBZ5tuRXjeYdbnEAlzuto9WOG4E9P0HGBI6mKowQ0BLHQtbzsPUx5ncDN0Z85Xr7bl9qNmSjI+AmDILFlrCmM1daawptCawppn1lrPRAFgKXV1el74WHy1VE18sSwwP6bE0TClwOUqZRaIP0tYjg0WzDdGg+dljJ4BqiaYs/knDMeOnkXPwPJsTdRA6SvY3vDZaj0qYOX6fyAab+0fj04dp49ge3/T/mDUg2kOyo536UBjRGBYsBBoDHCIREpzEla0aMTouMCwY1EtgnSQE7VK84AUsfsZGRoMq5wprHJGZkHcjkWFBu/MejJLqAA9yVzCXoB//zkZ2PgolC7UfnlRaK1notA84/YzioL4oZGPrIBk54l2xGDBDKhSvNUpXUaV1TrLIK10yq0s2Noxey0xGiigdDnmSIsGtQ5Qi9JlmayVIIXQKH0aqE/pkln6qeNeLOptd8BsDfLpIitAB1uNZm/ilBdHNOhAYFStBHb4jey9PhiYO624MhpDgUHNRfa+bufVvf0o/wrCokZjMG8/vjX+/YkMZXzEGRXUGsmMZ3sBhWJRaV/E92eV6Ky2S763qgJaGvroRxnaZN9bKQbhmiV0jgh6KbD7m7CH1/kSlbUrAqQ0yCzY2Kw80itv1KjjCAygWoo6ZiubNm89ve4Z7cx61gWef5pYX1Udb1sfh4YDjJMo+N4yYcmyivFy9qT/+/S6YCwiwWjWFCsYqj3kcdUMYKvoZ7mOxn1hw6+/tx8AhqrIcWir4EXDbnCjmjB+XxOX8ZFN9G/xUY+m/t5+gClMsZ4hw3qGqofPeDDqIyBbLYUx0A5bTu1mQT7RldEdibRXKh1L8fY7OqvESgxBL8gux0067F2iP9dX2Cm7jrcfIf8lgZHNOTxbCQNf/zUhVslFltrLz/w66jghujdaKE0ZDIZtpG3a2Q71TNdFH+l1wMgTscgWHAbDVLJb+pxyW8+MfcqUXQUM2BsthOqJAoABGjkF3XFm6RnVzD0LYTW6tLdfwsLaNZiDAtS1zfmYMXhvh2faknJHggSow9uvXYGQvugheWlF7dIqCjRRftY0IUAt1OmJ8FzxSK1Ex3XSEKIrsU6iVgEAWJrmWzsW6u0n6ybBe3eA1gQyuLFytn41lOwjTZUg6pNBnezU9774qZUO10er8TFFHdf1xRi6I5YFqh7FL7aj9z01WeqWkF/ae+ziexP3qHbTxgKGGCZ0tYFX7RcKgVGJRPW1d35TYLy4wOCY2c6aazQg46Mmy9fs0t5+fWTG1HeIhBldQ54Icw6ylKqkqRSZPsYdGk+ox2pyNLTZqSgLyHK0L8GXtRVlDb4VRkWSQTjOyiXTf7CeoX1GzJe/TN4ZzKIeVyx6GYTRaekM1kCt2rOXlizsqIBxE/BnBB5/l+pb+5tRx+/gvQl0bsKX9zr3dwmAoSsb75cGA+vNDKRfli08eIhECkPr2JjOQPXMUlFb2je6MWDkgQfPoC0mgJ7EKXjowTOwZalNAEbUizZrv4jDXunsGD66JAgVvaFGXW9dEsrmh+PJfVNAvoAImA5c8HcuCc1/dS4JTaHQqjSiUD4lFnZkIepSnDO5FgyygB1zePs5nFV4ytp6mLBIbz/gpGpDgEg5zTy9k1ebOGeVTg7JA7QZOo6jApawnHxOWIIbk3HuviKAn/JM0eEPlz03Yfre2U/PE11RDgIDF9qM/NVFd8qt1NxQxZHSpcDA7JCARZKDW1FoK+waAIOpUbGvlwUjyEtFokONRaK3nzYKnyHjRKHIlh+N3SMFjIT9TCXjrGGoMBaUSbXEevtpvlxzYrJw1by+TxWgCS7u9ZM3wE6ixYSn1SIKhbpPuQcc4Uv6Kb/yVrA0R3pZNwnPaeKOQ9WxYPEhFtKY1iRCttWUrnoaqCL0XprfPqVL6liqT1fE9mQxY97Z6vbp0jZtCwAMrEqW2vx3ob1J8/lC58kiZ37R5XFwY6qKuSQGGDlVjq43/KLefqHHrU+YBchxDxiaW9sbAIY6eh4SwejyIEly3OZNpYj+sIP4Z+HMpcjxaAesqjOqca80WTRXohVOMu7E+MnJhfIzBIw75PljuXCMuDXeKtWhsS1NFqQoZ+sizgFQVJkc/g2YogB6K4K+iTeqQHXx++AAi6IHbi4bloUnIWBkOGi2ejO4abuPiSmG1PXtnficjocNvnGeFh9pNwwY2tK5NldrQpU3LgxGGSRC74cBI6fK7vWRmz0jyuK67AMGsfC4cvsFbV3n0jrosCT6wOCK2XcBgaEIjW06GI7onHbOipGBTmDgIuzE4Ac51mmvBcu1qNmEkJgmmgllxdTgphoMpTn/da2Uq9RZjrW0ZsH01FQ0h93SdLrjoQuU2/iozIKpFilXN76btp8fr/PpCls75nBWQb4Bak7wbrQBcc4QTfruTZqRQ5RguB3RNNDqeZY9f2y2S454tVW9fCRS2Or6NUjwzSmT1+J7s50BYOBV95lPM++SYVnu0MWO9mwIMFbtBJg08xdKGYGvGqOmWxosdGilXc+wrGmd1rQ+BAG28OYCdfkk7IG20Ec+TFgW97D0T8JuM7gBNjql0LCELSjZtAiy8fXN4tGXxRNi4U2oHOaq8ZwDA1SzJKJ44yPM0iPEAgfMVntiAELDLF5f7rCskaXaTgQDkd9hE+XF8MP7A8FA2J94raFp0vHipcFohTJCYLo1eyK0liX0EPrHjLmSwkm1KBnekvLI1c++PHLYYDklYZdT3HWmMHeKvI4FBTprvBfnuwUkIcMgeKVHLz2jYQnTvOqN5MgvexkigxsJU8qr3ZXIGdIjMYBNcl0/S8IRjOADpXWMg9ttgoHsqaF1moa7Pt4qGIg4sjSqFOoU6wDjDDmujY0ablTUVk4JHiFnBE8rZ5oCaUXbiSXYMfR+wtRajjFWomdCGgowpFqOGzWJBZssqj0DYMlPLEDHcO/UVOKH4Ki1BUo5RHIZHyUWoJXn9/YzBijWQ4Ls9E7GrIEOAUZMqOuHWGD/YDDKiEiDb/bHgxG+omTfZq79kYAxmCIckke9mykc97fRASy9c+6UjbNFd4NUU2i3SKW+xTleOgWyFBFRKB+oVGo5Xm1lVHmspTwWfCxAK2lYxxK9/SAWMF+shd6J30ZHjmOadZGCMkvvGyCNjg2ahJ3b02Mb9FBQbIIBTnDGly+PX1+bfVH4JBeSenYtdbxL+LuKcJU9rKRYbQcYmO6POszbkt8MGHkZE7z2c88DwChmik/Mb37eC6KkqdXXSE/jgjy31C8zZp8qz/fpRO0MMmOw1aRhidA2KtqUnqUBTYzQ+HdanG81GUzPaDQAnH8CnbbSl+M2Mpzrzp2CfpX4bHoGdshx59SDZ2tkkNJiwvWZJ90FAXuNPXicjq+vjh9FF48LRcnm1AaGBYsKDbc7+ojAwDTwjK2j/+r7PwAwrFhUciN3OQONCYyQLMsKHaYUA2C4PCursXHZjVqMpUtjiU02cndUt0/S0H0a89A1DLB09UjCLmv9PhtoZ8lp/9PCUo2c2ASZT0txc1BXix50BqCBWK6wnFrZwwaKANFljrY4SwJbGRkOfLRhXBrTXixaKTq0dfwcYCRFAW8568AIwKILcRrv3uTEEtQd/VuviehZYE7epzr47RbAwDwl4cj7vkn4GgpkhcaYvP0cinASGtn7lBAzs7gdDTzsKby0X4nzz/C5QaC0zDxPMVu9J+7z74jqWG/PnQ5gMUBlFg7dwTEwPTEmvryYrKdWJtwA2dvbzzlb6QXQOMyM5LOjUsdPLBdD4xbAuAgaiwkbGgzF4Hbi8XoImwY3SffLozf0KXSYsKE8hK2+44XVxRpgKUwW4aIdFtbXjxY5BVqZ4jt+Lj2j20Kl6KKx9EDCWnmOJOzWqQfOViAv3eD0JmWSHaE6LokuNrFnBx6K1uxGwMAsjzpASKHDzYBhJNI6A9VD47IbNfshh8/g1iOFaBi9naJneyRhbyBJini2sWCAhdH0lP5BVCfi0YKkzVaKHxwRz2LoJMXCSyw2g5t0Wc4q+uagKKqjO8etjivXKLEeSan/NDCq8Zt+4YOXftwaGBitPs8FxsdRZgwRliWJ/rOFvRSkjLmXL4Z2Ia30HiK11q+wbExmniRvaiXtB3SmTf0KzhkFNczeMShP1zk9MDFfnkM5f6s9S8cQlmVhseamozt/52JpdUPquMayGnpw7Hm4GB8bGES/sqYn7UjEmjawtx+ysQQb3AiZBAeo+Ok3CdaDnR3DiZlie7MgMo9JNuuiOwJeGik3LDRTbMJynKxnKHKcFD2uSZGxoCMLy0qarYQMsco2dwTfxLmJR3QRsk69xbGjHU0W4yMDo2aJiMsAaA5ElN8sGKjgqx6iYzsub7/IjRqgCFcKeupVZFv/piBOgDaQRN5v0hCVLyuRWSyXlegsp5tHCFklwfFSuC4r0WtBAfebiKETd/PNicUV2G6zJEJ6Gp/Gw/GbxhsfnR27jjoO4MfoMlJ2bIoBJde4wKh3s6u7iIW2weKPBaNuP1mHxvy9ji+3X1LYi5tltQk5p37xrmn25KgO4w4dGRWI79880+V5j85SdYpBGGAZOJa73D86xsdrHW5yC2FZabNVX63rli1/g6vtzw3mZ5Jc11fH7aoL53y53bzJO9uHzZQA9qK/AIz6kdWTqZws9+v1fr8Us+z8+TNs6uJgB88wGK644SNLPbWF7kw8LHKVkh4cfPt3a/2KuRf+kixUZlEueW/vqJdZuMSSdC98jOj3Oauk7xetov9Se+eGxqSBXltyjUod/wfGPzDGCsbIBeglk6Pm3dJa6oue/WAKJbNEHdIlsMSc60Enbp4Qi3MqXT4NKoFFqrKbrFFKF06erTKLMvWGU8evlM5OAVB8AOzsGYaCb4JYHJ8Z683EwMgoZRbAw5XKMrkERobJ0rby/931SDoLyGuhAAAAAElFTkSuQmCC"
                      alt="filter applied"
                    />
                  </div>
                  <div>
                    <a>FOR ANY HELP YOU MAY CALL US AT </a><br />
                    <a>1800-267-4444</a>
                  </div>
                  <div
                    style="
                      display: block;
                      margin-top: 5px;
                      font-family: Source Sans Pro, Roboto, sans-serif;
                    "
                  >
                    (Monday To Saturday,8AM to 10PM and Sunday,10AM to 7PM)
                  </div>
                </div>
              </div>
            </div>
    
            <div class="css-10rz8mq">
              <div class="css-13qjmwc">
                <div width="20" class="css-iwvb0y">
                  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 250">
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M157.9 57.2c5-9.6-11.2-6.9-11.2-6.9-5.8 0-8.4 7-9.6 9l-17.5 34.5c-3.3 5.7-14.2 30.1-17.8 35.5-.3-5.5.1-16.5.2-19.1.7-10.4 1.4-18.3 2.5-27.8.8-7.4 2.4-15.7.9-23.1-1-4.6-2.5-4.9-9.1-5.6-6.9-.7-11.6 9.3-13.9 14-8.4 17.4-17.8 34.4-25.3 52.2-2.2 5.2-4.9 10.4-7.2 15.5-2.7 6.2-5.2 12.3-8.1 18.4-3.1 6.4-12.8 27.4-15.5 34-3 7.2-3.6 13 8.4 12.7 1.9 0 6.1.4 11.3-5.2 4.1-4.4 4.9-8.5 7.3-14.6 8.6-21.6 14.7-35.9 24.1-57.3.9-2.1 3-8.2 5.1-12.9-.1 6.7-1.2 14.7-1.7 20-1.6 19.4-2.7 38.1-4.4 57.3-.2 2.6-.9 5.7.3 8.1 1.2 2.4 4.2 3 6.6 3.3 9.6 1.2 10.6-3.6 13.6-10.2 2.7-5.9 4.3-10.7 6.7-16.7 7.4-18.5 15.2-36.8 23.8-54.8 2.2-4.6 4.4-9.1 6.8-13.6 4.4-8.3 8-16.1 12.8-25.3 3.6-6.6 7.1-14.1 10.9-21.4zm329.5 52.1c-1.1-11.1-16.3-5.5-25.4-3.8-3.4.6-13.9 2.6-26 4.9-.5-12.5-.3-10-.4-17.6-.3-11-.9-19.6-1.5-29.3-.4-6.1-1.3-14.6-12.3-13-12.8 1.8-14.9 8.2-18.3 15.9-8.9 20.1-8.6 20.2-18.7 42.6-.8 1.7-4.5 10.7-5.1 12.5-.4.1-1.2.3-2.2.6-4.1.9-9.1 2-14.6 3.2l.1-.5c1.3-10.2 2.9-20.4 4.3-30.6 1.3-9.3 2.7-24.5 3.8-33.8 1.2-10-10.4-9.8-10.4-9.8-7.1-.4-9.8 1.7-14.3 7.5-7.7 10-17 20.8-25.2 31.8-14.9 19.9-25.8 34.9-39.3 54.9-3.9 5.8-9.9 14.6-15.1 21.5-3.5-6.9-6.5-14.5-9.4-21.5-4.2-10-7.3-16.2-9.3-22.8-1.8-5.8.4-6.6 4.7-9.9 12.4-9.4 26.4-15.9 39.1-24.9 9-6.4 19.8-13.5 28.6-20.1 0 0 5.1-3 7.9-6.8 3.5-4.8-6.4-9.8-6.4-9.8-5.6-.9-8.7.4-12.6 2.2-4 1.8-9.2 5.9-12.6 8.6-7.5 5.8-17 12.7-24.4 18.5-9.1 7.1-15.3 11.5-25.3 17.4l25.4-38c8.3-10.7-13.7-13.7-22.1-2.4-7.8 10.1-13.1 19-19.2 28.2-14.7 21.9-26.8 44.9-38.9 69-4.6 9.2-9.1 18.8-13.3 28.3-2 4.6-7.9 15.2.2 16.3 17.3 2.2 20.1-6 24-15.9 6.4-16.3 8.5-19.3 12.6-29.4 4-9.8 6.9-15.4 11.4-23.8.1-.1 1.4-2.2 1.4-2.2.8 1.7 6.1 19.3 6.8 21.3 3.6 9.5 9.9 31.7 13.5 41.8 2.6 8.4 3.3 10.8 14.6 10.5 5.6-.1 8-2.3 11.7-9.3s19.7-36.8 19.7-36.8c4.8-.8 11.7-2 16.2-2.8.8-.1 2.6-.5 5.1-1 1.7-.2 3.1-.5 4.2-.8.1 0 .1 0 .2-.1 4.4-.9 10-2 16.1-3.2-1.1 5.5-4.5 17.6-5.2 20.7 0 0-7.4 28.8 2.2 30.3 6 .9 9.1-.1 9.1-.1 11.2-1.3 11.4-16.4 11.4-16.4l6.1-39.1c4.4-.9 8.8-1.8 13.1-2.6l-13.2 44.6c-1.9 6.3-3.3 14.4 8 14.4 9.2.5 9.8-5.3 9.8-5.3.2-.9 7.5-24.4 9.3-32.8 1.2-5.4 5.5-19.3 7.2-24.9 4.8-.9 8.4-1.6 10.1-1.9 2-.3 5.9-1 11-1.8-.1 5.2 0 12.4.1 13.4 1.1 15.8-.1 32.2 3.2 47.7.5 2.5 1.5 5.7 4.7 5.7 3.8 0 5-.4 9-.7 11.6-1 9.5-12.7 8.8-20.1-.8-8.2-1.6-15.1-2.7-23.3-.9-6.7-1.5-15.5-1.6-26.1v-.2c19-3.2 39.5-6.7 42.5-7.2 4.8-1.3 8.8-.9 7.8-11.9zm-148.5 21c0 .1-.1.1-.1.2-13.3 2.9-25.8 5.7-32.8 7.3 7-11.7 37.8-54.3 42.5-59.3-2.6 13.2-6.8 37.7-9.6 51.8zm76.8-16.8v.7c-6.4 1.2-12.4 2.4-17.2 3.3 6.1-15.8 12.5-35.2 16.3-45-.3 7.3 1.2 33.8.9 41zM229.2 66.4c2-3.7 6.5-11 .9-13.8-3.3-1.6-7.7-2.6-11.1-.9-2.8 1.5-4.9 4.4-6.3 7.1l-21.4 33.7c-3.5 4.8-6.8 10.8-13.9 11.6-4.7.5-8.1-1.5-8-5.7.1-4.3 2.6-10 4.5-13.7 5.6-10.6 6.3-14.2 11.7-24.7 5.2-10.1-11.8-12.4-16-5.1-3 5.2-8.8 15-10.1 18.3-2.4 6-20.4 34.6-12.6 45.9 10 12.8 36.6-7.4 23 15.9-11 18.7-17.9 29.4-27.5 46.7-2.1 3.7-4.7 7.4-5.4 11.8-1 6.2 7.5 6.1 11.2 5.9 6.5-.5 9.6-3.5 12.2-9.4 1.4-3.1 3.3-6.9 4.7-10 12.6-27.5 26-51.4 42.6-78 7.9-12.6 14.9-23.4 21.5-35.6z"
                      fill="#fc2779"
                    ></path>
                  </svg>
                  <ul class="css-66iazq">
                    <li class="css-9ms3pa">
                      <a
                        href="?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >WHO ARE WE?</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="/who_are_we#wwrcopen"
                        target="_blank"
                        class="css-184rvtn"
                        >CAREERS</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="authenticity-nykaa-guarantee?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >AUTHENTICITY</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="/who_are_we#wwrpress"
                        target="_blank"
                        class="css-184rvtn"
                        >PRESS</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="/who_are_we#wwrtestimonial"
                        target="_blank"
                        class="css-184rvtn"
                        >TESTIMONIALS</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a href="nykaa-csr.html" target="_blank" class="css-184rvtn"
                        >NYKAA CSR</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="responsible-disclosure.html"
                        target="_blank"
                        class="css-184rvtn"
                        >RESPONSIBLE DISCLOSURE</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="investor-relations.html"
                        target="_blank"
                        class="css-184rvtn"
                        >INVESTOR RELATIONS</a
                      >
                    </li>
                  </ul>
                </div>
                <div width="20" class="css-iwvb0y">
                  <header>Help</header>
                  <ul class="css-66iazq">
                    <li class="css-9ms3pa">
                      <a
                        href="helpCenter?domain=NYKAA.html"
                        target="_blank"
                        class="css-184rvtn"
                        >CONTACT US</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="helpCenter?domain=NYKAA.html"
                        target="_blank"
                        class="css-184rvtn"
                        >FREQUENTLY ASKED QUESTIONS</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >STORE LOCATOR</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >CANCELLATION &amp; RETURN</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >SHIPPING &amp; DELIVERY</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a href="sellonnykaa.html" target="_blank" class="css-184rvtn"
                        >SELL ON NYKAA</a
                      >
                    </li>
                  </ul>
                </div>
                <div width="20" class="css-iwvb0y">
                  <header>Inspire Me</header>
                  <ul class="css-66iazq">
                    <li class="css-9ms3pa">
                      <a
                        href="?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >BEAUTY BOOK</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="https://nykaatv-web.nykaa.com/?utm_source=Desktop_web_footer"
                        target="_blank"
                        class="css-184rvtn"
                        >Nykaa TV</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >Nykaa Network</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >BUYING GUIDES</a
                      >
                    </li>
                  </ul>
                </div>
                <div width="20" class="css-iwvb0y">
                  <header>Quick Links</header>
                  <ul class="css-66iazq">
                    <li class="css-9ms3pa">
                      <a
                        href="?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >OFFER ZONE</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >NEW LAUNCHES</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="https://www.nykaaman.com/?utm_source=Desktop_web_footer"
                        target="_blank"
                        class="css-184rvtn"
                        >NYKAA MAN</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="https://www.nykaafashion.com/?utm_source=Desktop_web_footer"
                        target="_blank"
                        class="css-184rvtn"
                        >NYKAA FASHION</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="nykaa-pro?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >NYKAA PRO</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >NYKAA FEMINA BEAUTY AWARDS WINNERS 2019</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="sitemap?root=nav_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >Sitemap</a
                      >
                    </li>
                  </ul>
                </div>
                <div width="20" class="css-iwvb0y">
                  <header>Top Categories</header>
                  <ul class="css-66iazq">
                    <li class="css-9ms3pa">
                      <a href="makeup.html" target="_blank" class="css-184rvtn"
                        >Makeup</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a href="skin-care.html" target="_blank" class="css-184rvtn"
                        >Skin</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a href="hair-care.html" target="_blank" class="css-184rvtn"
                        >Hair</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="personal-care.html"
                        target="_blank"
                        class="css-184rvtn"
                        >Personal Care</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="best-personal-care-appliances-online?utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >APPLIANCES</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="mom-and-baby.html"
                        target="_blank"
                        class="css-184rvtn"
                        >Mom and Baby</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a href="wellness.html" target="_blank" class="css-184rvtn"
                        >Wellness</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a href="fragrance.html" target="_blank" class="css-184rvtn"
                        >Fragrance</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="9564?root=nav_1.html"
                        target="_blank"
                        class="css-184rvtn"
                        >NATURAL</a
                      >
                    </li>
                    <li class="css-9ms3pa">
                      <a
                        href="luxe-focus?root=nav_footer&amp;utm_source=Desktop_web_footer.html"
                        target="_blank"
                        class="css-184rvtn"
                        >Luxe</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <style data-emotion-css="36z0xl">
              .css-36z0xl {
                width: 100%;
              }
            </style>
            <div class="css-36z0xl">
              <div class="css-1og3j6c">
                <style data-emotion-css="10m1un1">
                  .css-10m1un1 {
                    background-color: #f3f3f3;
                    color: #3f3f51;
                    margin-top: 9px;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    font-size: 12px;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                  }
    
                  .css-10m1un1 div:last-child {
                    padding-right: 0;
                  }
    
                  .css-10m1un1 div:first-child {
                    padding-left: 0;
                  }
                </style>
                <div class="css-10m1un1">
                  <style data-emotion-css="fd2g8d">
                    .css-fd2g8d {
                      padding: 0 25px;
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -ms-flexbox;
                      display: flex;
                      line-height: 20px;
                      -webkit-flex: 1;
                      -ms-flex: 1;
                      flex: 1;
                    }
    
                    .css-fd2g8d img {
                      margin-bottom: auto;
                    }
                  </style>
                  <div class="css-fd2g8d">
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" alt="Free Shipping" />
                    <div>
                      <style data-emotion-css="cohu28">
                        .css-cohu28 {
                          font-size: 16px;
                          font-weight: 600;
                          line-height: 24px;
                          text-transform: uppercase;
                          margin: 0 15px 10px 15px;
                          text-align: left;
                          padding-bottom: 5px;
                          border-bottom: 1px solid #e1e1e1;
                        }
                      </style>
                      <div class="css-cohu28">Free Shipping</div>
                      <style data-emotion-css="cxvkvd">
                        .css-cxvkvd {
                          font-size: 14px;
                          font-weight: 400;
                          line-height: 20px;
                          padding: 0 15px;
                        }
                      </style>
                      <div class="css-cxvkvd">
                        for orders above INR
                        <!-- -->499
                      </div>
                    </div>
                  </div>
                  <div class="css-fd2g8d">
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg" alt="Easy Returns" />
                    <div>
                      <div class="css-cohu28">Easy Returns</div>
                      <div class="css-cxvkvd">
                        15 Day Easy Returns For Most Products
                      </div>
                    </div>
                  </div>
                  <div class="css-fd2g8d">
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" alt="brands count" />
                    <div>
                      <div class="css-cohu28">Authentic Products</div>
                      <div class="css-cxvkvd">
                        Sourced Directly from Brands/ Authorised Distributors
                      </div>
                    </div>
                  </div>
                  <div class="css-fd2g8d">
                    <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg" alt="2400+ brands" />
                    <div>
                      <div class="css-cohu28">2400+ brands</div>
                      <div class="css-cxvkvd">Well Curated 1.9Lakh + Product</div>
                    </div>
                  </div>
                </div>
                <style data-emotion-css="x4l36m">
                  .css-x4l36m {
                    background-color: #f3f3f3;
                    padding: 20px 0 0 10px;
                    margin-top: 9px;
                  }
                </style>
                <div class="css-x4l36m">
                  <style data-emotion-css="iqlbj5">
                    .css-iqlbj5 {
                      text-align: center;
                      text-transform: uppercase;
                      -webkit-letter-spacing: 1px;
                      -moz-letter-spacing: 1px;
                      -ms-letter-spacing: 1px;
                      letter-spacing: 1px;
                      font-size: 14px;
                      font-weight: 500;
                    }
                  </style>
                  <div class="css-iqlbj5">
                    show us some love &#10084; on social media
                  </div>
                  <style data-emotion-css="1i496c0">
                    .css-1i496c0 {
                      margin: 6px 0 0;
                      list-style: none;
                      display: -webkit-box;
                      display: -webkit-flex;
                      display: -ms-flexbox;
                      display: flex;
                      -webkit-box-pack: center;
                      -webkit-justify-content: center;
                      -ms-flex-pack: center;
                      justify-content: center;
                    }
                  </style>
                  <ul class="css-1i496c0">
                    <style data-emotion-css="r44k6v">
                      .css-r44k6v {
                        margin: 0;
                      }
                    </style>
                    <li class="css-r44k6v">
                      <style data-emotion-css="n82rmv">
                        .css-n82rmv {
                          display: inline-block;
                          padding: 10px;
                        }</style><a
                        href="https://www.instagram.com/mynykaa/?ref=badge"
                        target="_blank"
                        class="css-n82rmv"
                        ><img
                          src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg"
                          alt="Instagram"
                      /></a>
                    </li>
                    <li class="css-r44k6v">
                      <a
                        href="https://www.facebook.com/MyNykaa"
                        target="_blank"
                        class="css-n82rmv"
                        ><img
                          src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg"
                          alt="Facebook"
                      /></a>
                    </li>
                    <li class="css-r44k6v">
                      <a
                        href="https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA"
                        target="_blank"
                        class="css-n82rmv"
                        ><img
                          src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg"
                          alt="Youtube"
                      /></a>
                    </li>
                    <li class="css-r44k6v">
                      <a
                        href="https://twitter.com/MyNykaa"
                        target="_blank"
                        class="css-n82rmv"
                        ><img
                          src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg"
                          alt="Twitter"
                      /></a>
                    </li>
                    <li class="css-r44k6v">
                      <a
                        href="https://www.pinterest.com/mynykaa/"
                        target="_blank"
                        class="css-n82rmv"
                        ><img
                          src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg"
                          alt="Pinterest"
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="css-1og3j6c">
              <style data-emotion-css="1unkyaf">
                .css-1unkyaf {
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  width: 100%;
                  border-top: 1px solid #ebebeb;
                  -webkit-box-pack: justify;
                  -webkit-justify-content: space-between;
                  -ms-flex-pack: justify;
                  justify-content: space-between;
                }
              </style>
              <div class="css-1unkyaf">
                <style data-emotion-css="1wng08l">
                  .css-1wng08l {
                    width: 60%;
                    padding-left: 10px;
                    padding-right: 10px;
                  }
                </style>
                <div class="css-1wng08l"></div>
              </div>
            </div>
            <style data-emotion-css="wi2x90">
              .css-wi2x90 {
                background-color: #fc2779;
                color: #ffffff;
                border-top: 1px solid #fff;
                text-align: center;
                line-height: 18px;
                padding: 16px;
              }
            </style>
            <div class="css-wi2x90">
              <style data-emotion-css="180lbc6">
                .css-180lbc6 {
                  font-size: 14px;
                  color: #fff;
                  -webkit-text-decoration: none;
                  text-decoration: none;
                  display: inline-block;
                  line-height: 1;
                  padding: 0 12px;
                  text-transform: uppercase;
                  margin: 0;
                }</style><a href="terms-conditions.html" target="_blank" class="css-180lbc6"
                >Terms &amp; Conditions</a
              ><a href="shipping-policy.html" target="_blank" class="css-180lbc6"
                >Shipping Policy</a
              ><a
                href="cancellation-policy.html"
                target="_blank"
                class="css-180lbc6"
                >cancellation policy</a
              ><a href="privacy-policy.html" target="_blank" class="css-180lbc6"
                >privacy policy</a
              >
            </div>
            <style data-emotion-css="10vz1eu">
              .css-10vz1eu {
                background-color: #fc2779;
                color: #ffffff;
                padding-bottom: 10px;
                text-align: center;
              }
            </style>
            <div class="css-10vz1eu">
              <style data-emotion-css="v0a2uo">
                .css-v0a2uo {
                  font-size: 12px;
                  line-height: 20px;
                }
              </style>
              <p class="css-v0a2uo">
                <span>&copy;</span>
                <!-- -->2021
                <!-- -->
                Nykaa E-Retail Pvt. Ltd. All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
        <div id="portal-root"></div>
        <script>
          window.__PRELOADED_STATE__ = {
            appReducer: {
              pageType: null,
              statusCode: 200,
              storeId: "",
              configFlagsFetched: false,
              configFlags: {
                isSmartLockActive: false,
                mobileMapping: {
                  sendOtpCaptcha: false,
                  verifyOtpCaptcha: false,
                },
              },
              run: 100,
              client: {
                device: "WEB",
              },
              breadCrumb: [],
              isSliderOpen: false,
              showBreadcrumb: false,
            },
            auth: {
              fetching: false,
              dataFetched: false,
              isFetchingError: false,
              fetchedOverNetwork: false,
              user: {
                cartItemsCount: 0,
                email: "",
                firstName: "",
                formKey: "",
                groupId: "",
                id: "",
                isLoyal: false,
                isPro: false,
                lastName: "",
                rewardPoints: 0,
                userName: "",
                wishlist: [],
              },
            },
            dataLayer: {
              pageName: "Nykaa : Home Page",
              pageType: "Nykaa : Home Page",
            },
            productPage: {
              loading: false,
              isFetchingError: false,
              product: null,
              activeTab: 0,
            },
            CAVProducts: {
              loading: false,
              isNotFound: false,
              isFetchingError: false,
              data: [],
            },
            CABProducts: {
              loading: false,
              isNotFound: false,
              isFetchingError: false,
              data: [],
            },
            searchSuggestions: {
              productSuggestions: [],
              otherSuggestions: [],
              trendingSearches: [],
              searchAutoSuggestions: [],
              searchField: "",
            },
            reviewImages: {
              images: [],
              imagesWithInfo: {
                imageUrl: [],
                review: [],
              },
              productId: null,
              totalImagesAvailable: 0,
              loading: false,
              isNotFound: false,
              isFetchingError: false,
            },
            remoteConfig: {
              switches: {
                showOffersOnPdp: true,
                showRewardPoints: true,
                showViewSimilar: true,
                newRatingForm: true,
                showDeliveryOnPd: true,
                internationalMode: false,
                redirectionList: [],
                trackDeviceId: false,
                pdPageBanners: true,
                offerListingEnabled: true,
                appLinkEnabled: true,
                featuresEnabled: true,
                socialLinksEnabled: true,
                newsletterEnabled: true,
                helpCenterEnabled: true,
                mobileNumberMapping: true,
                showUserPortfolio: false,
                webOtpAutoRead: true,
                vpEnabled: false,
                experimentV2Enabled: false,
                loadInterFont: true,
              },
              configs: {
                whitelistedDomains: [
                  "www.nykaa.com",
                  "api.nykaa.com",
                  "adn-static2.nykaa.com",
                  "adn-static1.nykaa.com",
                  "prod-events.nykaa.com",
                ],
                customersAlsoBought: {
                  status: false,
                },
                customersAlsoViewed: {
                  status: false,
                },
                rewardPointsOnSignUp: 2000,
                upiOffer: {
                  status: false,
                  message: "Get upto &#8377;40 OFF on BHIM UPI Payment",
                },
                priceReveal: {
                  active: false,
                  productEligibilityActive: false,
                  data: {
                    bucket: "PinkFridayBox2021",
                    pinkBoxUrl: "/saleBox/?ptype=saleBox&saleId=pink-friday-sale",
                    saleOfferTitle: "PINK FRIDAY OFFER",
                    colors: {
                      offerTitle: "#FFFFFF",
                      offerPrice: "#FFFFFF",
                      offerDiscount: "#FFFFFF",
                      offerDescription: "#FFFFFF",
                    },
                    primaryActionLabel: "Add To Pink Box",
                    secondaryActionLabel: "Go To Pink Box",
                    alreadyAddedToBoxInfo:
                      "You added this product to your Pink Box",
                    addedToBoxToastMessage: "Added to Pink Box",
                    addedToBoxErrorMessage: "Couldn't Add to Pink Box, Try again",
                  },
                },
                trendingSearchesToShow: 5,
                maxSearchHistoryCount: 5,
                storeOptions: {
                  status: false,
                  backToBeautyText: "Nykaa Main Store",
                  exploreMoreStores:
                    "https://images-static.nykaa.com/media/explore_stores_v5.png",
                  stores: [],
                },
                contentPolicy: {
                  status: true,
                  value:
                    "img-src 'self' data: *.nykaa.com *.naikaa.com fsnecommerce.sc.omtrdc.net evbk.gamooga.com www.google-analytics.com www.google.com www.google.co.in www.facebook.com stats.g.doubleclick.net cm.everesttech.net www.googletagmanager.com *.criteo.net *.criteo.com www.youtube.com dpm.demdex.net cm.g.doubleclick.net  www.gstatic.com m.youtube.com cdn-jp.gsecondscreen.com;script-src 'self' 'unsafe-inline' 'unsafe-eval' *.nykaa.com *.naikaa.com assets.adobedtm.com www.googletagmanager.com www.google-analytics.com  www.googleadservices.com *.criteo.net *.criteo.com connect.facebook.net cdn-jp.gsecondscreen.com googleads.g.doubleclick.net apis.google.com *.netcoresmartech.com ae.gsecondscreen.com evbk.gamooga.com *.speedcurve.com nykaa.verloop.io cdn-ops.verloop.io cdn.speedcurve.com lux.speedcurve.com cdn.nykaaman.com https://11310639.fls.doubleclick.net/activityi;report-uri https://o1.ingest.sentry-prod.nykaa.com/api/50/security/?sentry_key=0fedf4f8d3b84b0b8fb2ad1eec027fb4;",
                  userPercentage: 10,
                  headerKey: "Content-Security-Policy",
                },
                sortForListing: [
                  {
                    name: "popularity",
                    key: "popularity",
                  },
                  {
                    name: "discount",
                    key: "discount",
                  },
                  {
                    name: "name",
                    key: "name",
                  },
                  {
                    name: "customer top rated",
                    key: "customer_top_rated",
                  },
                  {
                    name: "new arrivals",
                    key: "new_arrival",
                  },
                  {
                    name: "price: high to low",
                    key: "price_desc",
                  },
                  {
                    name: "price: low to high",
                    key: "price_asc",
                  },
                ],
                freeShipping: 499,
                homePage: {
                  initialInventories: 10,
                  eagerLoadImages: 6,
                  pageTypeSuffix: {
                    status: true,
                    suffix: "sale",
                  },
                },
                meta: {
                  productPage: {
                    title:
                      "Product_Name: Buy Product_Name Online at Best Price in India | Nykaa",
                    description:
                      "Product_Name Online: Buy Product_Name at best price from Nykaa. Check out Product_Name review. &#10003;COD &#10003;Free Shipping",
                  },
                  brandPage: {
                    title:
                      "Brand_Name - Buy Brand_Name Products Online at Best Price | Nykaa",
                    description:
                      "Brand_Name products: Buy Brand_Name products online at best price on Nykaa. Browse from a wide range of Brand_Name authentic products online at low price. &#10003;COD &#10003;Free shipping &#10003;Original Products",
                  },
                  searchPage: {
                    title:
                      "Buy Cosmetics Products & Beauty Products Online in India at Best Price | Nykaa",
                    description:
                      "Buy cosmetics &amp; beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products &amp; more from top beauty brands. &#10004; free shipping* &#10004; Cash on Delivery",
                    keywords:
                      "Nykaa, Nyka, Nykaa.com, Nika, Nyyka, Nyka.com, Nykaa online, Nykaa India, buy cosmetics online, cosmetics online, buy beauty products online, beauty products online, buy cosmetics india, buy beauty products india",
                  },
                },
                guidedSearch: {
                  userPercentage: 0,
                  status: false,
                },
                searchSuggestionIcons: {
                  query: "https://www.nykaa.com/media/wysiwyg/2020/search.svg",
                  buying_guide:
                    "https://www.nykaa.com/media/wysiwyg/2020/buying-guide.svg",
                  history: "https://www.nykaa.com/media/wysiwyg/2020/clock.svg",
                  trending:
                    "https://www.nykaa.com/media/wysiwyg/2020/ic-trending.svg",
                },
                AB: {
                  personalizationHome: {
                    status: true,
                    userPercentage: 10,
                    keyName: "ab_personalHome",
                  },
                  dweblstMigration: {
                    status: true,
                    userPercentage: 100,
                    keyName: "ab_dweb_listingpage",
                    cookie: "D_LST",
                  },
                  suggestMobileMap: {
                    status: true,
                    userPercentage: 100,
                    keyName: "ab_suggestedMap",
                  },
                  dwebPdpMigration: {
                    status: true,
                    userPercentage: 100,
                    keyName: "ab_dweb_pdp",
                    cookie: "D_PDP",
                  },
                  autoFillSignUp: {
                    status: false,
                    userPercentage: 0,
                    keyName: "ab_autoFill",
                  },
                },
                appLinks: {
                  title: "experience the nykaa mobile app",
                  googlePlay: "https://nykaa.onelink.me/2573509543/aba6fc39",
                  appStore: "https://nykaa.onelink.me/2573509543/aba6fc39",
                },
                features: {
                  brandsCount: {
                    iconUrl:
                      "https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg",
                    title: "2400+ brands",
                    text: "Well Curated 1.9Lakh + Product",
                  },
                  freeShip: {
                    iconUrl:
                      "https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg",
                    title: "Free Shipping",
                    text: "for orders above INR",
                  },
                  genuineProduct: {
                    iconUrl:
                      "https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg",
                    title: "Authentic Products",
                    text: "Sourced Directly from Brands/ Authorised Distributors",
                  },
                  easyReturns: {
                    iconUrl:
                      "https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg",
                    title: "Easy Returns",
                    text: "15 Day Easy Returns For Most Products",
                  },
                },
                socialLinks: {
                  text: "show us some love &#10084; on social media",
                  social: [
                    {
                      title: "Instagram",
                      imgUrl:
                        "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg",
                      link: "https://www.instagram.com/mynykaa/?ref=badge",
                    },
                    {
                      title: "Facebook",
                      imgUrl:
                        "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg",
                      link: "https://www.facebook.com/MyNykaa",
                    },
                    {
                      title: "Youtube",
                      imgUrl:
                        "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg",
                      link: "https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA",
                    },
                    {
                      title: "Twitter",
                      imgUrl:
                        "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg",
                      link: "https://twitter.com/MyNykaa",
                    },
                    {
                      title: "Pinterest",
                      imgUrl:
                        "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg",
                      link: "https://www.pinterest.com/mynykaa/",
                    },
                  ],
                },
                helpCenter: {
                  imgUrl: "https://www.nykaa.com/media/wysiwyg/2020/helpCenter.svg",
                  title: "HELP CENTER",
                  link: "https://www.nykaa.com/gateway-api/omsApis/helpCenter?domain=NYKAA",
                },
                VP: {
                  apiKey: "AIzaSyBCiWco5cS6Uja2-642pPZl_Ed0lRROZc4",
                  authDomain: "nykaa-android-1224.firebaseapp.com",
                  databaseURL: "https://nykaa-android-1224.firebaseio.com",
                  projectId: "nykaa-android-1224",
                  storageBucket: "nykaa-android-1224.appspot.com",
                  messagingSenderId: "1035734725184",
                  appId: "1:1035734725184:web:cd91daa8cac5a2baa0e5a5",
                  measurementId: "G-W9QPFFEM7C",
                  doc: "api_prioritization",
                  collection: "nykaa",
                },
                ABV2: [],
                landingPageABConfig: {},
                plpPriceReveal: {
                  status: false,
                  categoryId: [],
                  text: "SALE OFFER INSIDE",
                  textColor: "#E80071",
                  badgeColor: "#FDEBF4",
                },
              },
            },
            productQna: {
              error: false,
              QNA: [],
            },
            variants: {
              loading: false,
              isNotFound: false,
              isFetchingError: false,
              loadingProductId: "",
              data: [],
            },
            priceReveal: {
              items: [],
              error: null,
            },
            jsonLdData: {},
            homePage: {
              loading: false,
              isFetchingError: false,
              widgets: [
                {
                  inventoryName: "hp.carousel",
                  inventoryId: "5a0c0441fa134354ec81090f",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "carousel",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 1,
                  widgetData: {
                    id: "61b998789172e22b7ada0685",
                    widgetType: "CAROUSEL",
                    positionInParent: 1,
                    inventoryName: "hp.carousel",
                    params: {
                      title: "",
                      aspectRatio: "",
                      delayTimer: 5000,
                      childBkgColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "61b998789172e22b7ada0693",
                        widgetType: "CAROUSEL_CHILD",
                        positionInParent: 3,
                        inventoryName: "hp.carousel",
                        params: {
                          appLinkType: "brand",
                          appLinkData: "17879",
                          url: "https://www.nykaa.com/brands/morphe/c/17879?transaction_id=fc45abba9795965b217f8e10ba2d0558&intcmp=hp,carousel,3,morphe",
                          title:
                            '"L1: Not Your Average Palette, L2: Jaclyn & Morphe Don\'T Do Boring!"',
                          section: "primary",
                          actionType: "url_redirection",
                          delayTimer: "",
                          randomize: "yes",
                          filterData: "",
                          tileId: "morphe",
                          segments: "",
                          offerData: "",
                          brandId: "",
                          fundingType: "paid_brand_funded",
                          brands: "143198",
                          trackingParams: "hp,carousel,3,morphe",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c9a15e82e90602488b72",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.carousel",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/6a727fce-9143-4af8-bad9-fb439e995103.gif",
                              aspectRatio: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "carousel",
                              lang: "en",
                              position1: 1,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "carousel",
                          lang: "en",
                          position1: 1,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "morphe",
                          position2: 1,
                          transaction_id: "fc45abba9795965b217f8e10ba2d0558",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998789172e22b7ada068d",
                        widgetType: "CAROUSEL_CHILD",
                        positionInParent: 2,
                        inventoryName: "hp.carousel",
                        params: {
                          appLinkType: "brand",
                          appLinkData: "4290",
                          url: "https://www.nykaa.com/brands/the-face-shop/c/4290?transaction_id=c95f4ef1dee84e98d02da1a5a4c0667a&intcmp=hp,carousel,2,the-face-shop",
                          title:
                            "Upto 30% Off + Free Never Have I Ever Card Game On Orders Above Rs.999",
                          section: "primary",
                          actionType: "url_redirection",
                          delayTimer: "",
                          randomize: "yes",
                          filterData: "",
                          tileId: "the-face-shop",
                          segments: "",
                          offerData: "",
                          brandId: "",
                          fundingType: "paid_brand_funded",
                          brands: "33955",
                          trackingParams: "hp,carousel,2,the-face-shop",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c9874129b2002db8d0b3",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.carousel",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/a9844099-ba56-4273-b016-4110e4b81f60.gif",
                              aspectRatio: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "carousel",
                              lang: "en",
                              position1: 1,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "carousel",
                          lang: "en",
                          position1: 1,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "the-face-shop",
                          position2: 2,
                          transaction_id: "c95f4ef1dee84e98d02da1a5a4c0667a",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b9c9ec005745f340551684",
                        widgetType: "CAROUSEL_CHILD",
                        positionInParent: 7,
                        inventoryName: "hp.carousel",
                        params: {
                          appLinkType: "brand",
                          appLinkData: "15967",
                          url: "https://www.nykaa.com/luxe/brands/charlotte-tilbury/c/15967?transaction_id=5fd9a4c57266bc7b2eb751d39c318d44&intcmp=hp,carousel,7,charlotte-tilbury",
                          title:
                            '"Pouch On All Orders Mini Kissing Lipstick On 4500 Mini Aff On Rs. 6500"',
                          section: "primary",
                          actionType: "url_redirection",
                          delayTimer: "",
                          randomize: "yes",
                          filterData: "",
                          tileId: "charlotte-tilbury",
                          segments: "",
                          offerData: "",
                          brandId: "",
                          fundingType: "paid_brand_funded",
                          brands: "133057",
                          trackingParams: "hp,carousel,7,charlotte-tilbury",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61bb1323e23666a6bb6002a5",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.carousel",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/c75ab837-c02d-496f-bbd0-a830b507e8d8.gif",
                              aspectRatio: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "carousel",
                              lang: "en",
                              position1: 1,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "carousel",
                          lang: "en",
                          position1: 1,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "charlotte-tilbury",
                          position2: 3,
                          transaction_id: "5fd9a4c57266bc7b2eb751d39c318d44",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998789172e22b7ada069f",
                        widgetType: "CAROUSEL_CHILD",
                        positionInParent: 5,
                        inventoryName: "hp.carousel",
                        params: {
                          appLinkType: "brand",
                          appLinkData: "7675",
                          url: "https://www.nykaa.com/brands/dot-key/c/7675?transaction_id=a07b075e85688174c8d121ff75a84667&intcmp=hp,carousel,5,dot--key",
                          title: "Upto 20% Off + Buy 2 Get 2 Free !",
                          section: "primary",
                          actionType: "url_redirection",
                          delayTimer: "",
                          randomize: "yes",
                          filterData: "",
                          tileId: "dot--key",
                          segments: "",
                          offerData: "",
                          brandId: "",
                          fundingType: "paid_brand_funded",
                          brands: "71599",
                          trackingParams: "hp,carousel,5,dot--key",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c9ce80cc5d8ae5c018ad",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.carousel",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/9eee5cc9-9678-4bd5-a746-f75e1bd19899.gif",
                              aspectRatio: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "carousel",
                              lang: "en",
                              position1: 1,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "carousel",
                          lang: "en",
                          position1: 1,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "dot--key",
                          position2: 4,
                          transaction_id: "a07b075e85688174c8d121ff75a84667",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998789172e22b7ada0687",
                        widgetType: "CAROUSEL_CHILD",
                        positionInParent: 1,
                        inventoryName: "hp.carousel",
                        params: {
                          appLinkType: "category",
                          appLinkData: "9087",
                          url: "https://www.nykaa.com/nykaa-skin-secrets-sheet-masks/c/9087?transaction_id=0aaefc75f1750491cc8f275370f11908&intcmp=hp,carousel,1,nykaa-naturals",
                          title: "Buy 5 Get 5 Free",
                          section: "primary",
                          actionType: "url_redirection",
                          delayTimer: "",
                          randomize: "yes",
                          filterData: "",
                          tileId: "nykaa-naturals",
                          segments: "",
                          offerData: "",
                          brandId: "",
                          fundingType: "paid_brand_funded",
                          brands: "71597",
                          trackingParams: "hp,carousel,1,nykaa-naturals",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c97511ec3e847207c0d7",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.carousel",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/01aabd10-4d7c-420a-92df-ee0dd7ec276f.jpg",
                              aspectRatio: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "carousel",
                              lang: "en",
                              position1: 1,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "carousel",
                          lang: "en",
                          position1: 1,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "nykaa-naturals",
                          position2: 5,
                          transaction_id: "0aaefc75f1750491cc8f275370f11908",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998789172e22b7ada0699",
                        widgetType: "CAROUSEL_CHILD",
                        positionInParent: 4,
                        inventoryName: "hp.carousel",
                        params: {
                          appLinkType: "brand",
                          appLinkData: "997",
                          url: "https://www.nykaa.com/luxe/brands/esteelauder/c/997?transaction_id=b03bc07885e6d2c58ad80d987a5143e1&intcmp=hp,carousel,4,estee-lauder",
                          title:
                            '"On Rs. 3500: Pick A Bestseller Mini  On Rs. 5500: 5 Piece Gift Set"',
                          section: "primary",
                          actionType: "url_redirection",
                          delayTimer: "",
                          randomize: "yes",
                          filterData: "",
                          tileId: "estee-lauder",
                          segments: "",
                          offerData: "",
                          brandId: "",
                          fundingType: "paid_brand_funded",
                          brands: "8013",
                          trackingParams: "hp,carousel,4,estee-lauder",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c9af5e82e90602488b7c",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.carousel",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/7a2cdf89-ed4c-45ef-9e2d-76cd59618294.gif",
                              aspectRatio: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "carousel",
                              lang: "en",
                              position1: 1,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "carousel",
                          lang: "en",
                          position1: 1,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "estee-lauder",
                          position2: 6,
                          transaction_id: "b03bc07885e6d2c58ad80d987a5143e1",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998789172e22b7ada06a5",
                        widgetType: "CAROUSEL_CHILD",
                        positionInParent: 6,
                        inventoryName: "hp.carousel",
                        params: {
                          appLinkType: "brand",
                          appLinkData: "15381",
                          url: "https://www.nykaa.com/luxe/brands/dior/c/15381?transaction_id=8474f53102842734732170db98e760da&intcmp=hp,carousel,6,dior",
                          title: "As Per Banner",
                          section: "primary",
                          actionType: "url_redirection",
                          delayTimer: "",
                          randomize: "yes",
                          filterData: "",
                          tileId: "dior",
                          segments: "",
                          offerData: "",
                          brandId: "",
                          fundingType: "paid_brand_funded",
                          brands: "129237",
                          trackingParams: "hp,carousel,6,dior",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c9e15e82e90602488b86",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.carousel",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/11857184-3285-4c1e-8ef7-4b24a55e5595.jpg",
                              aspectRatio: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "carousel",
                              lang: "en",
                              position1: 1,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "carousel",
                          lang: "en",
                          position1: 1,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "dior",
                          position2: 7,
                          transaction_id: "8474f53102842734732170db98e760da",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {},
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "carousel",
                      lang: "en",
                      position1: 1,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.focus_banner",
                  inventoryId: "5eaac63fd5a542498988ba77",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "focus_banner",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 2,
                  widgetData: {
                    id: "6097e4ecb25a2496b7c89bb2",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "hp.focus_banner",
                    params: {
                      theme: "default",
                      title: "",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "1",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "61b4b7203ce8a9e555c0a146",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.focus_banner",
                        params: {
                          url: "https://www.nykaa.com/offers.html?transaction_id=08ce57d201179b7e411b16afa59b6565&intcmp=hp,focus_banner,1,chirstmas-sale",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "chirstmas-sale",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            "nykaa://nykaa?dl_type=nlp&pagetype=mega-sale-native&pagedata=mega-sale",
                          appLinkType: "deeplink",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "1",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9cd56dcc2b891714884dc",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.focus_banner",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/b4e49723-9acd-4348-b240-ef37c2d23174.jpg",
                              aspectRatio: 4,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "1",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "focus_banner",
                              lang: "en",
                              position1: 2,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "focus_banner",
                          lang: "en",
                          position1: 2,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "chirstmas-sale",
                          position2: 1,
                          transaction_id: "08ce57d201179b7e411b16afa59b6565",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "below_image",
                      columnsInRow: "1",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "focus_banner",
                      lang: "en",
                      position1: 2,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.in_the_spotlight",
                  inventoryId: "5e7b77e831b2efbbf11a71e9",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "in_the_spotlight",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 3,
                  widgetData: {
                    id: "61b998709172e22b7ada0653",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "hp.in_the_spotlight",
                    params: {
                      theme: "default",
                      title: "In The Spotlight",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "2",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "61b998709172e22b7ada0655",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.in_the_spotlight",
                        params: {
                          url: "https://www.nykaa.com/luxe/brands/mac/c/3899?transaction_id=cb2a759bdd29e12a7bf753f9a25a7f33&intcmp=hp,in_the_spotlight,1,mac",
                          title: "",
                          discountTitle:
                            "On Rs.3000: Full Size Product + Pouch + Sample",
                          description: "Free Gift On All Orders",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "mac",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "3899",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c15747f38baf2c993017",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.in_the_spotlight",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/50f223e1-9932-4f32-9526-74f579a18cca.gif",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "in_the_spotlight",
                              lang: "en",
                              position1: 3,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "in_the_spotlight",
                          lang: "en",
                          position1: 3,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "mac",
                          position2: 1,
                          transaction_id: "cb2a759bdd29e12a7bf753f9a25a7f33",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998709172e22b7ada0661",
                        widgetType: "BANNER",
                        positionInParent: 3,
                        inventoryName: "hp.in_the_spotlight",
                        params: {
                          url: "https://www.nykaa.com/brands/minimalist/c/16420?transaction_id=8a8d608c5a21170adf14abbaa8213d9d&intcmp=hp,in_the_spotlight,3,minimalist",
                          title: "",
                          discountTitle: "Flat 15% On Rs.1500+",
                          description: "Flat 10% On Rs.1000+",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "minimalist",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "16420",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c15547f38baf2c993005",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.in_the_spotlight",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/c21cdbd6-2eb9-4de2-bff8-d28351b1ca56.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "in_the_spotlight",
                              lang: "en",
                              position1: 3,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "in_the_spotlight",
                          lang: "en",
                          position1: 3,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "minimalist",
                          position2: 2,
                          transaction_id: "8a8d608c5a21170adf14abbaa8213d9d",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998709172e22b7ada066d",
                        widgetType: "BANNER",
                        positionInParent: 5,
                        inventoryName: "hp.in_the_spotlight",
                        params: {
                          url: "https://www.nykaa.com/brands/maybelline-new-york/c/596?transaction_id=7f2c59cd3266b87de74717b040147b1e&intcmp=hp,in_the_spotlight,5,maybelline-new-york",
                          title: "",
                          discountTitle: "Upto 50% Off",
                          description: "Bride Tribe Glam Up Call",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "maybelline-new-york",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "596",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c15a47f38baf2c993029",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.in_the_spotlight",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/3bda3480-9e28-4470-a089-d4a43d012341.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "in_the_spotlight",
                              lang: "en",
                              position1: 3,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "in_the_spotlight",
                          lang: "en",
                          position1: 3,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "maybelline-new-york",
                          position2: 3,
                          transaction_id: "7f2c59cd3266b87de74717b040147b1e",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998709172e22b7ada0667",
                        widgetType: "BANNER",
                        positionInParent: 4,
                        inventoryName: "hp.in_the_spotlight",
                        params: {
                          url: "https://www.nykaa.com/nykaa-beauty-buy-1-get-1/c/13204?transaction_id=e5974e6740ad798d83f8ccf4858b31a7&intcmp=hp,in_the_spotlight,4,nykaa-cosmetics",
                          title: "",
                          discountTitle: "Buy 1 Get 1 Free",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "nykaa-cosmetics",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "13204",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9ccd22c5c579c474db998",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.in_the_spotlight",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/6a0e7a95-8b1f-40de-b499-48b343d079ce.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "in_the_spotlight",
                              lang: "en",
                              position1: 3,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "in_the_spotlight",
                          lang: "en",
                          position1: 3,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "nykaa-cosmetics",
                          position2: 4,
                          transaction_id: "e5974e6740ad798d83f8ccf4858b31a7",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998709172e22b7ada065b",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.in_the_spotlight",
                        params: {
                          url: "https://www.nykaa.com/brands/lakme/c/604?transaction_id=aa22f0e6d5e7db4d4212cc9e0f4920e7&intcmp=hp,in_the_spotlight,2,lakme",
                          title: "",
                          discountTitle: "Upto 50% Off",
                          description: "On Winter Makeup Must Haves!",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "lakme",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "604",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c15647f38baf2c99300e",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.in_the_spotlight",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/ab4d1d79-0ae3-4432-9801-44d43ee7a023.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "in_the_spotlight",
                              lang: "en",
                              position1: 3,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "in_the_spotlight",
                          lang: "en",
                          position1: 3,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "lakme",
                          position2: 5,
                          transaction_id: "aa22f0e6d5e7db4d4212cc9e0f4920e7",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998709172e22b7ada0679",
                        widgetType: "BANNER",
                        positionInParent: 7,
                        inventoryName: "hp.in_the_spotlight",
                        params: {
                          url: "https://www.nykaa.com/lingerie-online/brands/nykd-by-nykaa/c/14864?transaction_id=0e16f0463a0333fb79a4a687db14c356&intcmp=hp,in_the_spotlight,7,nykd-by-nykaa",
                          title: "",
                          discountTitle: "Upto 50% Off On Select Styles +",
                          description: "Buy 3, Get An Additional 10% Off",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "nykd-by-nykaa",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "14864",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c15b47f38baf2c993032",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.in_the_spotlight",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/a3e98c9c-0f70-41c3-9e3d-51a2502088ef.png",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "in_the_spotlight",
                              lang: "en",
                              position1: 3,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "in_the_spotlight",
                          lang: "en",
                          position1: 3,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "nykd-by-nykaa",
                          position2: 6,
                          transaction_id: "0e16f0463a0333fb79a4a687db14c356",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998709172e22b7ada0673",
                        widgetType: "BANNER",
                        positionInParent: 6,
                        inventoryName: "hp.in_the_spotlight",
                        params: {
                          url: "https://www.nykaa.com/brands/loreal-paris/c/595?transaction_id=7b742cf97dad34e8f52a17b77e44051d&intcmp=hp,in_the_spotlight,6,loreal-paris",
                          title: "",
                          discountTitle: "Upto 40% Off! ",
                          description: "Minimizes Pores & 8H Oil Control",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "loreal-paris",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "595",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c15947f38baf2c993020",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.in_the_spotlight",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/e40cd96e-1f01-4fce-ba40-2a972a772bc1.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "in_the_spotlight",
                              lang: "en",
                              position1: 3,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "in_the_spotlight",
                          lang: "en",
                          position1: 3,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "loreal-paris",
                          position2: 7,
                          transaction_id: "7b742cf97dad34e8f52a17b77e44051d",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998709172e22b7ada067f",
                        widgetType: "BANNER",
                        positionInParent: 8,
                        inventoryName: "hp.in_the_spotlight",
                        params: {
                          url: "https://www.nykaa.com/hair/hair-care/hair-serums-masks/c/2917?transaction_id=0cdcc0dc77e17db8cbbd24fc38c94382&intcmp=hp,in_the_spotlight,8,hair-serums-masks",
                          title: "",
                          discountTitle: "Luxe Hair Masques Starting At Rs.700",
                          description: "Explore Exciting Offers Today!",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "hair-serums-masks",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "2917",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9c1a447f38baf2c99303b",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.in_the_spotlight",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/6e30e79c-88e8-4a59-a591-4bc68cefcbe9.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "in_the_spotlight",
                              lang: "en",
                              position1: 3,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "in_the_spotlight",
                          lang: "en",
                          position1: 3,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "hair-serums-masks",
                          position2: 8,
                          transaction_id: "0cdcc0dc77e17db8cbbd24fc38c94382",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "on_image",
                      columnsInRow: "2",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "in_the_spotlight",
                      lang: "en",
                      position1: 3,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "desktop-homepage.return-strip",
                  inventoryId: "61963f9c2c5ce61000b1ba60",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "return-strip",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 4,
                  widgetData: {
                    id: "61963fb75255bf667446ac83",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "desktop-homepage.return-strip",
                    params: {
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "61963fe12230e28c9fb1b342",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "desktop-homepage.return-strip",
                        params: {
                          url: "?intcmp=desktop-homepage,return-strip,1,",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "none",
                          trackingParameters: "",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "",
                          appLinkType: "non_clickable",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "6163e16557bd09e8ef0bc716",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "desktop-homepage.return-strip",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/2825aaac-e3c4-416f-afed-f4d2f70139d0.jpg",
                              aspectRatio: 12,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "return-strip",
                              lang: "en",
                              position1: 4,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "return-strip",
                          lang: "en",
                          position1: 4,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "",
                          position2: 1,
                          transaction_id: "5cb2ce7b73b58715762798cd9c8ef1d0",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {},
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "return-strip",
                      lang: "en",
                      position1: 4,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.special_for_you",
                  inventoryId: "5eaac6c1d5a542498988ba7b",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "special_for_you",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 5,
                  widgetData: {
                    id: "614d87f12b36dcb9c24d9e8c",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "hp.special_for_you",
                    params: {
                      theme: "default",
                      title: "Only At Nykaa",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "2",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "61b9879a63b4584ff04be922",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.special_for_you",
                        params: {
                          url: "https://www.nykaa.com/brands/nykaa-cosmetics/c/1937?transaction_id=c70cd8f14fc5ba55d048addbedaaf031&intcmp=hp,special_for_you,1,nykaa-naturals",
                          title: "",
                          discountTitle: "Upto 30% Off",
                          description: "",
                          subDescription: "",
                          titleOrder: "Discount First",
                          actionType: "url_redirection",
                          trackingParameters: "nykaa-naturals",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "1937",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9ba05820d84ca07465f43",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.special_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/f4697cb5-088c-477e-97d5-92257ab26c59.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "special_for_you",
                              lang: "en",
                              position1: 5,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "special_for_you",
                          lang: "en",
                          position1: 5,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "nykaa-naturals",
                          position2: 1,
                          transaction_id: "c70cd8f14fc5ba55d048addbedaaf031",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b8705d63b4584ff04be8bd",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.special_for_you",
                        params: {
                          url: "https://www.nykaa.com/brands/tonymoly/c/9551?transaction_id=bd732f595c15d5bc6b36ef28ef94c9c4&intcmp=hp,special_for_you,2,tonymoly",
                          title: "",
                          discountTitle: "Flat 15% Off +",
                          description: "Buy 5 Get 5 Sheet Masks!",
                          subDescription: "",
                          titleOrder: "Discount First",
                          actionType: "url_redirection",
                          trackingParameters: "tonymoly",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "9551",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b885ff63b4584ff04be8c4",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.special_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/a142865a-05c7-487d-a67a-1e7330fa636d.gif",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "special_for_you",
                              lang: "en",
                              position1: 5,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "special_for_you",
                          lang: "en",
                          position1: 5,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "tonymoly",
                          position2: 2,
                          transaction_id: "bd732f595c15d5bc6b36ef28ef94c9c4",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b88d0e63b4584ff04be8c5",
                        widgetType: "BANNER",
                        positionInParent: 3,
                        inventoryName: "hp.special_for_you",
                        params: {
                          url: "https://www.nykaa.com/brands/e-l-f-cosmetics/c/16065?transaction_id=5dc53940cc0cd07fa2355cba095ecf31&intcmp=hp,special_for_you,3,e\\.l\\.f\\.-cosmetics",
                          title: "",
                          discountTitle: "Full Size Lipstick worth",
                          description: "Rs.500 on Rs.799!",
                          subDescription: "",
                          titleOrder: "Discount First",
                          actionType: "url_redirection",
                          trackingParameters: "e\\.l\\.f\\.-cosmetics",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "16065",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61baa779820d84ca07465fb8",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.special_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/a1fdef32-df3f-44af-b6b7-136e35c45af4.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "special_for_you",
                              lang: "en",
                              position1: 5,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "special_for_you",
                          lang: "en",
                          position1: 5,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "e\\.l\\.f\\.-cosmetics",
                          position2: 3,
                          transaction_id: "5dc53940cc0cd07fa2355cba095ecf31",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b987d563b4584ff04be924",
                        widgetType: "BANNER",
                        positionInParent: 4,
                        inventoryName: "hp.special_for_you",
                        params: {
                          url: "https://www.nykaa.com/brands/kay-beauty/c/11433?transaction_id=aa203b4c2e0be017d8e2c3da4ca0322c&intcmp=hp,special_for_you,4,nykaa-naturals",
                          title: "",
                          discountTitle: "Upto 25% Off",
                          description: "",
                          subDescription: "",
                          titleOrder: "Discount First",
                          actionType: "url_redirection",
                          trackingParameters: "nykaa-naturals",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "11433",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9ba31820d84ca07465f44",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.special_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/8cc63754-debc-4015-a1f1-0d6cfb75cc78.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "special_for_you",
                              lang: "en",
                              position1: 5,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "special_for_you",
                          lang: "en",
                          position1: 5,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "nykaa-naturals",
                          position2: 4,
                          transaction_id: "aa203b4c2e0be017d8e2c3da4ca0322c",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "on_image",
                      columnsInRow: "2",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "special_for_you",
                      lang: "en",
                      position1: 5,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.stores_in_focus",
                  inventoryId: "5eaac793dfe4e6519fc6756b",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "stores_in_focus",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 6,
                  widgetData: {
                    id: "611672afda2544b62a73df35",
                    widgetType: "SLIDING_WIDGET",
                    positionInParent: 1,
                    inventoryName: "hp.stores_in_focus",
                    params: {
                      title: "TRENDING STORES & GUIDES",
                      titleAlign: "center",
                      textAreaPosition: "below_image",
                      childWidth: "45",
                      bkgColor: "#FFFFFF",
                      columnsInRow: 2,
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "61b4239bbe4637226ac2db57",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.stores_in_focus",
                        params: {
                          url: "https://www.nykaa.com/wedding-store?transaction_id=68dc557c1cf6187d2a8b809579a71451&intcmp=hp,stores_in_focus,1,wedding-store",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "wedding-store",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            "nykaa://nykaa?dl_type=nlp&pagetype=wedding-store-native&pagedata=wedding-store",
                          appLinkType: "deeplink",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          childWidth: "45",
                          columnsInRow: 2,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b0a997ada814f5b9d772a4",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.stores_in_focus",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/12799035-45c4-4b9e-be9e-024229c563e2.jpg",
                              aspectRatio: 1.7763157894736843,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              childWidth: "45",
                              columnsInRow: 2,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "stores_in_focus",
                              lang: "en",
                              position1: 6,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "stores_in_focus",
                          lang: "en",
                          position1: 6,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "wedding-store",
                          position2: 1,
                          transaction_id: "68dc557c1cf6187d2a8b809579a71451",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61af41d5835f180e1ddf27d5",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.stores_in_focus",
                        params: {
                          url: "https://www.nykaa.com/the-winter-beauty-store-2021?transaction_id=0edb1f4fdbce303b27ccac7d077be888&intcmp=hp,stores_in_focus,2,the-winter-beauty-store-2021",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "the-winter-beauty-store-2021",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            "nykaa://nykaa?dl_type=nlp&pagetype=nykaa-winter-store&pagedata=default",
                          appLinkType: "deeplink",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          childWidth: "45",
                          columnsInRow: 2,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61af41f421aa58321c146513",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.stores_in_focus",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/78b7affa-c353-4ca9-a057-cdbc0aeccb63.gif",
                              aspectRatio: 1.7763157894736843,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              childWidth: "45",
                              columnsInRow: 2,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "stores_in_focus",
                              lang: "en",
                              position1: 6,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "stores_in_focus",
                          lang: "en",
                          position1: 6,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "the-winter-beauty-store-2021",
                          position2: 2,
                          transaction_id: "0edb1f4fdbce303b27ccac7d077be888",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b2e0881f967298346fc15e",
                        widgetType: "BANNER",
                        positionInParent: 3,
                        inventoryName: "hp.stores_in_focus",
                        params: {
                          url: "https://www.nykaa.com/sp/conscious-at-nykaa-native/conscious-at-nykaa?transaction_id=8c19eac04dc86cd4d70eafd2ccc6a412&intcmp=hp,stores_in_focus,3,conscious-at-nykaa",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "conscious-at-nykaa",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            "nykaa://nykaa?dl_type=nlp&pagetype=conscious-at-nykaa-native&pagedata=conscious-at-nykaa",
                          appLinkType: "deeplink",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          childWidth: "45",
                          columnsInRow: 2,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b2e0a89f903ea518702728",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.stores_in_focus",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/d04ee18d-8178-4834-bb1b-1a0bd761278f.jpg",
                              aspectRatio: 1.7763157894736843,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              childWidth: "45",
                              columnsInRow: 2,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "stores_in_focus",
                              lang: "en",
                              position1: 6,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "stores_in_focus",
                          lang: "en",
                          position1: 6,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "conscious-at-nykaa",
                          position2: 3,
                          transaction_id: "8c19eac04dc86cd4d70eafd2ccc6a412",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "616835ede1dd211220d0a5e4",
                        widgetType: "BANNER",
                        positionInParent: 4,
                        inventoryName: "hp.stores_in_focus",
                        params: {
                          url: "https://www.nykaa.com/fragrances?transaction_id=bfa70aa43daf6d789b1f7952a5fb2da7&intcmp=hp,stores_in_focus,4,fragrances",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "fragrances",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            "https://www.nykaa.com/fragrances-app?device_family=app",
                          appLinkType: "landing_page",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          childWidth: "45",
                          columnsInRow: 2,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b1fc4e1f967298346fc02e",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.stores_in_focus",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/8e0ce733-e097-4a1e-95ec-498194f3f3ce.jpg",
                              aspectRatio: 1.7763157894736843,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              childWidth: "45",
                              columnsInRow: 2,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "stores_in_focus",
                              lang: "en",
                              position1: 6,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "stores_in_focus",
                          lang: "en",
                          position1: 6,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "fragrances",
                          position2: 4,
                          transaction_id: "bfa70aa43daf6d789b1f7952a5fb2da7",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61167341ed09486bcc60fb03",
                        widgetType: "BANNER",
                        positionInParent: 5,
                        inventoryName: "hp.stores_in_focus",
                        params: {
                          url: "https://www.nykaa.com/gift-store?transaction_id=b1d94b009228938a3e0ddb9de03e7590&intcmp=hp,stores_in_focus,5,gift-store",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "gift-store",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            "nykaa://nykaa?dl_type=nlp&pagetype=the-gift-store-native&pagedata=the-gift-store",
                          appLinkType: "deeplink",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          childWidth: "45",
                          columnsInRow: 2,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "617f90f47205c86559550542",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.stores_in_focus",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/b05cde04-0d39-409e-9d0c-561df5ebc3ae.jpg",
                              aspectRatio: 1.7763157894736843,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              childWidth: "45",
                              columnsInRow: 2,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "stores_in_focus",
                              lang: "en",
                              position1: 6,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "stores_in_focus",
                          lang: "en",
                          position1: 6,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "gift-store",
                          position2: 5,
                          transaction_id: "b1d94b009228938a3e0ddb9de03e7590",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61764dbbb7b39ad50fbc654f",
                        widgetType: "BANNER",
                        positionInParent: 6,
                        inventoryName: "hp.stores_in_focus",
                        params: {
                          url: "https://www.nykaa.com/serums-buying-guide?transaction_id=461038f4ddfddb63f10c802c1416d544&intcmp=hp,stores_in_focus,6,serums-buying-guide",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "serums-buying-guide",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            "nykaa://nykaa?dl_type=nlp&pagetype=serums-buying-guide&pagedata=serums",
                          appLinkType: "deeplink",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          childWidth: "45",
                          columnsInRow: 2,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b83189a465c15ac81066b6",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.stores_in_focus",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/6113633c-f0ee-45cc-a22c-b641a3b4e27a.gif",
                              aspectRatio: 1.7763157894736843,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              childWidth: "45",
                              columnsInRow: 2,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "stores_in_focus",
                              lang: "en",
                              position1: 6,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "stores_in_focus",
                          lang: "en",
                          position1: 6,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "serums-buying-guide",
                          position2: 6,
                          transaction_id: "461038f4ddfddb63f10c802c1416d544",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61640e28acf349e020bc9ca3",
                        widgetType: "BANNER",
                        positionInParent: 7,
                        inventoryName: "hp.stores_in_focus",
                        params: {
                          url: " https://www.nykaa.com/buying-guides?transaction_id=4e9d82c2fa5164492eb512e9faae3ea1&intcmp=hp,stores_in_focus,7,buying-guides",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "buying-guides",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            " https://www.nykaa.com/buying-guides-app?device_family=app",
                          appLinkType: "landing_page",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          childWidth: "45",
                          columnsInRow: 2,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "613093830cc79884bf2ac86e",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.stores_in_focus",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/dac00fed-ecb3-4e53-af91-2811d02b8a4c.gif",
                              aspectRatio: 1.7763157894736843,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              childWidth: "45",
                              columnsInRow: 2,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "stores_in_focus",
                              lang: "en",
                              position1: 6,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "stores_in_focus",
                          lang: "en",
                          position1: 6,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "buying-guides",
                          position2: 7,
                          transaction_id: "4e9d82c2fa5164492eb512e9faae3ea1",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "0.90",
                      textPosition: "below_image",
                      childWidth: "45",
                      columnsInRow: 2,
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "stores_in_focus",
                      lang: "en",
                      position1: 6,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.featured_brands",
                  inventoryId: "5eaac677b2587d896a88b9d0",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "featured_brands",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 7,
                  widgetData: {
                    id: "61b998674129b2002db8cfbe",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "hp.featured_brands",
                    params: {
                      theme: "default",
                      title: "Featured Brands",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "4",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "61b998674129b2002db8cfd2",
                        widgetType: "BANNER",
                        positionInParent: 4,
                        inventoryName: "hp.featured_brands",
                        params: {
                          url: "https://www.nykaa.com/brands/re-equil/c/10101?transaction_id=730b54dcdcb8c6ba0c12b8f6bfab9db1&intcmp=hp,featured_brands,4,reequil",
                          title: "",
                          discountTitle: "Flat 10% Off",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "reequil",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "10101",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9ad6b47f38baf2c992dc1",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.featured_brands",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/c3a923d0-a628-4fb1-b337-c10522ae4b23.jpg",
                              aspectRatio: 1,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "featured_brands",
                              lang: "en",
                              position1: 7,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "featured_brands",
                          lang: "en",
                          position1: 7,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "reequil",
                          position2: 1,
                          transaction_id: "730b54dcdcb8c6ba0c12b8f6bfab9db1",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998674129b2002db8cfe4",
                        widgetType: "BANNER",
                        positionInParent: 7,
                        inventoryName: "hp.featured_brands",
                        params: {
                          url: "https://www.nykaa.com/brands/matrix/c/1693?transaction_id=5e9ce669c316586c6a9f09504a9a129b&intcmp=hp,featured_brands,7,matrix",
                          title: "Enriched With Shea Butter For Smooth Hair",
                          discountTitle: "",
                          description: "Flat 10% Off On Regimes",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "matrix",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "1693",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9ad6f47f38baf2c992ddc",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.featured_brands",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/fc27a5dd-616e-4a36-a22e-1a34db76f2fa.gif",
                              aspectRatio: 1,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "featured_brands",
                              lang: "en",
                              position1: 7,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "featured_brands",
                          lang: "en",
                          position1: 7,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "matrix",
                          position2: 2,
                          transaction_id: "5e9ce669c316586c6a9f09504a9a129b",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998674129b2002db8cfc6",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.featured_brands",
                        params: {
                          url: "https://www.nykaa.com/brands/nykaa-naturals/c/7666?transaction_id=eb79a4df05ffc30885c74b7fb6a9b631&intcmp=hp,featured_brands,2,nykaa-naturals",
                          title: "",
                          discountTitle: "Upto 30% Off",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "nykaa-naturals",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "7666",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9ad6e47f38baf2c992dd3",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.featured_brands",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/b2dad379-e54f-442b-933e-4783762a07a4.jpg",
                              aspectRatio: 1,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "featured_brands",
                              lang: "en",
                              position1: 7,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "featured_brands",
                          lang: "en",
                          position1: 7,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "nykaa-naturals",
                          position2: 3,
                          transaction_id: "eb79a4df05ffc30885c74b7fb6a9b631",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998674129b2002db8cfd8",
                        widgetType: "BANNER",
                        positionInParent: 5,
                        inventoryName: "hp.featured_brands",
                        params: {
                          url: "https://www.nykaa.com/brands/the-moms-co/c/4748?transaction_id=72a621b9e40cd5b2a6a5f30afb30b6c0&intcmp=hp,featured_brands,5,the-moms-co",
                          title: "",
                          discountTitle: "Upto 30% Off + Free Facewash ",
                          description: "Worth Rs.298 On Rs.699",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "the-moms-co",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "4748",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9ad7347f38baf2c992df7",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.featured_brands",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/56eccb89-e846-425a-9a46-6b31d405236a.jpg",
                              aspectRatio: 1,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "featured_brands",
                              lang: "en",
                              position1: 7,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "featured_brands",
                          lang: "en",
                          position1: 7,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "the-moms-co",
                          position2: 4,
                          transaction_id: "72a621b9e40cd5b2a6a5f30afb30b6c0",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998674129b2002db8cfcc",
                        widgetType: "BANNER",
                        positionInParent: 3,
                        inventoryName: "hp.featured_brands",
                        params: {
                          url: "https://www.nykaa.com/nykaa-skinrx-face-serums/c/21462?transaction_id=6acc78904acecc2c19a7f3633b5f1303&intcmp=hp,featured_brands,3,nykaa s",
                          title: "",
                          discountTitle: "Flat 20% Off",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "nykaa s",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "21462",
                          appLinkType: "category",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9ad7247f38baf2c992dee",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.featured_brands",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/8a28179e-0056-4245-8c8a-6bd10d187bca.jpg",
                              aspectRatio: 1,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "featured_brands",
                              lang: "en",
                              position1: 7,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "featured_brands",
                          lang: "en",
                          position1: 7,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "nykaa s",
                          position2: 5,
                          transaction_id: "6acc78904acecc2c19a7f3633b5f1303",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998674129b2002db8cfc0",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.featured_brands",
                        params: {
                          url: "https://www.nykaa.com/brands/innisfree/c/3901?transaction_id=1d7fee65fe217579f2514d9468e6f052&intcmp=hp,featured_brands,1,innisfree",
                          title: "",
                          discountTitle: "Upto 40% Off",
                          description: "Buy 3 Get 3 On Sheetmasks",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "innisfree",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "3901",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9ad6d47f38baf2c992dca",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.featured_brands",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/491ee060-596e-4320-b6f3-f792671568ea.jpg",
                              aspectRatio: 1,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "featured_brands",
                              lang: "en",
                              position1: 7,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "featured_brands",
                          lang: "en",
                          position1: 7,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "innisfree",
                          position2: 6,
                          transaction_id: "1d7fee65fe217579f2514d9468e6f052",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b998674129b2002db8cfde",
                        widgetType: "BANNER",
                        positionInParent: 6,
                        inventoryName: "hp.featured_brands",
                        params: {
                          url: "https://www.nykaa.com/brands/herbal-essences/c/594?transaction_id=b8769d0464949cad3e85069e1eb52574&intcmp=hp,featured_brands,6,herbal-essences",
                          title: "",
                          discountTitle: "Upto 40% Off on Bestsellers",
                          description:
                            "40% Off on Paraben Free Festive Soha Ali Pack",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "herbal-essences",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "594",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9ad7047f38baf2c992de5",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.featured_brands",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/bfe87684-219d-4528-a470-d5d2e9ad4261.gif",
                              aspectRatio: 1,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "featured_brands",
                              lang: "en",
                              position1: 7,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "featured_brands",
                          lang: "en",
                          position1: 7,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "herbal-essences",
                          position2: 7,
                          transaction_id: "b8769d0464949cad3e85069e1eb52574",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61bafdbe69e31f2360184f5d",
                        widgetType: "BANNER",
                        positionInParent: 8,
                        inventoryName: "hp.featured_brands",
                        params: {
                          url: "https://www.nykaa.com/luxe/brands/murad/c/14991?transaction_id=f057b0aabc57120b024e8dbf8cfc064b&intcmp=hp,featured_brands,8,murad",
                          title: "Day And Night Serum",
                          discountTitle: "",
                          description: "For Brighter, Firmer Skin",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "murad",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "14991",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "617beaf3c5b46a62b82aa7d1",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.featured_brands",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/35ffe9d5-ad03-497c-bf4b-acd6dfefc46b.gif",
                              aspectRatio: 1,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "featured_brands",
                              lang: "en",
                              position1: 7,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "featured_brands",
                          lang: "en",
                          position1: 7,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "murad",
                          position2: 8,
                          transaction_id: "f057b0aabc57120b024e8dbf8cfc064b",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "0.90",
                      textPosition: "below_image",
                      columnsInRow: "4",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "featured_brands",
                      lang: "en",
                      position1: 7,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.featured_brands_new",
                  inventoryId: "60dc460f8bbf95166a500261",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "featured_brands_new",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 8,
                  widgetData: {
                    id: "61b9988fbd445c4226c018e7",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "hp.featured_brands_new",
                    params: {
                      theme: "default",
                      title: "",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "2",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "61b9988fbd445c4226c018e9",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.featured_brands_new",
                        params: {
                          url: "https://www.nykaa.com/brands/neutrogena/c/649?transaction_id=1293ff43c3ae4e30129c13f96ae8fd9c&intcmp=hp,featured_brands_new,1,neutrogena",
                          title: "",
                          discountTitle: "Upto 35% Off + 5% Off",
                          description: "On Purchase Of Rs.899 & Above",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "neutrogena",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "649",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9b06e47f38baf2c992ea5",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.featured_brands_new",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/91c5c94e-7477-427a-aafd-1910a0d3f76d.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "0.90",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "featured_brands_new",
                              lang: "en",
                              position1: 8,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "featured_brands_new",
                          lang: "en",
                          position1: 8,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "neutrogena",
                          position2: 1,
                          transaction_id: "1293ff43c3ae4e30129c13f96ae8fd9c",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b9988fbd445c4226c018ef",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.featured_brands_new",
                        params: {
                          url: "https://www.nykaa.com/brands/nivea/c/645?transaction_id=3f452b4708664010265d873f847e6d09&intcmp=hp,featured_brands_new,2,nivea",
                          title: "",
                          discountTitle: "Flat 30% On Our Fave 30! ",
                          description: "Only For Today!",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "nivea",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "645",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "on_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9b06f47f38baf2c992eae",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.featured_brands_new",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/a8244316-7ca6-4e9d-838f-37b6e0e1097a.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "0.90",
                              textPosition: "on_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "featured_brands_new",
                              lang: "en",
                              position1: 8,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "featured_brands_new",
                          lang: "en",
                          position1: 8,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "nivea",
                          position2: 2,
                          transaction_id: "3f452b4708664010265d873f847e6d09",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "0.90",
                      textPosition: "on_image",
                      columnsInRow: "2",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "featured_brands_new",
                      lang: "en",
                      position1: 8,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.category_in_focus",
                  inventoryId: "5eaac7f8dfe4e6519fc6756f",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "category_in_focus",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 9,
                  widgetData: {
                    id: "6097e95bb25a2496b7c89c08",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "hp.category_in_focus",
                    params: {
                      theme: "default",
                      title: "CATEGORY IN FOCUS",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "1",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "619634f76046a31ddb46b404",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.category_in_focus",
                        params: {
                          url: "https://www.nykaa.com/makeup-best-of-2021/c/22677?transaction_id=15682cfc9dc69e2b3f1b57e0aed6abf0&intcmp=hp,category_in_focus,1,makeup-best-of-2021",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "makeup-best-of-2021",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "22677",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "1",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b81af8d343b5e264106884",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.category_in_focus",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/2631b2b4-1821-4210-876f-630abc17ed0c.jpg",
                              aspectRatio: 4,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "1",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "category_in_focus",
                              lang: "en",
                              position1: 9,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "category_in_focus",
                          lang: "en",
                          position1: 9,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "makeup-best-of-2021",
                          position2: 1,
                          transaction_id: "15682cfc9dc69e2b3f1b57e0aed6abf0",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b6c2b05e82e9060248835e",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.category_in_focus",
                        params: {
                          url: "https://www.nykaa.com/christmas-event-calendar/lp?transaction_id=02e294cb6ac52a893bb589f07c38d6c1&intcmp=hp,category_in_focus,2,christmas-event-calendar",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "christmas-event-calendar",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            "https://www.nykaa.com/christmas-event-calendar-app?device_family=app",
                          appLinkType: "landing_page",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "1",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b6c2c2e3e358070bc2e202",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.category_in_focus",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/206f22c5-371f-4531-8274-cdd80bbafe70.jpg",
                              aspectRatio: 3.9980013324450367,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "1",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "category_in_focus",
                              lang: "en",
                              position1: 9,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "category_in_focus",
                          lang: "en",
                          position1: 9,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "christmas-event-calendar",
                          position2: 2,
                          transaction_id: "02e294cb6ac52a893bb589f07c38d6c1",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "below_image",
                      columnsInRow: "1",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "category_in_focus",
                      lang: "en",
                      position1: 9,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.discover_now",
                  inventoryId: "5eb1532bda20a89e8e12be65",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "hidden_gems",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 10,
                  widgetData: {
                    id: "61b99899e0b7f4f6132c8a38",
                    widgetType: "SLIDING_WIDGET",
                    positionInParent: 1,
                    inventoryName: "hp.discover_now",
                    params: {
                      title: "Hidden Gems",
                      titleAlign: "center",
                      textAreaPosition: "below_image",
                      childWidth: "45",
                      bkgColor: "#FFFFFF",
                      columnsInRow: 2,
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "61b99899e0b7f4f6132c8a40",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.discover_now",
                        params: {
                          url: "https://www.nykaa.com/luxe/brands/pixi/c/13432?transaction_id=9d392f0372bd330ba648231cffb0b767&intcmp=hp,discover_now,2,pixi",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "pixi",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "13432",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          childWidth: "45",
                          columnsInRow: 2,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9aca647f38baf2c992db8",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.discover_now",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/db129628-da12-42de-b5d5-6a204ab2c259.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              childWidth: "45",
                              columnsInRow: 2,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "hidden_gems",
                              lang: "en",
                              position1: 10,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "hidden_gems",
                          lang: "en",
                          position1: 10,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "pixi",
                          position2: 1,
                          transaction_id: "9d392f0372bd330ba648231cffb0b767",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61baff81446c68b1a2514e9d",
                        widgetType: "BANNER",
                        positionInParent: 3,
                        inventoryName: "hp.discover_now",
                        params: {
                          url: "https://www.nykaa.com/brands/cosrx/c/13557?transaction_id=3adca253543d3f3a91136acdcaa50cc1&intcmp=hp,discover_now,3,cosrx",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "cosrx",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "13557",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          childWidth: "45",
                          columnsInRow: 2,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61baff8f3d385cef71efa0c7",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.discover_now",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/efe9fd1d-cd50-4726-9adc-65251c732fcc.png",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              childWidth: "45",
                              columnsInRow: 2,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "hidden_gems",
                              lang: "en",
                              position1: 10,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "hidden_gems",
                          lang: "en",
                          position1: 10,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "cosrx",
                          position2: 2,
                          transaction_id: "3adca253543d3f3a91136acdcaa50cc1",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61baff8378200e56952202d0",
                        widgetType: "BANNER",
                        positionInParent: 4,
                        inventoryName: "hp.discover_now",
                        params: {
                          url: "https://www.nykaa.com/brands/klairs/c/6285?transaction_id=f52c9d2ed6bd1e550893c59a0da6a495&intcmp=hp,discover_now,4,klairs",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "klairs",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "6285",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          childWidth: "45",
                          columnsInRow: 2,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61baffa03d385cef71efa0d1",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.discover_now",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/4a20e615-a44a-42fd-a475-57d27ffad199.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              childWidth: "45",
                              columnsInRow: 2,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "hidden_gems",
                              lang: "en",
                              position1: 10,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "hidden_gems",
                          lang: "en",
                          position1: 10,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "klairs",
                          position2: 3,
                          transaction_id: "f52c9d2ed6bd1e550893c59a0da6a495",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b99899e0b7f4f6132c8a3a",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.discover_now",
                        params: {
                          url: "https://www.nykaa.com/brands/dr-sheth-s/c/6123?transaction_id=69d437d2c6303e289dbf59ba794f998a&intcmp=hp,discover_now,1,dr-sheths",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "dr-sheths",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "6123",
                          appLinkType: "brand",
                          textAreaOpacity: "0.90",
                          textPosition: "below_image",
                          childWidth: "45",
                          columnsInRow: 2,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9aca547f38baf2c992daf",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.discover_now",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/d8c1972b-65a5-4065-be44-ae54725cf4f1.gif",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "0.90",
                              textPosition: "below_image",
                              childWidth: "45",
                              columnsInRow: 2,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "hidden_gems",
                              lang: "en",
                              position1: 10,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "hidden_gems",
                          lang: "en",
                          position1: 10,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "dr-sheths",
                          position2: 4,
                          transaction_id: "69d437d2c6303e289dbf59ba794f998a",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "0.90",
                      textPosition: "below_image",
                      childWidth: "45",
                      columnsInRow: 2,
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "hidden_gems",
                      lang: "en",
                      position1: 10,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "desktop-homepage.try-buys",
                  inventoryId: "61457c6fb31ac4a6ce365b8c",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "try-buys",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 11,
                  widgetData: {
                    id: "61457a50b31ac4a6ce365b71",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "desktop-homepage.try-buys",
                    params: {
                      theme: "default",
                      title: "",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "1",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "615ade6be620a5ed7364c331",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "desktop-homepage.try-buys",
                        params: {
                          url: " https://www.nykaa.com/try-and-buy/c/20512?transaction_id=051e49c37b892959d924a16a8e9e224c&intcmp=desktop-homepage,try-buys,1,try-and-buy",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "try-and-buy",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "20512",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "1",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "615ade755ceae8f95dd7c7b1",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "desktop-homepage.try-buys",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/3df85e95-5d80-46b7-a8fb-75fd485c35ba.jpg",
                              aspectRatio: 12,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "1",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "try-buys",
                              lang: "en",
                              position1: 11,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "try-buys",
                          lang: "en",
                          position1: 11,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "try-and-buy",
                          position2: 1,
                          transaction_id: "051e49c37b892959d924a16a8e9e224c",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "below_image",
                      columnsInRow: "1",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "try-buys",
                      lang: "en",
                      position1: 11,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.editors_choice",
                  inventoryId: "5eaac87fdfe4e6519fc67572",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "editors_choice",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 12,
                  widgetData: {
                    id: "6139b030f8c6657429cd6c45",
                    widgetType: "SLIDING_WIDGET",
                    positionInParent: 1,
                    inventoryName: "hp.editors_choice",
                    params: {
                      title: "EDITOR'S CHOICE",
                      titleAlign: "center",
                      textAreaPosition: "below_image",
                      childWidth: "25",
                      bkgColor: "#FFFFFF",
                      columnsInRow: 4,
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "6139b1aab05a0e866747380a",
                        widgetType: "BANNER",
                        positionInParent: 4,
                        inventoryName: "hp.editors_choice",
                        params: {
                          url: "https://www.nykaa.com/editor-s-choice/best-shimmer-nail-polish/c/22052?transaction_id=2ff289caa735601d44758a2ecfe85e6d&intcmp=hp,editors_choice,4,best-shimmer-nail-polish",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "best-shimmer-nail-polish",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "22052",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          childWidth: "25",
                          columnsInRow: 4,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61763bcb6af868d7d4ddf116",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.editors_choice",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/f5a1d948-7947-4241-a08e-caac8d991c48.jpg",
                              aspectRatio: 0.6666666666666666,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              childWidth: "25",
                              columnsInRow: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "editors_choice",
                              lang: "en",
                              position1: 12,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "editors_choice",
                          lang: "en",
                          position1: 12,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "best-shimmer-nail-polish",
                          position2: 1,
                          transaction_id: "2ff289caa735601d44758a2ecfe85e6d",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "6139b078f8c6657429cd6c54",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.editors_choice",
                        params: {
                          url: "https://www.nykaa.com/editor-s-choice/best-shimmer-eyeshadows/c/22050?transaction_id=e75ae9d8f4050f732bbd561a173b639c&intcmp=hp,editors_choice,2,best-shimmer-eyeshadows",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "best-shimmer-eyeshadows",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "22050",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          childWidth: "25",
                          columnsInRow: 4,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61763bab5ec1727caa804adf",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.editors_choice",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/2f2275d3-0b85-4189-8fb3-7318ca1c3bec.jpg",
                              aspectRatio: 0.6666666666666666,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              childWidth: "25",
                              columnsInRow: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "editors_choice",
                              lang: "en",
                              position1: 12,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "editors_choice",
                          lang: "en",
                          position1: 12,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "best-shimmer-eyeshadows",
                          position2: 2,
                          transaction_id: "e75ae9d8f4050f732bbd561a173b639c",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "6139b1b2f8c6657429cd6c6e",
                        widgetType: "BANNER",
                        positionInParent: 5,
                        inventoryName: "hp.editors_choice",
                        params: {
                          url: "https://www.nykaa.com/editor-s-choice/best-hair-sprays/c/22051?transaction_id=91e2b219e4f8bd3469a60568c0b10d37&intcmp=hp,editors_choice,5,best-hair-sprays",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "best-hair-sprays",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "22051",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          childWidth: "25",
                          columnsInRow: 4,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61763be86af868d7d4ddf120",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.editors_choice",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/455bf3cd-82d4-4b2c-ab5d-e56491edc0f1.jpg",
                              aspectRatio: 0.6666666666666666,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              childWidth: "25",
                              columnsInRow: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "editors_choice",
                              lang: "en",
                              position1: 12,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "editors_choice",
                          lang: "en",
                          position1: 12,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "best-hair-sprays",
                          position2: 3,
                          transaction_id: "91e2b219e4f8bd3469a60568c0b10d37",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "6139b06d733d93778a866b01",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.editors_choice",
                        params: {
                          url: "https://www.nykaa.com/editor-s-choice/best-festive-skincare/c/22049?transaction_id=244a19a6a95d5aa151a80f30878465aa&intcmp=hp,editors_choice,1,best-festive-skincare",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "best-festive-skincare",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "22049",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          childWidth: "25",
                          columnsInRow: 4,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61763b9d1856e84e0fbc81fe",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.editors_choice",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/c622c7aa-7cdb-43ba-98b7-acb48df7f7c5.jpg",
                              aspectRatio: 0.6666666666666666,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              childWidth: "25",
                              columnsInRow: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "editors_choice",
                              lang: "en",
                              position1: 12,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "editors_choice",
                          lang: "en",
                          position1: 12,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "best-festive-skincare",
                          position2: 4,
                          transaction_id: "244a19a6a95d5aa151a80f30878465aa",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "6139b1bbca48f5f978866dd8",
                        widgetType: "BANNER",
                        positionInParent: 6,
                        inventoryName: "hp.editors_choice",
                        params: {
                          url: "https://www.nykaa.com/editor-s-choice/best-fragrance-finds/c/22054?transaction_id=45bc5e226df761525369120496ab0ff1&intcmp=hp,editors_choice,6,best-fragrance-finds",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "best-fragrance-finds",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "22054",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          childWidth: "25",
                          columnsInRow: 4,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61763bff7528b8d9f60d1a91",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.editors_choice",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/9a4d3606-9aeb-4285-8db1-4918428a1c76.jpg",
                              aspectRatio: 0.6666666666666666,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              childWidth: "25",
                              columnsInRow: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "editors_choice",
                              lang: "en",
                              position1: 12,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "editors_choice",
                          lang: "en",
                          position1: 12,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "best-fragrance-finds",
                          position2: 5,
                          transaction_id: "45bc5e226df761525369120496ab0ff1",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "6139b08192988750cccd668c",
                        widgetType: "BANNER",
                        positionInParent: 3,
                        inventoryName: "hp.editors_choice",
                        params: {
                          url: "https://www.nykaa.com/editor-s-choice/best-rouge-lipsticks/c/22053?transaction_id=3ce7336d2eba6d24af422e3fd361857c&intcmp=hp,editors_choice,3,best-rouge-lipsticks",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "best-rouge-lipsticks",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "22053",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          childWidth: "25",
                          columnsInRow: 4,
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61763bbf1856e84e0fbc8208",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.editors_choice",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/fea188e3-9067-4c1f-a3a3-07560f60d73d.jpg",
                              aspectRatio: 0.6666666666666666,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              childWidth: "25",
                              columnsInRow: 4,
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "editors_choice",
                              lang: "en",
                              position1: 12,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "editors_choice",
                          lang: "en",
                          position1: 12,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "best-rouge-lipsticks",
                          position2: 6,
                          transaction_id: "3ce7336d2eba6d24af422e3fd361857c",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "below_image",
                      childWidth: "25",
                      columnsInRow: 4,
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "editors_choice",
                      lang: "en",
                      position1: 12,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.more_offers_for_you",
                  inventoryId: "5d789a2525868f2eb1586e14",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "more_offers_for_you",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 13,
                  widgetData: {
                    id: "61b99882d343b5e264106b02",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "hp.more_offers_for_you",
                    params: {
                      theme: "default",
                      title: "More Offers For You",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "4",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "61b9b14bbd445c4226c01990",
                        widgetType: "BANNER",
                        positionInParent: 5,
                        inventoryName: "hp.more_offers_for_you",
                        params: {
                          url: "https://www.nykaa.com/brands/lotus-botanicals/c/17122?transaction_id=1799fb76d836319035ca17ae3a7a6a0f&intcmp=hp,more_offers_for_you,5,lotus-botanicals",
                          title: "",
                          discountTitle: "Flat 30% Off & 35% Off",
                          description: "On Combos",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "lotus-botanicals",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "17122",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9b16a47f38baf2c992edb",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.more_offers_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/0e41922c-7b9b-4a3b-83b9-63c8ad5977bf.jpg",
                              aspectRatio: 1,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "more_offers_for_you",
                              lang: "en",
                              position1: 13,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "more_offers_for_you",
                          lang: "en",
                          position1: 13,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "lotus-botanicals",
                          position2: 1,
                          transaction_id: "1799fb76d836319035ca17ae3a7a6a0f",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b9b14f9172e22b7ada0727",
                        widgetType: "BANNER",
                        positionInParent: 8,
                        inventoryName: "hp.more_offers_for_you",
                        params: {
                          url: "https://www.nykaa.com/brands/ikkai-by-lotus-herbals/c/7467?transaction_id=6402b4c0ce936b5bc11c7060bd0de500&intcmp=hp,more_offers_for_you,8,ikkai-by-lotus-herbals",
                          title: "",
                          discountTitle: "Flat 25% Off & 30% Off",
                          description: "On Combos",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "ikkai-by-lotus-herbals",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "7467",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9b16747f38baf2c992ec0",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.more_offers_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/8530589d-df38-4b5e-ae90-4ea70e34f802.jpg",
                              aspectRatio: 1,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "more_offers_for_you",
                              lang: "en",
                              position1: 13,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "more_offers_for_you",
                          lang: "en",
                          position1: 13,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "ikkai-by-lotus-herbals",
                          position2: 2,
                          transaction_id: "6402b4c0ce936b5bc11c7060bd0de500",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b99882d343b5e264106b04",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.more_offers_for_you",
                        params: {
                          url: "https://www.nykaa.com/luxe/brands/thebalm/c/4561?transaction_id=f97d97b0ca0589bf3ecbbc6db89da924&intcmp=hp,more_offers_for_you,1,thebalm",
                          title: "",
                          discountTitle: "Upto 25% Off",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "thebalm",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "4561",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9b16c47f38baf2c992ee4",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.more_offers_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/ab75b904-9ac8-4eb5-872f-057b7d51fbee.png",
                              aspectRatio: 1,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "more_offers_for_you",
                              lang: "en",
                              position1: 13,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "more_offers_for_you",
                          lang: "en",
                          position1: 13,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "thebalm",
                          position2: 3,
                          transaction_id: "f97d97b0ca0589bf3ecbbc6db89da924",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b99882d343b5e264106b10",
                        widgetType: "BANNER",
                        positionInParent: 3,
                        inventoryName: "hp.more_offers_for_you",
                        params: {
                          url: "https://www.nykaa.com/brands/sanfe/c/8610?transaction_id=04f1cc380aced99ad105e73bbeccb8b7&intcmp=hp,more_offers_for_you,3,sanfe",
                          title: "",
                          discountTitle: "Upto 50% Off",
                          description: "On Feminine Hygiene Must Haves",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "sanfe",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "8610",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b873bd47f38baf2c9923ee",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.more_offers_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/ca29ae6c-2a9a-4010-b990-e4b4218655d6.jpg",
                              aspectRatio: 1,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "more_offers_for_you",
                              lang: "en",
                              position1: 13,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "more_offers_for_you",
                          lang: "en",
                          position1: 13,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "sanfe",
                          position2: 4,
                          transaction_id: "04f1cc380aced99ad105e73bbeccb8b7",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b99882d343b5e264106b16",
                        widgetType: "BANNER",
                        positionInParent: 4,
                        inventoryName: "hp.more_offers_for_you",
                        params: {
                          url: "https://www.nykaa.com/sigma-beauty/c/207?transaction_id=ecf0bfd34322ce2511f41f5c7790d73a&intcmp=hp,more_offers_for_you,4,sigma-beauty",
                          title: "",
                          discountTitle: "Flat 10% Off +",
                          description: "Complimentary Mini Brush On Rs.2500",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "sigma-beauty",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "207",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b873d80f1ba76657551389",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.more_offers_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/be0b3962-2f60-4677-9594-47425cbe0248.PNG",
                              aspectRatio: 1,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "more_offers_for_you",
                              lang: "en",
                              position1: 13,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "more_offers_for_you",
                          lang: "en",
                          position1: 13,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "sigma-beauty",
                          position2: 5,
                          transaction_id: "ecf0bfd34322ce2511f41f5c7790d73a",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b9b14c5e82e90602488b1d",
                        widgetType: "BANNER",
                        positionInParent: 6,
                        inventoryName: "hp.more_offers_for_you",
                        params: {
                          url: "https://www.nykaa.com/brands/coco-soul/c/8927?transaction_id=e9a5af540aa42bae3ec860d7b77a5e97&intcmp=hp,more_offers_for_you,6,coco-soul",
                          title: "",
                          discountTitle: "Upto 40% Off",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "coco-soul",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "8927",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9b16947f38baf2c992ed2",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.more_offers_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/ace593db-6017-45b2-8c75-b6131137408e.jpg",
                              aspectRatio: 1,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "more_offers_for_you",
                              lang: "en",
                              position1: 13,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "more_offers_for_you",
                          lang: "en",
                          position1: 13,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "coco-soul",
                          position2: 6,
                          transaction_id: "e9a5af540aa42bae3ec860d7b77a5e97",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b99882d343b5e264106b0a",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.more_offers_for_you",
                        params: {
                          url: "https://www.nykaa.com/luxe/brands/kayali/c/13466?transaction_id=14414598b6d4fb77c4f32a4cda086287&intcmp=hp,more_offers_for_you,2,kayali",
                          title: "",
                          discountTitle: "Complimentary Kayali Citrus Sample",
                          description: "On All Orders",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "kayali",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "13466",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9b16847f38baf2c992ec9",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.more_offers_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/afbd7515-4e8f-4a3f-b038-7e25135a79bb.jpg",
                              aspectRatio: 1,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "more_offers_for_you",
                              lang: "en",
                              position1: 13,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "more_offers_for_you",
                          lang: "en",
                          position1: 13,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "kayali",
                          position2: 7,
                          transaction_id: "14414598b6d4fb77c4f32a4cda086287",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "61b9b14d9db2d20c8bd9fd53",
                        widgetType: "BANNER",
                        positionInParent: 7,
                        inventoryName: "hp.more_offers_for_you",
                        params: {
                          url: "https://www.nykaa.com/brands/lotus-organics/c/9143?transaction_id=a42a894d62fc35d844db70ff1a623bfa&intcmp=hp,more_offers_for_you,7,lotus-organics",
                          title: "",
                          discountTitle: "Flat 20% Off & 25% Off",
                          description: "On Combos",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "lotus-organics",
                          section: "primary",
                          randomize: "yes",
                          appLinkData: "9143",
                          appLinkType: "brand",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "4",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9b16647f38baf2c992eb7",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.more_offers_for_you",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/06514061-d424-4cdf-bb0f-acd95d33b29a.jpg",
                              aspectRatio: 1,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "4",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "more_offers_for_you",
                              lang: "en",
                              position1: 13,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "more_offers_for_you",
                          lang: "en",
                          position1: 13,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "lotus-organics",
                          position2: 8,
                          transaction_id: "a42a894d62fc35d844db70ff1a623bfa",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "below_image",
                      columnsInRow: "4",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "more_offers_for_you",
                      lang: "en",
                      position1: 13,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.clearance-sale",
                  inventoryId: "614ecfa64fa8a24f9b2dcd2f",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "clearance-sale",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 14,
                  widgetData: {
                    id: "614ecfb61d2b3450bb489425",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "hp.clearance-sale",
                    params: {
                      theme: "default",
                      title: "",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "1",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "615a7a70c2d8aa67d7bbad19",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.clearance-sale",
                        params: {
                          url: "https://www.nykaa.com/clearance-sale/c/861?transaction_id=3ac2646047b3200a1197646f02a3fe51&intcmp=hp,clearance-sale,1,clearance-sale",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "clearance-sale",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "861",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "1",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61a9c0981874ef91cbdb12e2",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.clearance-sale",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/6c020368-7e2e-4418-a00f-69bfda3bf9a2.jpg",
                              aspectRatio: 4,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "1",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "clearance-sale",
                              lang: "en",
                              position1: 14,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "clearance-sale",
                          lang: "en",
                          position1: 14,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "clearance-sale",
                          position2: 1,
                          transaction_id: "3ac2646047b3200a1197646f02a3fe51",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "below_image",
                      columnsInRow: "1",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "clearance-sale",
                      lang: "en",
                      position1: 14,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.pop_up_stores",
                  inventoryId: "5eaac8430b023647be88b9ac",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "pop_up_stores",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 15,
                  widgetData: {
                    id: "612e2a8429b28500863ac24e",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "hp.pop_up_stores",
                    params: {
                      theme: "default",
                      title: "Pop-up Stores",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "2",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "6139c21fca48f5f978866e85",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.pop_up_stores",
                        params: {
                          url: "https://www.nykaa.com/lingerie-accessories?transaction_id=9ef94c0ece0ed3cd2343e997dc4cbae7&intcmp=hp,pop_up_stores,1,lingerie-accessories",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "lingerie-accessories",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            "https://www.nykaa.com/lingerie-accessories-app?device_family=app",
                          appLinkType: "landing_page",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b19f90e1a193078f6fe4f4",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.pop_up_stores",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/f88ad0a1-a2f4-4c7d-9ebd-971e8b09dd79.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "pop_up_stores",
                              lang: "en",
                              position1: 15,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "pop_up_stores",
                          lang: "en",
                          position1: 15,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "lingerie-accessories",
                          position2: 1,
                          transaction_id: "9ef94c0ece0ed3cd2343e997dc4cbae7",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "612e2a94b8b39a6efe00488a",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.pop_up_stores",
                        params: {
                          url: "https://www.nykaafashion.com/lp/winter-store?pageType=nf-winter-store&transaction_id=26f37096c9574bdaf0e31e2b0f38efeb&intcmp=hp,pop_up_stores,2,nykaafashion",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "nykaafashion",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            "https://www.nykaafashion.com/lp/winter-store?pageType=nf-winter-store",
                          appLinkType: "open_in_browser",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b710268db5806808061113",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.pop_up_stores",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/b9d4ad4b-dea6-4bc0-8f78-a79b51494607.gif",
                              aspectRatio: 1.7763157894736843,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "pop_up_stores",
                              lang: "en",
                              position1: 15,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "pop_up_stores",
                          lang: "en",
                          position1: 15,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "nykaafashion",
                          position2: 2,
                          transaction_id: "26f37096c9574bdaf0e31e2b0f38efeb",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "below_image",
                      columnsInRow: "2",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "pop_up_stores",
                      lang: "en",
                      position1: 15,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.special-curations",
                  inventoryId: "616a6a7d8c0669304a488e25",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "special-curations",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 16,
                  widgetData: {
                    id: "618f4b8ae2e5c2bcf5f19074",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "hp.special-curations",
                    params: {
                      theme: "default",
                      title: "Special Curations",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "2",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "618f4b8ae2e5c2bcf5f19076",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.special-curations",
                        params: {
                          url: "https://www.nykaa.com/new-launches?transaction_id=4db9e016ee884eb0e996d6da24653852&intcmp=hp,special-curations,1,new-launches",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "new-launches",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "19791",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "618f499be15dfbc87af18d64",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.special-curations",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/17741127-58cd-4109-a30e-668cb0210d0b.png",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "special-curations",
                              lang: "en",
                              position1: 16,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "special-curations",
                          lang: "en",
                          position1: 16,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "new-launches",
                          position2: 1,
                          transaction_id: "4db9e016ee884eb0e996d6da24653852",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "618f4b8ae2e5c2bcf5f1907c",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.special-curations",
                        params: {
                          url: "https://www.nykaa.com/bestsellers/c/15752?transaction_id=2b920593ce68823b68b2377d2469bcbd&intcmp=hp,special-curations,2,bestsellers",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "bestsellers",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "15752",
                          appLinkType: "category",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "618f49c3c28831dbe3d3c6ba",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.special-curations",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/d24871bd-eb78-49ae-b16f-e5dc3a8fcf45.png",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "special-curations",
                              lang: "en",
                              position1: 16,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "special-curations",
                          lang: "en",
                          position1: 16,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "bestsellers",
                          position2: 2,
                          transaction_id: "2b920593ce68823b68b2377d2469bcbd",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "below_image",
                      columnsInRow: "2",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "special-curations",
                      lang: "en",
                      position1: 16,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "hp.beauty_advice",
                  inventoryId: "5eaac8f5d5a542498988ba8d",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "beauty_advice",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 17,
                  widgetData: {
                    id: "5e9b10c2ed369ea0cd1b5772",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "hp.beauty_advice",
                    params: {
                      theme: "default",
                      title: "Beauty Advice",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "2",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "616564d629eafac4a020340c",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "hp.beauty_advice",
                        params: {
                          url: "https://www.nykaa.com/nykaa-network/blog?transaction_id=205cc864609bc7354b8e0de478e677e0&intcmp=hp,beauty_advice,1,beautys-hottest-trends",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "beautys-hottest-trends",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "https://www.nykaa.com/nykaa-network/blog",
                          appLinkType: "authenticated_web_page",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61b9dfecd343b5e264106c7a",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.beauty_advice",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/be8f932d-8747-41d7-a5c5-21776d7d43c7.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "beauty_advice",
                              lang: "en",
                              position1: 17,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "beauty_advice",
                          lang: "en",
                          position1: 17,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "beautys-hottest-trends",
                          position2: 1,
                          transaction_id: "205cc864609bc7354b8e0de478e677e0",
                        },
                        isDesktop: true,
                      },
                      {
                        id: "5e9b3abb3a0c127c7b1b57de",
                        widgetType: "BANNER",
                        positionInParent: 2,
                        inventoryName: "hp.beauty_advice",
                        params: {
                          url: "https://www.nykaa.com/routinefinder?transaction_id=d5abaf5cea65b20b6a984f28a80fafb7&intcmp=hp,beauty_advice,2,routine-finder",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "url_redirection",
                          trackingParameters: "routine-finder",
                          section: "primary",
                          randomize: "no",
                          appLinkData:
                            "https://www.nykaa.com/nykaaroutinefinder-app?device_family=app",
                          appLinkType: "landing_page",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "2",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "61482c08b31ac4a6ce366181",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "hp.beauty_advice",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/554cb5ca-4d3a-4dbd-b8fc-e5fa8a6440b6.jpg",
                              aspectRatio: 1.7777777777777777,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "2",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "beauty_advice",
                              lang: "en",
                              position1: 17,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "beauty_advice",
                          lang: "en",
                          position1: 17,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "routine-finder",
                          position2: 2,
                          transaction_id: "d5abaf5cea65b20b6a984f28a80fafb7",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "below_image",
                      columnsInRow: "2",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "beauty_advice",
                      lang: "en",
                      position1: 17,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
                {
                  inventoryName: "desktop-homepage.information-strip",
                  inventoryId: "612f7281b8b39a6efe004dbf",
                  inventoryPageType: "desktop-homepage",
                  inventoryPageSection: "information-strip",
                  inventoryPageData: "default",
                  visibility: "Global",
                  position: 18,
                  widgetData: {
                    id: "612f7327982652daba73e3a9",
                    widgetType: "COLUMN_GRID",
                    positionInParent: 1,
                    inventoryName: "desktop-homepage.information-strip",
                    params: {
                      theme: "default",
                      title: "",
                      imageUrl: "",
                      isFullWidth: false,
                      viewAllUrl: "",
                      subTitle: "",
                      columnsInRow: "1",
                      titleAlign: "center",
                      backGroundColor: "",
                      isDesktop: true,
                    },
                    children: [
                      {
                        id: "612f7327982652daba73e3ab",
                        widgetType: "BANNER",
                        positionInParent: 1,
                        inventoryName: "desktop-homepage.information-strip",
                        params: {
                          url: "?intcmp=desktop-homepage,information-strip,1,",
                          title: "",
                          discountTitle: "",
                          description: "",
                          subDescription: "",
                          titleOrder: "title_plain",
                          actionType: "none",
                          trackingParameters: "",
                          section: "primary",
                          randomize: "no",
                          appLinkData: "",
                          appLinkType: "non_clickable",
                          textAreaOpacity: "",
                          textPosition: "below_image",
                          columnsInRow: "1",
                          isDesktop: true,
                        },
                        children: [
                          {
                            id: "615ee2873e58f13380c5320f",
                            widgetType: "IMAGE",
                            positionInParent: 1,
                            inventoryName: "desktop-homepage.information-strip",
                            params: {
                              src: "https://images-static.nykaa.com/uploads/58c1c0b0-5a0b-4614-acfc-3205e669d8a7.jpg",
                              aspectRatio: 12,
                              textAreaOpacity: "",
                              textPosition: "below_image",
                              columnsInRow: "1",
                              isDesktop: true,
                            },
                            children: [],
                            inheritParams: {},
                            trackingData: {
                              namespace0: "desktop-homepage",
                              namespace1: "information-strip",
                              lang: "en",
                              position1: 18,
                              pageData1: "",
                              pageData2: "default",
                              position2: 1,
                            },
                            isDesktop: true,
                          },
                        ],
                        inheritParams: {},
                        trackingData: {
                          namespace0: "desktop-homepage",
                          namespace1: "information-strip",
                          lang: "en",
                          position1: 18,
                          pageData1: "",
                          pageData2: "default",
                          namespace2: "",
                          position2: 1,
                          transaction_id: "d356a9b26b908d29e70079437201ba0e",
                        },
                        isDesktop: true,
                      },
                    ],
                    inheritParams: {
                      textAreaOpacity: "",
                      textPosition: "below_image",
                      columnsInRow: "1",
                    },
                    trackingData: {
                      namespace0: "desktop-homepage",
                      namespace1: "information-strip",
                      lang: "en",
                      position1: 18,
                      pageData1: "",
                      pageData2: "default",
                      position2: 1,
                    },
                    isDesktop: true,
                  },
                },
              ],
              styles: {},
              metaData: {
                title:
                  "Buy Cosmetics Products & Beauty Products Online in India at Best Price | Nykaa",
                keywords:
                  "Nykaa, Nyka, Nykaa.com, Nika, Nyyka, Nyka.com, Nykaa online, Nykaa India, buy cosmetics online, cosmetics online, buy beauty products online, beauty products online, buy cosmetics india, buy beauty products india",
                description:
                  "Buy cosmetics & beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands. &#10004; free shipping* &#10004; Cash on Delivery",
              },
              isNotFound: false,
            },
            fitcode: {
              loading: false,
              isFetchingError: false,
              widgets: null,
            },
            categoryListing: {
              errorFetchingPage: false,
              loading: false,
              isFetchingError: false,
              isNotFound: false,
              pageNumber: 1,
              activeFilters: {},
              isFilterChanged: false,
              isPageChanged: false,
              serverError: false,
              widgets: [],
              activeSort: "",
              loadingPage: false,
            },
            footer: {
              priceList: {},
              aboutUs: {},
              categories: {},
            },
            searchListingPage: {
              activeFilters: {},
              error: false,
              errorFetchingPage: false,
              isFilterChanged: false,
              isPageChanged: false,
              loading: false,
              loadingPage: false,
              pageNumber: 0,
              searchTerm: "",
            },
            pro: {
              loadingFirstFoldWidgets: false,
              firstFoldWidgetsError: false,
              loadingSecondFoldWidgets: false,
              secondFoldWidgetsError: false,
            },
            VP: {
              error: false,
              configs: {},
              message: "",
              scriptLoaded: false,
            },
            navigation: {},
            ssrExperiments: {},
          };
        </script>
        <script>
          window.__APP_DATA__ = {};
        </script>
        <script>
          window.dataLayer = [
            {
              isDesktop: true,
              gaId: "UA-31866293-9",
              optimizeId: "GTM-TJ4ZB5M",
              newStack: true,
              pageName: "Nykaa : Home Page",
              pageType: "Nykaa : Home Page",
              responseCode: 200,
            },
          ];
          window.datalayer = {
            isDesktop: true,
            gaId: "UA-31866293-9",
            optimizeId: "GTM-TJ4ZB5M",
            newStack: true,
            pageName: "Nykaa : Home Page",
            pageType: "Nykaa : Home Page",
            responseCode: 200,
          };
        </script>
        <script type="application/ld+json">
          {}
        </script>
        <script>
          window.__NPS_PRELOADED_STATE__ = {
            reviewReducer: {
              reviews: [],
              isReviewFetched: false,
              reviewsLoading: false,
              selectedReview: {},
              reviewFailure: false,
              isReviewSubmitted: false,
            },
            auth: {
              fetching: false,
              dataFetched: false,
              isFetchingError: false,
              fetchedOverNetwork: false,
              user: {
                cartItemsCount: 0,
                email: "",
                firstName: "",
                formKey: "",
                groupId: "",
                id: "",
                isLoyal: false,
                isPro: false,
                lastName: "",
                rewardPoints: 0,
                userName: "",
                wishlist: [],
              },
            },
            productPage: {
              products: {},
              selectedProduct: null,
              productLoading: false,
              isFetchingError: false,
            },
            npsAppReducer: {
              npsToken: "",
              parsedData: [],
              statusCode: 200,
            },
            dataLayer: {},
          };
        </script>
        <script>
          window.__USER_PRELOADED_STATE__ = {
            appReducer: {
              pageType: null,
              statusCode: 200,
              storeId: "",
              configFlagsFetched: false,
              configFlags: {
                isSmartLockActive: false,
                mobileMapping: {
                  sendOtpCaptcha: false,
                  verifyOtpCaptcha: false,
                },
              },
              run: 100,
              client: {
                device: "WEB",
              },
              breadCrumb: [],
              isSliderOpen: false,
              showBreadcrumb: false,
            },
            auth: {
              fetching: false,
              dataFetched: false,
              isFetchingError: false,
              fetchedOverNetwork: false,
              user: {
                cartItemsCount: 0,
                email: "",
                firstName: "",
                formKey: "",
                groupId: "",
                id: "",
                isLoyal: false,
                isPro: false,
                lastName: "",
                rewardPoints: 0,
                userName: "",
                wishlist: [],
              },
            },
            mobileVerification: {
              steps: [
                {
                  stepName: "loading",
                },
              ],
              flowDisabled: false,
            },
            remoteConfig: {
              switches: {
                showOffersOnPdp: true,
                showRewardPoints: true,
                showViewSimilar: true,
                newRatingForm: true,
                showDeliveryOnPd: true,
                internationalMode: false,
                redirectionList: [],
                trackDeviceId: false,
                pdPageBanners: true,
                offerListingEnabled: true,
                appLinkEnabled: true,
                featuresEnabled: true,
                socialLinksEnabled: true,
                newsletterEnabled: true,
                helpCenterEnabled: true,
                mobileNumberMapping: true,
                showUserPortfolio: false,
                webOtpAutoRead: true,
                vpEnabled: false,
                experimentV2Enabled: false,
                loadInterFont: true,
              },
              configs: {
                whitelistedDomains: [
                  "www.nykaa.com",
                  "api.nykaa.com",
                  "adn-static2.nykaa.com",
                  "adn-static1.nykaa.com",
                  "prod-events.nykaa.com",
                ],
                customersAlsoBought: {
                  status: false,
                },
                customersAlsoViewed: {
                  status: false,
                },
                rewardPointsOnSignUp: 2000,
                upiOffer: {
                  status: false,
                  message: "Get upto &#8377;40 OFF on BHIM UPI Payment",
                },
                priceReveal: {
                  active: false,
                  productEligibilityActive: false,
                  data: {
                    bucket: "PinkFridayBox2021",
                    pinkBoxUrl: "/saleBox/?ptype=saleBox&saleId=pink-friday-sale",
                    saleOfferTitle: "PINK FRIDAY OFFER",
                    colors: {
                      offerTitle: "#FFFFFF",
                      offerPrice: "#FFFFFF",
                      offerDiscount: "#FFFFFF",
                      offerDescription: "#FFFFFF",
                    },
                    primaryActionLabel: "Add To Pink Box",
                    secondaryActionLabel: "Go To Pink Box",
                    alreadyAddedToBoxInfo:
                      "You added this product to your Pink Box",
                    addedToBoxToastMessage: "Added to Pink Box",
                    addedToBoxErrorMessage: "Couldn't Add to Pink Box, Try again",
                  },
                },
                trendingSearchesToShow: 5,
                maxSearchHistoryCount: 5,
                storeOptions: {
                  status: false,
                  backToBeautyText: "Nykaa Main Store",
                  exploreMoreStores:
                    "https://images-static.nykaa.com/media/explore_stores_v5.png",
                  stores: [],
                },
                contentPolicy: {
                  status: true,
                  value:
                    "img-src 'self' data: *.nykaa.com *.naikaa.com fsnecommerce.sc.omtrdc.net evbk.gamooga.com www.google-analytics.com www.google.com www.google.co.in www.facebook.com stats.g.doubleclick.net cm.everesttech.net www.googletagmanager.com *.criteo.net *.criteo.com www.youtube.com dpm.demdex.net cm.g.doubleclick.net  www.gstatic.com m.youtube.com cdn-jp.gsecondscreen.com;script-src 'self' 'unsafe-inline' 'unsafe-eval' *.nykaa.com *.naikaa.com assets.adobedtm.com www.googletagmanager.com www.google-analytics.com  www.googleadservices.com *.criteo.net *.criteo.com connect.facebook.net cdn-jp.gsecondscreen.com googleads.g.doubleclick.net apis.google.com *.netcoresmartech.com ae.gsecondscreen.com evbk.gamooga.com *.speedcurve.com nykaa.verloop.io cdn-ops.verloop.io cdn.speedcurve.com lux.speedcurve.com cdn.nykaaman.com https://11310639.fls.doubleclick.net/activityi;report-uri https://o1.ingest.sentry-prod.nykaa.com/api/50/security/?sentry_key=0fedf4f8d3b84b0b8fb2ad1eec027fb4;",
                  userPercentage: 10,
                  headerKey: "Content-Security-Policy",
                },
                sortForListing: [
                  {
                    name: "popularity",
                    key: "popularity",
                  },
                  {
                    name: "discount",
                    key: "discount",
                  },
                  {
                    name: "name",
                    key: "name",
                  },
                  {
                    name: "customer top rated",
                    key: "customer_top_rated",
                  },
                  {
                    name: "new arrivals",
                    key: "new_arrival",
                  },
                  {
                    name: "price: high to low",
                    key: "price_desc",
                  },
                  {
                    name: "price: low to high",
                    key: "price_asc",
                  },
                ],
                freeShipping: 499,
                homePage: {
                  initialInventories: 10,
                  eagerLoadImages: 6,
                  pageTypeSuffix: {
                    status: true,
                    suffix: "sale",
                  },
                },
                meta: {
                  productPage: {
                    title:
                      "Product_Name: Buy Product_Name Online at Best Price in India | Nykaa",
                    description:
                      "Product_Name Online: Buy Product_Name at best price from Nykaa. Check out Product_Name review. &#10003;COD &#10003;Free Shipping",
                  },
                  brandPage: {
                    title:
                      "Brand_Name - Buy Brand_Name Products Online at Best Price | Nykaa",
                    description:
                      "Brand_Name products: Buy Brand_Name products online at best price on Nykaa. Browse from a wide range of Brand_Name authentic products online at low price. &#10003;COD &#10003;Free shipping &#10003;Original Products",
                  },
                  searchPage: {
                    title:
                      "Buy Cosmetics Products & Beauty Products Online in India at Best Price | Nykaa",
                    description:
                      "Buy cosmetics &amp; beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products &amp; more from top beauty brands. &#10004; free shipping* &#10004; Cash on Delivery",
                    keywords:
                      "Nykaa, Nyka, Nykaa.com, Nika, Nyyka, Nyka.com, Nykaa online, Nykaa India, buy cosmetics online, cosmetics online, buy beauty products online, beauty products online, buy cosmetics india, buy beauty products india",
                  },
                },
                guidedSearch: {
                  userPercentage: 0,
                  status: false,
                },
                searchSuggestionIcons: {
                  query: "https://www.nykaa.com/media/wysiwyg/2020/search.svg",
                  buying_guide:
                    "https://www.nykaa.com/media/wysiwyg/2020/buying-guide.svg",
                  history: "https://www.nykaa.com/media/wysiwyg/2020/clock.svg",
                  trending:
                    "https://www.nykaa.com/media/wysiwyg/2020/ic-trending.svg",
                },
                AB: {
                  personalizationHome: {
                    status: true,
                    userPercentage: 10,
                    keyName: "ab_personalHome",
                  },
                  dweblstMigration: {
                    status: true,
                    userPercentage: 100,
                    keyName: "ab_dweb_listingpage",
                    cookie: "D_LST",
                  },
                  suggestMobileMap: {
                    status: true,
                    userPercentage: 100,
                    keyName: "ab_suggestedMap",
                  },
                  dwebPdpMigration: {
                    status: true,
                    userPercentage: 100,
                    keyName: "ab_dweb_pdp",
                    cookie: "D_PDP",
                  },
                  autoFillSignUp: {
                    status: false,
                    userPercentage: 0,
                    keyName: "ab_autoFill",
                  },
                },
                appLinks: {
                  title: "experience the nykaa mobile app",
                  googlePlay: "https://nykaa.onelink.me/2573509543/aba6fc39",
                  appStore: "https://nykaa.onelink.me/2573509543/aba6fc39",
                },
                features: {
                  brandsCount: {
                    iconUrl:
                      "https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg",
                    title: "2400+ brands",
                    text: "Well Curated 1.9Lakh + Product",
                  },
                  freeShip: {
                    iconUrl:
                      "https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg",
                    title: "Free Shipping",
                    text: "for orders above INR",
                  },
                  genuineProduct: {
                    iconUrl:
                      "https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg",
                    title: "Authentic Products",
                    text: "Sourced Directly from Brands/ Authorised Distributors",
                  },
                  easyReturns: {
                    iconUrl:
                      "https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg",
                    title: "Easy Returns",
                    text: "15 Day Easy Returns For Most Products",
                  },
                },
                socialLinks: {
                  text: "show us some love &#10084; on social media",
                  social: [
                    {
                      title: "Instagram",
                      imgUrl:
                        "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg",
                      link: "https://www.instagram.com/mynykaa/?ref=badge",
                    },
                    {
                      title: "Facebook",
                      imgUrl:
                        "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg",
                      link: "https://www.facebook.com/MyNykaa",
                    },
                    {
                      title: "Youtube",
                      imgUrl:
                        "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg",
                      link: "https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA",
                    },
                    {
                      title: "Twitter",
                      imgUrl:
                        "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg",
                      link: "https://twitter.com/MyNykaa",
                    },
                    {
                      title: "Pinterest",
                      imgUrl:
                        "https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg",
                      link: "https://www.pinterest.com/mynykaa/",
                    },
                  ],
                },
                helpCenter: {
                  imgUrl: "https://www.nykaa.com/media/wysiwyg/2020/helpCenter.svg",
                  title: "HELP CENTER",
                  link: "https://www.nykaa.com/gateway-api/omsApis/helpCenter?domain=NYKAA",
                },
                VP: {
                  apiKey: "AIzaSyBCiWco5cS6Uja2-642pPZl_Ed0lRROZc4",
                  authDomain: "nykaa-android-1224.firebaseapp.com",
                  databaseURL: "https://nykaa-android-1224.firebaseio.com",
                  projectId: "nykaa-android-1224",
                  storageBucket: "nykaa-android-1224.appspot.com",
                  messagingSenderId: "1035734725184",
                  appId: "1:1035734725184:web:cd91daa8cac5a2baa0e5a5",
                  measurementId: "G-W9QPFFEM7C",
                  doc: "api_prioritization",
                  collection: "nykaa",
                },
                ABV2: [],
                landingPageABConfig: {},
                plpPriceReveal: {
                  status: false,
                  categoryId: [],
                  text: "SALE OFFER INSIDE",
                  textColor: "#E80071",
                  badgeColor: "#FDEBF4",
                },
              },
            },
            userPortfolio: {
              questions: [],
              answers: {},
              givenAnswers: {},
              loading: false,
              isQuestionsNotFound: false,
              isAnswersNotFound: false,
              isFetchingAnswersError: false,
              isFetchingQuestionsError: false,
            },
          };
        </script>
        <script id="__LOADABLE_REQUIRED_CHUNKS__" type="text/javascript">
          [0, 2, 10];
        </script>
        <script
          async=""
          data-chunk="bundle"
          src="js/dstatic-vendor.crit2.f587753d09.chunk.js"
          type="text/javascript"
        ></script>
        <script
          async=""
          data-chunk="bundle"
          src="js/dstatic-vendor.crit1.187dcd4405.chunk.js"
          type="text/javascript"
        ></script>
        <script
          async=""
          data-chunk="bundle"
          src="js/dstatic-vendors~bundle.3bedfcd375.chunk.js"
          type="text/javascript"
        ></script>
        <script
          async=""
          data-chunk="bundle"
          src="js/dstatic-bundle.92c01d2a42.js"
          type="text/javascript"
        ></script>
        <script
          async=""
          data-chunk="home"
          src="js/dstatic-vendors~categoryList~home~landingPage~product.atf~searchListing.m.50b1b7bd4c.chunk.js"
          type="text/javascript"
        ></script>
        <script
          async=""
          data-chunk="home"
          src="js/dstatic-vendors~home~landingPage~widgets.7b68958607.chunk.js"
          type="text/javascript"
        ></script>
        <script
          async=""
          data-chunk="home"
          src="js/dstatic-home.54b75829aa.chunk.js"
          type="text/javascript"></script>
      </body>
    </html>
    `
}

export default footer