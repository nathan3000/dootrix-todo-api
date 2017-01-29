import { version } from '../../package.json'
import { Router } from 'express'
import applyJwtPassportStrategy from '../config/passport'
import todos from './todos'
import users from './users'
import auth from './auth'

export default ({ config, db, passport }) => {
	applyJwtPassportStrategy(passport)
	
	let api = Router()

	api.use('/auth', auth)

	api.use('/todos', passport.authenticate('jwt', { session: false } ), todos)

	api.use('/users', passport.authenticate('jwt', { session: false } ), users)
	
	api.get('/', (req, res) => {
		res.json({ version })
	});

	return api;
}
