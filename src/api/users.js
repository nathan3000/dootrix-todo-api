import { Router } from 'express'
import User from '../models/user';

const router = Router()

router.route('/')
    .get((req, res) => {
		User.find((err, users) => {
			if (err) {
				return res.send(err)
			}

			res.json(users)
		})	
	})

router.route('/register')
	.post((req, res) => {
		const user = new User(req.body)

		user.save((err) => {
			if (err) {
				return res.send(err)
			}

			res.send({ success: true })
		})
	})

export default router