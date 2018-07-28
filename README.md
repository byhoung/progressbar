This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Start App

To start the app, simply install node modules and type

```sh
npm start
```

## Improvements and Notes

#### Components

-   I could clean up the component by splitting the JSX into its own presentational component.
-   I could expand this even more and create a way for the user to choose what type of progress bar style they want. (i.e. circle progress bar, vertical bar, horizontal bar, etc.)
-   I could create customizeable event handlers that allow the user to trigger a function when the progress bar reaches 25%, 50%, 75%, 100%, etc. But this can be done already outside of the component.
-   More parameters:
    -   I could let the user specify whether they want to have decimel places in the label or not
    -   I could add a parameter to let the user hide/show the label or add positioning
    -  I could add bootstrappify the styling by adding parameters like barStyle="success/warning/danger"
    - I could add other styling parameters like hide/show stripes 

#### Validation

-   I could improve the component by validating the `min`, `max`, and `value`, so that we don't run into any negative values.

#### Styling

-   Right now I'm using a mix of `js-in-css` to handle overriding default styles while using `css` to handle default styles. As an improvement I would probably standardize this and use either a
    -   styled-component library like `Radium` for more configurability
        -   high configurability by explicitly stating the styles that the user can change
        -   more room for errors in validation
    -   limit the number of configurations by adding a limited number of pre-built classes for the user to choose from to attach to the component using `Sass`. I could then create another UI that lets the user select which prebuilt theme they want to choose.
        -   less configurability
        -   eliminate need to validate styling
        -   adds classes that may never be used
