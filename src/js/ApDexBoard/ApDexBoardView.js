import HostView from '../Host/HostView'

export default class ApDexBoardView {
	
	constructor(apdexBoard,email,rowApps) {
		
		this.apdexBoard = apdexBoard
		this.email = email
		this.rowApps = rowApps
		this.isGrid = true
	}
	
	toggleGrid() {
		this.isGrid = !this.isGrid
		this.refreshView()
	}
	
	addAppToHosts(app) {
		this.apdexBoard.addAppToHosts(app)
		this.refreshView()
	}
	
	removeAppFromHosts(app) {
		this.apdexBoard.removeAppFromHosts(app)
		this.refreshView()
	}
	
	clearView() {
		let rootElement = document.getElementById("root")
	
		while (rootElement.firstChild) {
   			rootElement.removeChild(rootElement.firstChild)
   		}
   		
	}
		
	refreshView() {
		// To keep code as simple as possible, we clear and re-render from scratch.
   		// Note: in order to improve performance, we could update only the affected hosts.
   	    this.clearView()
   		this.render()		 
	}
	
	renderLayout() {
		
		let layout = document.createElement('div')
		layout.className = 'apdexboard'
		
		let apdexboardHeader = document.createElement('div')
		apdexboardHeader.className = 'apdexboard--header'
		
		let headerTitle = document.createElement('h1')
		headerTitle.className= 'apdexboard--header--title'
		headerTitle.innerHTML= 'Apps by Host'
		
		let headerUserEmail = document.createElement('div')
		headerUserEmail.className= 'apdexboard--header--useremail'
		headerUserEmail.innerHTML = 'for user '+this.email
		
		let headerSwitchList = document.createElement('div')
		headerSwitchList.className= 'apdexboard--header--togglelist'
		headerSwitchList.addEventListener('click',() => {this.toggleGrid()})
		
		let switchButton = document.createElement('input')
		switchButton.type = 'checkbox'
		switchButton.checked  = this.isGrid
		let switchText = document.createTextNode(this.isGrid?"Show as list":"Show as an awesome grid")
		
		headerSwitchList.appendChild(switchButton)
		headerSwitchList.appendChild(switchText)
		
		apdexboardHeader.appendChild(headerTitle)
		apdexboardHeader.appendChild(headerUserEmail)
		apdexboardHeader.appendChild(headerSwitchList)
		
		layout.appendChild(apdexboardHeader)
		
		return layout
	}
	
	render() {
		
		let rootElement = document.getElementById('root')
		
		let layout = this.renderLayout()
		
		let apdexboardBody = document.createElement('div')
		apdexboardBody.className = 'apdexboard--body'
		apdexboardBody.className += ' is-'+(this.isGrid?'grid':'list')
		
		for (let host in this.apdexBoard.hosts) {
			
			let bestApps = this.apdexBoard.getBestAppsByHost(host, this.rowApps)
			let hostElement = new HostView(host, bestApps).render()
			
			apdexboardBody.appendChild(hostElement)
		}
		
		layout.appendChild(apdexboardBody)
		rootElement.appendChild(layout)
		
	}
}