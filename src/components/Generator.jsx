import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'

import {WORKOUTS,SCHEMES} from "../utils/swoldier"

function Header(props){
    const {index,title,description} = props
    return(
        <div className='flex flex-col gap-4 mb-5'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator() {

    const[showModal, setShowModal] = useState(false)
    const [poison,setPoison] = useState('individual')
    const [muscles,setMuscles] = useState([])
    const [goals,setGoals] = useState('strenght_power')

    function toggleModal(){
        setShowModal(!showModal)
    }
  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s','Huge','o\'clock']}>
        <Header index={'01'} title={'Pick your Poison'} description={'Select the workout'}/>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10'>
        {Object.keys(WORKOUTS).map((type, typeIndex) =>{
            return (
                <button onClick={()=> setPoison(type)} className='bg-slate-950 border-2 border-blue-400 py-4 rounded-lg duration-200 hover:border-blue-600'key={typeIndex}>
                    <p className='capitalize'>{type.replaceAll('_'," ")}</p>
                </button>
            )
        })}
        </div>

        <Header index={'02'} title={'Lock On Targets'} description={'Select the muscles judged for annihilation'}/>
        <div className='bg-slate-950 py-3 border-2 border-solid border-blue-400 rounded-lg flex flex-col mb-10'>
            <button  onClick={toggleModal} className={'p-2 relative flex items-center justify-center'}>
                <p>Select muscle group</p>
                <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
            </button>
            {showModal && (
                <div>modal</div>
            )}
        </div>

        <Header index={'03'} title={'Become Juggernaut'} description={'Select your objective'}/>
        <div className='grid grid-cols-3 gap-4 mb-10'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) =>{
            return (
                <button onClick={()=> setGoals(scheme)} className='bg-slate-950 border-2 border-blue-400 py-4 rounded-lg duration-200 hover:border-blue-600'key={schemeIndex}>
                    <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
                </button>
            )
        })}
        </div>
    </SectionWrapper>
  )
}
