import { useState, useEffect } from "react";
import Head from 'next/head'

import Layout, { siteTitle } from '../../components/Layout'
import ProfileUser from "../../components/profile";
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Alert from "../../components/AlertCustom";
import LoadingSpinner from "../../components/Loading";

export default function Profile() {
  const { user, error } = useUser();
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const handleFetch = () => {
    setLoading(true);
    callApi();
 };
  function callApi() {
    setData();
    setLoading(true)
    fetch('http://localhost:8080/profile/'+user)
    .then((res) => res.json())
    .then((data) => {
        setData(data);
        setLoading(false);
    })
    
}
  useEffect(() => {
    console.log(user)
    callApi()
}, [])

  if (isLoading) return (
    <Layout characters>
        <Head>
            <title>{siteTitle}</title>
        </Head>
      <LoadingSpinner isLoading={isLoading} ></LoadingSpinner>
      <button onClick={handleFetch} disabled={isLoading}>Fetch Users</button>
    </Layout>)
  
  if (error) return (<Alert children={<div>{error.message}</div>} type='error'/>)

  return (
      user && (
        <Layout characters>
            <Head>
                  <title>{siteTitle} - { user.name }</title>
            </Head>
        <ProfileUser user={user} data={ data } />
        </Layout>

    )
  );
}
