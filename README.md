# Reproduction steps and highlighted issue

## Steps

1. `npm install`
2. `npm test`

## The issue

To see the issue go to [component.react.js](./component.react.js) line 125

`...params.inputProps`

For some reason when trying to pass in the inherited inputProps on @material-ui/lab >=4.0.0-alpha.52 there is this axe issue. I believe that passing in the inputProps this way is a valid usage, but please correct me if I am wrong.
