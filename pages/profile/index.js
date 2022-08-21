import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Alert, AlertTitle, IconButton, Collapse } from '@mui/material'
import Layout, { siteTitle } from '../../components/Layout'
import ProfileUser from '../../components/profile'
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'

export default function Profile() {
  const { user, error } = useUser()
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  function callApi() {
    setData()
    setLoading(true)
    fetch('http://localhost:8080/profile/' + user)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }
  useEffect(() => {
    callApi()
  })

  if (error)
    return (
      <Layout characters>
        <Head>
          <title>
            {siteTitle} - {user.name}
          </title>
        </Head>
        <Alert severity='error'>{error.message}</Alert>
      </Layout>
    )

  return (
    user && (
      <Layout characters>
        <Head>
          <title>
            {siteTitle} - {user.name}
          </title>
        </Head>
        <ProfileUser user={user} data={data} />
      </Layout>
    )
  )
}
