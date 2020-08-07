![Alt Text](https://media.giphy.com/media/26BRHHtEXdVVxVFmw/giphy.gif)

<br>
<br>
<br>

# Destination-Curl

### Project Overview

Did you know that more than 60% of women have curly hair which makes for a mosaic of curl types, curl structures, and curl styles on display everyday. Recently there's been this revolution in hair to focus on curls. No longer are women, heating, straightening, or chemically treating their curls. They are wearing them proudly big, bold, and free. Destination Curl is the online e-commerce equivalent to Sephora for curly girls. We want them to feel at home on our site, while buying products with confidence because they trust us with their precious curls. Also, we want them to engage daily with the site and gain useful tips/tricks on how to love their curls. 

*designed for mobile devices (iPad and iPhone X) as well
<br>



### Wireframes

![https://wireframe.cc/E8U9Xt] (url)

- Desktop Landing

![https://wireframe.cc/3UuOfS] (url)

- Desktop Resource Show (Product)

![https://wireframe.cc/uaRCtf] (url)

- Desktop Resource Index (Hairstyle Ideas)

![https://wireframe.cc/wx8qGQ] (url)

- Tablet Resource Index

![https://wireframe.cc/ymGrNk] (url)

- Mobile Resource Index

<br>

### MVP

The **Destination Curl** MVP will provide a good starting point for the website. It would introduce consumers to the website by first educating them on the different curl types on the landing page. The products featured would help the consumer make informed decisions on purchases with clickable links to the product page. Here, the consumer would find additional product info and links to learn more about he seller/brands featured. The site would also feature DIY Hairstyle ideas to make styling hair easier for consumers. Also, we want this to be collaborative as consumers will be able to upload their own styles. 

<br>

#### Goals

- Use (2) external Airtable data sets 
- Render API data from Airtable on page 
- Allow users to click on product images (which redirect to individual product pages)
- Allow users to create a post and upload Hairstyle ideas
- External links to seller pages on product pages

<br>

#### Libraries 


|     Library       |                                     Description                                            |
| :--------------:  | :-----------------------------------------------------------------------------------------:|
| React Router Dom  | _A tool that allows me to handle routes in a web app, using dynamic routing._              |
| Styled-Components | _A toole that will allow me to write actual CSS in your JavaScript._                       |
|    Axios          | _A promise-based HTTP client that is used for making HTTP requests to fetch or save data._ |

<br>

#### Data

|    API     | Quality Docs? |                              Website                                  |                     
| :--------: | :-----------: | :--------------------------------------------------------------------:| 
| AirtableAPI|      no       | https://airtable.com/tblgWcItkHpk43HNw/viwyQcDI3557LF6uF?blocks=hide  |

<br>

#### Component Hierarchy

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ App.jsx
      |__ Homepage.jsx
      |__ Product.jsx
      |__ Style_Ideas.jsx
      |__ Navigation.jsx
      |__ Header.jsx
```

<br>

#### Component Breakdown


|  Component   |    Type    | state | props |                                 Description                                           |
| :----------: | :--------: | :---: | :---: | :------------------------------------------------------------------------------------:|
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._                                    |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._                            |
|   Homepage   | functional |   n   |   n   | _The homepage will render product images using cards in flexbox._                     |
|    Product   | functional |   y   |   y   | _The product will serve as states, render the info as props, and link to seller info._|
|  Style Ideas | functional |   n   |   n   | _The style idea pages will show tips and allow users to upload suggestions._          |

<br>

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Uploading data      |    H     |     3 hrs      |     3 hrs     |     3 hrs   |
| Gathering Content   |    H     |     4 hrs      |     5 hrs     |     5 hrs   |
| Building JS file    |    H     |     7 hrs      |     7 hrs     |     7 hrs   |
| Building CSS file   |    H     |     9 hrs      |     9 hrs     |     9 hrs   |
| Create CRUD Actions |    H     |     3 hrs      |     5 hrs     |     5 hrs   |
| Deployment          |    H     |     1 hr       |     1 hr      |     1 hr    |
| TOTAL               |          |    27 hrs      |     30 hrs    |    30 hrs   |

<br>


### Post-MVP


- _Carousel of products dispayed by curl type on Homepage._
- _Price displayed inside product image on Homepage._
- _User ability to embed Youtube video on Style Idea page._
- _Hairstyle ideas would be clickable images for more info._
- _Sections that features local stylists and/or more info on product sellers._

<br>

***

## Project Delivery

### Code Showcase

I encountered some issues with my data and my code was displaying all products not customized by curl type. After some time, I found a method that worked but it was several lines of code. However, I challenged myself to refactor abd was able to condense the solution to one line by using both the filer, includes, and map methods. 
```
 {products.filter(product => product.fields.CurlType.includes('3C')).map(product => (
          <div>
            <img src={product.fields.Image} alt='3cproducts'></img>
            <Link key={product.fields.Name} to={`/product/${product.fields.Name}`}>
              <p>{product.fields.Seller_Info}{product.fields.Name}</p>
            <p>{product.fields.Price}</p>
            </Link>
          </div>
      ))}
```

### Code Issues & Resolutions

1) API data was not working on both forms (Create Blog Post and Create A Style). This took really getting comfortable with Airtable documentation and toying around with the code so that it's in the format best for Airtable. Often times, we want to rush the reading portion with APIs and it costs us even more time in the end rather than doing the due diligence up front to read the usage documentation. 

2) I had issues with setting different media queries. After spendng some time and getting feedback from others, I realized it was do to having the word "device" in the code. However, this took hours to identify what should have been a simple solution. I learned that every word counts and this process gave me the critical eye to evaluate all parts of the code and deem what's necessary, which helps with refactoring and keeping the code DRY. 