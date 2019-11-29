import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  title: {
    position: 'absolute',
    top: 40,
  },
}));

export default function Welcome() {

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const slider = (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={4000}
    >
      <div data-src="/img/slider-1.jpeg" />
      <div data-src="/img/slider-2.jpeg" />
      <div data-src="/img/slider-3.jpeg" />
    </AutoplaySlider>
  )

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Button variant="contained" className={ classes.button } href="/signup">
            Sign Up
        </Button>

        <Button variant="contained" className={ classes.button } href="/login">
          Log In
        </Button>
      </Router>

      { slider }
    </div>
  )
}
