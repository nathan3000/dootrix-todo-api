import { Router } from 'express'
import User from '../models/user'
import jwt from 'jsonwebtoken'

const router = Router()

router.route('/')
    .post((req, res) => {
        User.findOne({ name: req.body.name }, (err, user) => {
            if (err) {
				return res.send(err)
			}

            if(!user) {
                console.log('Authentication failed. User not found.')
                res.status(401).json({ success: false, message: 'Authentication failed.' })
            } else {
                user.comparePassword(req.body.password, (err, isMatch) => {
                    if (err) {
                        return res.send(err)
                    }

                    if (!isMatch) {
                        console.log('Authentication failed. Wrong password.')
                        res.status(401).json({ success: false, message: 'Authentication failed.' })
                    } else {
                        const payload = { id: user.id }
                        console.log(payload)
                        const token = jwt.sign(payload, process.env.SECRET)

                        res.json({
                            success: true,
                            token: 'JWT ' + token
                        })
                    }
                })
            }
        })
	})


export default router