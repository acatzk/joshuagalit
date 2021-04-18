import { useForm } from 'react-hook-form'

export default function ProjectTab ({ ...projects }) {
  const { demo_url, source_code_url } = projects[0]

  const { 
    register, 
    handleSubmit, 
    formState: { isSubmitting, isDirty, isValid }
  } = useForm({ mode: "onChange" })

  const onSubmit = ({ name, comment }) => {
    alert(JSON.stringify({ name, comment }))
  }

  return (
    <div className="flex">
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div>
            <ul className="flex items-center text-sm">
              <li className="border-b-2 border-transparent border-blue-twitter px-3">
                <button className="flex items-center  space-x-2 focus:outline-none pb-2 font-semibold text-blue-twitter">
                  <MessageIcon />
                  <span>Comments</span>
                </button>
              </li>
              {source_code_url && (
                <li className="border-b-2 border-transparent hover:border-gray-300 dark:hover:border-white transition ease-in duration-150 px-3">
                  <a href={source_code_url} target="_blank" className="flex items-center space-x-2 pb-2 text-gray-600 dark:text-gray-400 dark:hover:text-white">
                    <span className="block">
                      <GitHubIcon />
                    </span>
                    <span className="text-sm line-clamp-1">Source Code</span>
                  </a>
                </li>
              )}
             {demo_url && (
                <li className="border-b-2 border-transparent hover:border-gray-300 dark:hover:border-white transition ease-in duration-100 px-3">
                  <a href={demo_url} target="_blank" className="flex items-center space-x-2 pb-2 text-gray-600 dark:text-gray-400 dark:hover:text-white">
                    <span className="block">
                      <ExternalLinkIcon />
                    </span>
                    <span className="text-sm line-clamp-1">Demo</span>
                  </a>
                </li>
             )}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-3 py-4 px-2">
            <div className="flex-shrink-0">
              <img className="w-10 h-10 rounded-full" src="https://i.pinimg.com/originals/f9/e4/d9/f9e4d92f175e120ac1840a29095e3646.jpg" />
            </div>
            <div className="rounded-b-xl rounded-r-xl px-4 py-4 bg-gray-100 dark:bg-gray-800 w-full transition ease-in-out duration-700">
              <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      name="name"
                      ref={register({ required: true })}
                      disabled={isSubmitting}
                      className="border-b-2 border-gray-300 dark:border-gray-700 focus:border-blue-twitter dark:focus:border-blue-twitter bg-transparent border-0 w-full py-1 focus:outline-none focus:ring-0 transition ease-in-out duration-200 disabled:cursor-not-allowed disabled:opacity-50" 
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Add a public comment..." 
                      name="comment"
                      ref={register({ required: true })}
                      disabled={isSubmitting}
                      className="border-b-2 border-gray-300 dark:border-gray-700 focus:border-blue-twitter dark:focus:border-blue-twitter bg-transparent border-0 w-full py-1 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50" 
                    />
                  </div>
                </div>
                <div className="float-right">
                  <button
                    type="submit"
                    disabled={!isDirty || !isValid}
                    className="px-4 py-2 font-medium text-sm bg-blue-twitter text-white focus:outline-none rounded disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-400 disabled:text-gray-800"
                  >
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GitHubIcon () {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
    </svg>
  )
}

function ExternalLinkIcon () {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    </svg>
  )
}

function MessageIcon () {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
    </svg>
  )
}