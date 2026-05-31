import { useSignal } from '@preact/signals';
import '../../../../scss/app.scss';
import css from './Survey.module.scss';

import Banner from '@/components/shared/ui/Banner/Banner';
import FormLayout from '@/layouts/user/FormLayout/FormLayout';
import Step1 from './partials/Step1/Step1';
import Step2 from './partials/Step2/Step2';

export type AnswerType = Record<string, string>;

const Survey = () => {
    const surveyAnswers = useSignal<AnswerType[]>([]);
    const currentStep = surveyAnswers.value.length + 1;

    const Step = renderStep(currentStep);

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

                <header className={css.header}>Шаг {currentStep} из 4:</header>
                <Step
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
        default:
            return Step1;
    }
}

export default Survey;
