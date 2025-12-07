import { FC } from 'preact/compat';

import { useFetch } from '@/hooks/use-fetch';
import { locale } from '@/signals/locale';
import { isFormValid, validateAllFields } from '@/utils/form-validator';
import { LoaderCircle } from 'lucide-preact';
import { useReducer } from 'preact/hooks';
import { JSX } from 'preact/jsx-runtime';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import Input from './input';
import InputError from './input-error';
import Label from './label';
import TextArea from './text-area';

export interface EmailFormState {
    name: string;
    email: string;
    telegram: string;
    whatsapp: string;
    message: string;
}

type Action =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_TELEGRAM'; payload: string }
    | { type: 'SET_WHATSAPP'; payload: string }
    | { type: 'SET_MESSAGE'; payload: string };

const initialState: EmailFormState = {
    name: '',
    email: '',
    telegram: '',
    whatsapp: '',
    message: '',
};

function reducer(state: EmailFormState, action: Action): EmailFormState {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_TELEGRAM':
            return { ...state, telegram: action.payload };
        case 'SET_WHATSAPP':
            return { ...state, whatsapp: action.payload };
        case 'SET_MESSAGE':
            return { ...state, message: action.payload };
        default:
            throw new Error('Unexpected action type');
    }
}

const EmailForm: FC<{ className?: string }> = ({ className }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const lang = locale.value === 'ru' ? 'ru' : 'en';
    const { fetchData, loading, errors, setErrors, clearErrors } = useFetch();

    async function submit(e: JSX.TargetedEvent<HTMLFormElement, Event>) {
        e.preventDefault();

        if (!isFormValid(state, lang)) {
            const fieldErrors = validateAllFields(state, lang);
            const errors: Record<string, string[]> = {};

            Object.entries(fieldErrors).forEach(([field, error]) => {
                if (error) errors[field] = [error];
            });

            setErrors(errors);
            return;
        }

        clearErrors();

        await fetchData({
            url: '/email',
            method: 'POST',
            payload: state,
            onSuccess: (data) => {
                toast.success(data.message);
            },
            onError: () => {
                toast.error(errors?.general?.[0] || 'An error occured while sending an email, please try again later');
            },
        });
    }

    return (
        <form class="w-full max-w-220" onSubmit={submit}>
            <div class="grid items-start gap-11 lg:grid-cols-2">
                <div class="group grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        id="name"
                        autoComplete="name"
                        value={state.name}
                        onInput={(e) =>
                            dispatch({
                                type: 'SET_NAME',
                                payload: (e.target as HTMLInputElement).value,
                            })
                        }
                        placeholder="John Doe"
                    />
                    <InputError message={errors?.name?.[0] || ''} />
                </div>

                <div class="group grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={state.email}
                        onInput={(e) =>
                            dispatch({
                                type: 'SET_EMAIL',
                                payload: (e.target as HTMLInputElement).value,
                            })
                        }
                        placeholder="example@gmail.com"
                    />
                    <InputError message={errors?.email?.[0] || ''} />
                </div>

                <div class="group grid gap-2">
                    <Label htmlFor="telegram">Telegram</Label>
                    <Input
                        id="telegram"
                        autoComplete="telegram"
                        value={state.telegram}
                        onInput={(e) =>
                            dispatch({
                                type: 'SET_TELEGRAM',
                                payload: (e.target as HTMLInputElement).value,
                            })
                        }
                        placeholder="@InterestedUser1456"
                    />
                    <InputError message={errors?.telegram?.[0] || ''} />
                </div>

                <div class="group grid gap-2">
                    <Label htmlFor="whatsapp">Whatsapp</Label>
                    <Input
                        id="whatsapp"
                        autoComplete="whatsapp"
                        value={state.whatsapp}
                        onInput={(e) =>
                            dispatch({
                                type: 'SET_WHATSAPP',
                                payload: (e.target as HTMLInputElement).value,
                            })
                        }
                        placeholder="+1 223 223 22 33"
                    />
                    <InputError message={errors?.whatsapp?.[0] || ''} />
                </div>
            </div>

            <div class="group mt-11 grid gap-2">
                <Label htmlFor="message">Message</Label>
                <TextArea
                    id="message"
                    autoComplete="message"
                    value={state.message}
                    onInput={(e) =>
                        dispatch({
                            type: 'SET_MESSAGE',
                            payload: (e.target as HTMLInputElement).value,
                        })
                    }
                    placeholder="Help me build a cool and interesting website that will make me happy every day!"
                />
                <InputError message={errors?.message?.[0] || ''} />
            </div>

            <Button
                type="submit"
                class="mx-auto mt-12 lg:mr-0"
                variant="primary"
                disabled={loading}
            >
                {loading && <LoaderCircle class="h-4 w-4 animate-spin" />}
                Submit
            </Button>
        </form>
    );
};

export default EmailForm;
