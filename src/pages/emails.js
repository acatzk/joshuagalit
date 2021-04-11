import useSWR from 'swr'
import Head from 'next/head'
import Layout from '~/layouts/default'
import EmailList from '~/components/EmailList'
import { useToasts } from 'react-toast-notifications'
import { GET_CLIENT_EMAIL_QUERY } from '~/graphql/queries'
import { DELETE_MAIL_MUTATION } from '~/graphql/mutations'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'

export async function getStaticProps () {
  const initialData = await hasuraAdminClient.request(GET_CLIENT_EMAIL_QUERY)

  return {
    props: {
      initialData
    }
  }
}

export default function EmailsPage ({ initialData }) {

  const { addToast } = useToasts()

  const { data, mutate } = useSWR(GET_CLIENT_EMAIL_QUERY, (query) => hasuraAdminClient.request(query), { 
    initialData,
    revalidateOnMount: true
  })

  const handleDelete = async ({ id }) => {
    await hasuraAdminClient.request(DELETE_MAIL_MUTATION, { id })
    mutate({ ...data })
    addToast('Successfully Deleted!', { appearance: 'success', autoDismiss: true })
  }
  
  return (
    <>
      <Head>
        <title>List of Emails</title>
      </Head>
      <Layout>
        <div className="mx-auto pt-12">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 dark:bg-gray-800 transition ease-in-out duration-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Message
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Options</span>
                      </th>
                    </tr>
                  </thead>
                  <EmailList 
                    emails={data.email_employer}
                    actions={{ handleDelete }}
                  />
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}