const { db, Campus, Student } = require('./index')

db.sync({force: true})
.then(() => {
	return Student.bulkCreate([
	{ firstName: 'Paul', lastName: 'Cantillon', email: 'paul_cantillon@gmail.com', gpa: 4.0},
	{ firstName: 'Marie', lastName: 'Troch', email: 'marie_troch@gmail.com', gpa: 3.8},
	{ firstName: 'Jeff', lastName: 'Stuffings', email: 'jeff_stuffings@gmail.com', gpa: 3.9},
	{ firstName: 'Michael', lastName: 'Steffing', email: 'michael_steffing@gmail.com', gpa: 3.6},
	{ firstName: 'Trevor', lastName: 'Rogers', email: 'trevor_rogers@gmail.com', gpa: 3.8},
	{ firstName: 'Linsey', lastName: 'Hamacher', email: 'linsey_hamacher@gmail.com', gpa: 3.7},
	{ firstName: 'Adair', lastName: 'Paterno', email: 'adair_paterno@gmail.com', gpa: 3.9},
	{ firstName: 'Tim', lastName: 'Clifford', email: 'tim_clifford@gmail.com', gpa: 3.6},
	{ firstName: 'Cory', lastName: 'King', email: 'cory_king@gmail.com', gpa: 3.9},
	{ firstName: 'Brian', lastName: 'Ivers', email: 'brian_ivers@gmail.com', gpa: 3.8},
	{ firstName: 'Tommy', lastName: 'Manning', email: 'tommy_manning@gmail.com', gpa: 3.5}
	])
})
.then(() => {
	return Campus.create({
		name: 'Cantillon',
		imgUrl: 'https://cmgajcfoodandmore.files.wordpress.com/2017/08/cantillon-classic-gueuze.jpg?w=640&h=854',
		description: 'Brasserie-Brouwerij Cantillon (or Cantillon Brewery) is a small Belgian traditional family brewery based in Anderlecht,Brussels and founded in 1900. They exclusively brew lambic beers. The brewery was founded in 1900 by Paul Cantillon, whose father was a brewer as well, and his wife, Marie Troch. As of 2011, the owner is Jean-Pierre van Roy, fourth-generation brewer at Cantillon. Since its foundation the only major change has been a shift to organic ingredients in 1999.Cantillon was one of more than one hundred operating breweries in Brussels at its foundation, and was the only one to remain operational through the 2000s. In 2014, van Roy announced that the brewery would be acquiring more maturation space, effectively doubling production by 2016-17.'
	}).then(campus => {
		return 	Student.findAll({
					where: {
						$or: [{lastName: 'Cantillon'}, {lastName: 'Troch'}]
					}
				}).then((studentsArr) => {
					return campus.setStudents(studentsArr)
				})
	})
})
.then(() => {
	return Campus.create({
		name: 'Jester King Brewery',
		imgUrl: 'https://thefullpint.com/wp-content/uploads/2017/05/Jester-King-Logo-2017.jpg',
		description: 'Jester King is a craft brewery in Austin, Texas that specializes in beer fermented with wild yeast. It is set on a 200-acre ranch about 18 miles west of Downtown Austin. Jester King was founded in 2010 by Jeff Stuffings and Michael Steffing. Joshua Cockrell was hired to create beer labels, which have won awards at the World Beer Championships packaging competition.'
	}).then(campus => {
		return 	Student.findAll({
					where: {
						$or: [{lastName: 'Stuffings'}, {lastName: 'Steffing'}]
					}
				}).then((studentsArr) => {
					return campus.setStudents(studentsArr)
				})
	})
})
.then(() => {
	return Campus.create({
		name: 'De Garde Brewing',
		imgUrl: 'http://4.bp.blogspot.com/-rDCsYkXAnbk/UT0N8CInlpI/AAAAAAAASgU/bAVM8yU-8FI/s640/De+Garde+Brewing+logo.jpg',
		description: 'de Garde Brewing is a brewery based in Tillamook, Oregon. It is one of very few breweries in the United States to use all spontaneous fermentation, in which beer in a coolship takes in wild yeasts from the air; the beer is then aged, sometimes with fruit added, in foeders. In 2016, they won the fifth best brewery in the world award from RateBeer, and were named the best brewer in Oregon. The brewery was started by a husband and wife, Trevor Rogers and Linsey (Hamacher) Rogers. Trevor had been working as an Assistant Manager at Pacific City\'s Pelican Brewing, and Linsey worked for the Tilllamook Cheese Factory. They started the brewery out of their garage in Tillamook, and sought to brew using wild yeasts from the coastal air. Trevor tried placing wort samples along the Oregon Coast to determine the best location for spontaneous fermentation; Tillamook won out. As demand grew, they moved production facilities to several different places within Tillamook. Their production facility is currently located at 6000 Blimp Boulevard in Tillamook, with a tasting room planned for downtown Tillamook.'
	}).then(campus => {
		return 	Student.findAll({
					where: {
						$or: [{lastName: 'Rogers'}, {lastName: 'Hamacher'}]
					}
				}).then((studentsArr) => {
					return campus.setStudents(studentsArr)
				})
	})
})
.then(() => {
	return Campus.create({
		name: 'Sante Adairius Rustic Ales',
		imgUrl: 'https://beerservedrare.files.wordpress.com/2013/08/sante-adairius-rustic-ales.png',
		description: 'Snug brewery featuring old-world-style ales with a twist & a comfy tasting room with a relaxed vibe.'
	}).then(campus => {
		return 	Student.findAll({
					where: {
						$or: [{lastName: 'Paterno'}, {lastName: 'Clifford'}]
					}
				}).then((studentsArr) => {
					return campus.setStudents(studentsArr)
				})
	})
})
.then(() => {
	return Campus.create({
		name: 'Side Project Brewing',
		imgUrl: 'https://thefullpint.com/wp-content/uploads/2013/08/Side-Project.jpg',
		description: 'A 100% barrel-aged, mostly barrel-fermented project. Passion and experimentation drive the creation of rustic Saisons, Wild Ales and spirits barrel-aged ales.'
	}).then(campus => {
		return 	Student.findAll({
					where: {
						$or: [{lastName: 'King'}, {lastName: 'Ivers'}, {lastName: 'Manning'}]
					}
				}).then((studentsArr) => {
					return campus.setStudents(studentsArr)
				})
	})
})
.then(() => {
	db.close()
})
.catch(err => {
    console.error('Uh oh, something does not compute!')
    console.error(err.message)
    console.error(err.stack)
    db.close()
})
