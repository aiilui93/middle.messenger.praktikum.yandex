import { Routes } from '../types/dataTypes';
import Route from './Route';

class Router {
    private static __instance: Router;

    private routes: Route[] = [];

    private currentRoute: Route | null = null;

    private history = window.history;

    constructor(private readonly rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.routes = [];
        Router.__instance = this;
    }

    public use(pathname: string, block: any) {
        const route = new Route(pathname, block, { rootQuery: this.rootQuery });
        this.routes.push(route);
        return this;
    }

    public start() {
        window.onpopstate = (event: PopStateEvent) => {
            const target = event.currentTarget as Window;
            this._onRoute(target.location.pathname);
        };
        this._onRoute(window.location.pathname);
    }

    public reset() {
        this.routes = [];
        this.currentRoute = null;
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (!route) {
            this.go(Routes.Error404);
            return;
        }

        if (this.currentRoute && this.currentRoute !== route) {
            this.currentRoute.leave();
        }

        this.currentRoute = route;
        route.render();
    }

    public go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    public back() {
        this.history.back();
    }

    public forward() {
        this.history.forward();
    }

    private getRoute(pathname: string) {
        return this.routes.find((route) => route.match(pathname));
    }
}

export default new Router('#app');
