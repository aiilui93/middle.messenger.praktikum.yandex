import Block from '../../utils/Block/Block';
import template from './profileForm';
import Input from '../input';
import '../../styles/form.scss';
import { ImageProps, Password, SignupData } from '../../utils/types/dataTypes';
import withStore from '../../utils/hocs/withStore';
import UserController from '../../controllers/UserController';
import isEqual from '../../utils/helpers/isEqual';

class ProfileFormBase extends Block<Record<string, any>> {
    constructor(props: Record<string, any>) {
        super('div', 'app', props);
    }

    sendFile(formName: string) {
        const name: any = formName;
        const formData: FormData = new FormData(document.forms[name] as HTMLFormElement);
        UserController.changeUserAvatar(formData);

        this.children.avatar.setProps({
            src: this.props.storeData.avatar,
        });

        return this.props;
    }

    sendData(formName: string) {
        const values: Record<string, string> = {};
        const name: any = formName as string;
        const formData: any = new FormData(document.forms[name] as HTMLFormElement);

        /* eslint-disable-next-line */
        for (let input of formData.entries() ) {
            values[input[0]] = input[1];
        }

        // выводим данные формы в консоль
        const data = values as unknown;

        switch (name) {
        case 'profileForm':
            UserController.changeUserData(data as SignupData);
            break;
        case 'passForm':
            UserController.changeUserPassword(data as Password);
            break;
        default:
            break;
        }
    }

    submitForm(inputs: Record<string, object>, formName: string) {
        let isValid = true;
        Object.values(inputs).forEach((item: any) => {
            if (item instanceof Input) {
                if (isValid) {
                    if (!item.validate()) {
                        isValid = false;
                    }
                }
            }
        });

        if (isValid) {
            this.sendData(formName);
        }

        return isValid;
    }

    public componentDidUpdate(oldProps: Record<string, any>, newProps: Record<string, any>): boolean {
        const avatar: Block<ImageProps> = this.children.avatar;
        if (avatar) {
            this.setAvatar(avatar);
        }

        return isEqual(oldProps, newProps);
    }

    protected setAvatar(avatar: Block<ImageProps>) {
        try {
            avatar.setProps({
                src: this.props.storeData.avatar,
                title: this.props.storeData.display_name,
                user_id: this.props.storeData.id,
            });
        } catch (error) {
            console.log(`Avatar was not received from Store. Value:  ${this.props.storeData.avatar}`);
        }
    }

    render() {
        return this.compile(template, this.props);
    }
}

const withUser = withStore((state) => ({ storeData: { ...state.user }.data }));
const ProfileForm = withUser(ProfileFormBase);

export default ProfileForm;
