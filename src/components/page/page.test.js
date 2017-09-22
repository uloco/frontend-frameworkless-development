import renderPageFactory from './page'
import stateFactory from '../../model/state'

describe('page', () => {
  test('it should print a spinner when loading', () => {
    const state = stateFactory()
    const renderPage = renderPageFactory(state)

    let unsubscribe = state.addChangeListener(newState => {
      const page = renderPage(newState)
      const spinnerIcon = page.querySelector('.fa-spin')
      expect(spinnerIcon).toBeFalsy()
    })

    unsubscribe()

    state.startLoading()

    unsubscribe = state.addChangeListener(newState => {
      const page = renderPage(newState)
      const spinnerIcon = page.querySelector('.fa-spin')
      expect(spinnerIcon).toBeTruthy()
    })

    unsubscribe()

    state.stopLoading()

    state.addChangeListener(newState => {
      const page = renderPage(newState)
      const spinnerIcon = page.querySelector('.fa-spin')
      expect(spinnerIcon).toBeFalsy()
    })
  })
})
