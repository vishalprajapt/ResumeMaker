import React from 'react'
import ResumeTemplateOne from '@/component/Resume/ResumeTemplete/Resume1Templete'
import ResumeTemplate2 from '@/component/Resume/ResumeTemplete/Resume2Templete'
import ResumeTemplate3 from '@/component/Resume/ResumeTemplete/Resume3Templete'
import Resume4Template from '@/component/Resume/ResumeTemplete/Resume4Templete'
import Resume5Template from '@/component/Resume/ResumeTemplete/Resume5Templete'
import Resume6Template from '@/component/Resume/ResumeTemplete/Resume6Templete'
import { useRouter } from 'next/router'

function ResumeId() {
  const router=useRouter()
  const {ResumeId}=router.query;
  
  if(!router.isReady){
    return; 
  }

  const RenderResume=()=>{
    switch(ResumeId){
      case "1":
        return  <ResumeTemplate2/>;
        case "2":
          return  <ResumeTemplateOne/>
          case "3":
            return <ResumeTemplate3/>
            case "4":
              return <Resume4Template/>
              case "5":
                return <Resume5Template/>
                case "6":
                  return <Resume6Template/>
                  default:
                    return <h2>not define resume</h2>
    }
  }


  return (
    <div>
      {RenderResume()}
    </div>
  )
}

export default ResumeId