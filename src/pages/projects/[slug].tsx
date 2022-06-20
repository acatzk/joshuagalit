import { gql } from '@apollo/client'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import useSWR, { useSWRConfig } from 'swr'
import { nhost } from '~/lib/nhost-client'
import { useEffect, useState } from 'react'
import { ParsedUrlQuery } from 'querystring'
import Layout from '~/layouts/defaultLayout'
import { classNames } from '~/utils/classNames'
import SponsorCard from '~/components/SponsorCard'
import { AnimatedLoadingIcon } from '~/utils/Icons'
import { useSignOut, useUserData } from '@nhost/react'
import { GET_PROJECT_BY_SLUG_QUERY } from '~/graphql/queries'
import ProjectPostForm from '~/components/projects/ProjectPostForm'
import ProjectCommentList from '~/components/projects/ProjectCommentList'
import ProjectPostDetails from '~/components/projects/ProjectPostDetails'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import {
  INSERT_PROJECT_COMMENT_ONE,
  INSERT_VIEWS_MUTATION,
  UPDATE_USER_BY_PK_ID
} from '~/graphql/mutations'

type Props = {
  fallbackData: any
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await nhost.graphql.request(gql`
    query GetProjectBySlugs {
      projects {
        slug
      }
    }
  `)

  return {
    paths: data?.projects?.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { slug } = ctx.params as IParams
  const { data } = await nhost.graphql.request(GET_PROJECT_BY_SLUG_QUERY, {
    slug
  })

  return {
    props: {
      fallbackData: { data }
    },
    revalidate: 1
  }
}

const ProjectPost: NextPage<Props> = (props) => {
  const { fallbackData } = props

  let [isLoginPage, setIsLoginPage] = useState(true)

  const user = useUserData()
  const router = useRouter()
  const signOut = useSignOut()
  const { mutate } = useSWRConfig()
  const { slug, isFallback } = router.query

  const [isOpenUserModal, setIsOpenUserModal] = useState(false)

  const closeUserModal = () => setIsOpenUserModal(false)

  const openUserModal = () => setIsOpenUserModal(true)

  const { data } = useSWR(
    [GET_PROJECT_BY_SLUG_QUERY, slug],
    async (query, slug) =>
      await nhost.graphql.request(query, {
        slug
      }),
    {
      fallbackData,
      refreshInterval: 1000,
      revalidateOnMount: true
    }
  )

  const project_id = data?.data?.projects[0]?.id

  // useEffect(() => {
  //   return () => {
  //     insertViewer()
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const insertViewer = async () => {
  //   const project_id = data?.data?.projects[0]?.id
  //   const { data: viewData, error } = await nhost.graphql.request(INSERT_VIEWS_MUTATION, {
  //     project_id
  //   })
  //   // if (viewData) {
  //   //   await mutate({ ...data?.data })
  //   //   toast.success('Inserted 1')
  //   // }
  //   // if (error) {
  //   //   toast.error('No view inserted!')
  //   // }
  // }

  const handleComment = async (data, e) => {
    const { comment } = data

    const { data: dataComment, error } = await nhost.graphql.request(INSERT_PROJECT_COMMENT_ONE, {
      project_id,
      comment
    })

    if (dataComment) {
      await mutate({
        ...data?.data
      })
      toast.success('Commented successfully!')
      e.target.reset()
    }
    if (error) {
      toast.error('Something went wrong!')
    }
  }

  const handleSignAuth = async (data) => {
    const { display_name, email, password } = data

    if (isLoginPage) {
      const { session, error } = await nhost.auth.signIn({
        email: email,
        password: password
      })
      if (session) {
        handleAuthSwitchForm()
        toast.success('Successfully Login!')
      }
      if (error) {
        toast.error(`${error?.message}`)
      }
    } else {
      const { session, error } = await nhost.auth.signUp({
        email: email,
        password: password,
        options: {
          displayName: display_name
        }
      })
      if (session) {
        handleAuthSwitchForm()
        toast.success('Successfully Sign Up!')
      }
      if (error) {
        toast.error(`${error?.message}`)
      }
    }
  }

  const handleUpdateUser = async (data) => {
    const { display_name, email } = data
    const { data: dataResult, error } = await nhost.graphql.request(UPDATE_USER_BY_PK_ID, {
      id: user?.id,
      displayName: display_name,
      email
    })

    if (dataResult) {
      toast.success('Successfully Updated!')
      closeUserModal()
    }
    if (error) {
      toast.error('Something went wrong!')
    }

    return await mutate({
      ...data?.data
    })
  }

  const handleAuthSwitchForm = () => setIsLoginPage((isLoginPage = !isLoginPage))

  const handleLogout = () => signOut.signOut()

  if (isFallback)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <AnimatedLoadingIcon className="w-5 h-5 text-black dark:text-white" />
      </div>
    )
  if (!isFallback && !data)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <AnimatedLoadingIcon className="w-5 h-5 text-black dark:text-white" />
      </div>
    )

  return (
    <Layout
      headTitle={`Projects | ${data?.data?.projects[0]?.title}`}
      metaDescription={data?.data?.projects[0]?.description}
    >
      <div className="w-full max-w-5xl mx-auto px-4 mb-6">
        <BackButton />

        <ProjectPostDetails
          user={user}
          isOpenUserModal={isOpenUserModal}
          projects={data?.data?.projects[0]}
          actions={{ handleLogout, handleUpdateUser, closeUserModal, openUserModal }}
        />
        <ProjectPostForm
          isLoginPage={isLoginPage}
          actions={{ handleComment, handleSignAuth, handleAuthSwitchForm }}
        />

        {/* Comment List */}
        <div className="mt-3">
          <ProjectCommentList projects={data?.data?.projects} />
        </div>

        {/* <h1>{user?.avatarUrl?.split('?r=g&default=blank')}</h1> */}

        <SponsorCard className="mt-6" />
      </div>
    </Layout>
  )
}

const BackButton = () => {
  const router = useRouter()

  return (
    <div className="pt-4 md:pt-11">
      <button
        onClick={() => router.push('/projects')}
        data-tip="Back"
        className={classNames(
          'focus:outline-none transition ease-out duration-200',
          'hover:text-blue-twitter dark:hover:text-blue-twitter'
        )}
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  )
}

const AnnouncementPage = () => {
  return (
    <p className="py-3 px-4 bg-yellow-500 font-bold text-center my-6">
      I&apos;M STILL WORKING ON PROJECT SIGN-IN / SIGN-UP AUTH
    </p>
  )
}

export default ProjectPost
