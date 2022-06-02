import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ListIcon from '@material-ui/icons/List';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ContactsIcon from '@material-ui/icons/Contacts';
import Brightness2Icon from '@material-ui/icons/Brightness2';
const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const style2 = {
    float:'right',
    marginTop:'3%',
    marginRight:'10%'
    
}


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function MainMenu() {
  const classes = useStyles();
  

  return (
      <div style={style2}>
        <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        <ListIcon className={classes.icon} />
            Projects
      </Link>
        <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
         <WhatshotIcon className={classes.icon} />
         Skills
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
      <Typography color="textPrimary" className={classes.link}>
            <ContactsIcon className={classes.icon} />
            Contact
         </Typography>
         </Link>
      <Brightness2Icon/>
    </Breadcrumbs>
    
    </div>
  );
}


