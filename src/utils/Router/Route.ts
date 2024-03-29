import Block from '../Block/Block';
import renderPage from '../render/renderPage';
import { ObjectLiteral } from '../types/dataTypes';

class Route {
    _pathname: string;

    _blockClass: any;

    _block: null | Block;

    _props: ObjectLiteral;

    constructor(pathname: string, view: any, props: ObjectLiteral) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this.render();
        }
    }

    leave() {
        if (!this._block) {
            return;
        }
        this._block.hide();
    }

    match(pathname: string) {
        return pathname === this._pathname;
    }

    render() {
        if (!this._block) {
            this._block = this._blockClass;
            renderPage(this._block, this._props.rootQuery);
        } else {
            this._block.show();
        }
    }
}

export default Route;
