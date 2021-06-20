import { emojis } from '~/data'
import { useState } from 'react'
import Loading from '~/utils/Loading'
import { useForm } from 'react-hook-form'

export default function FeedbackForm ({ onSubmit }) {

  const [emoji, setEmoji] = useState('')
  const {
    errors,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm()

  return (
    <form onSubmit={ handleSubmit(onSubmit) } className="space-y-3">
      <div className="px-4">
        <input 
          type="text"
          name="name" 
          autoFocus
          disabled={ isSubmitting }
          placeholder="Name"
          ref={register({
            required: 'Your name is required'
          })}
          className="w-full text-sm rounded-lg border border-gray-400 focus:ring-0 focus:border-gray-900 bg-white dark:bg-dark-dim dark:focus:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition ease-in-out duration-150" 
        />
        { errors.name && <span className="pl-1 text-xs text-red-500 font-medium pt-0.5">{ errors.name.message }</span> }
      </div>
      <div className="px-4 flex flex-col space-y-1">
        <textarea 
          name="message"
          rows={4} cols={50}
          disabled={ isSubmitting }
          placeholder="Your feedback..."
          ref={register({
            required: 'Your feedback is required'
          })}
          className="w-full text-sm rounded-lg border border-gray-400 focus:ring-0 focus:border-gray-900 bg-white dark:bg-dark-dim dark:focus:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition ease-in-out duration-150">
        </textarea>
        { errors.message && <span className="pl-1 text-xs text-red-500 font-medium pt-0.5">{ errors.message.message }</span> }
      </div>
      <div className="flex items-center justify-between px-3 border-t border-gray-200 dark:border-gray-700 py-1.5 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center space-x-2">
          {emojis.map(({ icon, text }, i) => (
            <div 
              key={i}
              onClick={() => setEmoji(text)}
              className={ `${emoji === text ? 'border-yellow-300' : 'dark:border-gray-700'} cursor-pointer rounded-full border p-1 bg-white dark:bg-gray-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition ease-in-out duration-150 transform hover:scale-110` }
            >
              <input 
                type="text" 
                name="emoji"
                value={emoji} 
                onChange={(e) => setEmoji(e.target.value)} 
                className="hidden w-5 h-5"
                ref={register()}
              />
              <img className="w-5 h-5" src={icon} alt="Icon" />
            </div>
          ))}
        </div>
        <button  
          type="submit" 
          disabled={ isSubmitting }
          className={ `text-sm px-2 w-14 flex justify-center py-1 rounded-md border border-transparent bg-black dark:bg-white text-white transition ease-in-out duration-200 focus:outline-none font-medium disabled:opacity-50 disabled:cursor-not-allowed ${ !isSubmitting ? 'dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white hover:border-black dark:hover:border-gray-400' : 'dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-white'}` }>
          { isSubmitting ? <Loading className="w-5 h-5 text-white dark:text-black" /> : 'Send' }
        </button>
      </div>
    </form>
  )
}