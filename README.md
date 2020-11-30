# CLEAN+ALT

## What is it?

*Our mission is to inform the way people think about ingredients and products they put on their bodies. We want to create a safer, more sustainable, more ethical personal care industry.*

**CLN+ALT** is committed to helping consumers identify the potential risks associated with the personal care products they use every day. Unlike other ingredient databases, we focus exclusively on the chemical content of the products in question. We have consciously avoided the widely-used practice of “greenwashing”, whereby the environmental or social responsibility of a product’s manufacturer is factored into the assessment allowing a product to receive an artificially low toxicity rating.

## Screenshot
![CLEAN](https://user-images.githubusercontent.com/71775701/100565572-f101b600-3291-11eb-8fc3-7cc9801f8b95.PNG)

## Status
Deploying 11/29/20.

## Dependencies

| **Dependencies-Client** |        **Command**           |
|-------------------------|----------------------------- |
|         axios           | yarn add axios               |
|         react           | yarn add react               |
|        react-dom	      | yarn add react-dom           |
|     react-router-dom	  | yarn add  react-router-dom   |
|      react-scripts	    | yarn add react-scripts       |
|       hash-link         | yarn add hash-link           |
|   react-multi-carousel  | yarn add react-multi-carousel|


| **Dependencies-Root**	 |       **Command**           |
|------------------------|-----------------------------|
| @sendgrid/mail	       | yarn add @sendgrid/mail     |
| axios	                 | yarn add axios              |
| cloudinary	           | yarn add cloudinary         |
| concurrently	         | yarn add concurrently       |
| express                | yarn add express            |
|  express-fileupload	   | yarn add express-fileupload |
| jsonwebtoken	         | yarn add jsonwebtoken       |
| mongoDB	               | yarn add mongodb            |
| mongoose	             | yarn add mongoose           |
| passport	             | yarn add passport           |
|passport-jwt	           | yarn add passport-jwt       |
| validator	             | yarn add validator          |

## APIs
*Cloudinary : For handling users images.
*SendGrid : For our email functionality.


## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`

## Contributing
Not accepting contributions at this time.

## License
[MIT](https://choosealicense.com/licenses/mit/)
