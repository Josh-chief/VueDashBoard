import { defineComponent } from 'vue'
import { scrollingDown, scrollingUp } from '../../states/globalStates'
import GithubIcon from '../icons/GithubIcon'

export default defineComponent({
  setup() {
    return () => (
      <footer
        class={[
          'sticky bottom-0 flex items-center justify-between flex-shrink-0 transition-transform duration-500 bg-white p-4 border-t max-h-14',
          { 'translate-y-full': scrollingDown.value, 'translate-y-0': scrollingUp.value },
        ]}
      >
        <div>SU Cafeteria 2023</div>
        <div class="text-sm">
          Made by C.I GROUP

        </div>

      </footer>
    )
  },
})
