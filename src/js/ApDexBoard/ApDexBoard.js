import '../utils'

export default class ApDexBoard  {
	
	constructor(apps,topApps) {
		this.hosts = this.createHosts(apps)
		this.topApps = topApps 
	}
	
	createHosts(apps) {
		// we remove duplicate entries from apps, then they are all sorted once so that they are already sorted when added to each host.
		let sortedApps = apps.uniqueBy(app => app.name).sortByApdex()
		
		return sortedApps.reduce((hosts,app) => {
			
				app.host.forEach(host => {
				
					if (!Array.isArray(hosts[host]))
						hosts[host] = []

					hosts[host].push(app)
				})
		
			return hosts
		
		},{})
	}
	
	addAppToHosts(app) {
		// this is O(h * (n log n)) where h is number of affected hosts & n is number of apps per host
		// we can improve this alogrithm implementing BRtree if efficiency is needed
		app.host.forEach(host => {
				this.hosts[host].pushUnique(app,(element) => element.name === app.name)
				this.hosts[host].sortByApdex()
		})
			
	}
	
	removeAppFromHosts(app) {
		//this is O(h * n) where h is number of affected hosts & n is number of apps per host
		app.host.forEach(host => {
				this.hosts[host] = this.hosts[host].filter(currentApp => app.name !== currentApp.name ) 
		})
	
	}
	
	getTopAppsByHost(host) {
		return this.getBestAppsByHost(host,this.topApps)
	}
	
	getBestAppsByHost(host,limit) {
		return this.hosts[host].slice(0,limit)
	}
	
}