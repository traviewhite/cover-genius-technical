# Insurance Policy Card

This React project involves creating an insurance policy card component and requesting data from an API endpoint to build a listing of policies.

## Design

You can find the design spec for this project here: [https://www.figma.com/file/fGW83zI7thrOaCjB3O4gHRAZ/DEV-Test](https://www.figma.com/file/fGW83zI7thrOaCjB3O4gHRAZ/DEV-Test)

There are designs for the mobile, tablet, and desktop views, and an example of the component's active state.

## CSS

The component you build should be responsive and display correctly across all viewports. It should also be cross-browser compatible and will be tested in Chrome, Firefox, Safari, Internet Explorer 11 and Edge.

## Fonts

Please import the fonts from here: [https://use.typekit.net/hzn4qhc.css](https://use.typekit.net/hzn4qhc.css)

The primary font used in the designs is called Brandon Grotesque (referenced as "brandon-grotesque" in the CSS import), the secondary font is Bitter (referenced as "bitter" in the CSS import).

## Interactions

The component includes an active state which is toggled when any part of the component is clicked. The view for the active state is included in the design files. Many cards can be active at the same time.

## API

The API endpoint is located here: [https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking](https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking)

The response from the API contains all the relevant data required to replicate the designs. It has a simple schema which contains an array of three "policy" objects which reflect the content in the design.

## Travis White Submission Overview

- `pages/*` - Index page and other Next.js files.
- `components/*` - Collection of components for organizing content, UI, and navigation.
- `components/Policy/*` - Policy component split into smaller, readable components.

## Built Using

- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Moment](https://momentjs.com/)

## Getting Started with Next.js

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Thoughts

Thank you Cover Genius for the opportunity to prove myself with this exercise. I had fun coding this as it did present some interesting workarounds for displaying some of the content. Hoping to hear from you soon! ✌️

Travis White
