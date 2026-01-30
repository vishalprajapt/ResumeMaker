import React from 'react'
import Progressbar from '@/component/ProgressBar/Progressbar'
import { useState } from 'react';
import Header from '@/component/Header/Header';
import FormOne from '@/component/Form/Form1';
import { useRouter } from 'next/router';
import FormTwo from '@/component/Form/From2';
import FormThree from '@/component/Form/Form3';

function UserID() {
    const [step, setStep] = useState(1);
    const [form1, setshowform1] = useState(true)
    const [form2, setshowform2] = useState(false)
    const [form3, setshowform3] = useState(false)
    const router = useRouter();
    const { UserID } = router.query

    if (!router.isReady) {
        return;
    }

    const onComplete = () => {
        if (step < 4) {
            const numbers = step + 1
            setStep(numbers);
            if (numbers == 2) {
                setshowform2(true)
                setshowform1(false)
            }
            if (numbers == 3) {
                setshowform3(true)
                setshowform2(false)
            }


        }


    };

    return (
        <>
            <Header />
            <Progressbar currentStep={Math.min(step, 3)} />
            {form1 && <FormOne onComplete={onComplete} />}
            {form2 && <FormTwo onComplete={onComplete} />}
            {form3 && <FormThree onComplete={onComplete} UserId={UserID} />}



        </>


    );
}

export default UserID