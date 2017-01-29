import { Router } from 'express'
import Todo from '../models/todo';

const router = Router()

router.route('/')
	.get((req, res) => {
		Todo.find((err, todos) => {
			if (err) {
				return res.send(err)
			}
			res.json(todos)
		})	
	})
	.post((req, res) => {
		const todo = new Todo(req.body)

		todo.save((err) => {
			if (err) {
				return res.send(err)
			}

			res.send({ message: 'Todo added!'})
		})
	})

router.route('/:id')
	.get((req, res) => {
		Todo.findOne({ id: req.params.id }, (err, todo) => {
			if (err) {
				return res.send(err)
			}

			res.json(todo)
		})
	})
	.put((req, res) => {
		Todo.findOne({ id: req.params.id }, (err, todo) => {
			if (err) {
				return res.send(err)
			}

			for (const prop in req.body) {
				todo[prop] = req.body[prop]
			}

			todo.save((err) => {
				if (err) {
					return res.send(err)
				}
			})

			res.json({ message: 'Todo updated!' })
		})
	})
	.delete((req, res) => {
		Todo.remove({ id: req.params.id }, (err, todo) => {
			if (err) {
				return res.send(err)
			}

			res.json({ message: 'Todo successfully deleted!' })
		})
	})

export default router