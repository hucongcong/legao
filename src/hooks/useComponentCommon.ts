import { computed } from '@vue/reactivity'
import { pick } from 'lodash-es'
import { TextComponentProps } from '@/config/defaultProps'

export default function useComponentCommon(
  props: Readonly<Partial<TextComponentProps>>,
  picks: string[]
) {
  const styleProps = computed(() => pick(props, picks))
  const handleClick = function () {
    if (props.actionType === 'url' && props.url) {
      // window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}
