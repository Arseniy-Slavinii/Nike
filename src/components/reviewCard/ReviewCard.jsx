import React from 'react';
import { star } from '../../assets/icons';

const ReviewCard = ({imgURL , customerName , rating , feedback}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={imgURL} alt={customerName} className='rounded-full object-cover w-[120px] h-[120px]'/>
      <p className='max-w-sm mt-6 text-center info-text'>{feedback}</p>
      <div className='flex items-center justify-center gap-2 mt-3'>
        <img src={star} alt="star rating"
        width={24} height={24} 
        className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
      </div>
      <h3 className='mt-1 text-3xl font-bold text-center font-palanquin'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
