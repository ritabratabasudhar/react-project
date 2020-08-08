import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {imgPath:"https://i.pinimg.com/originals/92/70/9b/92709b0c0acbe201f3aa135bd36823ef.jpg"},
  {imgPath:"https://i.pinimg.com/originals/10/0b/b5/100bb5b73b8bb96d199ff550ab9ed2de.jpg"},
  {imgPath:"https://suitcasemag.com/wp-content/uploads/2019/02/india-kerala-backwaters.jpg"},
  {imgPath:"https://avante.biz/wp-content/uploads/Desert-Images-Wallpapers/Desert-Images-Wallpapers-047.jpg"},
  {imgPath:"https://uttarakhandtriptrek.com/wp-content/uploads/2018/10/kedarkantha-trek-10.jpg"}
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },

  img: {
    height: 480,
    display: 'block',
    overflow: 'hidden',
    width:'100%',
    
  },
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
       
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default Carousel;
