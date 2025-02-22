import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from './env'
import { subscribeToEventRoute } from './routes/subscribe-to-event-route'

// Initialize Fastify app with Zod type provider
const app = fastify().withTypeProvider<ZodTypeProvider>()

// Set up custom validator and serializer compilers using Zod
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

// Enable CORS for request from the specified origin
app.register(fastifyCors, {
  origin: 'http://localhost:3000',
})

// Configure Swagger for API documentation
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Dev Stage',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(subscribeToEventRoute)

// Start the server on port 3333 and log a confirmation message
app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP server running')
})
