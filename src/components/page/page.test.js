import renderPageFactory from './page'
import observableStateFactory from '../../observable-state'

describe('page', () => {
  test('it should render a spinner when loading', () => {
    const state = observableStateFactory()
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
