import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";
import { generateEmbeddings, transcribeAudio } from "../../services/gemini.ts";

export const uploadAudioController: FastifyPluginAsyncZod = async (app) => {
	app.post(
		"/rooms/:roomId/audio",
		{
			schema: {
				params: z.object({
					roomId: z.string(),
				}),
				response: {
					201: z.object({
						id: z.string().uuid(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { roomId } = request.params;
			const audio = await request.file();

			if (!audio) {
				throw new Error("No audio file provided.");
			}

			const audioBuffer = await audio.toBuffer();

			const audioAsBase64 = audioBuffer.toString("base64");

			const transcription = await transcribeAudio(
				audioAsBase64,
				audio.mimetype,
			);
			const embeddings = await generateEmbeddings(transcription);

			const result = await db
				.insert(schema.audioChunks)
				.values({
					roomId,
					transcription,
					embeddings,
				})
				.returning();

			const audioChunks = result[0];

			if (!audioChunks) {
				throw new Error("Audio chunk not created.");
			}

			return reply.status(201).send({
				id: audioChunks.id,
			});
		},
	);
};