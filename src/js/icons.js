const requireAll = (requireContext) => {
  requireContext.keys().map(requireContext)
}
const req = require.context('../img/icon', true, /\.svg$/)
requireAll(req)
