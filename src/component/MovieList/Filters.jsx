// import React from 'react'
const Filters = ({onRatingsClick, minRating, ratings}) => {
  return (
    <ul className='flex gap-3'>
            {ratings.map((rate) => (
                <li
                    className={
                        minRating == { rate }
                            ? "font-bold underline"
                            : "cursor-pointer"
                    }
                    key={rate}
                    onClick={() => {}}>
                    {rate}+ Star
                </li>
            ))}
        </ul>
  )
}

export default Filters