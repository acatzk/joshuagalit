import { useState } from 'react'
import ReactMde from 'react-mde'
import Markdown from 'react-markdown'
import SponsorCard from '~/components/SponsorCard'
import { useForm, Controller } from 'react-hook-form'

export default function Tabs () {

  const [selectedTab, setSelectedTab] = useState('write')
  const {
    errors,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm()

  return (
    <>
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
                <li className="border-b-2 border-transparent hover:border-gray-300 dark:hover:border-white transition-all ease-in duration-150 px-3">
                  <a href="/" target="_blank" className="flex items-center space-x-2 pb-2 text-gray-600 dark:text-gray-400 dark:hover:text-white">
                    <span className="block">
                      <GitHubIcon />
                    </span>
                    <span className="text-sm line-clamp-1">Source Code</span>
                  </a>
                </li>
                <li className="border-b-2 border-transparent hover:border-gray-300 dark:hover:border-white transition-all ease-in duration-150 px-3">
                  <a href="/" target="_blank" className="flex items-center space-x-2 pb-2 text-gray-600 dark:text-gray-400 dark:hover:text-white">
                    <span className="block">
                      <ExternalLinkIcon />
                    </span>
                    <span className="text-sm line-clamp-1">Demo</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col bg-white dark:bg-dark-dim w-full transition ease-in-out duration-200">
            <div className="py-5 space-y-2">
              <div>
                <h1 className="text-lg">Let me know what you think about it?</h1>
              </div>
              <form>
                <div className="text-sm space-y-3">
                  <div className="flex flex-col space-y-1 max-w-lg">
                    <label>Name*</label>
                    <input type="text" className="w-full rounded-sm border py-2.5 text-gray-900 transition ease-in-out focus:ring-0 duration-150 disabled:cursor-not-allowed disabled:opacity-50" />
                  </div>
                  <div className="flex flex-col max-w-3xl">
                    <div className="space-y-1">
                    <label>Message*</label>
                      <Controller 
                        disabled={isSubmitting}
                        control={control}
                        name="message"
                        defaultValue=""
                        rules={{
                          required: 'You must provide a thread message.'
                        }}
                        as={
                          <ReactMde
                            selectedTab={selectedTab}
                            onTabChange={setSelectedTab}
                            generateMarkdownPreview={markdown =>
                              Promise.resolve(<Markdown children={markdown} />)
                            }
                          />
                        }
                      />
                    </div>
                    { errors.message && <span className="text-xs text-red-500 font-medium pt-0.5">{ errors.message.message }</span> }
                  </div>
                  <button 
                    onClick={e => e.preventDefault()}
                    className="px-4 py-2 bg-blue-twitter rounded-lg text-white"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
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
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
    </svg>
  )
}