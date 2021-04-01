# Build Universal Applications with Nuxt.js

This example shows how to build a universal application using Nuxt.

Please read [Tutorial: Build Universal Applications with Nuxt.js](https://developer.okta.com/blog/2019/04/26/tutorial-build-universal-apps-with-nuxt) for the full details.

Prerequisites: [Node.js](https://nodejs.org/)

## Getting Started

To install this sample, run the following commands: 

```bash
git clone https://github.com/oktadeveloper/okta-universals-apps-with-nuxt.git
cd okta-universals-apps-with-nuxt
```

This will copy the project locally. The install the dependencies and start application, run the follow commands:

```
npm install
npm run dev
```

This will start the application in development mode so any of your changes trigger a live reload.

## Connect Okta

Okta has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

This sample uses Okta to manage users and authenticate them to protected routes on the application. Before you begin, you'll need a free Okta developer account. Install the [Okta CLI](https://cli.okta.com/) and run ```okta register``` to sign up for a new account. If you already have an account, run ```okta login```.

Then, run ```okta apps create```. Select the default app name, or change it as you see fit. Choose Single-Page App and press Enter. 

Change the Redirect URI to http://localhost:3000/login and accept the default Logout Redirect URI of http://localhost:3000.

The Okta CLI will create an OIDC Single-Page App in your Okta Org. It will add the redirect URIs you specified and grant access to the Everyone group. It will also add a trusted origin for http://localhost:3000. You will see output like the following when it's finished:

```
Okta application configuration:
Issuer:    https://dev-133337.okta.com/oauth2/default
Client ID: 0oab8eb55Kb9jdMIr5d6
```

Copy these values into an `.env` file in the root of your project. This will tell the application how to contact your new Okta account.

```bash
SECRET_KEY="sufficiently long random string to encrypt cookies"
OAUTH_ISSUER="{yourIssuer}"
CLIENT_ID="{yourClientId}"
```

You can now use the sample, when you navigate to the ```/progress``` route you will be redirected to Okta to sign in.

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2019/04/26/tutorial-build-universal-apps-with-nuxt), or visit our [Okta Developer Forums](https://devforum.okta.com/). You can also email developers@okta.com if would like to create a support ticket.

## License

Apache 2.0, see [LICENSE](LICENSE).

