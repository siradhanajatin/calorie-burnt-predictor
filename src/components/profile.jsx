import React from 'react'

const profile = () => {
  return (
    <>
        <div className='flex gap-5'>
            <div className='bg-amber-900 p-10 mt-20 m-20 rounded-3xl'>
                <img className='w-30 h-30' src="" alt="web dev ki photo" />
                <h2 className='text-3xl'>Jatin Siradhana</h2>
                <p>Software Engineer</p>
                <div className='bg-blue-500 mt-20'>
                    <div className='flex gap-2'>
                        <img className='w-7 h-7' src="src\assets\linkedin.png" alt="" />
                        <a href="https://www.linkedin.com/in/jatin-siradhana-856647238/">LinkedIn</a>
                    </div>
                    <div className='flex gap-2'>
                        <img className='w-10 h-10' src="src\assets\github.png" alt="" />
                        <a href="https://github.com/siradhanajatin">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default profile