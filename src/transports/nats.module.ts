import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {  NATS_SERVICE } from 'src/config';
import { envs } from 'src/config/envs';

const natsModule =  ClientsModule.register([
        { 
        name: NATS_SERVICE, 
        transport: Transport.NATS,
        options:{
            servers: envs.natsServers
        } 
        },
    ]);
@Module({
    imports:[
        natsModule
    ],
    exports: [
        natsModule
    ]
})
export class NatsModule {
    
}
