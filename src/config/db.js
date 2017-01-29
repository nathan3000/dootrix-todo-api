import mongoose from 'mongoose'

export default callback => {
	const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }  
	
	mongoose.connect(process.env.DATABASE_URL, options)

	const conn = mongoose.connection           
	
	conn.on('error', console.error.bind(console, 'connection error:'))
	
	conn.once('open', function() {
		callback()                        
	});
}
