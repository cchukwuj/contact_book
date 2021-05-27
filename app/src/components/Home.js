import React, { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const Home = () => {

  const [contacts, setContacts] = useState([]);

  const refresh = () => {
    axios.get("http://localhost:9000/items/refresh")
    window.open("http://localhost:3000/", "_self")
  }
  const getList = () => {
		axios.get("http://localhost:9000/items/")
    .then((res) => {
      const returned = res.data
      setContacts(returned)
      console.log(contacts)
    })
	}

  useEffect(() => {
    getList();
	}, [])



  const useStyles = makeStyles((theme) => ({
		heroContent: {
		  backgroundColor: '#fffefa',
		  backgroundImage: "url(https://i.imgur.com/uaZijlu.png)",
		  backgroundSize: '21%',
		  padding: theme.spacing(8, 0, 6),
		},
		cardGrid: {
		  paddingTop: theme.spacing(4),
		  paddingBottom: theme.spacing(4),
		},
		card: {
		  height: '100%',
		  display: 'flex',
		  flexDirection: 'column',
		},
		cardMedia: {
		  paddingTop: '100%', 
		},
		cardContent: {
		  flexGrow: 1,
		},
		buttonPad: {
		  padding: theme.spacing(8),
		},
		titleFont: {
			fontFamily: 'Roboto',
			fontWeight: 'Bold',
		},
	  }));

	  const classes = useStyles();

 
	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				<div className={classes.heroContent}>
				<Container maxWidth="xl">
					<Typography variant="h1" align="center" color="textPrimary" gutterBottom>
					<span class = {classes.titleFont}>Your Contacts</span>
					</Typography>
				</Container>
				</div>

        <Container align = "center">
          <Button onClick = {() => refresh()} variant= "contained" color = "primary">Refresh</Button>
        </Container>

				<Container className={classes.cardGrid} maxWidth="md">
				<Grid container spacing={4}>
					{contacts.map((contact) => (
					<Grid item key={contact} xs={12} sm={6} md={4}>
						<Card className={classes.card}>
              <Typography variant="h6" align="center" color = "textSecondary" gutterBottom>
                {contact["First_Name"]} {contact["Last_Name"]} <br></br>
                {contact["Email"]} <br></br>
                {contact["Phone_Number"]}
              </Typography>
						</Card>
					</Grid>
					))}
				</Grid>
				</Container>
			</main>
		</React.Fragment>
	);
}


export default Home;