import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { subscribeToEvent } from '../functions/subscribe-to-event'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  // Define a POST route for '/subscriptions' with request and response validation
  app.post(
    '/subscriptions',
    {
      schema: {
        summary: 'Subscribes the user to the event',
        tags: ['subscription'],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },
    async (request, response) => {
      const { name, email } = request.body

      const { subscriberId } = await subscribeToEvent({
        name,
        email,
      })

      // Send a 201 (created) response with the provided name and email
      return response.status(201).send({
        subscriberId,
      })
    }
  )
}
