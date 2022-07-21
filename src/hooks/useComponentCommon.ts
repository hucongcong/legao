import { computed } from '@vue/reactivity'
import { pick } from 'lodash-es'

export default function useComponentCommon<T extends { [key: string]: any }>(
  props: T,
  picks: string[]
) {
  const styleProps = computed(() => pick(props, picks))
  const handleClick = function () {
    if (props.actionType === 'url' && props.url) {
      window.location = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}
