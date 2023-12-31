"use client"

import { ShowMoreProps } from '@/types'
import React from 'react'
import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton'
import { UpdateSearchParams } from '@/utils'

function ShowMore({pageNumber, isNext}: ShowMoreProps) {
const router = useRouter()
function handleNavigation() {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = UpdateSearchParams("limit", `${newLimit}`);
    router.push(newPathName)
}
  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <CustomButton 
            title='Show More'
            btnType='button'
            containerStyles='bg-primary-blue rounded-full text-white'
            handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore