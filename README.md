# NOTE for version 0.1
This is an inital plan for the app, don't expect any of the features to be working yet :)

---

# MooMooCards

Web app for creating custom greetings cards typically involving funny animals.

## Typical flow

Customize card in browser
Checkout if paid features (eg. charitable donations etc.) were added to the card
Press create card to receive a unique url that shows the card
Send or share the card
Login with google account to see all the cards you have created and share the old ones

## Key Features

* Web ui for creating and sharing your card
* Rest/http-api to server
* Example server implementation based on google app engine
* Pictures and card components to get you started
* Creation works best on computers and tablets, viewing cards also works on phones


## API (not yet implemented)

GET /card/{id}
	Returns 
		"image/png" //card in .png format

POST /card
	Body
		{
			"message": "card text",
			"image": "image in .png datauri"
		}

	Returns
		{
			"id": "cardId"
		}
