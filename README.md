# NOTE for version 0.1
This is an inital plan for the app, don't expect any of the features to be working yet :)

---

# MooMooCards

Web app for creating custom greetings cards typically involving funny animals. Creating cards works best on computers and tablets, viewing cards works also on phones.

## Typical flow

1. Customize card in browser
2. Checkout if paid features (eg. charitable donations etc.) were added to the card
3. Press create card to receive a unique url that shows the card
4. Send or share the card
5. Login with google account to see all the cards you have created and share the old ones

## Key Features

* Web ui for creating and sharing your card
* Rest/http-api to server
* Example server implementation based on node.js and express
* Pictures and card components to get you started

## API (not yet implemented)

GET /card/{id}
	Returns 
		"image/png" //card in .png format

POST /card
	Body
		{
			"message": "card text",
			"imageDataUrl": "image in .png dataURL"
		}

	Returns
		{
			"id": "cardId"
		}
