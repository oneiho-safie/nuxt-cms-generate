import { ActionTree } from 'vuex'
import { IApp } from '@/models/store/app/app'
import { IRootState } from '@/models/store/RootState'
import axios, { AxiosResponse } from 'axios'

const action: ActionTree<IApp, IRootState> = {
  dosome({ commit, dispatch, state }) {
  },
}

export default action
