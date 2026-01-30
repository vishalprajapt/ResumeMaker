import React from 'react'
import Progressbar from '@/component/ProgressBar/Progressbar'
import { useState } from 'react';
import Header from '@/component/Header/Header';
import FormOne from '@/component/Form/Form1';
import { useRouter } from 'next/router';
import FormTwo from '@/component/Form/From2';
import FormThree from '@/component/Form/Form3';
import Form4 from '@/component/Form/Form4';
import { FaSearch } from 'react-icons/fa';
import Form5 from '@/component/Form/Form5';

function UserID() {
    const [step, setStep] = useState(1);
    const [form1, setshowform1] = useState(true)
    const [form2, setshowform2] = useState(false)
    const [form3, setshowform3] = useState(false)
    const [Formfore, setFormFore]=useState(false)
    const [FormFive, setFormFive]=useState(false)
    const router = useRouter();
    const { UserID } = router.query

    if (!router.isReady) {
        return;
    }

    const onComplete = () => {
        if (step < 6) {
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
            if(numbers ==4){
                setshowform3(false)
                setFormFive(true)
            }
            if(numbers==5){
                setFormFive(false)
                 setFormFore(true)
            }
     

        }

   console.log("called",step)
    };



     const RenderResume=()=>{
    switch(UserID){
      case "1":
        return  true;
        case "2":
          return true
          case "3":
            return true
            case "4":
              return true
              case "5":
                return true
                case "6":
                  return true
                  default:
                    return false
    }
}

    return (
        <>  
           {RenderResume() ?
           (
            <>
            <Header />
            <Progressbar currentStep={Math.min(step, 6)} />
            {form1 && <FormOne onComplete={onComplete} />}
            {form2 && <FormTwo onComplete={onComplete} />}
            {form3 && <FormThree onComplete={onComplete} />}
            {FormFive && <Form5 onComplete={onComplete} />}
             {Formfore && <Form4 onComplete={onComplete} UserId={UserID} />}
            </>
           )   
           :(
           <h2>not resume found</h2>
           )
        
        }



        </>


    );
}

export default UserID