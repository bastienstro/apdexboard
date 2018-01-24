# ApdexBoardApp

Install node modules:
```shell
  yarn install
```

Install project (project will be installed in dist directory):
```shell
  yarn webpack
```

# Use:

The ApDexBoard is an ES6 module class to create an apdex Board.

Here are the following parameters of the component:
	- apps    : the app data in JSON
	- topApps : the number of the top Apps  

# Concept:

The two main Classes are: 
	- ApDexBoard : the data model
	- ApDexBoardView : the class which renders the front end.
	
# ApDexBoard:

This class receives two parameters : 
	- the apps
	- the number of top apps ( specified to 25 in the index )
		
# ApDexBoardView:

The ApDexBoardView Class has three parameters:
	- the apdexboard object.
	- the email of the user.
	- the number of rendered apps ( 5 for our example ) 

we have our main render function which render the all page if we toggle the list or if we add/remove app.