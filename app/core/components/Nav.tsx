import { Link, Routes, useMutation } from 'blitz'
import React, { FC } from 'react'

import logout from 'app/auth/mutations/logout'
import { useCurrentUser } from '../hooks/useCurrentUser'

const Root = styled

const Nav: FC = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (!currentUser) {
    return (
      <>
        <Link href={Routes.SignupPage()}>
          <a>
            <strong>Sign Up</strong>
          </a>
        </Link>
        <Link href={Routes.LoginPage()}>
          <a>
            <strong>Login</strong>
          </a>
        </Link>
      </>
    )
  }

  return (
    <div>
      <button
        onClick={async () => {
          await logoutMutation()
        }}
      >
        Logout
      </button>
      <div>
        User id: <code>{currentUser.id}</code>
        <br />
        User role: <code>{currentUser.role}</code>
      </div>
    </div>
  )
}

export default Nav
