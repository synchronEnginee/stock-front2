import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('Appのテスト', async () => {
  render(<App />)

  void userEvent.click(screen.getByRole('button'))
  await screen.findByText('count is 1')

  await waitFor(() =>
    expect(screen.queryByText('count is 0')).not.toBeInTheDocument(),
  )
})
