This folder should contain one folder for each page in your application. Inside of those page specific folders should be a single root file that is your page (generally index.js) alongside all the files that are only applicable to that page. For example in the above image we have a Login page which contains the root file index.ts, a component called LoginForm, and a custom hook called useLogin. This component and hook are only ever used in the Login page so they are stored with this page instead of being stored in the global hooks or components folders.


### Example:
```bash
|--pages
|  |
|  |--LoginPage
|    |---LoginPageView.jsx  # this is central file of Login Page, we will use it only for render ui and import other files e.g. useLoginHook.ts, styles.module.css etc. insted of using custom hook we can use HOC component as well.
|     |---useLoginHook.ts   # the file where wee hold the functionality
|     |---Login.test.ts     # Testing component file
|     |---styles.module.css # Style only for login page
|     |---index.ts   # in this file we will import only LoginPageView
|     |---components # folder which hold specific component for Login page and we are very sure that will not be used in any other pages
|     |    |--LoginForm.tsx
|     |    |--LoginTitle.tsx
|--|--Products
|     |--index.ts
|     |--ProductsView.tsx
|     |--useProductsHook.ts
|     |--Products.test.ts
|     |--styles.module.css
|     |--components
|        |--ProductsList.tsx
|        |--ProductCard.tsx
|        |--HeroSection.tsx

```