import ApDexBoard from './ApDexBoard/ApDexBoard'
import ApDexBoardView from './ApDexBoard/ApDexBoardView'


fetch('./host-app-data.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status)
        return
      }

      response.json().then(function(apps) {
      	  	let apdexboard = new ApDexBoard(apps,25)
	  	  	let apdexboardView = new ApDexBoardView(apdexboard,'averylongemailadress@companyname.com',5)
	  	  
	  	    apdexboardView.render()

      })
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err)
  })


