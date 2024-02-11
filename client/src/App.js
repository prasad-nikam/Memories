import './App.css';
import {Container,AppBar,Typography,Grow,Grid,} from '@mui/material'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from '../src/styles';
import memories from './images/memories.png'

function App() {
  const classes= useStyles;
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography className={classes.heading} variant='h4' align='center'> Memories 
        <img className={classes.image} src={memories} alt='memories' height={30} width={60}/>
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent={'space-between'} alignItems={'stretch'} spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
