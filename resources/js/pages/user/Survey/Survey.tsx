import { Signal, useSignal } from '@preact/signals';
import '../../../../scss/app.scss';
import css from './Survey.module.scss';

import Banner from '@/components/shared/ui/Banner/Banner';
import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import Step1 from './partials/Step1/Step1';
import Step2 from './partials/Step2/Step2';
import Step3 from './partials/Step3/Step3';
import Step4 from './partials/Step4/Step4';
import Step5 from './partials/Step5/Step5';

export type AnswerType = Record<string, string>;

export type StepProps = {
    answers: Signal<AnswerType[]>;
    popState: () => void;
    pushState: (payload: AnswerType) => void;
    poped: Signal<AnswerType | undefined>;
};

const Survey = () => {
    const surveyAnswers = useSignal<AnswerType[]>([]);
    const currentStep = surveyAnswers.value.length + 1;
    const lastResult = useSignal<AnswerType | undefined>(undefined);

    const Step = renderStep(currentStep);

    const popState = () => {
        if (surveyAnswers.value.length > 0) {
            lastResult.value = surveyAnswers.value.at(-1);
        }
        surveyAnswers.value = surveyAnswers.value.slice(0, -1);
    };

    const pushState = (payload: AnswerType) => {
        lastResult.value = undefined;

        surveyAnswers.value = [
            ...surveyAnswers.value,
            { ...payload },
        ];
    };

    return (
        <div className={css.root}>
            <FormLayout
                heading="Опрос"
                className={css.wrapper}
            >
                <Banner className={css.banner}>
                    <span>
                        Пройдите опрос для получения бесплатного индивидуального
                        разбора от автора Лаванды
                    </span>
                </Banner>

                <header className={css.header}>Шаг {currentStep} из 5:</header>
                <Step
                    poped={lastResult}
                    pushState={pushState}
                    popState={popState}
                    key={`step-${currentStep}`}
                    answers={surveyAnswers}
                />
            </FormLayout>
        </div>
    );
};

function renderStep(step: number) {
    switch (step) {
        case 2:
            return Step2;
        case 3:
            return Step3;
        case 4:
            return Step4;
        case 5:
            return Step5;
        default:
            return Step1;
    }
}

export default Survey;
