import AppView from '../App/AppView'

export default class HostView {
	
	constructor(host,apps) {
		this.host = host
		this.apps = apps
	}
	
	render() {
			let hostElement = document.createElement('div')
		    	hostElement.className='host'
			
			let hostName = document.createElement('h2')
			    hostName.className='host--title'
				hostName.innerHTML = this.host
			
			let appsList = document.createElement('ul')
				appsList.className='host--apps'
			
			this.apps.forEach(app => {
				let appElement = new AppView(app).render()
					appsList.appendChild(appElement)
			})
					
			hostElement.appendChild(hostName)
			hostElement.appendChild(appsList)
		
		return hostElement
	}
}