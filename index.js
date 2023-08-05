function handleClick(className, abc) {
	defaultColorSet()
	myFunction(className)
	let ele = document.getElementsByClassName(`${className}`)
	for (let i of ele) {
		i.style.background = '#e2efeb'
	}
}

function defaultColorSet() {
	let allElement = document.querySelector('.mainBody')
	for (let ele of allElement.children) {
		if (ele.className !== 'cartButton') {
			ele.style.background = '#fff'
		}
	}
}

function myFunction(className) {
	var checkBox = document.getElementsByClassName('radio-button')
	var text = document.getElementById('text')
	let check = 0
	for (let ele of checkBox) {
		if (ele.parentNode.classList[0] === className) {
			ele.checked = true
			check += 1
		}
	}

	if (check === 0) {
		for (let ele of checkBox) {
			if (ele.parentNode.classList[0] === 'item-info') {
				ele.checked = true
			}
		}
	}
}
