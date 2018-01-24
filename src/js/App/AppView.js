export default class AppView  {
	
	constructor(app) {
		this.app = app
	}
	
	showVersion() {
		alert("version: "+this.app.version)
	}
	
	render() {
		
		let appElement = document.createElement('li')
			appElement.className = 'app'
			appElement.addEventListener('click',() => {this.showVersion()})
			
		let apDex = document.createElement('div')
			apDex.className='app--apdex'
			apDex.innerHTML = this.app.apdex
			
		let appName = document.createElement('div')
			appName.className='app--name'
			appName.innerHTML = this.app.name
			
			appElement.appendChild(apDex)
			appElement.appendChild(appName)
			
		return appElement
	
	}
}