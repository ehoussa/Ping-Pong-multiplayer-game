import { AppService } from './app.service';
export declare class AppController {
    private readonly myapp;
    constructor(myapp: AppService);
    getHello(): string;
}
