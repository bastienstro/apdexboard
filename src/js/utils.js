Array.prototype.pushUnique = function (element, comparer) {
	if (!this.inArray(comparer)) {
    this.push(element)
  }
}

Array.prototype.inArray = function (comparer) {
  for (var i = 0; i < this.length; i++) {
    if (comparer(this[i])) return true
  }
  return false
}

Array.prototype.sortByApdex = function () {
	this.sort((app, prevApp) => app.apdex < prevApp.apdex)
	return this
}

Array.prototype.uniqueBy = function(keyFn) {
		let mySet = new Set();
		return this.filter(x => {
			let key = keyFn(x), isNew = !mySet.has(key);
			if (isNew) 
				mySet.add(key);
			return isNew;
  		});
}