document.addEventListener('DOMContentLoaded', function () {
	new TypeIt('.animated', {
		strings:
			'Olá, eu sou o <strong>Mario</strong>, <strong>desenvolvedor web fullstack</strong> e um entusiasta em <strong>design</strong>.',
		speed: 70,
		loop: false
	})
		.type('</br> Eu desenvolvo aplicações: ', { delay: 600 })
		.type('<strong>Javascript</strong>.', { delay: 600 })
		.move(-1)
		.delete(10)
		.type('<strong>NodeJS</strong>', { delay: 600 })
		.delete(6)
		.type('<strong>ReactJS</strong>', { delay: 600 })
		.delete(7)
		.type('<strong>SQL</strong>', { delay: 600 })
		.delete(3)
		.type('<strong>NextJS</strong>', { delay: 600 })
		.delete(6)
		.type('<strong>APIS RestFull</strong>', { delay: 600 })
		.move(1)
		.go()
})
