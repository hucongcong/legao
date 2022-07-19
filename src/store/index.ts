import useEditorStore from './modules/editor'
import useTemplatesStore from './modules/templates'
function useStore() {
  return {
    editor: useEditorStore(),
    template: useTemplatesStore()
  }
}
export default useStore
