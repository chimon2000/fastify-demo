import * as fastify from 'fastify'

const server = fastify()

server.get('/', async (request, reply) => {
    return 'Hello from fastify'
})
const start = async () => {
    try {
        await server.listen(5000, '0.0.0.0')
        console.log('Server running at:', 5000)
    } catch (err) {
        console.log(err)
        server.log.error(err)
        process.exit(1)
    }
}

start()
