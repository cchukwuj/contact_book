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
import { useAuth0 } from '@auth0/auth0-react';



const Home = () => {

  const [contacts, setContacts] = useState([]);


  const { logout, isAuthenticated, user} = useAuth0();
	console.log(isAuthenticated)
	console.log(user)


  const logoutAndEnd = () => {
	axios.get("http://localhost:9000/items/refresh")
	logout()
  }

  const refresh = () => {
    axios.get("http://localhost:9000/items/refresh")
    window.open("http://localhost:3000/home", "_self")
  }

  const deleteValue = (first, last, username) => {
	  axios.get("http://localhost:9000/items/deleteIt/"+first+"/"+last+"/"+username)
	  refresh();
  }

  const insertValue = () => {
	  window.open("http://localhost:3000/insert", "_self")
  }

  const useStyles = makeStyles((theme) => ({
		heroContent: {
		  backgroundColor: '#fffefa',
		  backgroundImage: "url(https://i.imgur.com/uaZijlu.png)",
		  backgroundSize: '21%',
		  padding: theme.spacing(8, 0, 6),
		},
		heroButtons: {
			paddingLeft: theme.spacing(5),
			paddingRight: theme.spacing(5),
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





	  
  useEffect(() => {
	if(isAuthenticated) {
		async function getList() {
			console.log(user.email)
			axios.get("http://localhost:9000/items/" + user.email)
			.then((res) => {
			  const returned = res.data
			  setContacts(returned)
			  console.log(contacts)
			})
		}
		getList();
	}
	}, [isAuthenticated])


	  if (!isAuthenticated) {
		return <div>Loading...</div>;
	  }

	return (
		isAuthenticated && (
			<React.Fragment>
				<CssBaseline />
				<main>
					<div className={classes.heroContent}>
		
			<Container className = {classes.heroButtons} align = "center">
				<Typography variant="h6" align="center" color="textPrimary" gutterBottom>
					{user.name}'s
				</Typography>
			</Container>					
					
					<Container maxWidth="xl">
						<Typography variant="h1" align="center" color="textPrimary" gutterBottom>
						<span class = {classes.titleFont}>Contacts</span>
						</Typography>
					</Container>

					<Container className = {classes.heroButtons} align = "center">
				<Button onClick = {() => refresh()} variant= "contained" color = "primary">Refresh</Button>
				<Button onClick = {() => logoutAndEnd()} variant= "contained" color = "primary">Logout</Button>
				<Button onClick = {() => insertValue()} variant= "contained" color = "primary">Add Contact</Button>
			</Container>		

					</div>

	

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
				<Button onClick = {() => deleteValue(contact["First_Name"], contact["Last_Name"], user.email)} variant= "contained" color = "primary">Delete</Button>
							</Card>
						</Grid>
						))}
					</Grid>
					</Container>
				</main>
			</React.Fragment>
		)
	);
}


export default Home;