import User from '../models/user'
import { Strategy as JwtStrategy } from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'

export default (passport) => {
    const opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader()
    opts.secretOrKey = process.env.SECRET

    const strategy = new JwtStrategy(opts, (jwt_payload, done) => {
            User.findOne({ _id: jwt_payload.id }, (err, user) => {
                if (err) {
                    return done(err, false)
                }

                if (user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            })
        })

     passport.use(strategy)   
}