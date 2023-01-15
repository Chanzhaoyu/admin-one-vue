import { defineStore } from "pinia";
import axios from "axios";

export interface MainState {
  userName: string | null;
  userEmail: string | null;
  userAvatar: string | null;
  isFieldFocusRegistered: boolean;
  clients: any[];
  history: any[];
}

export const useMainStore = defineStore("main", {
  state: (): MainState => ({
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    clients: [],
    history: [],
  }),
  actions: {
    setUser(payload: { name?: string; email?: string; avatar?: string }) {
      if (payload.name) {
        this.userName = payload.name;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
      if (payload.avatar) {
        this.userAvatar = payload.avatar;
      }
    },

    fetch(sampleDataKey: string) {
      axios
        .get(`data-sources/${sampleDataKey}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            (this as any)[sampleDataKey] = r.data.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
});
