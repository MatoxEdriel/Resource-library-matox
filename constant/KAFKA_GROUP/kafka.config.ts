
import { KafkaOptions, Transport } from '@nestjs/microservices';

export function buildKafkaMicroserviceOptions(
    clientId: string,
    groupId: string,
): KafkaOptions {
    const brokers =
        (process.env.KAFKA_BROKERS?.split(',') ?? ['localhost:9092']);

    return {
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId,
                brokers,
            },
            consumer: {
                groupId,
            },
        },
    };
}