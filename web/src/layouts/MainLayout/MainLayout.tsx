type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      {/* <Nav /> */}
      <nav>
        <ul>
          <li>Home</li>
          <li>Profile</li>
        </ul>
        <button>Log In</button>
        <button>Log Out</button>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
