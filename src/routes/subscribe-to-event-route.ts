import { z } from 'zod'
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
   // Define a POST route for '/subscriptions' with request and response validation
   app.post('/subscriptions', {
      schema: {
         summary: 'Subscribes the user to the event',
         tags: ['subscription'],
         body: z.object({
            name: z.string(),
            email: z.string().email()
         }),
         response: {
            201: z.object({
               name: z.string(),
               email: z.string()
            })
         }
      }
   }, async (request, response) => {
      const { name, email } = request.body

      // Send a 201 (created) response with the provided name and email
      return response.status(201).send({
         name,
         email
      })
   })
}