import { render } from '@redwoodjs/testing'

import MainLayout from './MainLayout'

describe('MainLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <MainLayout>
          <p>Hihihi</p>
        </MainLayout>
      )
    }).not.toThrow()
  })
})
