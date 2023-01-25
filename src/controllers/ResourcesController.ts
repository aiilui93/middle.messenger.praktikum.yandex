import ResoucesAPI from '../api/ResourcesAPI';
import store from '../utils/Store/Store';

class ResourcesController {
    private api = new ResoucesAPI();

    async sendFile(data: FormData) {
        try {
            await this.api.send(data);
            store.set('resources.error', undefined);
        } catch (error: any) {
            store.set('resources.error', error.message);
            console.error(error.message);
        }
    }
}

export default new ResourcesController();
